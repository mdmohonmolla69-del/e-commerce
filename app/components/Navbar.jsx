"use client"
import NavbarDm from './NavbarDm'
import Search from './Search'
import Sidebar from './Sidebar'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'


const Navbar = ({ onMenuClick }) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const allproduct = async () => {
            try {

                const res = await fetch("/api/add/logo", { cache: "no-cache" });
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
        <nav>
            <div className='bg-slate-800 py-2 flex justify-between items-center text-white'>
                <div className="menuN hover:bg-slate-700 cursor-pointer mx-2 rounded-full">
                    <button onClick={onMenuClick} className='hover:cursor-pointer'><span className="material-symbols-outlined m-3">
                        menu
                    </span></button>
                </div>
                {product.map((item, index) => (
                    <div key={item._id || index} className="logo ">
                        <Link href="/">
                            <span className='text-2xl font-bold select-none cursor-pointer '>{item.logo}</span>
                        </Link>
                    </div>
                ))}
                <div className='mx-auto'>
                    <Search />

                </div>
                <div className="hidden md:block  hover:bg-slate-700 rounded-full cursor-pointer">
                    <Link href="/cart">
                        <span className="material-symbols-outlined m-3 select-none">
                            shopping_cart
                        </span>
                    </Link>
                </div>
                <div className="trackD hidden md:block  hover:bg-slate-700 rounded-full cursor-pointer">
                    <Link href="/odertack">
                        <span className="material-symbols-outlined m-3 select-none">
                            delivery_truck_speed
                        </span>
                    </Link>
                </div>
                <div className='notifications hidden md:block hover:bg-slate-700 rounded-full cursor-pointer'>
                    <Link href="/notification">
                        <span className="material-symbols-outlined m-3 select-none">
                            notifications
                        </span>
                    </Link>
                </div>
                <div className="profile select-none hidden md:block  hover:bg-slate-700 rounded-full cursor-pointer">
                    <SignedOut>
                        <SignInButton>
                            
                                <span className="material-symbols-outlined m-3 select-none">
                                    account_circle
                                </span>
                            
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
            <div className=''>
                <NavbarDm />
            </div>
        </nav>
    )
}

export default Navbar
