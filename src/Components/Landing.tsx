import { useState } from "react";
import Countdown from "./Countdown";
import banner from "../Assets/Images/banner.png";

const Landing = () => {
  const [subHeading, setSubHeading] = useState("April 18-19, 2026 @ PC Ballroom West");

  return (
    <div className="flex flex-col gap-4 items-center pt-[25vh] min-h-screen">
      <div
        className="absolute inset-0 bg-cover z-[-1] h-[120vh]"
        style={{ backgroundImage: `url(${banner})` }}
      />

      <div className="flex flex-col items-center bg-black/85 backdrop-blur-sm text-white rounded-2xl py-12 md:px-16 px-6 shadow-2xl border border-white/10">
        <h1 className="text-[clamp(2.5rem,6vw,7rem)] font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          DATAHACKS 2026
        </h1>
        <h2 className="text-[clamp(1.2rem,2.5vw,2rem)] font-semibold mt-3 text-gray-100 tracking-wide">
          {subHeading}
        </h2>
      </div>
      <Countdown setSubHeading={setSubHeading} />
    </div>
  );
};

export default Landing;