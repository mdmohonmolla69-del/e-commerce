"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
export const Sidebar = ({ isOpen }) => {

    const [subitemOpen, setsubitemOpen] = useState(null)
    const showiteminS = (menuName) => {
      if(subitemOpen ===  menuName){
        setsubitemOpen(null)
      }else {
        setsubitemOpen(menuName)
      }
    }
    
        const [product, setProduct] = useState([])
        useEffect(() => {
            const fbanner = async () => {
                try {
    
                    const res = await fetch("/api/add/category", { cache: "no-cache" });
                    if (!res.ok) {
                        console.log("failed")
                        return;
                    }
                    const data = await res.json()
                    if (data.categories) {
                        setProduct(data.categories)
                    }
                } catch (error) {
    
                    console.error("Error:", error)
                }
            }
            fbanner()
    
        }, [])
    
    return (
        <aside className={`sidebarS rounded-r-sm fixed bg-slate-800 text-white h-[80.6vh] md:h-[88.9vh] z-50 transition-all duration-100 ease-in-out min-w-[250px] md:w-[10vw] my-1 ${isOpen ? 'left-0' : '-left-full'}`}>
            <div className="logoSb text-2xl flex justify-center">
                <h2 className='font-bold'>All Categoris</h2>
            </div>
            <div className='w-full h-px bg-white'></div>
            
            <div  className="callectionL">
                
                    
                
                <div className="tBtn flex items-center cursor-pointer"
                onClick={()=> showiteminS('keyboard')}
                
                >
                   
                </div>
                {product.map((item,index)=>(
                <div key={item._id || index} className={`cList bg-slate-700 overflow-hidden mt-3 `}>
                    
                    <ul className='mt-1 text-lg  font-bold  '>
                        <Link href={`/category/${item.slug}`}><li className='text-white text-center'>{item.name}</li></Link>
                        
                    </ul>
                
                <div className='w-full h-px bg-white'></div>
                </div>
            ))}
            </div>
        </aside>

    )
}

export default Sidebar
