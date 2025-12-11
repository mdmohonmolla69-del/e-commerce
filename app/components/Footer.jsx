import React from 'react'
import Link from 'next/link'
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
const Footer = () => {
    return (
        <div className='bg-slate-800 fixed bottom-0 w-full text-white flex justify-center items-center'>
            <ul className='flex gap-8 justify-center items-center mx-5'>
                <Link href="/setting"><li className='fbtn'><span className="material-symbols-outlined">
                    settings
                </span>Settings</li></Link>
                <Link href="/top"><li className='fbtn'><span className="material-symbols-outlined">
                    sell
                </span>Top</li></Link>

                <Link href="/"><li className='fbtn relative bottom-5 text-[13px] bg-slate-800 p-4 px-5 border border-white rounded-[50%] shadow-md shadow-blue-500/50  '><span className="material-symbols-outlined">
                    home
                </span>Home</li></Link>
                <Link href="/cart"><li className='fbtn'><span className="material-symbols-outlined">
                    shopping_cart
                </span>Cart</li></Link>
                <Link href="/"><li className='fbtn'>
                    <SignedOut>
                        <SignInButton>
                            <button className='flex flex-col cursor-pointer'>
                                <span className="material-symbols-outlined m-3 select-none">
                                    account_circle
                                </span>Login</button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </li></Link>
            </ul>
        </div>
    )
}

export default Footer
