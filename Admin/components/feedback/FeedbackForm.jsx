"use client";
import { useState } from "react";
import PhotoUpload from "@/components/ui/PhotoUpload";

export default function FeedbackForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    location: initialData?.location || "",
    review: initialData?.review || "",
    rating: initialData?.rating || 5,
    image: initialData?.image || "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));

    if (errors.rating) {
      setErrors((prev) => ({
        ...prev,
        rating: "",
      }));
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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }
    if (!formData.review.trim()) {
      newErrors.review = "Review is required";
    }
    if (!formData.rating) {
      newErrors.rating = "Rating is required";
    }
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
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Location field */}
      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Location <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.location ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter location"
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-600">{errors.location}</p>
        )}
      </div>

      {/* Review Field */}
      <div>
        <label
          htmlFor="review"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Review <span className="text-red-600">*</span>
        </label>
        <textarea
          id="review"
          name="review"
          value={formData.review}
          onChange={handleChange}
          rows={3}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.review ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter review"
        />
        {errors.review && (
          <p className="mt-1 text-sm text-red-600">{errors.review}</p>
        )}
      </div>

      {/* Rating field */}
      <div>
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Rating <span className="text-red-600">*</span>
        </label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingChange(star)}
              className={`text-2xl focus:outline-none ${
                formData.rating >= star ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              {formData.rating >= star ? "★" : "☆"}
            </button>
          ))}
        </div>
        {errors.rating && (
          <p className="mt-1 text-sm text-red-600">{errors.rating}</p>
        )}
      </div>

      {/* Image Upload - Using your PhotoUpload component */}
      <PhotoUpload
        name="image"
        label="Profile Image"
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
          {initialData ? "Update" : "Create"} Review
        </button>
      </div>
    </form>
  );
}
