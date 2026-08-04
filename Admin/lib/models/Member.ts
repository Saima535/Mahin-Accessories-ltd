import mongoose, { Schema } from "mongoose";

//Member Section
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

const memberSectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    designation: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    facebook: {
      type: ctaSchema,
    },
    instagram: {
      type: ctaSchema,
    },
    linkedin: {
      type: ctaSchema,
    },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.MemberSection;

export const MemberSection =
  mongoose.models.MemberSection ||
  mongoose.model("MemberSection", memberSectionSchema);
