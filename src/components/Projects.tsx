"use client";
import { useState } from "react";

import Image from "next/image";
import Phone from "./../assets/image/phone.svg";
import Link from "next/link";
import Micday1 from "./../assets/projects/micday-1.png";
import Micday2 from "./../assets/projects/micday-2.png";
import Micday3 from "./../assets/projects/micday-3.png";
import Micday4 from "./../assets/projects/micday-4.png";
import Micday5 from "./../assets/projects/micday-5.png";
import Micday6 from "./../assets/projects/micday-6.png";
import Micday7 from "./../assets/projects/micday-7.png";
import Micday8 from "./../assets/projects/micday-8.png";
import Micday9 from "./../assets/projects/micday-9.png";
import Micday10 from "./../assets/projects/micday-10.png";
import Micday11 from "./../assets/projects/micday-11.png";
import Micday12 from "./../assets/projects/micday-12.png";
import Micday13 from "./../assets/projects/micday-13.png";

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(0);
  const micdayImages = [
    Micday1,
    Micday2,
    Micday3,
    Micday4,
    Micday5,
    Micday6,
    Micday7,
    Micday8,
    Micday9,
    Micday10,
    Micday11,
    Micday12,
    Micday13,
  ];

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % micdayImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + micdayImages.length) % micdayImages.length
    );
  };

  return (
    <div>
      <h2
        id="projects"
        className="flex justify-center font-bold md:text-3xl text-2xl md:mt-28 mt-14 mb-8 md:mb-10"
      >
        Projetos
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-center text-center">
        <div className="border border-zinc-700 p-6 bg-zinc-800">
          <div className="border border-zinc-700 bg-red-50">
            <Link href="https://github.com/victormarques1/micday">
              <Image
                className="w-full"
                src={micdayImages[currentImage]}
                alt="mic.day image"
              />
            </Link>
          </div>
          <div className="flex justify-between mt-2 mb-4">
            <button
              className="text-blue-500 hover:text-blue-400"
              onClick={handlePrevImage}
            >
              Anterior
            </button>
            <button
              className="text-blue-500 hover:text-blue-400"
              onClick={handleNextImage}
            >
              Próxima
            </button>
          </div>
          <div className="flex flex-col text-start">
            <strong className="text-lg mb-2">mic.day</strong>
            <p className="text-zinc-500">
              Tecnologias: TypeScript, Next.js, Chakra UI, Node.js, PostgreSQL e
              Prisma.
            </p>
          </div>
        </div>

        <div className="border border-zinc-700 p-6 bg-zinc-800">
          <div className="border border-zinc-700 bg-red-50">
            <Link href="https://github.com/victormarques1/micday">
              <Image
                className="w-full"
                src={micdayImages[currentImage]}
                alt="mic.day image"
              />
            </Link>
          </div>
          <div className="flex justify-between mt-2 mb-4">
            <button
              className="text-blue-500 hover:text-blue-400"
              onClick={handlePrevImage}
            >
              Anterior
            </button>
            <button
              className="text-blue-500 hover:text-blue-400"
              onClick={handleNextImage}
            >
              Próxima
            </button>
          </div>
          <div className="flex flex-col text-start">
            <strong className="text-lg mb-2">mic.day</strong>
            <p className="text-zinc-500">
              Tecnologias: TypeScript, Next.js, Chakra UI, Node.js, PostgreSQL e
              Prisma.
            </p>
          </div>
        </div>

        
      </section>
    </div>
  );
}
