"use client";

/* eslint-disable react/jsx-key */
import { StaticImageData } from "next/image";
import PortfolioBox from "./PortfolioBox";
import SectionContainer from "./SectionContainer";
import SectionHead from "./SectionHead";
import HomeIcon from "./icons/HomeIcon";
import InstagramIcon from "./icons/InstagramIcon";
import XIcon from "./icons/XIcon";
import Mic from "./icons/Mic";
import Piano from "./icons/Piano";

interface Props {
  hashizumeImage: StaticImageData;
  hashizumeDescriptions: string[];
  tsukaTImage: StaticImageData;
  tsukaTDescriptions: string[];
}

function Performers(props: Props) {
  const hashizumeSnsIcons = [
    <HomeIcon url="https://ayakas-voice-delivery.com/" />,
    <XIcon url="https://twitter.com/kuma_ga_suki" />,
    <InstagramIcon url="https://www.instagram.com/ayaka_hashizume/?hl=ja" />,
  ];
  const tsukaTSnsIcons = [
    <HomeIcon url="https://tsuka-t.com/" />,
    <XIcon url="https://twitter.com/TurubaiT1" />,
  ];

  return (
    <SectionContainer backgroundColor="white" nextBackgroundColor="#f2ebe6">
      <SectionHead topLeftIcon={<Mic />} topRightIcon={<Piano />}>
        演奏する人
      </SectionHead>
      <PortfolioBox
        play={"vocal"}
        name={"橋爪紋佳"}
        imageSource={props.hashizumeImage.src}
        snsIcons={hashizumeSnsIcons}
        descriptions={props.hashizumeDescriptions}
      />
      <div className="mt-20" />
      <PortfolioBox
        play={"piano"}
        name={"塚本英之(つかT)"}
        imageSource={props.tsukaTImage.src}
        snsIcons={tsukaTSnsIcons}
        descriptions={props.tsukaTDescriptions}
      />
    </SectionContainer>
  );
}

export default Performers;
