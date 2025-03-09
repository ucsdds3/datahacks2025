import trace3 from "/src/Assets/Images/trace3.png";
import netapp from "/src/Assets/Images/netapp.jpg";
import github from "/src/Assets/Images/github.png";
import kwibbles from "/src/Assets/Images/kwibbles.png";
import warp from "/src/Assets/Images/warp.png";
import coming_soon from "/src/Assets/Images/coming_soon.jpg";

const Sponsers = () => {
  const sponsers = {
    Trace3: trace3,
    NetApp: netapp,
    Github: github,
    Kwibbles: kwibbles,
    Warp: warp,
    "Coming Soon": coming_soon
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-5xl font-bold text-white">Sponsers</h3>
      <p className="text-white text-2xl">Thank you to our sponsors!</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(clamp(200px,10vw,300px),1fr))] w-[70vw] gap-x-4 gap-y-10 mt-4 content-center">
        {Object.entries(sponsers).map(([name, src]) => (
          <div
            className="flex items-center justify-center bg-white rounded w-full aspect-square px-4"
            key={name}
          >
            <img src={src} alt={name} className="object-cover w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsers;
