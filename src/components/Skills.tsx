import { FaNode } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills(){
    return(
        <div className="flex flex-col">
          <h2
            id="skills"
            className="flex justify-center font-bold md:text-3xl text-2xl md:mt-28 mt-14 mb-8 md:mb-10"
          >
            Principais skills
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 md:gap-8 gap-6 mb-8">
            <div className="border border-zinc-700 p-6 items-center bg-zinc-800 mb-4 flex justify-center">
              <SiJavascript size={68} className="text-blueshirt" />
            </div>
            <div className="border border-zinc-700 p-6 items-center bg-zinc-800 mb-4 flex justify-center">
              <SiTypescript size={68} className="text-blueshirt" />
            </div>
            <div className="border border-zinc-700 p-6 items-center bg-zinc-800 mb-4 flex justify-center">
              <SiReact size={68} className="text-blueshirt" />
            </div>
            <div className="border border-zinc-700 p-6 items-center bg-zinc-800 mb-4 flex justify-center">
              <SiNextdotjs size={68} className="text-blueshirt" />
            </div>
            <div className="border border-zinc-700 p-6 items-center bg-zinc-800 mb-4 flex justify-center">
              <SiTailwindcss size={68} className="text-blueshirt" />
            </div>
            <div className="border border-zinc-700 p-6 items-center bg-zinc-800 mb-4 flex justify-center">
              <FaNode size={68} className="text-blueshirt" />
            </div>
          </div>
        </div>
    )
}