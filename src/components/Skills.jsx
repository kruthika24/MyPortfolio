import React from 'react';

const skills = [
  { name: 'TypeScript', icon: 'typescript.svg' },
  { name: 'JavaScript', icon: 'javascript.svg' },
  { name: 'Node.js', icon: 'nodejs.svg' },
  { name: 'C#', icon: 'csharp.svg' },
  { name: 'Selenium', icon: 'selenium.svg' },
  { name: 'Playwright', icon: 'playwright.svg' },
  { name: 'Postman', icon: 'postman.svg' },
  { name: 'Jenkins', icon: 'jenkins.svg' },
  { name: 'AWS', icon: 'aws.svg' },
  { name: 'Docker', icon: 'docker.svg' },
  { name: 'Oracle SQL', icon: 'oracle.svg' },
  { name: 'GitHub Actions', icon: 'githubactions.svg' },
];

const doubledSkills = [...skills, ...skills]; // for seamless loop

const Skills = () => {
  return (
    <section id= "skills" className="py-16 bg-primary text-white overflow-hidden">
      <h2 className=" text-center text-4xl sm:text-5xl font-bold mb-10 bg-gradient-to-r from-[#13B7A5] to-white bg-clip-text text-transparent">
        Skills
      </h2>
      <div className="relative w-full overflow-hidden py-6">
        <div className="flex animate-scroll space-x-7 w-max">
          {doubledSkills.map((skill, index) => (
            <div
              key={index}
              className="flex-none w-[130px] h-[130px] bg-[#0f1415] border border-teal rounded-xl skills-glow flex flex-col justify-center items-center mx-4 hover:scale-105 transition-all duration-300"
            >
              <img
                src={`/skills/${skill.icon}`}
                alt={skill.name}
                className="w-10 h-10 object-contain mb-2"
              />
              <p className="text-sm text-white font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;





