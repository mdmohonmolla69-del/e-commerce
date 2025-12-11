import React from 'react'
import Link from 'next/link'

const SettingFotter = () => {
    return (
        <div className='text-center flex flex-col  fixed justify-center bottom-20 md:bottom-0 bg-slate-200 text-black w-full mb-5'>
            <h3>Contact: appdeveloper.adr@gmail.com</h3>
            <p className='text-black'>Copyright &copy; 2025 <Link href="https://www.facebook.com/AppDeveloper.adr/" className='hover:underline' target='_blink'>appdeveloper.adr</Link> . All rights reserved.</p>

        </div>

    )
}

export default SettingFotter
