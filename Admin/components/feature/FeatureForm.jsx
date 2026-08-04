"use client";
import { useState } from "react";
import PhotoUpload from "@/components/ui/PhotoUpload";

export default function FeatureForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    description: initialData?.description || "",
    image: initialData?.image || "",
    featureOne: initialData?.featureOne || "",
    featureTwo: initialData?.featureTwo || "",
    featureThree: initialData?.featureThree || "",
    featureFour: initialData?.featureFour || "",
    cta: {
      text: initialData?.cta?.text || "",
      href: initialData?.cta?.href || "",
    },
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

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!formData.image) {
      newErrors.image = "Image is required";
    }
    if (!formData.featureOne.trim()) {
      newErrors.featureOne = "Feature One is required";
    }
    if (!formData.featureTwo.trim()) {
      newErrors.featureTwo = "Feature Two is required";
    }
    if (!formData.featureThree.trim()) {
      newErrors.featureThree = "Feature Three is required";
    }
    if (!formData.featureFour.trim()) {
      newErrors.featureFour = "Feature Four is required";
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
      {/* Description Field */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description <span className="text-red-600">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.description ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter Feature description"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description}</p>
        )}
      </div>

      {/* Feature Fields */}
      {/* Feature One */}
      <div>
        <label
          htmlFor="featureOne"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Feature One <span className="text-red-600">*</span>
        </label>
        <textarea
          id="featureOne"
          name="featureOne"
          value={formData.featureOne}
          onChange={handleChange}
          rows={3}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.featureOne ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter feature one"
        />
        {errors.featureOne && (
          <p className="mt-1 text-sm text-red-600">{errors.featureOne}</p>
        )}
      </div>

      {/* Feature Two */}
      <div>
        <label
          htmlFor="featureTwo"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Feature Two <span className="text-red-600">*</span>
        </label>
        <textarea
          id="featureTwo"
          name="featureTwo"
          value={formData.featureTwo}
          onChange={handleChange}
          rows={3}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.featureTwo ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter feature two"
        />
        {errors.featureTwo && (
          <p className="mt-1 text-sm text-red-600">{errors.featureTwo}</p>
        )}
      </div>

      {/* Feature Three */}
      <div>
        <label
          htmlFor="featureThree"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Feature Three <span className="text-red-600">*</span>
        </label>
        <textarea
          id="featureThree"
          name="featureThree"
          value={formData.featureThree}
          onChange={handleChange}
          rows={3}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.featureThree ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter feature three"
        />
        {errors.featureThree && (
          <p className="mt-1 text-sm text-red-600">{errors.featureThree}</p>
        )}
      </div>

      {/* Feature Four */}
      <div>
        <label
          htmlFor="featureFour"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Feature Four <span className="text-red-600">*</span>
        </label>
        <textarea
          id="featureFour"
          name="featureFour"
          value={formData.featureFour}
          onChange={handleChange}
          rows={3}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.featureFour ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter feature four"
        />
        {errors.featureFour && (
          <p className="mt-1 text-sm text-red-600">{errors.featureFour}</p>
        )}
      </div>

      {/* Image Upload - Using your PhotoUpload component */}
      <PhotoUpload
        name="image"
        label="Feature Image"
        required={true}
        value={formData.image}
        onChange={handleImageChange}
        error={errors.image}
      />

      {/* CTA Section */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-medium text-gray-900 mb-3">
          Call to Action (CTA)
        </h3>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="cta.text"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              CTA Text
            </label>
            <input
              type="text"
              id="cta.text"
              name="cta.text"
              value={formData.cta.text}
              onChange={handleChange}
              placeholder="e.g., View Factory"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="cta.href"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              CTA Link
            </label>
            <input
              type="text"
              id="cta.href"
              name="cta.href"
              value={formData.cta.href}
              onChange={handleChange}
              placeholder="e.g., /factory-machinery"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

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
          {initialData ? "Update" : "Create"} Feature
        </button>
      </div>
    </form>
  );
}
