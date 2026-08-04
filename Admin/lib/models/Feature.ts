import mongoose, { Schema } from "mongoose";

//Feature Section
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

const featureSectionSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },
    featureOne: {
      type: String,
      required: true,
    },

    featureTwo: {
      type: String,
      required: true,
    },

    featureThree: {
      type: String,
      required: true,
    },

    featureFour: {
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

delete mongoose.models.FeatureSection;

export const FeatureSection =
  mongoose.models.FeatureSection ||
  mongoose.model("FeatureSection", featureSectionSchema);
