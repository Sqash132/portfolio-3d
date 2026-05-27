import React from 'react';
import { FadeIn } from '../components/FadeIn';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-10 sm:mb-16 leading-none">
        Contact
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
        <FadeIn delay={0.1} y={20}>
          <p className="text-[#D7E2EA] font-light text-center text-[clamp(1rem,2vw,1.5rem)] max-w-2xl opacity-80">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-6 w-full justify-center mt-8">
          <FadeIn delay={0.2} y={20}>
            <a href="mailto:suyashgaur132@gmail.com" className="flex items-center justify-center gap-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors border border-[#D7E2EA]/20 rounded-2xl px-8 py-6 w-full md:w-auto">
              <span className="text-[#D7E2EA] font-medium text-lg">suyashgaur132@gmail.com</span>
            </a>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <a href="tel:+917042675906" className="flex items-center justify-center gap-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors border border-[#D7E2EA]/20 rounded-2xl px-8 py-6 w-full md:w-auto">
              <span className="text-[#D7E2EA] font-medium text-lg">+91-7042675906</span>
            </a>
          </FadeIn>
        </div>

        <div className="flex gap-6 mt-8">
          <FadeIn delay={0.4} y={20}>
            <a href="https://www.linkedin.com/in/suyash-gaur-551467289/" target="_blank" rel="noreferrer" className="text-[#D7E2EA] hover:text-[#B600A8] transition-colors font-medium text-xl uppercase tracking-widest">
              LinkedIn
            </a>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <a href="https://github.com/Sqash132" target="_blank" rel="noreferrer" className="text-[#D7E2EA] hover:text-[#B600A8] transition-colors font-medium text-xl uppercase tracking-widest">
              GitHub
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
