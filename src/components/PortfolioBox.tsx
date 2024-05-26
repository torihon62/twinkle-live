"use client";

interface Props {
  play: string;
  name: string;
  imageSource: string;
  snsIcons: JSX.Element[];
  descriptions: string[];
}

function PortfolioBox(props: Props) {
  return (
    <div
      role="status"
      className="mt-5 space-y-4 md:space-y-0 md:space-x-8 md:flex md:items-start"
    >
      <div className="flex items-center justify-center w-full sm:w-96">
        <div className="flex flex-col items-center">
          <img className="rounded-2xl pt-2" src={props.imageSource} />
        </div>
      </div>
      <div className="w-full">
        <div className="text-gray-500 text-sm text-center sm:text-left">
          {props.play}
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="text-2xl text-center sm:text-left pb-2 sm:pb-5">
            {props.name}
          </div>
          <div className="flex flex-row pb-5 sm:pb-0 justify-center">
            {props.snsIcons.map((SNSIcon, i) => {
              return (
                <div className="px-2" key={i}>
                  {SNSIcon}
                </div>
              );
            })}
          </div>
        </div>
        {props.descriptions.map((description, i) => {
          return (
            <div className="min-h-4" key={`${description}_${i}`}>
              {description}
            </div>
          );
        })}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default PortfolioBox;
