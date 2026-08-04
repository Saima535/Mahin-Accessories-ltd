import mongoose, { Schema } from "mongoose";

const portfolioSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
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

delete mongoose.models.PortfolioSection;

export const PortfolioSection =
  mongoose.models.PortfolioSection ||
  mongoose.model("PortfolioSection", portfolioSectionSchema);
