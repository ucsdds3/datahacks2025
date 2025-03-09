import { useState } from "react";
import Countdown from "./Countdown";
import banner from "../Assets/Images/banner.png";

const Landing = () => {
  const [subHeading, setSubHeading] = useState("April 5-6, PC Ballroom West");

  return (
    <div className="flex  flex-col gap-4 items-center pt-[15vh] h-[100vh]">
      <div
        className="absolute inset-0 bg-cover z-[-1] h-[150vh]"
        style={{ backgroundImage: `url(${banner})` }}
      />

      <div className="flex flex-col items-center bg-black/80 text-white rounded-lg py-10 md:px-14 px-2">
        <h1 className="text-[clamp(2.2rem,5.5vw,10rem)] font-bold">
          DATAHACKS 2025
        </h1>
        <h2 className="text-4xl font-bold w-3/4 text-center">{subHeading}</h2>
      </div>
      <Countdown setSubHeading={setSubHeading} />
    </div>
  );
};

export default Landing;
