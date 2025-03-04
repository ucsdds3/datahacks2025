import facebook from "/src/Assets/Icons/facebook_icon.svg"
import discord from "/src/Assets/Icons/discord_icon.svg"
import email from "/src/Assets/Icons/email_icon.svg"
import medium from "/src/Assets/Icons/medium_icon.svg"
import instagram from "/src/Assets/Icons/instagram_icon.svg"
import spotify from "/src/Assets/Icons/spotify_icon.svg"

const Footer = () => {
  const links = [
    {
      "name": "Facebook",
      "link": "https://www.facebook.com/DS3UCSD/",
      "icon": facebook
    },
    {
      "name": "Discord",
      "link": "https://discord.com/invite/NqHx8h3",
      "icon": discord
    },
    {
      "name": "Email",
      "link": "mailto:ds3@ucsd.edu",
      "icon": email
    },
    {
      "name": "Medium",
      "link": "https://medium.com/ds3ucsd",
      "icon": medium
    },
    {
      "name": "Instagram",
      "link": "https://www.instagram.com/ds3.ucsd/?hl=en",
      "icon": instagram
    },
    {
      "name": "Spotify",
      "link": "https://open.spotify.com/show/7yHiQn4eqjy2EAzRNEmQdf",
      "icon": spotify
    }
  ]

  return (
    <div className="bg-[#2C5E63] h-[15vh] py-[3vh] px-[10vw] flex items-center">
      <p className="text-white text-lg w-full">© DS3 DataHacks 2025 | All rights reserved</p>
      <div className="flex justify-end w-full gap-10 mt-5">
        {links.map((link) => (
          <a href={link.link} target="_blank" rel="noopener noreferrer" key={link.name} title={link.name}>
            <img src={link.icon} alt={link.name} className="w-[3vw]" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
