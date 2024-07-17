"use client";

import SectionContainer from "./SectionContainer";
import SectionHead from "./SectionHead";

function Notes() {
  return (
    <SectionContainer backgroundColor="white" nextBackgroundColor="#fcf6ee">
      <SectionHead>
        <small>運営事務局からのおしらせ</small>
      </SectionHead>
      <p>
        『Twinkle Live ~ The second star ~』
        は当初2回公演の予定でしたが、お客様が定員に満たなかったため、2回目の16:30のステージを中止する運びとなりました。
      </p>
      <p>楽しみにされていた皆さまに、深くお詫び申し上げます。</p>
      <br />
      <p>なお、1回目の13:30のステージは、予定通り開催いたします。</p>
      <br />
      <p>当日のお越しを、心よりお待ちしております。</p>
    </SectionContainer>
  );
}

export default Notes;
