import mongoose, { Schema } from "mongoose";

//Feedback Section

const feedbackSectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    review: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
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

delete mongoose.models.FeedbackSection;

export const FeedbackSection =
  mongoose.models.FeedbackSection ||
  mongoose.model("FeedbackSection", feedbackSectionSchema);
