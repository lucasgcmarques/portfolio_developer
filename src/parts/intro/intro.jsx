
import Graph1 from "../../assets/images/graph1.svg?react";
import { Graphic1 } from "./components/graphic";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScramble } from '../../hooks/useScrumble';

gsap.registerPlugin(useGSAP, ScrollTrigger);


export const Intro = () => {

  useGSAP(
    ()=>{
      gsap.to('.title',{
        scrollTrigger: {
          trigger: ".container",
          start: "top 150px",
          end: "bottom center",
          scrub: true,
          markers: true,
          onEnterBack: replay,
        }
      })
    }
  )

  const { ref, replay } = useScramble({
    text: 'Web develooper',
    range: [12455,12538],
    speed: 0.6,
    tick: 4,
    step: 2,
    scramble: 4,
    seed: 0,
    chance: .8,
    overdrive: false,
    overflow: false,
  });


  return (
    <div className="flex flex-column h-full container ">
      <div className="flex my-auto ">
      <Graphic1 />

      <div  className="container w-full text-end flex flex-column items-center justify-center m-content">
        <h2 className="pb-3 box"  ref={ref}>
          Hi! Im Lucas, a 28-year-old web developer based in Brasília.
          Passionate about technology, Im always looking for challenges to
          push myself with every project.
        </h2>
        <h2 className="box">
          My approach is focused on creating efficient solutions, with clean
          design and optimized code, ensuring the best user experience.
        </h2>
      </div>
      </div>
      <div className="m-content h-1x5 mt-auto">
      <div className="flex items-center gap-2">
        <span className="display-2">react.js x next x css x</span>
        <Graph1 />
        <a
          href=""
          className="uppercase border-p mt-1 px-2 py-1 small flex items-center text-primary"
        >
          Open to work
        </a>
      </div>

        <h1 className="display-0 stretch title" ref={ref} onMouseOver={replay}>Web developer</h1>
      </div>
    </div>
  );
};
