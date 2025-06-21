'use client';

import Image from "next/image";
import CardTech from "./components/CardTech/CardTech";
import { useState,useEffect, use } from "react";

export default function Home() {

  const technologiesBackend = [
  {
    imgId: "11",
    Name: "Node.js",
    Description:
      "A high-performance JavaScript runtime I use to build scalable backend services and APIs.",
  },
  {
    imgId: "12",
    Name: "Express.js",
    Description:
      "A minimal and flexible web framework for Node.js that helps me create robust API architectures.",
  },
  {
    imgId: "13",
    Name: "PostgreSQL",
    Description:
      "A powerful open-source relational database I use for structured, reliable data storage.",
  },
  {
    imgId: "14",
    Name: "MongoDB",
    Description:
      "A NoSQL document database I use to handle flexible and dynamic data structures.",
  },
  {
    imgId: "15",
    Name: "JWT",
    Description:
      "A secure method I use to handle authentication and authorization via token-based systems.",
  },
  {
    imgId: "16",
    Name: "REST & GraphQL",
    Description:
      "API paradigms I use to design clear and scalable communication between frontend and backend.",
  },
  {
    imgId: "17",
    Name: "Spring Boot",
    Description:
      "A Java-based framework I use for building production-ready backend applications with ease.",
  },
];

    const technologies=[
  {
    imgId: "1",
    Name: "React",
    Description:
      "A declarative JavaScript library I use to build fast, interactive, and reusable UI components.",
  },
  {
    imgId: "2",
    Name: "Next.js",
    Description:
      "A React framework that enables server-side rendering, API routes, and optimized frontend performance.",
  },
  {
    imgId: "3",
    Name: "Tailwind CSS",
    Description:
      "A utility-first CSS framework that helps me build precise and responsive designs faster.",
  },
  {
    imgId: "4",
    Name: "TypeScript",
    Description:
      "Typed JavaScript that enhances code reliability, scalability, and developer experience.",
  },
  {
    imgId: "5",
    Name: "JavaScript",
    Description:
      "The dynamic language of the web — I use it to build interactivity and application logic.",
  },
  {
    imgId: "6",
    Name: "HTML5",
    Description:
      "Semantic markup that forms the accessible and SEO-friendly structure of every interface.",
  },
  {
    imgId: "7",
    Name: "CSS3",
    Description:
      "The styling foundation of the web — used for animations, layouts, and visual polish.",
  },
  {
    imgId: "8",
    Name: "GSAP",
    Description:
      "A performance-focused animation library I use to create smooth, professional motion effects.",
  },
  {
    imgId: "9",
    Name: "Angular",
    Description:
      "A robust frontend framework I’ve used for scalable enterprise apps and strong architecture.",
  },
  {
    imgId: "10",
    Name: "Bootstrap",
    Description:
      "A UI toolkit I use for rapid prototyping and responsive design in admin-like interfaces.",
  },
  ]



  const[currentIndex, setCurrentIndex] = useState(0);
  const[currentIndexBackend, setCurrentIndexBackend] = useState(0);

  useEffect(()=>{
    const interval=setInterval(()=>{
       setCurrentIndex((prev)=> prev === technologies.length - 1 ? 0 : prev + 1);
    },5000)

    return () => clearInterval(interval);
  },[technologies.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexBackend((prev) => (prev === technologiesBackend.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [technologiesBackend.length]);




  return (
    <>
      <main className=" flex justify-center items-center px-16  h-screen bg-white hero">
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
        </section>

       
      </main>

<section className="py-20 px-6 text-center flex flex-col  xl:flex-row justify-center items-start gap-6">
  <article className="min-h-[500px] w-full xl:w-1/2">
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
      Technologies I use to build elegant web experiences
    </h2>
    <div className="relative container__cards h-[350px]">
      {technologies.map((tech, index) => (
        <div 
          key={index} 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${
          index === currentIndex ? 'animate-fade-in' : 'opacity-0 z-0'
        } w-full sm:w-max`}
        >
          <CardTech
            imgId={tech.imgId}
            Name={tech.Name}
            Description={tech.Description}
          />
        </div>
      ))}
    </div>
  </article>

  <article className="min-h-[500px] w-full xl:w-1/2">
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
      Technologies I use to build powerful backend systems
    </h2>
    <div className="relative container__cards h-[350px]">
      {technologiesBackend.map((tech, index) => (
        <div 
          key={index} 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${
            index === currentIndexBackend ? 'animate-fade-in' : 'opacity-0 z-0'
          } w-full sm:w-max`}
        >
          <CardTech
            imgId={tech.imgId}
            Name={tech.Name}
            Description={tech.Description}
          />
        </div>
      ))}
    </div>
  </article>
</section>

<section className="bg-amber-300 h-screen"> 
<h1>ola</h1>
</section>



    </>
  );
}
