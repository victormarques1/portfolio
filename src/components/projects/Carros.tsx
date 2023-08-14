"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Carros1 from "./../../assets/projects/webcarros-1.png";
import Carros2 from "./../../assets/projects/webcarros-2.png";
import Carros3 from "./../../assets/projects/webcarros-3.png";
import Carros4 from "./../../assets/projects/webcarros-4.png";
import Carros5 from "./../../assets/projects/webcarros-5.png";



export default function Carros() {
  const [currentImage, setCurrentImage] = useState(0);
  const carrosImage = [
    Carros1,
    Carros2,
    Carros3,
    Carros4,
    Carros5,

  ];

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % carrosImage.length);
  };

  const handlePrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + carrosImage.length) % carrosImage.length
    );
  };

  return (
    <>
        <div className="border border-zinc-700 p-6 bg-zinc-800">
          <div className="border border-zinc-700 ">
            <Link href="https://github.com/victormarques1/webcarros" target="_blank">
              <Image
                className="w-full max-h-72"
                src={carrosImage[currentImage]}
                alt="webcarros image"
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
            <strong className="text-lg mb-2">WebCarros</strong>
            <p className="text-zinc-500">
              Tecnologias: TypeScript, Next.js, Tailwind CSS e Firebase.
            </p>
          </div>
        </div>
    </>
  );
}
