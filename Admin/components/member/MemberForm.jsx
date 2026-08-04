"use client";
import { useState } from "react";
import PhotoUpload from "@/components/ui/PhotoUpload";

export default function MemberForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    designation: initialData?.designation || "",
    image: initialData?.image || "",

    facebook: {
      text: initialData?.facebook?.text || "",
      href: initialData?.facebook?.href || "",
    },

    instagram: {
      text: initialData?.instagram?.text || "",
      href: initialData?.instagram?.href || "",
    },

    linkedin: {
      text: initialData?.linkedin?.text || "",
      href: initialData?.linkedin?.href || "",
    },
  });

  const [errors, setErrors] = useState({});

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     if (name.startsWith("cta.")) {
  //       const ctaField = name.split(".")[1];
  //       setFormData((prev) => ({
  //         ...prev,
  //         cta: {
  //           ...prev.cta,
  //           [ctaField]: value,
  //         },
  //       }));
  //     } else {
  //       setFormData((prev) => ({ ...prev, [name]: value }));
  //     }
  //     // Clear error for this field
  //     if (errors[name]) {
  //       setErrors((prev) => ({ ...prev, [name]: "" }));
  //     }
  //   };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [section, field] = name.split(".");

      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
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
    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
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
      {/* Title Field */}
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
          placeholder="Enter member name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Designation field */}
      <div>
        <label
          htmlFor="designation"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Designation <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.designation ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter member designation"
        />
        {errors.designation && (
          <p className="mt-1 text-sm text-red-600">{errors.designation}</p>
        )}
      </div>

      {/* Image Upload - Using your PhotoUpload component */}
      <PhotoUpload
        name="image"
        label="Member Image"
        required={true}
        value={formData.image}
        onChange={handleImageChange}
        error={errors.image}
      />

      {/* CTA Section */}
      {/* <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-medium text-gray-900 mb-3">
          Call to Action (CTA)
        </h3>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="cta.text"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Facebook
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
              Facebook Link
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

        <div className="space-y-4">
          <div>
            <label
              htmlFor="cta.text"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Instagram
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
              Instagram Link
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

        <div className="space-y-4">
          <div>
            <label
              htmlFor="cta.text"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Linkedin
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
              Linkedin Link
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
      </div> */}

      {/* Social Links */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-lg font-medium text-gray-900 mb-5">
          Social Media Links
        </h3>

        {/* Facebook */}
        <div className="mb-8">
          <h4 className="font-medium text-gray-800 mb-3">Facebook</h4>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="facebook.text"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Button Text
              </label>

              <input
                id="facebook.text"
                name="facebook.text"
                type="text"
                value={formData.facebook.text}
                onChange={handleChange}
                placeholder="Facebook"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="facebook.href"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Facebook Link
              </label>

              <input
                id="facebook.href"
                name="facebook.href"
                type="text"
                value={formData.facebook.href}
                onChange={handleChange}
                placeholder="https://facebook.com/..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Instagram */}
        <div className="mb-8">
          <h4 className="font-medium text-gray-800 mb-3">Instagram</h4>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="instagram.text"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Button Text
              </label>

              <input
                id="instagram.text"
                name="instagram.text"
                type="text"
                value={formData.instagram.text}
                onChange={handleChange}
                placeholder="Instagram"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="instagram.href"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Instagram Link
              </label>

              <input
                id="instagram.href"
                name="instagram.href"
                type="text"
                value={formData.instagram.href}
                onChange={handleChange}
                placeholder="https://instagram.com/..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Linkedin */}
        <div>
          <h4 className="font-medium text-gray-800 mb-3">LinkedIn</h4>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="linkedin.text"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Button Text
              </label>

              <input
                id="linkedin.text"
                name="linkedin.text"
                type="text"
                value={formData.linkedin.text}
                onChange={handleChange}
                placeholder="LinkedIn"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="linkedin.href"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                LinkedIn Link
              </label>

              <input
                id="linkedin.href"
                name="linkedin.href"
                type="text"
                value={formData.linkedin.href}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
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
          {initialData ? "Update" : "Create"} Member
        </button>
      </div>
    </form>
  );
}
