import advanced from "/src/Assets/Images/Prizes/advanced_prize.webp";
import intermediate from "/src/Assets/Images/Prizes/intermediate_prize.webp";
import beginner from "/src/Assets/Images/Prizes/beginner_prize.jpg";

const Prizes = () => {
  return (
    <div id="prizes" className="flex flex-col gap-10 items-center">
      <h3 className="text-5xl font-bold text-white">Prizes</h3>
      <div className="flex justify-between items-end gap-[clamp(0.2rem,1vw,2.5rem)]">
        <Podium
          height="23vh"
          title="Logitech G502 HERO"
          category="Intermediate"
          image={intermediate}
        />
        <Podium height="28vh" title="✨Premium Keyboard✨" category="Advanced" image={advanced} />
        <Podium height="18vh" title="JBL Clip 4" category="Beginner" image={beginner} />
      </div>
      <p className="text-white text-[clamp(1rem,1.7vw,2.5rem)] text-center">
        Other prizes include Deskmats, Pop Funkos, Smiskis, and Owalas!
      </p>
    </div>
  );
};

interface PodiumProps {
  height: string;
  title: string;
  category: string;
  image: string;
}

const Podium = ({ height, title, category, image }: PodiumProps) => {
  return (
    <div className="w-[clamp(7.5rem,20vw,30rem)] flex flex-col items-center gap-[clamp(0.2rem,1vw,2.5rem)]">
      <h4 className="text-[clamp(0.65rem,1.7vw,2.5rem)] text-white text-center">{title}</h4>
      <img
        src={image}
        alt={title}
        className="rounded-lg border-2 border-white w-full h-full object-contain"
      />
      <div
        className="bg-[#315654] w-full border-white border-2 rounded text-center text-white text-[clamp(1rem,1.7vw,2.5rem)] pt-4"
        style={{ height }}
      >
        {category}
      </div>
    </div>
  );
};

export default Prizes;
