import mongoose, { Schema } from "mongoose";

const partnerSectionSchema = new Schema(
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

delete mongoose.models.PartnerSection;

export const PartnerSection =
  mongoose.models.PartnerSection ||
  mongoose.model("PartnerSection", partnerSectionSchema);
