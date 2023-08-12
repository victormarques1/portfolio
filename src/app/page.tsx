"use client";
import { useState } from "react";

import Image from "next/image";
import Foto from "./../assets/image/profile2.png";
import Link from "next/link";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <nav className="flex items-center justify-between pt-8 ">
          <div>
            <h2 className="font-bold text-2xl p-2 md:p-0">Portfólio</h2>
          </div>

          <button
            className="md:hidden mx-2 text-zinc-400 hover:text-zinc-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <MdClose size={28} />
            ) : (
              <HiOutlineMenuAlt3 size={28} />
            )}
          </button>

          <ul
            className={`md:flex md:text-lg md:z-auto md:static absolute py-4 md:py-0 md:pl-0  
          transition-all ease-in p-2 md:p-0
          ${isMenuOpen ? "top-20" : "top-[-490px]"}`}
          >
            <li>
              <Link href="#about">
                <h3 className="md:mx-4 md:my-0 hover:text-zinc-300 duration 500 ">
                  Sobre mim
                </h3>
              </Link>
            </li>
            <li>
              <Link href="#projects">
                <h3 className="md:mx-4 my-6 md:my-0 hover:text-zinc-300 duration 500">
                  Projetos
                </h3>
              </Link>
            </li>
            <li>
              <Link href="#skills">
                <h3 className="md:mx-4 mt-3 md:my-0 hover:text-zinc-300 duration 500">
                  Minhas skills
                </h3>
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`flex md:flex-row flex-col md:justify-between justify-center items-center md:mt-20 ${
            isMenuOpen ? "mt-48" : "mt-16"
          }`}
        >
          <section>
            <h2 className="md:text-4xl text-2xl font-bold">
              Olá, eu sou o <br></br> Victor Marques :)
            </h2>
            <p className="py-4 text-zinc-500 md:text-lg font-medium mt-2 mb-4">
              Desenvolvedor Full Stack
            </p>
            <div className="flex md:flex-row flex-col font-medium md:text-lg ">
              <button className="mr-4 text-neutral-900 bg-blueshirt hover:font-semibold py-3 px-8 mb-2 md:mb-0">
                Download CV
              </button>
              <Link href="mailto:victorsmarqs@gmail.com">
                <button className="border border-zinc-700 hover:font-semibold py-3 px-6 mb-14 md:mb-0">
                  Entrar em contato
                </button>
              </Link>
            </div>
          </section>
          <Image
            className="border border-x-2 rounded-full border-zinc-700"
            src={Foto}
            width={270}
            height={205}
            alt="Picture of the author"
          />
        </div>
        <About />
        <Projects />
        <Skills />
      </div>
      <footer className="bg-zinc-800 w-full h-full p-4 flex justify-center items-center">
        <p className="text-lg ">
          Desenvolvido por{" "}
          <Link
            className="text-blueshirt font-bold"
            href="https://github.com/victormarques1"
          >
            Victor Marques
          </Link>
        </p>
      </footer>
    </div>
  );
}
