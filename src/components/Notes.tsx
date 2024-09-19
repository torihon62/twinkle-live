"use client";

import SectionContainer from "./SectionContainer";
import SectionHead from "./SectionHead";

interface Props {
  notes: JSX.Element;
}

function Notes(props: Props) {
  return (
    <SectionContainer backgroundColor="white" nextBackgroundColor="#fcf6ee">
      <SectionHead>
        <small>運営事務局からのおしらせ</small>
      </SectionHead>
      {props.notes}
    </SectionContainer>
  );
}

export default Notes;
