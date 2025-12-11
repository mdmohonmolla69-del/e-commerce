"use client"
import React, { useEffect, useState } from 'react'
const NavbarDm = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const allproduct = async () => {
            try {

                const res = await fetch("/api/add/navtext", { cache: "no-cache" });
                if (!res.ok) {
                    console.log("failed")
                    return;
                }
                const data = await res.json()
                if (data.success) {
                    setProduct(data.result)
                }
            } catch (error) {

                console.error("Error:", error)
            }
        }
        allproduct()

    }, [])
    return (
        <nav >
            <div className='h-px bg-white'></div>
            <div className='flex justify-center navbm h-8 bg-slate-800'>
                {product.map((item, index)=> (
                <h3 key={item._id || index} className='text-white'>{item.nav_text}</h3>
                ))}
            </div>
        </nav>
    )
}

export default NavbarDm
