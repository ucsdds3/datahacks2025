import { useState } from "react";
import Logo from "/src/Assets/Images/datahacks-logo.png";
import { useMediaQuery } from "usehooks-ts";

const Navbar = () => {
  const btnClass = "hover:cursor-pointer hover:underline text-right";
  const media = useMediaQuery("(min-width:768px)");
  const [buttonClick, setButtonClick] = useState(false);

  if (!media)
    return (
      <div className="fixed top-2 h-[10vh] flex justify-between items-center z-100 w-full ">
        <button className="ml-5 hover:cursor-pointer w-[8vh] ">
          <img src={Logo} alt="Logo" />
        </button>
        <div
          className={`absolute right-0 m-1 rounded-lg top-0 py-4 flex flex-col items-end text-xl font-bold gap-6 px-6 bg-[#D1F4F9]/50 backdrop-filter backdrop-blur-sm overflow-hidden duration-300 `}
          style={{
            width: buttonClick ? "10rem" : "5rem",
            height: buttonClick ? "26rem" : "3.5rem"
          }}
        >
          <button
            className="h-fit w-8 flex flex-col gap-1 cursor-pointer"
            onClick={() => setButtonClick(!buttonClick)}
          >
            <span className="w-full h-1 bg-black"></span>
            <span className="w-full h-1 bg-black"></span>
            <span className="w-full h-1 bg-black"></span>
          </button>
          <button className={btnClass}>Prizes</button>
          <button className={btnClass}>Sponsors</button>
          <button className={btnClass}>FAQ</button>
          <button className={btnClass}>Devpost</button>
          <button className={btnClass}>Hacker Guide</button>
          <a
            href="https://forms.fillout.com/t/5MJ4HUiZF5us"
            target="_blank"
            className="hover:cursor-pointer bg-orange-500 text-white px-4 py-2 rounded font-bold"
          >
            Sign Up
          </a>
        </div>
      </div>
    );
  else {
    return (
      <div className="sticky top-0 bg-[#D1F4F9]/50 backdrop-filter backdrop-blur-sm h-[10vh] flex items-center z-100">
        <button className="ml-5 hover:cursor-pointer w-[8vh]">
          <img src={Logo} alt="Logo" />
        </button>
        <div className="flex items-center justify-end w-full text-xl font-bold gap-6 px-6">
          <button className={btnClass}>Prizes</button>
          <button className={btnClass}>Sponsors</button>
          <button className={btnClass}>FAQ</button>
          <button className={btnClass}>Devpost</button>
          <button className={btnClass}>Hacker Guide</button>
          <a
            href="https://forms.fillout.com/t/5MJ4HUiZF5us"
            target="_blank"
            className="hover:cursor-pointer hover:brightness-95 duration-150 bg-orange-500 text-white px-4 py-2 rounded font-bold"
          >
            Sign Up
          </a>
        </div>
      </div>
    );
  }
};

export default Navbar;
