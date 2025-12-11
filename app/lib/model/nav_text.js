import mongoose from "mongoose"

//NAVBAR TEXT FOR ANY!
const navbartextrmodel = new mongoose.Schema({
    nav_text: String,
    bkash_payment: String,
    nagad_personal: String,
    cost: Number,
    policy: String,
    telegram: String,
    whatsapp: String,

})

export const navbart = mongoose.models.navbarts|| mongoose.model("navbarts", navbartextrmodel)

const logormodel = new mongoose.Schema({
    logo: String,

})

export const logo = mongoose.models.logos || mongoose.model("logos", logormodel)