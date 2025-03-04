interface FooterProps {
  links: { name: string; link: string; icon: string }[];
}

const Footer = ({ links }: FooterProps) => {
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
