"use client";
import { useState } from "react";

import Image from "next/image";
import Foto from "./../assets/image/profile2.png";
import Phone from "./../assets/image/phone.svg";
import React from "./../assets/image/react.svg";
import Micday from "./../assets/projects/login.png";
import Link from "next/link";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose, MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi'
import { FaNode } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

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
            {isMenuOpen ? <MdClose size={28} /> : <HiOutlineMenuAlt3 size={28} />}
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

        <div className="flex flex-col items-center justify-center text-center mt-14 md:mt-28">
          <section className="flex flex-col items-center justify-center max-w-2xl">
            <h2 id="about" className="font-bold md:text-3xl text-2xl mb-6">
              Sobre mim
            </h2>
            <span className="md:text-lg text-zinc-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </span>
          </section>

          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            <div className="flex flex-col items-center justify-center">
              <div className="border border-transparent rounded-full p-3 bg-zinc-800 mb-4">
              <MdOutlineMailOutline size={28} className="text-blueshirt"/>
              </div>
              <strong>E-mail</strong>
              <p className="text-zinc-500">victorsmarqs@gmail.com</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="border border-transparent rounded-full p-3 bg-zinc-800 mb-4">
                <BiLogoLinkedin size={28} className="text-blueshirt"/>
              </div>
              <strong>LinkedIn</strong>
              <Link href="https://www.linkedin.com/" target="_blank" className="text-zinc-500 hover:text-blue-300">
              /victormarqs1
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="border border-transparent rounded-full p-3 bg-zinc-800 mb-4">
                <BiLogoGithub size={30} className="text-blueshirt"/>
              </div>
              <strong>GitHub</strong>
              <Link href="https://github.com/victormarques1" target="_blank" className="text-zinc-500 hover:text-blue-300">
              /victormarques1
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="border border-transparent rounded-full p-3 bg-zinc-800 mb-4">
                <MdOutlinePhone size={28} className="text-blueshirt"/>
              </div>
              <strong>Telefone</strong>
              <p className="text-zinc-500">(55) 99916-6533</p>
            </div>
          </section>
        </div>

        <div>
          <h2
            id="projects"
            className="flex justify-center font-bold md:text-3xl text-2xl md:mt-28 mt-14 mb-8 md:mb-10"
          >
            Projetos
          </h2>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-center text-center">
            <div className="border border-zinc-700 p-6 bg-zinc-800">
              <div className="border border-zinc-700 bg-red-50 mb-6">
                <Image className="w-full" src={Micday} alt="Phone icon" />
              </div>
              <div className="flex flex-col text-start">
                <strong className="text-lg">Título</strong>
                <p className="text-zinc-500">Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div className="border border-zinc-700 p-6 bg-zinc-800">
              <div className="border border-zinc-700 bg-red-50 mb-6">
                <Image src={Phone} width={150} height={65} alt="Phone icon" />
              </div>
              <div className="flex flex-col text-start">
                <strong className="text-lg">Título</strong>
                <p className="text-zinc-500">Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div className="border border-zinc-700 p-6 bg-zinc-800">
              <div className="border border-zinc-700 bg-red-50 mb-6">
                <Image src={Phone} width={150} height={65} alt="Phone icon" />
              </div>
              <div className="flex flex-col text-start">
                <strong className="text-lg">Título</strong>
                <p className="text-zinc-500">Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div className="border border-zinc-700 p-6 bg-zinc-800">
              <div className="border border-zinc-700 bg-red-50 mb-6">
                <Image src={Phone} width={150} height={65} alt="Phone icon" />
              </div>
              <div className="flex flex-col text-start">
                <strong className="text-lg">Título</strong>
                <p className="text-zinc-500">Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div className="border border-zinc-700 p-6 bg-zinc-800">
              <div className="border border-zinc-700 bg-red-50 mb-6">
                <Image src={Phone} width={150} height={65} alt="Phone icon" />
              </div>
              <div className="flex flex-col text-start">
                <strong className="text-lg">Título</strong>
                <p className="text-zinc-500">Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>

            <div className="border border-zinc-700 p-6 bg-zinc-800">
              <div className="border border-zinc-700 bg-red-50 mb-6">
                <Image src={Phone} width={150} height={65} alt="Phone icon" />
              </div>
              <div className="flex flex-col text-start">
                <strong className="text-lg">Título</strong>
                <p className="text-zinc-500">Tecnologias: HTML, CSS e JS.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col">
          <h2
            id="skills"
            className="flex justify-center font-bold md:text-3xl text-2xl md:mt-28 mt-14 mb-8 md:mb-10"
          >
            Principais skills
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 md:gap-8 gap-6 mb-8">
            <div className="border border-zinc-700 p-6 items-center bg-zinc-800 mb-4 flex justify-center">
              <SiJavascript size={68} className='text-blueshirt' />
            </div>
            <div className="border border-zinc-700 p-6 items-center bg-zinc-800 mb-4 flex justify-center">
              <SiTypescript size={68} className='text-blueshirt' />
            </div>
            <div className="border border-zinc-700 p-6 items-center bg-zinc-800 mb-4 flex justify-center">
              <SiReact size={68} className='text-blueshirt' />
            </div>
            <div className="border border-zinc-700 p-6 items-center bg-zinc-800 mb-4 flex justify-center">
              <SiNextdotjs size={68} className='text-blueshirt' />
            </div>
            <div className="border border-zinc-700 p-6 items-center bg-zinc-800 mb-4 flex justify-center">
              <SiTailwindcss size={68} className='text-blueshirt' />
            </div><div className="border border-zinc-700 p-6 items-center bg-zinc-800 mb-4 flex justify-center">
              <FaNode size={68} className='text-blueshirt' />
            </div>
          
          </div>
        </div>
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
