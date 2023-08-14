"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Devlink1 from "./../../assets/projects/devlink-1.png";
import Devlink2 from "./../../assets/projects/devlink-2.png";
import Devlink3 from "./../../assets/projects/devlink-3.png";
import Devlink4 from "./../../assets/projects/devlink-4.png";


export default function DevLink() {
  const [currentImage, setCurrentImage] = useState(0);
  const devlinkImages = [
    Devlink1,
    Devlink2,
    Devlink3,
    Devlink4,
  ];

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % devlinkImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + devlinkImages.length) % devlinkImages.length
    );
  };

  return (
    <>
        <div className="border border-zinc-700 p-6 bg-zinc-800">
          <div className="border border-zinc-700 ">
            <Link href="https://github.com/victormarques1/devlink" target="_blank">
              <Image
                className="w-full h-72"
                src={devlinkImages[currentImage]}
                alt="devlink image"
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
            <strong className="text-lg mb-2">DevLink</strong>
            <p className="text-zinc-500">
              Tecnologias: TypeScript, React, Tailwind CSS e Firebase.
            </p>
          </div>
        </div>
    </>
  );
}
