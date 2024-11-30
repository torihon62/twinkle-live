"use client";

import SectionContainer from "./SectionContainer";
import SectionHead from "./SectionHead";

interface Props {
  title: string;
  notes: JSX.Element;
}

function Notes(props: Props) {
  return (
    <SectionContainer backgroundColor="white" nextBackgroundColor="#fcf6ee">
      <SectionHead>
        <small>{props.title}</small>
      </SectionHead>
      {props.notes}
    </SectionContainer>
  );
}

export default Notes;
