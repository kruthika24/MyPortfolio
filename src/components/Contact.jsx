import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 sm:px-12 bg-[#F8FAFC] dark:bg-[#0A0E0F] text-[#1A1A1A] dark:text-white transition-all duration-300 min-h-screen flex flex-col justify-between"
    >
      <div className="flex-1 max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
        {/* Glowing grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(19,183,165,0.1)_1px,transparent_1px)] bg-[length:40px_40px] opacity-30 blur-sm z-0 pointer-events-none"></div>

        {/* Teal glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-teal opacity-10 blur-3xl animate-pulse-glow"></div>

        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          <div className="inline-block px-4 py-1 border border-[#13B7A5] text-[#13B7A5] text-sm rounded-full font-medium shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            Open to opportunities
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#13B7A5] via-[#13B7A5]/70 to-[#13B7A5]/100 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          {/* Contact Form */}
          <motion.form
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-xl mt-4 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-[#1A1A1A] border border-gray-700 rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-[#1A1A1A] border border-gray-700 rounded focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 bg-[#1A1A1A] border border-gray-700 rounded focus:outline-none"
            ></textarea>
            <button
  type="submit"
  className="bg-gradient-to-r from-[#0F1D1C] to-[#13B7A5] text-white font-semibold px-6 py-2 rounded-full border border-[#13B7A5] shadow-lg hover:shadow-[0_0_15px_#13B7A5] transition duration-300"
>
  Send Message
</button>

          </motion.form>

          <div className="flex flex-col items-center gap-4 text-lg mt-10">
  {/* Location & Email in one row */}
  <div className="flex flex-wrap justify-center items-center gap-8">
    <div className="flex items-center gap-2 hover:text-teal transition duration-300 hover:scale-105">
      <FaMapMarkerAlt className="text-[#13B7A5]" />
      <span>Bangalore, India</span>
    </div>
    <div className="flex items-center gap-2 hover:text-teal transition duration-300 hover:scale-105">
      <FaEnvelope className="text-[#13B7A5]" />
      <span>kruthikaqa24@gmail.com</span>
    </div>
  </div>

  {/* Social Icons */}
  <div className="flex items-center gap-6 text-2xl mt-4">
    <a
      href="https://github.com/kruthika24"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#13B7A5] hover:scale-110 hover:shadow-[0_0_8px_#13B7A5] transition-all duration-300"
    >
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/kruthika-t/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#13B7A5] hover:scale-110 hover:shadow-[0_0_8px_#13B7A5] transition-all duration-300"
    >
      <FaLinkedin />
    </a>
  </div>
</div>
        </div>
      </div>

    </section>
  );
};

export default SectionWrapper(Contact, 'contact');

