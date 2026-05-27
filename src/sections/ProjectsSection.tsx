import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../components/Buttons';

const projects = [
  {
    num: "01",
    tech: "React (Vite), TypeScript, Framer Motion, Flask, Node.js, FastAPI, OpenCV",
    name: "MorphoMinds",
    desc: "AI-Powered Dyslexia Learning Platform",
    highlights: [
      "Full-stack AI-driven platform for dyslexic learners (Hindi and English)",
      "Interactive reading modules with level-based progression",
      "Real-time stroke validation and mirror-letter confusion detection",
    ],
    images: {
      leftTop: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      leftBottom: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      right: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1200&q=80"
    }
  },
  {
    num: "02",
    tech: "DSPy, LiteLLM",
    name: "ConvoGen Pipeline",
    desc: "Conversational Data Generator",
    highlights: [
      "Multi-agent pipeline for generating realistic synthetic conversations",
      "Memory handling and turn-level intervention",
      "Semantic deduplication using embeddings to ensure topic diversity",
    ],
    images: {
      leftTop: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      leftBottom: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      right: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=1200&q=80"
    }
  },
  {
    num: "03",
    tech: "Python, OpenCV, MediaPipe, PyAutoGUI, Pynput, Pycaw, Streamlit",
    name: "Gesture Recognition",
    desc: "Real-time Hand Gesture Recognition System",
    highlights: [
      "Real-time gesture recognition system for hardware control",
      "Gesture-based control for mouse, keyboard, volume, and app switching",
      "Streamlit interface for live visualization and multi-mode control",
    ],
    images: {
      leftTop: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      leftBottom: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      right: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80"
    }
  },
  {
    num: "04",
    tech: "Java, Machine Learning, Ensemble Learning",
    name: "Climate Prediction",
    desc: "Gender & Climate Prediction Model",
    highlights: [
      "ML-based predictive model for gender demographics and climate analysis",
      "Achieved 82% prediction accuracy using ensemble learning",
    ],
    images: {
      leftTop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      leftBottom: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      right: "https://images.unsplash.com/photo-1518104593124-ac2eeb9a444a?w=1200&q=80"
    }
  }
];

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      id="projects" 
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
        Projects
      </h2>

      <div ref={containerRef} className="relative w-full max-w-7xl mx-auto" style={{ height: `${projects.length * 90 + 20}vh` }}>
        {projects.map((proj, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          const startProgress = i / projects.length;
          const scale = useTransform(
            scrollYProgress, 
            [startProgress, 1], 
            [1, targetScale]
          );

          return (
            <motion.div
              key={proj.num}
              className="sticky top-20 md:top-28 w-full h-[90vh] flex flex-col justify-center"
              style={{ scale, top: `calc(5rem + ${i * 28}px)` }}
            >
              <div className="bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col h-full overflow-hidden shadow-2xl">
                
                {/* Top Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 shrink-0 gap-4">
                  <div className="flex flex-col gap-3 w-full md:w-2/3">
                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                      <span className="text-[#D7E2EA] font-black text-[clamp(2.5rem,6vw,90px)] leading-none">
                        {proj.num}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[#D7E2EA]/60 uppercase text-xs sm:text-sm tracking-wider">
                          {proj.tech}
                        </span>
                        <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-xl md:text-3xl leading-tight">
                          {proj.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 mt-2 ml-[5.5rem] md:ml-[7.5rem]">
                      <p className="text-[#D7E2EA] font-medium text-sm sm:text-base opacity-90">
                        {proj.desc}
                      </p>
                      <ul className="text-[#D7E2EA] font-light text-xs sm:text-sm opacity-80 list-disc list-outside ml-4 flex flex-col gap-1">
                        {proj.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <LiveProjectButton />
                  </div>
                </div>

                {/* Bottom Row - Images */}
                <div className="flex-1 flex gap-4 min-h-0 mt-4 md:mt-0">
                  <img 
                    src={proj.images.leftTop} 
                    alt={`${proj.name} view 1`}
                    className="w-1/2 h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] bg-gray-800"
                  />
                  <img 
                    src={proj.images.leftBottom} 
                    alt={`${proj.name} view 2`}
                    className="w-1/2 h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] bg-gray-800"
                  />
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
