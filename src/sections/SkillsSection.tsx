import React from 'react';
import { FadeIn } from '../components/FadeIn';

const skills = [
  {
    num: "01",
    name: "Languages",
    desc: "Python, C, Java, JavaScript, R",
  },
  {
    num: "02",
    name: "Web Dev",
    desc: "HTML, CSS, Django, Flask, FastAPI, React.js",
  },
  {
    num: "03",
    name: "Data & ML",
    desc: "Pandas, NumPy, Scikit-learn, TensorFlow, Power BI",
  },
  {
    num: "04",
    name: "Cloud & DB",
    desc: "AWS, Docker, Git, MySQL, PostgreSQL, MongoDB",
  },
  {
    num: "05",
    name: "Experience",
    desc: "Business Analytics Intern @ JCB Power Products India Pvt Ltd (June 2025) — Analyzed large datasets using Python to generate actionable insights, built dashboards using Matplotlib/Tableau, and improved data accuracy by 15%. Intern @ NGO MERA PARIVAR (June 2024) — Automated Excel-based data organization using Python, Pandas, and OpenPyXL.",
  },
  {
    num: "06",
    name: "Certifications",
    desc: "Data Analytics with Python (NPTEL), Java Programming (NPTEL IIT Kharagpur), Databricks Fundamentals Accreditation (Databricks Academy), DSA (Infosys Springboard).",
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(2.5rem,8vw,120px)] mb-16 sm:mb-20 md:mb-28 leading-none">
        Skills & Experience
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col">
        {skills.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1} y={40}>
            <div className="flex flex-col md:flex-row md:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-0 gap-4 md:gap-10 lg:gap-20">
              <div className="text-[#0C0C0C] font-black text-[clamp(2.5rem,8vw,100px)] leading-none shrink-0 opacity-80">
                {svc.num}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                  {svc.name}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed max-w-4xl text-[clamp(0.95rem,1.8vw,1.35rem)] opacity-70">
                  {svc.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
