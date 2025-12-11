import React from 'react'
import Sidebar from './Sidebar'
import Banner from './Banner'
import Topcata from './Topcata'
import Allproduct from './Allproduct'
import Whatsapp from './Whatsapp'

const Manage = ({ issideopen }) => {
    return (
        <>
            <div className='absolute w-screen min-h-[87.4vh] flex bg-slate-100 flex-col items-center overflow-auto'>
                <Sidebar isOpen={issideopen} />
                <div className=' h-[89.6vh]'>

                    <Banner />

                    <Topcata />
                    
                    <Allproduct />
                
                </div>
            </div>
            <Whatsapp/>
        </>
    )
}

export default Manage
