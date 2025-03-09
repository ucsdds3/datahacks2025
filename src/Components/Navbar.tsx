import Logo from "/src/Assets/Images/datahacks-logo.png";

const Navbar = () => {
  const btnClass = "hover:cursor-pointer hover:underline";

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
          className="hover:cursor-pointer bg-orange-500 text-white px-4 py-2 rounded font-bold"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
