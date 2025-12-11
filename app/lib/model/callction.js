import mongoose from "mongoose";

const callmodel = new mongoose.Schema({
    title: String,
    dsce: String,
    price_down: String,
    price: String,
    of: String,
    img_p: String,
    cost: String,
    qauntity: String,
    categoris: String,
}, { timestamps: true });

export const call = mongoose.models.products || mongoose.model("products", callmodel)
