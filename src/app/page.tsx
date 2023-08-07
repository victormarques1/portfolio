import Image from "next/image";
import Foto from "./../assets/undraw_Lost_online_re_upmy 1.svg";

export default function Home() {
  return (
    <div className="bg-zinc-900 h-full py-12 px-24">
      <header>
        <div className="flex justify-between">
          <section>
            <h2 className="font-bold text-2xl">Portfólio</h2>
          </section>
          <section className="flex text-lg">
            <h3 className="mr-8">Sobre mim</h3>
            <h3 className="mr-8">Projetos</h3>
            <h3>Minhas skills</h3>
          </section>
        </div>
      </header>

      <div className="flex justify-between items-center mt-20">
        <section>
          <h2 className="text-4xl font-bold">
            Olá, eu sou o <br></br> Victor Marques :)
          </h2>
          <p className="py-4 text-zinc-500 text-lg font-medium mt-2 mb-4">
            Desenvolvedor Full Stack
          </p>
          <div className="font-medium text-lg ">
            <button className="mr-4 text-neutral-900 bg-green-500 py-3 px-8">
              Download CV
            </button>
            <button className="border border-zinc-700 py-3 px-6">
              Entrar em contato
            </button>
          </div>
        </section>
        <Image
          src={Foto}
          width={270}
          height={205}
          alt="Picture of the author"
        />
      </div>

      <div className="flex items-center justify-center text-center mt-28">
        <section className="flex flex-col items-center justify-center max-w-2xl">
            <h2 className="font-bold text-3xl mb-6">Sobre mim</h2>
            <span className="text-lg text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</span>
        </section>
      </div>
    </div>
  );
}
