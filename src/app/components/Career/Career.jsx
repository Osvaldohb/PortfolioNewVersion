import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import './Career.css' // Assuming you have a CSS file for styles

gsap.registerPlugin(ScrollTrigger)

const Career = () => {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  const hitRefs = [
    { year: '2020', text: 'Started my journey as a Junior Developer.' },
    { year: '2021', text: 'Created **Adopta Hidalgo**, a pet adoption platform that won **2nd place** in the National Prototype Competition for Technical High Schools.' },
    { year: '2021', text: 'Worked on high-impact web apps.' },
    { year: '2022', text: 'Took on full-stack architecture roles.' },
    { year: '2023', text: 'Mentored teams and improved performance.' },
  ]

useEffect(() => {
  if (!sectionRef.current || !lineRef.current) return;

  gsap.set('.about-title', { opacity: 0, y: 50 });
  gsap.set('.about-paragraph', { opacity: 0, y: 50 });
  gsap.set('.hit', { opacity: 0, y: 50 });
  gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'left center' });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=2000',
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });

  tl.to('.about-title', { opacity: 1, y: 0, duration: 0.8 }, '<')
    .to('.about-paragraph', { opacity: 1, y: 0, duration: 0.8 }, '<')
    .to(lineRef.current, { scaleX: 1, duration: 1, ease: 'power2.out' }, '<')
    .to('.hit', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.3, 
    }, '<+0.2'); 
}, []);

  return (
    <main
      className=" h-screen flex flex-col justify-center px-8"
      ref={sectionRef}
    >
      <h2 className="about-title text-4xl font-bold mb-6">Career Timeline</h2>

      <p className="about-paragraph max-w-xl text-lg text-gray-700 mb-12">
        Here’s a quick overview of my professional journey and key milestones.
      </p>


      {/* Línea que crece */}
      <div
        ref={lineRef}
        className="Career-line h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full opacity-80"
      />

   <section className="flex flex-row justify-end gap-7 mt-12">
  {hitRefs.map((item, i) => (
    <article key={i} className="hit w-52">
      <span className="text-lg font-semibold text-gray-800">{item.year}</span>
      <p className="text-gray-600">{item.text}</p>
    </article>
  ))}
</section>
      
    </main>
  )
}

export default Career
