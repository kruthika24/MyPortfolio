import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 sm:px-16 bg-primary text-white overflow-hidden"
    >
      {/* Glowing grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(19,183,165,0.05)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20 blur-sm z-0 pointer-events-none"></div>

      {/* Teal glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal opacity-10 blur-3xl animate-pulse-glow"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-10">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#13B7A5] to-[#13B7A5]/70 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a QA Engineer with 6+ years of experience ensuring software quality isn't an afterthought.
          I've built scalable test automation frameworks, led testing initiatives in Agile teams,
          and collaborated across engineering to deliver better products. My domain expertise lies in banking,
          having worked with firms like Commonwealth Bank of Australia and Capgemini.
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <div className="bg-[#0F1D1C] text-left p-6 rounded-xl border border-teal/30 shadow-md">
            <h3 className="text-3xl font-bold text-white">6+</h3>
            <p className="text-teal font-semibold mt-1">Years of Experience</p>
            <p className="text-sm text-gray-400 mt-1">Across QA, automation, Agile delivery</p>
          </div>

          <div className="bg-[#0F1D1C] text-left p-6 rounded-xl border border-teal/30 shadow-md">
            <h3 className="text-3xl font-bold text-white">10+</h3>
            <p className="text-teal font-semibold mt-1">Projects Worked</p>
            <p className="text-sm text-gray-400 mt-1">Spanning APIs, UI testing, CI/CD pipelines</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
