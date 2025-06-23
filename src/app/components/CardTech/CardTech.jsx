import React from 'react'
import Image from "next/image";

const CardTech = ({imgId,Name,Description}) => {
  return (
    <>
        <main className='min-w-0.5 flex flex-col cardMain  md:flex-row items-center justify-between  py-20 px-20 bg-white max-w-2xl border-transparent shadow-2xl rounded-2xl ' >
           
                        <Image src={`/${imgId}.png`} width={100} height={50} alt='imgLogo' className='h-auto w-auto'/>
            <div>
                <div className="flex-col items-start gap-4">
                    <span className="text-2xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">{Name}</span>
                    <p className="text-gray-600 max-w-md">
                       {Description}
                    </p>
                </div>
            </div>
        </main>

    </>
  )
}

export default CardTech