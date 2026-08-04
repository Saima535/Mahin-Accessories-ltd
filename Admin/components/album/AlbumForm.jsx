"use client";
import { useState } from "react";
import PhotoUpload from "@/components/ui/PhotoUpload";

export default function AlbumForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    image: initialData?.image || "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("cta.")) {
      const ctaField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        cta: {
          ...prev.cta,
          [ctaField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageChange = (imageUrl) => {
    setFormData((prev) => ({ ...prev, image: imageUrl }));
    if (errors.image) {
      setErrors((prev) => ({ ...prev, image: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    // if (!formData.description.trim()) {
    //   newErrors.description = "Description is required";
    // }
    if (!formData.image) {
      newErrors.image = "Image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title Field */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Title <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter photo title"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title}</p>
        )}
      </div>

      {/* Image Upload - Using your PhotoUpload component */}
      <PhotoUpload
        name="image"
        label="Portfolio Photo"
        required={true}
        value={formData.image}
        onChange={handleImageChange}
        error={errors.image}
      />

      {/* Form Actions */}
      <div className="flex justify-end gap-3 pt-4 border-t">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {initialData ? "Update" : "Create"} Photo
        </button>
      </div>
    </form>
  );
}
