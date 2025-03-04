const Sponsers = () => {
  const sponsers = {
    "Trace3": "/src/Assets/Images/trace3.png",
    "NetApp": "/src/Assets/Images/netapp.jpg",
    "GitHub": "/src/Assets/Images/github.png",
    "Kwibbles": "/src/Assets/Images/kwibbles.png",
    "Warp": "/src/Assets/Images/warp.png",
    "Coming Soon": "/src/Assets/Images/coming_soon.jpg"
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-5xl font-bold text-white">Sponsers</h3>
      <p className="text-white text-2xl">Thank you to our sponsors!</p>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-16 gap-y-10 mt-4">
        {Object.entries(sponsers).map(([name, src]) => (
          <div className="flex items-center justify-center bg-white rounded w-[15vw] px-10" key={name}>
            <img src={src} alt={name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sponsers
