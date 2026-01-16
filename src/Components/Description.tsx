import React from 'react';
import datasaur from "../Assets/Images/newDatasaur.png";

const Description = () => {
  
  return (
    <div className="flex flex-col gap-12 items-center px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center space-y-4">
        <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white tracking-tight">
          Welcome to DS3 DataHacks 2026!
        </h3>
        <div className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 rounded-full">
          <p className="text-lg md:text-xl font-semibold text-white">
            🎉 Theme to be announced at Inauguration!
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row gap-12 md:gap-16 w-full">
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
          <img
            src={datasaur}
            alt="Datasaur mascot"
            className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 flex flex-col gap-6 text-white">
          <p className="text-lg md:text-xl leading-relaxed">
            DataHacks is a hackathon event held at UC San Diego that empowers students of all experience levels to push beyond the classroom and dive into <span className="font-semibold text-cyan-300">real-world technology challenges</span>.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed">
            Whether you're passionate about <span className="font-semibold text-blue-300">data science</span>, <span className="font-semibold text-purple-300">machine learning</span>, <span className="font-semibold text-green-300">cloud development</span>, <span className="font-semibold text-pink-300">software engineering</span>, or <span className="font-semibold text-yellow-300">hardware integration</span> — DataHacks is your playground to explore, innovate, and build.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed">
            Participants will have the opportunity to tackle challenging problems, wrangle real datasets, architect scalable solutions, and bring their ideas to life through code and creativity. Compete against your peers, learn from industry mentors, and showcase your best work for amazing prizes!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-center border border-white/20">
              <p className="font-semibold text-sm">Data Science</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-center border border-white/20">
              <p className="font-semibold text-sm">Machine Learning</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-center border border-white/20">
              <p className="font-semibold text-sm">Cloud Dev</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-center border border-white/20">
              <p className="font-semibold text-sm">Software Engineering</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-center border border-white/20">
              <p className="font-semibold text-sm">Hardware</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-center border border-white/20">
              <p className="font-semibold text-sm">Full Stack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;