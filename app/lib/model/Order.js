import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerEmail: { type: String, required: true },
    district: { type: String },
    upazila: { type: String },
    fullAddress: { type: String, required: true },

    products: [
        {
            productId: { type: String },
            productName: { type: String },
            productImage: { type: String },
            price: { type: Number },
            quantity: { type: Number },
            subtotal: { type: Number }
        }
    ],

    deliveryCost: { type: Number, },
    totalPrice: { type: Number, required: true },

    paymentMethod: { type: String, default: "cash" },
    transactionId: { type: String },
    senderNumber: { type: String },

    status: { type: String, default: "pending" },
    
}, { timestamps: true });

export const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);