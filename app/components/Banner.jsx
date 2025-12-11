"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'


const Banner = () => {
    const [bannerData, setBannerData] = useState([])
    useEffect(() => {
        const fbanner = async () => {
            try {

                const res = await fetch("/api/add/banner", { cache: "no-cache" });
                if (!res.ok) {
                    console.log("failed")
                    return;
                }
                const data = await res.json()
                if (data.success) {
                    setBannerData(data.result)
                }
            } catch (error) {

                console.error("Error:", error)
            }
        }
        fbanner()

    }, [])
    return (
        <div>
            {bannerData.map((item, index) => (
                <div key={item._id || index}>
                    <Link href={item.link}><div className=' flex justify-center text-center md:w-[70vw] '>
                        <div  className="banner overflow-hidden my-7 w-[95vw]  sm:h-[17vh] h-[17vh] md:h-[45vh] rounded-xl shadow-sm shadow-black">
                            <img className='w-full h-full object-fill' src={item.banner_img} alt='Loding banner...' />

                        </div>
                    </div></Link>
                </div>
            ))}
        </div>
    )



}

export default Banner
