'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set('.about-paragraph', {
      opacity: 0,
      y: 40,
      scale: 0.97,
      filter: 'blur(8px)',
    });
    gsap.set('.about-title', {
      opacity: 0,
      y: -20,
    });
    gsap.set('.about-line', {
      scaleX: 0,
      transformOrigin: 'center',
    });
    gsap.set('.about-intro', {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('.about-intro', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
      .to('.about-title', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.3')
      .to('.about-line', {
        scaleX: 1,
        duration: 0.9,
        ease: 'power2.out',
      }, '-=0.5')
      .to('.about-paragraph', {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.3,
      }, '-=0.3');
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-4xl mx-auto px-6 py-20 text-center font-sans text-gray-800"
    >
      <p className="about-intro text-lg sm:text-xl text-gray-500 font-medium italic max-w-2xl mx-auto mb-10">
        “I don’t just code — I craft digital experiences with purpose.”
      </p>

      <h2 className="about-title text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
        About Me
      </h2>

      <div className="about-line h-1 w-16  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mx-auto mb-12 rounded-full opacity-80" />

      <p className="about-paragraph text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
        Hey! I'm <strong className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Osvaldo Santillan</strong>, a Full Stack Developer who transforms complex problems into clean, efficient, and user-friendly solutions.
      </p>

      <p className="about-paragraph text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mt-6">
        I specialize in building high-performance web apps with tools like{' '}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          React
        </span>
        ,{' '}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Next.js
        </span>
        ,{' '}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Node.js
        </span>{' '}
        and more — always prioritizing great UX and maintainability.
      </p>

      <p className="about-paragraph text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mt-6">
        I believe the best interfaces are invisible — intuitive, accessible, and fast. That’s what I strive to build every day.
      </p>

      <p className="about-paragraph text-gray-500  text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mt-6 font-medium italic">
        Let’s build something meaningful — one line of code at a time.
      </p>


      {/* Branding final */}
      <p className="text-gray-500 text-base mt-12 italic">
        Based in Mexico. Working globally. Building with intention.
      </p>
    </section>
  );
}
