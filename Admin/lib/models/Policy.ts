import mongoose, { Schema } from "mongoose";

//Policy Section
const ctaSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    href: {
      type: String,
      trim: true,
    },
  },
  { _id: false },
);

const policySectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    cta: {
      type: ctaSchema,
    },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.PolicySection;

export const PolicySection =
  mongoose.models.PolicySection ||
  mongoose.model("PolicySection", policySectionSchema);
