import React from 'react';

import TestimonialImage from '../images/testimonial.jpg';
import SritanImg from '../images/sritan.jpg';
import SaiImg from '../images/sai.png';
import EvaImg from '../images/eva.jpeg';
import BrianImg from '../images/brian.jpg';

function Testimonials() {
  const team = [
    {
      name: "Sritan Motati",
      image: SritanImg,
      link: "https://www.linkedin.com/in/sritan-motati/",
      // bio: "ML Researcher at Harvard Medical School & Full-Stack Developer"
      bio: "Sritan is a junior at Thomas Jefferson High School for Science and Technology (TJHSST). He is passionate about exploring the uses of modern technologies in healthcare. As an avid researcher and full-stack developer, he has worked as a machine learning (ML) researcher at Harvard Medical School, published independent research, and serves as an officer at his school's Bioinformatics Society and ML Club."
    },
    {
      name: "Sai Mattapalli",
      image: SaiImg,
      link: "https://www.linkedin.com/in/sai-mattapalli-519465210/",
      // bio: "Quantbase (YC W23) Business Intern & Blockchain Developer"
      bio: "Sai is a junior at TJHSST and is eager to explore entrepreneurship in healthcare while utilizing his knowledge in blockchain development. Previously, he has interned at Quantbase (YC W23) where he learned the ins and outs of scaling a business and developing a brand. Furthermore, he is a blockchain developer and has developed projects for the International Blockchain Olympiad, sparking the idea of Soteria."
    },
    {
      name: "Eva Jones",
      image: EvaImg,
      link: "https://www.linkedin.com/in/evangelinejones/",
      // bio: "CFO of The Jones Collective & Front-End Developer"
      bio: "Eva is a sophomore at Thomas Jefferson High School for Science and Technology. She is interested in studying artificial intelligence, business, and engineering. Eva is the CFO of a consulting and real estate management business, a VR world creator,  front-end developer, and a member of a restorative justice council. In her free time, Eva enjoys coding, learning new languages, and studying new things."
    },
    {
      name: "Brian Zhou",
      image: BrianImg,
      link: "https://www.linkedin.com/in/brianlzhou/",
      // bio: "Intern at Naval Research Lab & Quantum Physics Researcher"
      bio: "Brian is a junior at TJHSST interested in exploring Quantum Computing at TJ's Quantum Lab. Brian previously interned at the Naval Research Laboratory publishing his work in applied ML, and qualified for the Wharton Investment Competition, placing first in Wildcard at the National Personal Finance Challenge where he taught himself business skills. In his free time, he debates on the US Development Team."
    },
  ]

  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6" id="team">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Meet our team<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">.</span></h2>
            {/* <p className="text-xl text-gray-600" data-aos="zoom-y-out">Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis
                blandit libero cursus mattis.</p> */}
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-4" data-aos='zoom-y-out'>
            {team.map((member) => (
              <div className="flex flex-col items-center">
                <img className="rounded-full shadow-lg w-32 h-32 lg:w-40 lg:h-40 mb-4" src={member.image} alt={member.name} />
                <a href={member.link} className="text-xl sm:text-2xl font-bold mb-2">{member.name.split(' ')[0]} <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500 leading-3">{member.name.split(' ')[1]}</span></a>
                {/* <p className='text-center'><span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500 leading-3">{member.bio}</span></p> */}
                <p className='text-sm text-gray-600'>{member.bio}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;