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
import React from "react";

interface Props {
  hashizumeImage: StaticImageData;
  hashizumeDescriptions: string[];
  tsukaTImage: StaticImageData;
  tsukaTDescriptions: string[];
  guests?: {
    name: string;
    play: string;
    image: StaticImageData;
    snsIcons: JSX.Element[];
    descriptions: string[];
  }[];
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
      {props.guests &&
        props.guests.map((guest, i) => {
          return (
            <React.Fragment key={`guest_${i}`}>
              <div className="mt-20" />
              <PortfolioBox
                play={guest.play}
                name={guest.name}
                imageSource={guest.image.src}
                snsIcons={guest.snsIcons}
                descriptions={guest.descriptions}
              />
            </React.Fragment>
          );
        })}
    </SectionContainer>
  );
}

export default Performers;
