"use client";
import { useState } from "react";

import Image from "next/image";
import Foto from "./../assets/image/profile2.png";
import Smile from "./../assets/image/smile.svg";
import Email from "./../assets/image/email.svg";
import Instagram from "./../assets/image/instagram.svg";
import Phone from "./../assets/image/phone.svg";
import Typescript from "./../assets/image/typescript.svg";
import Node from "./../assets/image/node.svg";
import Js from "./../assets/image/javascript.svg";
import Tailwind from "./../assets/image/tailwind.svg";
import React from "./../assets/image/react.svg";
import Next from "./../assets/image/next.svg";
import Micday from "./../assets/projects/login.png";
import Link from "next/link";

import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto px-4">
        <nav className="flex items-center justify-between pt-8">
          <div>
            <h2 className="font-bold text-2xl p-2 md:p-0">Portfólio</h2>
          </div>

          <button className="md:hidden mx-2" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
            { isMenuOpen ? <MdClose size={26} /> : <HiMenu size={26} />}
          </button>

          <ul className={`md:flex md:text-lg md:z-auto md:static absolute py-4 md:py-0 md:pl-0  
          transition-all ease-in p-2 md:p-0
          ${isMenuOpen ? "top-20" : "top-[-490px]"}`}>
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

        <div className={`flex justify-between items-center md:mt-20 ${isMenuOpen ? "mt-48" : "mt-16"}`}>
          <section>
            <h2 className="text-4xl font-bold">
              Olá, eu sou o <br></br> Victor Marques :)
            </h2>
            <p className="py-4 text-zinc-500 text-lg font-medium mt-2 mb-4">
              Desenvolvedor Full Stack
            </p>
            <div className="font-medium text-lg ">
              <button className="mr-4 text-neutral-900 bg-green-500 hover:font-semibold py-3 px-8">
                Download CV
              </button>
              <Link href="mailto:victorsmarqs@gmail.com">
                <button className="border border-zinc-700 hover:font-semibold py-3 px-6">
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

        <div className="flex flex-col items-center justify-center text-center mt-28">
          <section className="flex flex-col items-center justify-center max-w-2xl">
            <h2 id="about" className="font-bold text-3xl mb-6">
              Sobre mim
            </h2>
            <span className="text-lg text-zinc-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </span>
          </section>

          <section className="flex flex-row mt-16">
            <div className="flex flex-col items-center mr-12">
              <div className="border border-transparent rounded-full p-3 bg-zinc-800 mb-4">
                <Image src={Smile} width={32} height={32} alt="Smile icon" />
              </div>
              <strong>Meu nome</strong>
              <p className="text-zinc-500">Victor Marques</p>
            </div>

            <div className="flex flex-col items-center justify-center mr-12">
              <div className="border border-transparent rounded-full p-3 bg-zinc-800 mb-4">
                <Image src={Email} width={32} height={32} alt="Email icon" />
              </div>
              <strong>E-mail</strong>
              <p className="text-zinc-500">victorsmarqs@gmail.com</p>
            </div>

            <div className="flex flex-col items-center justify-center mr-12">
              <div className="border border-transparent rounded-full p-3 bg-zinc-800 mb-4">
                <Image
                  src={Instagram}
                  width={32}
                  height={32}
                  alt="Instagram icon"
                />
              </div>
              <strong>Instagram</strong>
              <p className="text-zinc-500">---</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="border border-transparent rounded-full p-3 bg-zinc-800 mb-4">
                <Image src={Phone} width={32} height={32} alt="Phone icon" />
              </div>
              <strong>Telefone</strong>
              <p className="text-zinc-500">(55) 99916-6533</p>
            </div>
          </section>
        </div>

        <div>
          <h2
            id="projects"
            className="flex justify-center font-bold text-3xl mt-28 mb-8"
          >
            Projetos
          </h2>
          <section className="grid gap-x-12 gap-y-8 grid-cols-3 justify-center text-center">
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
            className="flex justify-center font-bold text-3xl mt-28 mb-8 text"
          >
            Principais skills
          </h2>
          <div className="grid grid-cols-6 gap-x-8 mb-12">
            <div className="border border-zinc-700 p-4 bg-zinc-800 mb-4 flex justify-center">
              <Image src={Js} width={70} height={70} alt="JavaScript icon" />
            </div>
            <div className="border border-zinc-700 bg-zinc-800 mb-4 flex justify-center">
              <Image
                src={Typescript}
                width={70}
                height={70}
                alt="Typescript icon"
              />
            </div>
            <div className="border border-zinc-700 p-4 bg-zinc-800 mb-4 flex justify-center">
              <Image src={React} width={70} height={70} alt="React icon" />
            </div>
            <div className="border border-zinc-700 p-4 bg-zinc-800 mb-4 flex justify-center">
              <Image src={Next} width={70} height={70} alt="Next icon" />
            </div>

            <div className="border border-zinc-700 p-4 bg-zinc-800 mb-4 flex justify-center">
              <Image
                src={Tailwind}
                width={70}
                height={70}
                alt="Tailwind icon"
              />
            </div>

            <div className="border border-zinc-700 p-4 bg-zinc-800 mb-4 flex justify-center">
              <Image src={Node} width={100} height={100} alt="Node icon" />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-zinc-800 w-full h-full p-4 flex justify-center items-center">
        <p className="text-lg ">
          Desenvolvido por{" "}
          <Link
            className="text-green-500 font-bold"
            href="https://github.com/victormarques1"
          >
            Victor Marques
          </Link>
        </p>
      </footer>
    </div>
  );
}
