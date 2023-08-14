import Link from "next/link";

import { MdClose, MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

export default function About(){
    return(
        <div className="flex flex-col items-center justify-center text-center mt-14 md:mt-28">
          <section className="flex flex-col items-center justify-center max-w-2xl">
            <h2 id="about" className="font-bold md:text-3xl text-2xl mb-6">
              Sobre mim
            </h2>
            <span className="md:text-lg text-zinc-500">
            Olá, me chamo Victor Marques, sou um entusiasta da tecnologia e desenvolvedor
             Full Stack, atualmente com maior foco no frontend. Sou formado em 
             Ciência da Computação pela Universidade Franciscana (UFN) 
             a partir de agosto de 2023 e estou empolgado para aplicar minhas 
             habilidades e paixão ao mundo da programação.
            </span>
          </section>

          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            <div className="flex flex-col items-center justify-center">
              <div className="border border-transparent rounded-full p-3 bg-zinc-800 mb-4">
                <MdOutlineMailOutline size={28} className="text-blueshirt" />
              </div>
              <strong>E-mail</strong>
              <p className="text-zinc-500">victorsmarqs@gmail.com</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="border border-transparent rounded-full p-3 bg-zinc-800 mb-4">
                <BiLogoLinkedin size={28} className="text-blueshirt" />
              </div>
              <strong>LinkedIn</strong>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                className="text-zinc-500 hover:text-blue-300"
              >
                /victormarqs1
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="border border-transparent rounded-full p-3 bg-zinc-800 mb-4">
                <BiLogoGithub size={30} className="text-blueshirt" />
              </div>
              <strong>GitHub</strong>
              <Link
                href="https://github.com/victormarques1"
                target="_blank"
                className="text-zinc-500 hover:text-blue-300"
              >
                /victormarques1
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="border border-transparent rounded-full p-3 bg-zinc-800 mb-4">
                <MdOutlinePhone size={28} className="text-blueshirt" />
              </div>
              <strong>Telefone</strong>
              <p className="text-zinc-500">(55) 99916-6533</p>
            </div>
          </section>
        </div>
    )
}