import Image from "next/image";
import { ChevronUp } from "lucide-react";
import TypingEffect from "./typing-effect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    // Ensure ScrollTrigger refreshes when DOM is fully loaded
    // ScrollTrigger.refresh();
    const tl = gsap.timeline();
    tl.fromTo(
      "#text-ref",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.2, duration: 1 },
    )
      .fromTo(
        "#img-ref",
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
      )
      .fromTo(
        "#up-ref",
        { y: 50 },
        { y: -50, ease: "elastic.out", duration: 2, opacity: 1 },
      );
    ["#text-ref", "#img-ref"].forEach((elementId) => {
      gsap.fromTo(
        elementId as string,
        {
          y: 300,
        },
        {
          yPercent: elementId === "#text-ref" ? -250 : -120,
          ease: "ease", // Linear easing for smooth parallax
          scrollTrigger: {
            trigger: "#top",
            scrub: true,
            start: "top center",
            end: "bottom center",
            // Disable parallax until initial animation completes
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  return (
    <div
      id="top"
      className="bg-[url('/earth.jpg')] bg-cover bg-no-repeat w-full h-screen object-center"
    >
      <div className="flex justify-center items-center h-full py-28 md:py-34 pt-20">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2 w-full text-slate-50">
          <div className="flex flex-col justify-center items-center w-full">
            <div
              id="text-ref"
              className="flex flex-col justify-center opacity-0 items-center gap-2 mx-12 md:mx-28 w-full px-8 md:px-16"
            >
              <h1 className="w-full md:w-4/5 text-left text-6xl md:text-7xl font-semibold">
                Hello,
              </h1>
              <TypingEffect
                text="Welcome to my website."
                delay={0.26}
                className="text-4xl md:text-7xl h-32 md:h-20 w-full md:w-4/5 text-left transition-all ease-in-out duration-150"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <div
              id="img-ref"
              className="flex opacity-0 justify-center items-center p-4"
            >
              <Image
                src={"/bg2.jpg"}
                alt="Image"
                width={800}
                height={800}
                className=" shadow rounded-xl shadow-slate-50 md:w-4/6 md:h-6/6 md:mt-20"
              />
            </div>
          </div>
        </div>
        <div
          id="up-ref"
          className="absolute w-full h-full inset-0 z-30 opacity-0 flex justify-center items-end"
        >
          <ChevronUp className="text-5xl" size={68} color="#ffffff" />
        </div>
      </div>
    </div>
  );
};

export default About;
