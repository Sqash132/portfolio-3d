import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/Buttons';
import { Magnet } from '../components/Magnet';
import { motion } from 'framer-motion';

import profileImg from '../assets/profile.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col overflow-x-clip relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as={motion.nav} className="w-full flex justify-between px-6 md:px-10 pt-6 md:pt-8 z-20">
        {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Heading */}
      <div className="flex-1 flex flex-col justify-center w-full z-20 pointer-events-none mt-6 sm:mt-4 md:-mt-5">
        <div className="overflow-hidden w-full flex justify-center">
          <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
            <div className="relative inline-block text-center z-10">
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[14vw] sm:text-[13vw] md:text-[14vw] lg:text-[15.5vw]">
                Hi, I'm Suyash
              </h1>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[250px] md:max-w-[300px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
            an AI/ML student and full-stack developer driven by solving problems through code and data
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-[60%] sm:-translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-0"
      >
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <Magnet padding={150} strength={3}>
            <img
              src={profileImg}
              alt="Suyash Gaur Portrait"
              className="w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px] object-cover rounded-full border-4 border-[#D7E2EA]/20 shadow-[0_0_40px_rgba(182,0,168,0.3)] pointer-events-auto mt-20 sm:mt-0"
              style={{ aspectRatio: '1/1' }}
            />
          </Magnet>
        </motion.div>
      </FadeIn>
    </section>
  );
};
