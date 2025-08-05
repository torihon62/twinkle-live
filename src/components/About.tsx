"use client";

import SectionContainer from "./SectionContainer";
import SectionHead from "./SectionHead";
import Star1 from "./icons/Star1";
import Star2 from "./icons/Star2";

interface Props {
  descriptions?: string[];
}

function About(props: Props) {
  return (
    <SectionContainer backgroundColor="#fcf6ee" nextBackgroundColor="white">
      <div className="mt-5"></div>
      <SectionHead topLeftIcon={<Star1 />} bottomRightIcon={<Star2 />}>
        Twinkle Live
      </SectionHead>
      <div>
        <div className="text-left sm:text-center pt-5 pb-10">
          「Twinkle」とは、「きらきら輝く・きらりと光る」という意味。
        </div>
        <div className="text-left sm:text-center">
          お越しいただいたお客さまに、「きらきらとしたきもちで、帰っていただきたい」
        </div>
        <div className="text-left sm:text-center pb-10">
          ･･･そんな願いを込めて、このタイトルを付けました。
        </div>
        {props.descriptions &&
          props.descriptions.map((description, i) => (
            <div
              key={`about-description_${i}`}
              className="text-left sm:text-center"
            >
              {description}
            </div>
          ))}
        {props.descriptions && <div className="pb-10"></div>}
        <div className="text-left sm:text-center pb-10">
          笑いあり、サプライズありのひと時―
        </div>
        <div className="text-left sm:text-center">
          きらりと光る思い出になるよう、心をこめて。
        </div>
        <div className="text-left sm:text-center pb-10">
          皆さまのお越しを、心よりお待ちしております。
        </div>
      </div>
    </SectionContainer>
  );
}

export default About;
