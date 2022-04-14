import React from "react";
import Button from "./button";

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 flex-col md:pt-32 pt-16 lg:pb-48 md:pb-40 pb-20 justify-between items-center text-center">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-10 flex flex-col items-center">
            <p className="md:text-body-xl text-body-lg font-medium pb-4">
              Hey there, I’m Bruno Simmons 👋
            </p>
            <h1 className="lg:text-display-2xl md:text-display-xl text-display-md font-semibold pb-10">
              Building digital products, brands and experience
            </h1>
            <Button label="CONNECT WITH ME" link="#" size="lg" />
          </div>
          <div className="lg:col-span-1"></div>
        </div>
        <div className="flex justify-center relative pb-1">
          <span className="absolute block h-px bg-white bottom-1/2 left-0 right-0 bg-hero-line"></span>
          <div className="bg-white px-4 py-2 relative">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663C8.63616 2.66663 2.66663 8.63616 2.66663 16C2.66663 23.3638 8.63616 29.3333 16 29.3333Z"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-neutral-600"
              />
              <path
                d="M11.2933 14.3199L16 19.0133L20.7067 14.3199"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-neutral-600"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
