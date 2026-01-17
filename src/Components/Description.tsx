// import React from "react";

// Placeholder image paths – replace with real event photos later
import photo1 from "../Assets/Images/photo1.png";
import photo2 from "../Assets/Images/photo2.png";
import photo3 from "../Assets/Images/photo3.png";

const Description = () => {
  return (
    <section className="relative px-6 py-24 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-white tracking-tight">
          DataHacks 2026
        </h2>

        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
          <span className="text-white font-semibold">
            🎉 Theme revealed at Inauguration
          </span>
        </div>

        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
          A flagship hackathon at UC San Diego bringing together student builders,
          researchers, and industry to solve real-world problems with data,
          software, and systems.
        </p>

      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <img
          src={photo1}
          alt="DataHacks event"
          className="rounded-2xl object-cover h-72 w-full shadow-xl"
        />
        <img
          src={photo2}
          alt="Students collaborating"
          className="rounded-2xl object-cover h-72 w-full shadow-xl"
        />
        <img
          src={photo3}
          alt="Hackathon presentation"
          className="rounded-2xl object-cover h-72 w-full shadow-xl"
        />
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-white space-y-6 text-lg md:text-xl leading-relaxed">
        <p>
          DataHacks empowers students of all experience levels to go beyond the
          classroom and build meaningful, production-minded solutions. Teams
          spend an intensive weekend transforming ideas into working systems,
          supported by mentors, workshops, faculty, and industry guidance.
        </p>

        <p>
          Whether you're exploring data science, machine learning, cloud & infrastructure, or product & entrepreneurship, DataHacks is designed to meet you where you are and push you further.
        </p>

        <p>
          Compete for prizes, collaborate with peers across disciplines, and
          showcase your work to judges and sponsors. Most importantly, leave
          with something real: code, confidence, and momentum.
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-12">
        {[
          "Data Science",
          "Machine Learning",
          "Software Engineering",
          "Cloud & Systems",
          "Entrepreneurship",
        ].map((tag) => (
          <span
            key={tag}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Description;
