import React from 'react';
import { FileText, ArrowUp, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#E2DFD8] border-t border-[#D5D2CA] text-[#4E515E]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#D5D2CA]">
          
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#121316]"></span>
              <span className="text-base font-extrabold uppercase tracking-tight text-[#121316]">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-[#6A6D7C] mt-1 font-mono">
              B.Tech CSE (AI & ML) Student · SRM University Vadapalani · CGPA 9.33 · Vellore, Tamil Nadu
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#555866]">
            <a href="#overview" className="hover:text-[#121316] transition-colors">Overview</a>
            <a href="#projects" className="hover:text-[#121316] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#121316] transition-colors">Skills</a>
            <a href="#interview-qa" className="hover:text-[#121316] transition-colors">Interview Q&A</a>
            <a href="#education" className="hover:text-[#121316] transition-colors">Education</a>
            <button
              onClick={onOpenResume}
              className="hover:text-[#121316] transition-colors cursor-pointer"
            >
              Resume PDF
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#DFDDD7] hover:bg-[#D5D2CA] text-[#121316] transition-colors cursor-pointer self-end md:self-auto"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#787B8A]">
          <p>© {new Date().getFullYear()} Syed Arshad R. All rights reserved.</p>
          <p>Built for Software Development & AI/ML Internship Interview Selection.</p>
        </div>

      </div>
    </footer>
  );
};
