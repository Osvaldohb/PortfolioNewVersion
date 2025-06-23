'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set('.about-paragraph', { opacity: 0, y: 50, scale: 0.95, filter: 'blur(6px)' });
    gsap.set('.about-title', { opacity: 0, y: -50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.to('.about-title', {
      opacity: 1,
      y: 0,
      duration: 1,
      scale: 1,
      ease: 'power3.out',
    })
    .to('.about-paragraph', {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.4,
    }, '<0.2');
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-4xl mx-auto px-6 py-20 text-center"
    >
      <h2 className="about-title text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
        About Me
      </h2>
      <p className="about-paragraph text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
        I’m Osvaldo Santillan, a passionate Full Stack Developer dedicated to crafting clean, efficient, and scalable digital experiences.
      </p>
      <p className="about-paragraph text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mt-6">
        With a strong foundation in both frontend and backend technologies, I blend design and code to build solutions that delight users and drive business value.
      </p>
      <p className="about-paragraph text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mt-6">
        I believe simplicity is the ultimate sophistication — that’s why I focus on writing clean code and creating intuitive interfaces that just work.
      </p>
    </section>
  );
}
