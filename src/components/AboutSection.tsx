import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, FileText, ArrowUpRight, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section className="py-16 md:py-24 border-b border-[#D8D5CE]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Editorial 2-Column Split (Replicating Pinterest Template) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column (5 Cols): Massive Editorial Headline */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#717482]">
                Student Profile & Interview Aspirations
              </span>
              <h2 className="text-3xl sm:text-4xl xl:text-[2.85rem] font-extrabold uppercase leading-[1.08] tracking-tight text-[#121316] mt-3">
                SRM UNIVERSITY VADAPALANI STUDENT PREPARING FOR IMPACTFUL INTERNSHIPS
              </h2>
            </div>

            {/* Quick Metadata Box */}
            <div className="mt-8 pt-8 border-t border-[#D8D5CE] space-y-3.5">
              <div className="flex items-center gap-3 text-xs text-[#4F525E]">
                <MapPin className="w-4 h-4 text-[#121316] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#4F525E]">
                <GraduationCap className="w-4 h-4 text-[#121316] shrink-0" />
                <span>{PERSONAL_INFO.degree} · SRM University, Vadapalani</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#4F525E]">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>Academic Record: <strong>9.33 / 10.0 CGPA</strong> (Consistently High Academic Standing)</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Editorial Prose & Direct Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            <div className="space-y-5 text-base sm:text-lg text-[#333640] leading-relaxed">
              <p className="font-medium text-[#121316] text-lg sm:text-xl leading-snug">
                Hey, I'm Syed Arshad, a dedicated Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning at SRM University, Vadapalani (9.33 CGPA).
              </p>
              
              <p className="text-sm sm:text-base text-[#565967] leading-relaxed">
                As a student preparing for campus placements and technical internship interviews, I concentrate on building solid fundamentals. I love solving algorithmic challenges in C++ and Python using clean Data Structures & Algorithms (DSA), while also building real, functional projects like <strong className="text-[#121316] font-semibold">Veritas AI</strong> (evidence intelligence) and <strong className="text-[#121316] font-semibold">Smart Reminder</strong> (OOP task scheduler).
              </p>

              <p className="text-sm sm:text-base text-[#565967] leading-relaxed">
                My objective in interviews is simple: demonstrate my fast learning curve, disciplined work ethic, and ability to contribute productively to engineering teams from day one of my internship.
              </p>
            </div>

            {/* Quick Contact & Action Bar */}
            <div className="mt-8 pt-6 border-t border-[#D8D5CE] flex flex-wrap items-center justify-between gap-4">
              
              {/* Copy badges */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-[#E0DED8] hover:bg-[#D5D2CA] text-[#121316] border border-[#CAC7BF] rounded-lg transition-colors cursor-pointer"
                  title="Click to copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{PERSONAL_INFO.email}</span>
                </button>

                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-[#E0DED8] hover:bg-[#D5D2CA] text-[#121316] border border-[#CAC7BF] rounded-lg transition-colors cursor-pointer"
                  title="Click to copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{PERSONAL_INFO.phone}</span>
                </button>
              </div>

              {/* View resume button */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121316] hover:underline underline-offset-4 cursor-pointer"
              >
                <span>Read Full Resume PDF</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
