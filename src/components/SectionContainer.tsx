"use client";

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
  nextBackgroundColor: string;
}

function SectionContainer(props: Props) {
  return (
    <>
      <div
        style={{ backgroundColor: props.backgroundColor }}
        className="py-10 px-5 md:px-20 lg:px-60"
      >
        {props.children}
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 152">
          <path
            fill={props.backgroundColor}
            fillOpacity="1"
            d="M0,96L30,112C60,128,120,160,180,149.3C240,139,300,85,360,69.3C420,53,480,75,540,74.7C600,75,660,53,720,42.7C780,32,840,32,900,48C960,64,1020,96,1080,101.3C1140,107,1200,85,1260,80C1320,75,1380,85,1410,90.7L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div
        style={{
          backgroundColor: props.nextBackgroundColor,
          marginTop: "-130px",
        }}
        className="h-40 -z-10 relative"
      />
    </>
  );
}

export default SectionContainer;
