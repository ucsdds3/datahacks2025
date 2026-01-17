import facebook from "/src/Assets/Icons/facebook_icon.svg";
import discord from "/src/Assets/Icons/discord_icon.svg";
import email from "/src/Assets/Icons/email_icon.svg";
import medium from "/src/Assets/Icons/medium_icon.svg";
import instagram from "/src/Assets/Icons/instagram_icon.svg";
import spotify from "/src/Assets/Icons/spotify_icon.svg";

const Footer = () => {
  const links = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/DS3UCSD/",
      icon: facebook
    },
    {
      name: "Discord",
      link: "https://discord.com/invite/NqHx8h3",
      icon: discord
    },
    {
      name: "Email",
      link: "mailto:ds3@ucsd.edu",
      icon: email
    },
    {
      name: "Medium",
      link: "https://medium.com/ds3ucsd",
      icon: medium
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ds3.ucsd/?hl=en",
      icon: instagram
    },
    {
      name: "Spotify",
      link: "https://open.spotify.com/show/7yHiQn4eqjy2EAzRNEmQdf",
      icon: spotify
    }
  ];

  return (
    <div className="bg-[#2C5E63] min-h-[15vh] py-[clamp(10px,2vh,20px)] px-[clamp(3px,10vw,500px)] flex items-center gap-2">
      <p className="text-white text-lg w-full">
        © DS3 DataHacks 2026 | All rights reserved
      </p>
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] w-full gap-2 ">
        {links.map((link) => (
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            key={link.name}
            title={link.name}
            className="w-full justify-center flex "
          >
            <img
              src={link.icon}
              alt={link.name}
              className="w-[40px] hover:opacity-75 duration-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
