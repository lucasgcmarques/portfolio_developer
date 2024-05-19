
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useLayoutEffect } from "react";
import Vector1 from "../../../assets/images/vector1.svg?react";

export const Graphic1 = () => {
  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);


  //   gsap.to(".vectorRef", {
  //     x: 30,
  //     rotate: "30deg",
  //     scale: 0.5,
  //     ease: "inOut",
  //     scrollTrigger: {
  //       trigger: ".container",
  //       start: "top 150px",
  //       end: "bottom 400px",
  //       scrub: true,
  //     },
  //   });

  //   return () => {
  //     gsap.killTweensOf(".vectorRef");
  //   };
  // }, []);

  return (
    <div
      className="container w-full flex items-center justify-center"
      // style={{ backgroundColor: "#272727" }}
    >
      <Vector1 className="vectorRef" />
    </div>
  );
};
