// import trace3 from "/src/Assets/Images/Sponsors/trace3.png";
// import netapp from "/src/Assets/Images/Sponsors/netapp.jpg";
// import github from "/src/Assets/Images/Sponsors/github.png";
// import kwibbles from "/src/Assets/Images/Sponsors/kwibbles.png";
// import warp from "/src/Assets/Images/Sponsors/warp.png";
// import basement from "/src/Assets/Images/Sponsors/basement.png";
// import acorns from "/src/Assets/Images/Sponsors/acorns.jpg";
// import milktype from "/src/Assets/Images/Sponsors/milktype.png";

const Sponsors = () => {
//   const sponsors = {
//     Trace3: trace3,
//     NetApp: netapp,
//     Github: github,
//     Kwibbles: kwibbles,
//     Warp: warp,
//     Basement: basement,
//     Acorns: acorns,
//     Milktype: milktype,
//   };

  return (
    <section
      id="sponsors"
      className="flex flex-col items-center text-center px-6 py-24 gap-6"
    >
      <h3 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black text-white tracking-tight">
        Sponsors
      </h3>

      <p className="text-white/80 text-lg md:text-xl max-w-2xl">
        We’re partnering with industry leaders, startups, and campus
        organizations to make DataHacks 2026 unforgettable.
      </p>

      {/* Reveal Soon State */}
      <div className="mt-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6">
        <p className="text-white font-semibold text-lg">
          🤝 Sponsors to be revealed soon
        </p>
      </div>

      <p className="text-white/50 text-sm mt-2 uppercase tracking-widest">
        Stay tuned
      </p>

      {/* ================== SPONSOR GRID (UNCOMMENT WHEN READY) ================== */}

      {/*
      <div className="grid grid-cols-[repeat(auto-fit,minmax(clamp(200px,10vw,300px),1fr))] 
                      w-[70vw] gap-x-4 gap-y-10 mt-12 place-content-center">
        {Object.entries(sponsors).map(([name, src]) => (
          <div
            key={name}
            className="flex items-center justify-center bg-white rounded-lg w-full aspect-square px-6 shadow-lg"
          >
            <img
              src={src}
              alt={name}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
      */}
    </section>
  );
};

export default Sponsors;
