"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Barber1 from "./../../assets/projects/barber-1.png";
import Barber2 from "./../../assets/projects/barber-2.png";
import Barber3 from "./../../assets/projects/barber-3.png";
import Barber4 from "./../../assets/projects/barber-4.png";
import Barber5 from "./../../assets/projects/barber-5.png";
import Barber6 from "./../../assets/projects/barber-6.png";
import Barber7 from "./../../assets/projects/barber-7.png";
import Barber8 from "./../../assets/projects/barber-8.png";


export default function Barber() {
  const [currentImage, setCurrentImage] = useState(0);
  const barberImages = [
    Barber1,
    Barber2,
    Barber3,
    Barber4,
    Barber5,
    Barber6,
    Barber7,
    Barber8,
  ];

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % barberImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + barberImages.length) % barberImages.length
    );
  };

  return (
    <>
        <div className="border border-zinc-700 p-6 bg-zinc-800">
          <div className="border border-zinc-700">
            <Link href="https://github.com/victormarques1/barberpro" target="_blank">
              <Image
                className="w-full max-h-72"
                src={barberImages[currentImage]}
                alt="barberpro image"
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
            <strong className="text-lg mb-2">BarberPRO</strong>
            <p className="text-zinc-500">
              Tecnologias: TypeScript, Next.js, Chakra UI, Node.js, PostgreSQL e
              Prisma.
            </p>
          </div>
        </div>
    </>
  );
}
