"use client";

import SectionContainer from "./SectionContainer";
import SectionHead from "./SectionHead";
import MusicNote1 from "./icons/MusicNote1";
import MusicNote2 from "./icons/MusicNote2";

interface Props {
  title: string;
  date: JSX.Element;
  ticket: JSX.Element;
  place: JSX.Element;
  notes: JSX.Element;
  guests?: {
    name: string;
    play: string;
  }[];
}
function Detail(props: Props) {
  return (
    <SectionContainer backgroundColor="#f2ebe6" nextBackgroundColor="#f6f6f6">
      <SectionHead topLeftIcon={<MusicNote1 />} topRightIcon={<MusicNote2 />}>
        ライブ詳細
      </SectionHead>
      <div className="flex flex-col md:flex-row">
        <div className="w-full px-2">
          <h3 className="text-xl font-bold">公演名</h3>
          {/* <p>z</p> */}
          <p>{props.title}</p>
          <h3 className="mt-5 text-xl font-bold">出演</h3>
          <p>vocal 橋爪紋佳</p>
          <p>piano 塚本英之(つかT)</p>
          {props.guests &&
            props.guests.map((guest, i) => (
              <p key={`guest-detail_${i}`}>
                {guest.play} {guest.name}
              </p>
            ))}
          <h3 className="mt-5 text-xl font-bold">日時</h3>
          {props.date}
          <h3 className="mt-5 text-xl font-bold">料金</h3>
          {props.ticket}
        </div>
        <div className="w-full px-2 mt-5 md:mt-0">
          <h3 className="text-xl font-bold">会場</h3>
          {props.place}
          <h3 className="mt-5 text-xl font-bold">おねがい</h3>
          {props.notes}
        </div>
      </div>
    </SectionContainer>
  );
}

export default Detail;
