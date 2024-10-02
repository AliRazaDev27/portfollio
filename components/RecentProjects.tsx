import React from "react";
import { projects } from "@/lib/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

function RecentProjects() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of {""}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-7 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex justify-center items-center sm:h-[41rem]  lg:min-h-[32.5rem] h-[32rem] sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={project.link} href={project.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10">
                <div className="relative   w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={project.img} alt={project.title} className="absolute bottom-0 z-10" />
              </div>
              <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1 ">{project.title}</h1>
              <p className=" text-sm lg:text-normal font-light lg:text-xl line-clamp-2">{project.des}</p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                    {project.iconLists.map((icon,index) => (
                        <div key={icon} className="flex justify-center items-center border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8"
                        style={{
                            transform: `translateX(-${10*index}px)`
                        }}>
<img src={icon} alt={icon} className="p-2" />
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <p className="flex lg:text-xl md:text-lg text-sm text-purple">Check Live Site</p>
                    <FaLocationArrow className="ms-3"/>
                    
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
