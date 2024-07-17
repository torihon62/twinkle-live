"use client";

import SectionContainer from "./SectionContainer";
import SectionHead from "./SectionHead";

function Notes() {
  return (
    <SectionContainer backgroundColor="white" nextBackgroundColor="#fcf6ee">
      <SectionHead>運営事務局からのおしらせ</SectionHead>
      <p>
        『Twinkle Live ~ The second star ~』
        は当初2回公演の予定でしたが、16:30の公演が定員に満たなかったため、13:30開演の1ステージのみとなりました。
      </p>
      <p>楽しみにされていた皆さまに、深くお詫び申し上げます。</p>
      <p>13:30のステージを、より心を込めてお届けいたします。</p>
      <p>当日のお越しをお待ちしております。</p>
    </SectionContainer>
  );
}

export default Notes;
