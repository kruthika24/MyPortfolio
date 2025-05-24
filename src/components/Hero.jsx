import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen bg-primary flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Glow beam effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div className="w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#13B7A5]/40 to-transparent blur-[120px] animate-pulse-glow"></div>
      </div>


      <div className="z-10 max-w-3xl px-6">
        <p className="text-[#13B7A5] text-sm sm:text-md mb-3">Hi, my name is</p>
        <h1 className="text-white text-5xl sm:text-6xl font-bold leading-tight">
          Kruthika T
        </h1>
        <h2 className="text-teal text-3xl sm:text-4xl font-semibold mt-2 mb-4">
           <Typewriter
              words={[
                'A Professional QA Engineer',
                'Software Engineer in Test',
                'GenAI Enthusiast'
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1200}
            />
        </h2>
        <p className="text-secondary text-base sm:text-lg max-w-xl mx-auto mb-6">
          A Software Engineer in Test with a passion for Automation & GenAI. Currently exploring cutting-edge tools to build robust digital experiences.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/kruthika-t/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-[#13B7A5] transition" />
          </a>
          <a href="https://github.com/kruthika24" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-2xl hover:text-[#13B7A5] transition" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            c className="px-6 py-2 border border-[#13B7A5] text-[#13B7A5] rounded-full bg-transparent backdrop-blur-sm hover:bg-[#13B7A5]/10 hover:shadow-[0_0_10px_#13B7A5] transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/your-resume-link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#13B7A5] to-[#0F1D1C] text-white font-semibold px-6 py-2 rounded-full border border-[#13B7A5] shadow-lg hover:shadow-[0_0_15px_#13B7A5] transition duration-300"
          >
            Get Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

