import React from 'react'; 
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';

const Experience = () => {
  return (
    <div id="experience" className="mt-20 px-6 sm:px-16">
      <h2 className=" text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#13B7A5] to-white bg-clip-text text-transparent">
        Work Experience
      </h2>

      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            iconStyle={{ background: '#0A0E0F', border: '3px solid #13B7A5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            icon={
              <img
                src={exp.icon}
                alt={exp.company_name}
                className="w-3/4 h-3/4 object-contain rounded-full"
              />
            }
            contentStyle={{
              background: 'rgba(19,183,165,0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 0 20px rgba(19,183,165,0.2)',
              color: '#F8FAFC',
              borderBottom: '3px solid white',
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(19,183,165,0.5)' }}
          >
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <h4 className="text-md text-teal font-medium mt-1">{exp.company_name}</h4>
            <ul className="mt-3 list-disc ml-5 space-y-2 text-sm text-white">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;


