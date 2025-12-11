import mongoose from "mongoose"

const bannermodel = new mongoose.Schema({
    banner_img: String,
    link: String,
})

export const banner = mongoose.models.banners || mongoose.model("banners", bannermodel)