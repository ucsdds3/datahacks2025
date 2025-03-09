import datasaur from "../Assets/Images/newDatasaur.png";

const Description = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <h3 className="text-5xl font-bold text-white text-center">
        Welcome to DS3 DataHacks 2025!
      </h3>
      <div className="flex flex-col items-center md:flex-row gap-10">
        <img
          src={datasaur}
          alt="Datasaur"
          className="flex-1 w-[clamp(15rem,10vw,30rem)] object-contain"
        />
        <div className="flex-2 flex flex-col gap-4 items-center justify-center text-white text-[clamp(1.25rem,10vw,1.39rem)] ">
          <p className="text-justify">
            DataHacks is a hackathon event held at UC San Diego that encourages
            students of all experience levels to leave the safety of their
            Jupyter Notebook and delve deeper into Data Science.
          </p>
          <p className="text-justify">
            Created out of pure passion, DataHacks hopes to educate those
            interested about the realm Data Science and its potential.
          </p>
          <p className="text-justify">
            Those participating in DataHacks will have the opportunity to create
            a project using data given to them or wrangled and will compete
            against their peers for the best project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
