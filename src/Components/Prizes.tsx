const Prizes = () => {
  const podiumClass =
    "w-20 border-white border-2 text-center text-white text-3xl pt-4";

  return (
    <div id="prizes" className="flex flex-col gap-20 items-center">
      <h3 className="text-5xl font-bold text-white">Prizes</h3>
      <div className="flex justify-between items-end gap-2">
        <div className="flex flex-col items-center">
          <div className="text-white text-3xl pb-4">TBD</div>
          <div className={`${podiumClass} h-[30vh]`}>2</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-white text-3xl pb-4">TBD</div>
          <div className={`${podiumClass} h-[40vh]`}>1</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-white text-3xl pb-4">TBD</div>
          <div className={`${podiumClass} h-[20vh]`}>3</div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
