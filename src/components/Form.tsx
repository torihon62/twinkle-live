"use client";

import SectionContainer from "./SectionContainer";
import SectionHead from "./SectionHead";

interface Props {
  href: string;
}

function Form(props: Props) {
  return (
    <SectionContainer backgroundColor="#f6f6f6" nextBackgroundColor="#f2ebe6">
      <SectionHead>ご予約受付フォーム</SectionHead>
      <div className="flex justify-center pb-10">
        うまくスクロールできない方は
        <a target="_blank" href={props.href} style={{ color: "#1a0dab" }}>
          こちら
        </a>
        から
      </div>
      <iframe src={props.href} width="100%" height="500">
        読み込んでいます…
      </iframe>
    </SectionContainer>
  );
}

export default Form;
