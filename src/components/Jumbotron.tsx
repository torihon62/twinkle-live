"use client";

import { Sacramento } from "next/font/google";

const Sacramento400 = Sacramento({
  preload: false,
  weight: "400",
});

interface Props {
  title: string;
  subtitle: string;
}

function Jumbotron(props: Props) {
  return (
    <section
      className={`shadow-jumbotron bg-center bg-no-repeat bg-[url('/assets/background_xs.jpg')] sm:bg-[url('/assets/background_xs.jpg')] lg:bg-[url('/assets/background.jpg')] bg-gray-200 bg-blend-multiply`}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-36 lg:py-56">
        <div className="py-10" />
        <h1
          className={`${Sacramento400.className} pt-3 mb-4 text-5xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl`}
        >
          {props.title}
        </h1>
        <p
          className={`${Sacramento400.className} mb-8 text-2xl font-normal text-gray-300 lg:text-3xl sm:px-16 lg:px-48`}
        >
          {props.subtitle}
        </p>
      </div>
    </section>
  );
}

export default Jumbotron;
