import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden">
      <Image
        src={"/hero.gif"}
        alt="hero gif"
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute w-full flex flex-col items-center mt-24 ">
        <h2 className="font-bold text-7xl font-game">Start Your</h2>
        <h2
          className="font-bold text-8xl font-game text-yellow-400"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000",
          }}
        >
          Coding Adventure
        </h2>
        <h1 className="font-game mt-5 text-3xl ">
          Beginner-friendly coding courses and projects{" "}
        </h1>
        <Button className="font-game p-6 text-3xl mt-7" variant={"pixel"}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
