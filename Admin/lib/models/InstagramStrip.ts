import mongoose, { Schema } from "mongoose";

const instagramStripSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.InstagramStripSection;

export const InstagramStripSection =
  mongoose.models.InstagramStripSection ||
  mongoose.model("InstagramStripSection", instagramStripSectionSchema);
