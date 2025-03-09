import { useEffect, useState } from "react";
import info from "../info.json";

interface CountdownProps {
  setSubHeading: (subHeading: string) => void;
}

const Countdown = ({ setSubHeading }: CountdownProps) => {
  const start = new Date(info.times.start).getTime();
  const end = new Date(info.times.end).getTime();

  const [formattedTime, setFormattedTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });
  const [untilMsg, setUntilMsg] = useState("Until DataHacks begins!");
  const [targetTime, setTargetTime] = useState(start);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      let timeLeft = targetTime - now;

      if (timeLeft < 0) {
        if (targetTime === start && end - now > 0) {
          // Transition to the end time
          setTargetTime(end);
          setUntilMsg("Until DataHacks ends!");
          timeLeft = end - now;
        } else {
          // Countdown has ended
          setFormattedTime({
            days: "X",
            hours: "X",
            minutes: "X",
            seconds: "X"
          });
          setSubHeading("has concluded!");
          return;
        }
      }

      const days = String(
        Math.floor(timeLeft / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((timeLeft % (1000 * 60)) / 1000)
      ).padStart(2, "0");
      setFormattedTime({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetTime, start, end]);

  const isCountdownActive = Object.values(formattedTime).some(
    (value) => value !== "X"
  );

  return (
    <div className={`text-center ${!isCountdownActive && "mt-4"}`}>
      {isCountdownActive ? (
        <div>
          <div className="flex gap-1 md:gap-4 p-4">
            {Object.entries(formattedTime).map(([key, value], index) => (
              <TimeBox key={index} time={value!} label={key} />
            ))}
          </div>
          <h4 className="text-3xl font-bold">{untilMsg}</h4>
        </div>
      ) : (
        <a
          className="bg-orange-500 text-2xl text-white px-6 py-4 rounded font-bold"
          href="https://www.ds3ucsd.com/"
          target="_blank"
        >
          Join us next year and check out DS3!
        </a>
      )}
    </div>
  );
};

const TimeBox = ({ time, label }: { time: string; label: string }) => {
  return (
    <div className="flex  flex-col items-center justify-center bg-[#000] opacity-80 text-white rounded-lg p-2 w-[clamp(4.5rem,12vw,7rem)] aspect-square ">
      <span className="text-[clamp(2rem,2vw,5rem)] font-bold">{time}</span>
      <h6 className="text-[clamp(1rem,1vw,3rem)] font-bold">{label}</h6>
    </div>
  );
};

export default Countdown;
