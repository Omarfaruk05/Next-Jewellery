import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
      maxlength: [100, "Name cannot be more than 40 characters"],
    },
    description: {
      type: String,
      required: true,
      maxlength: [400, "Description cannot be more than 200 characters"],
    },
    item: {
      type: String,
      required: [true, "Please add Item"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please add category"],
      trim: true,
    },
    carat: {
      type: String,
      required: [true, "Please add Item"],
      trim: true,
    },
    origin: {
      type: String,
      required: [true, "Please add product origin"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Please add product price"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
