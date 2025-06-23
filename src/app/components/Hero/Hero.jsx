import React from 'react'
import Link from "next/link";

const Hero = () => {
  return (
    <>
        <section className="flex flex-col  text-center gap-6 items-center ">
            <h1 className="ApperAnimation text-xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">Full Stack Developer <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Osvaldo Santillan
                </span>
            </h1>
          <h1 className="SideAnimation text-xl sm:text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
            Elevating digital experiences through  clean design and modern code.
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mt-5">
            Crafting sleek, fast, and accessible interfaces that strengthen your brand and captivate users.
          </h2>

        <section className="mt-8 hover:scale-110 transition-transform duration-300">
          <Link
            href="/osvaldo-santillan-cv.pdf"
            target="_blank"
            className="inline-block px-6 py-3 rounded-full border border-gray-300 text-gray-900 hover:bg-gray-100 hover:shadow-sm transition-all duration-300 text-sm sm:text-base font-medium"
          >
            📄 Download CV
          </Link>
        </section>

        </section>
    
    
    </>
  )
}

export default Hero