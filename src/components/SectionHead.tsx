"use client";

interface Props {
  children: React.ReactNode;
  topLeftIcon?: JSX.Element;
  topRightIcon?: JSX.Element;
  bottomRightIcon?: JSX.Element;
}

function SectionHead(props: Props) {
  return (
    <div className="text-3xl mb-10 px-5 flex justify-center">
      {props.topLeftIcon !== undefined && (
        <div className="relative">
          <div className="absolute" style={{ top: "-28px", left: "-40px" }}>
            {props.topLeftIcon}
          </div>
        </div>
      )}
      <h2>{props.children}</h2>
      {props.topRightIcon !== undefined && (
        <div className="relative">
          <div className="absolute" style={{ top: "-28px", right: "-40px" }}>
            {props.topRightIcon}
          </div>
        </div>
      )}
      {props.bottomRightIcon !== undefined && (
        <div className="relative">
          <div className="absolute" style={{ bottom: "-28px", right: "-40px" }}>
            {props.bottomRightIcon}
          </div>
        </div>
      )}
    </div>
  );
}

export default SectionHead;
