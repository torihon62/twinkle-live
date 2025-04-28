"use client";

import backgroundSM from "./assets/background_6th.jpg"
import backgroundPC from "./assets/background_6th_pc.jpg"
import dynamic from "next/dynamic";
import Image from "next/image";

const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

interface Props {
  title: string;
  subtitle: string;
}

function Jumbotron6th(props: Props) {
  return (
    <section
      className={`shadow-jumbotron bg-center bg-no-repeat bg-[#fcf6ee] bg-blend-multiply`}
    >
      <div className="min-h-72 flex justify-center">
        <MediaQuery minWidth={1024}>
          <Image src={backgroundPC.src} alt={""} width="1200" height="800" sizes="100vw" style={{ width: "100%", height: "auto" }} />
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
          <Image src={backgroundSM.src} alt={""} width="1200" height="300" sizes="100vw" style={{ width: "100%", height: "auto" }} />
        </MediaQuery>        
      </div>
    </section>
  );
}

export default Jumbotron6th;
