import Image from "next/image";
import React, { useRef } from "react";
import TechText from "./tech-text";
import NorthEast from "@mui/icons-material/NorthEast";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Props {
  name: string;
  imgUrl: string;
  description: string;
  webiste?: string;
  images?: string;
  github: string;
  techs?: Array<string>;
}

const ProjectCard = ({
  name,
  imgUrl,
  description,
  webiste,
  images,
  github,
  techs,
}: Props) => {
  const contRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const hoverRefElements = gsap.utils.toArray(".hover-ref") as HTMLElement[];

    hoverRefElements.forEach((ref) => {
      const tl = gsap.timeline({ paused: true });
      tl.fromTo(
        ref,
        {
          scale: 1,
        },
        {
          scale: 1.2, // Start at original position
          duration: 1,
          ease: "elastic.out",
        },
      );

      ref.addEventListener("mouseenter", () => tl.play());
      ref.addEventListener("mouseleave", () => tl.reverse(-1));
    });
    // Animation for the parent container (#hover-cont)
    if (contRef.current) {
      const parentTl = gsap.timeline({ paused: true });
      parentTl.to(
        contRef.current,
        {
          y: 0, // Adjust for desired effect
          duration: 0.5,
          opacity: 1,
          ease: "power2.out",
        },
        0, // Start immediately (no delay)
      );

      contRef.current.addEventListener("mouseenter", () => {
        parentTl.play();
        // Transition animation for children
        gsap.fromTo(
          "#hover-cont > *",
          {
            opacity: 0,
            y: -50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.2, // Optional: stagger the animation
          },
        );
      });
      contRef.current.addEventListener("mouseleave", () => {
        parentTl.reverse(-1);
        // // Reverse transition for children
        // gsap.fromTo(
        //   "#hover-cont > *",

        //   {
        //     opacity: 1,
        //     y: 0,
        //     duration: 0.5,
        //     stagger: 0.2, // Optional: stagger the animation
        //   },
        //   {
        //     opacity: 0,
        //     y: -50,
        //   },
        // );
      });
    }
  }, []);
  return (
    <div className=" w-full h-64 md:h-96  grid  grid-cols-4 grid-rows-4 gap-1 p-4 justify-center items-start border-2 border-slate-900 rounded-xl shadow-2xl bg-slate-200">
      <h1 className=" row-span-1 col-span-2 flex justify-start items-center md:mt-4 text-xl capitalize md:text-4xl font-semibold">
        {name}
      </h1>
      <div className=" relative row-span-4 col-span-2 rounded-2xl w-full h-full group hover:cursor-pointer transition-all ease-in-out duration-300">
        <div
          ref={contRef}
          id="hover-cont"
          className="  absolute z-30 inset-0 opacity-0 rounded-3xl w-full h-full backdrop-blur-2xl hidden group-hover:flex flex-col text-slate-50 justify-around items-center group-hover:scale-105 "
        >
          <a
            href={webiste || images}
            target="_blank"
            className=" hover-ref text-lg md:text-3xl text-blue-950 font-semibold border-2 p-2 rounded-2xl border-blue-900 "
          >
            {webiste ? "Website" : "Images"}
            <NorthEast />
          </a>
          <a
            href={github}
            className="hover-ref text-lg md:text-3xl text-blue-950 font-semibold border-2 p-2 rounded-2xl border-blue-900  "
          >
            Github<NorthEast></NorthEast>
          </a>
        </div>
        <Image
          src={imgUrl}
          alt="Project Image"
          width={1200}
          height={1200}
          className="rounded-2xl z-20 transition-all ease-in-out duration-300 w-full h-full object-contain object-center"
        />
      </div>
      <div className=" col-span-2 row-span-3 md:row-span-2 w-full h-full text-sm md:text-md font-medium overflow-scroll md:overflow-hidden">
        <p>{description}</p>
      </div>
      <div className=" h-fit  col-span-3 md:col-span-2 md:w-2/3 row-span-3 md:row-span-1 flex flex-wrap gap-1">
        {techs &&
          techs.map((tech, index) => <TechText key={index}>{tech}</TechText>)}
      </div>
    </div>
  );
};

export default ProjectCard;
