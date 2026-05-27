import React from 'react';

interface ButtonProps {
  label?: string;
  className?: string;
  href?: string;
}

export const ContactButton: React.FC<ButtonProps> = ({ label = "Contact Me", className = "", href = "#contact" }) => {
  return (
    <a
      href={href}
      className={`inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest outline outline-2 outline-white outline-offset-[-3px] ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
      }}
    >
      {label}
    </a>
  );
};

export const LiveProjectButton: React.FC<ButtonProps> = ({ label = "View Details", className = "", href = "#" }) => {
  return (
    <a
      href={href}
      className={`inline-block rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-[#D7E2EA] text-sm sm:text-base font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors ${className}`}
    >
      {label}
    </a>
  );
};
