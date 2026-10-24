import React from 'react';
import { ArrowRight, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="overview" className="relative pt-8 pb-14 md:pt-12 md:pb-20 border-b border-[#D8D5CE]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Main 3-Column Split (Left: Typo, Center: Arched Portrait, Right: Key Numbers) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column (5 Cols): Typography & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Greeting Kicker */}
            <p className="text-base md:text-lg font-medium text-[#4B4E58] mb-2 tracking-tight">
              Hey. I'm Syed Arshad,
            </p>

            {/* Display Headline with Student & Placement Focus */}
            <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] font-extrabold uppercase leading-[1.05] tracking-tight text-[#121316] mb-5 text-balance">
              <span>AN AI/ML </span>
              <br />
              <span className="font-serif italic font-normal capitalize tracking-normal text-[#2A2B30]">
                & Software
              </span>
              <br />
              <span>STUDENT</span>
            </h1>

            {/* Sub-description */}
            <p className="text-sm md:text-base text-[#525562] leading-relaxed mb-7 max-w-lg">
              {PERSONAL_INFO.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-[#ECEAE5] bg-[#121316] rounded-full hover:bg-[#2C2E35] transition-all shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-[#121316] bg-[#DFDDD7] hover:bg-[#D5D2CC] border border-[#CAC7BF] rounded-full transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#121316]" />
                <span>Resume PDF</span>
              </button>
            </div>

            {/* Quick trust indicator */}
            <div className="mt-7 flex items-center gap-2 text-xs font-medium text-[#656874]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>SRM University Vadapalani Student · Actively Seeking 2025/2026 Internships</span>
            </div>
          </div>

          {/* Center Column (4 Cols): Arched Hero Portrait Framing with User's Photo */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[350px]">
              
              {/* Outer decorative halo */}
              <div className="absolute inset-0 bg-[#E0DED7] rounded-t-[160px] rounded-b-[40px] transform translate-y-3 -rotate-1 border border-[#D5D2C9]"></div>
              
              {/* Main Portrait Frame with Architectural Arch */}
              <div className="relative overflow-hidden rounded-t-[160px] rounded-b-[40px] bg-[#D8D5CD] border-2 border-[#121316]/10 shadow-lg aspect-[4/5] flex items-end justify-center group">
                <img
                  src={PERSONAL_INFO.photoPath}
                  alt="Syed Arshad R - Student at SRM University Vadapalani"
                  className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#121316]/70 via-[#121316]/30 to-transparent flex items-end p-4">
                  <div className="text-white text-xs">
                    <p className="font-bold tracking-wider uppercase text-[11px]">{PERSONAL_INFO.name}</p>
                    <p className="text-[10px] text-zinc-300">SRM University Vadapalani · AI & ML Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (3 Cols): Key Numbers & Credentials Stack */}
          <div className="lg:col-span-3 flex flex-col justify-between py-2 divide-y divide-[#D8D5CE]">
            
            {/* Stat 1: CGPA */}
            <div className="py-4 first:pt-0">
              <div className="text-4xl md:text-5xl font-extrabold text-[#121316] tracking-tight font-mono tabular-nums">
                9.33
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-[#636672] mt-1">
                Cumulative CGPA
              </div>
              <div className="text-xs text-[#828592] mt-0.5">
                SRM Institute of Science & Tech
              </div>
            </div>

            {/* Stat 2: Graduation */}
            <div className="py-4">
              <div className="text-3xl md:text-4xl font-extrabold text-[#121316] tracking-tight font-mono tabular-nums">
                2029
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-[#636672] mt-1">
                Expected Graduation
              </div>
              <div className="text-xs text-[#828592] mt-0.5">
                B.Tech CSE (AI & ML)
              </div>
            </div>

            {/* Stat 3: SIH */}
            <div className="py-4">
              <div className="text-3xl md:text-4xl font-extrabold text-[#121316] tracking-tight font-mono">
                SIH '26
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-[#636672] mt-1">
                Smart India Hackathon
              </div>
              <div className="text-xs text-[#828592] mt-0.5">
                Internal Selection Winner
              </div>
            </div>

            {/* Stat 4: Certifications */}
            <div className="py-4 last:pb-0">
              <div className="text-3xl md:text-4xl font-extrabold text-[#121316] tracking-tight font-mono tabular-nums">
                7+
              </div>
              <div className="text-xs uppercase font-semibold tracking-wider text-[#636672] mt-1">
                Industry Credentials
              </div>
              <div className="text-xs text-[#828592] mt-0.5">
                NVIDIA, AWS, Infosys, Udemy
              </div>
            </div>

          </div>

        </div>

        {/* 4-Column Feature Strip (Faithfully replicating the template's 4 bottom columns) */}
        <div className="mt-14 pt-8 border-t border-[#D8D5CE] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="pr-4 border-l-0 lg:border-r border-[#D8D5CE]/70">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#121316] mb-1.5">
              01. ARTIFICIAL INTELLIGENCE & ML
            </h3>
            <p className="text-xs text-[#636672] leading-relaxed">
              Evidence intelligence, agentic multimodal models, semantic embeddings, and automated anomaly detection.
            </p>
          </div>

          <div className="pr-4 border-l-0 lg:border-r border-[#D8D5CE]/70">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#121316] mb-1.5">
              02. FULL-STACK SOFTWARE SYSTEMS
            </h3>
            <p className="text-xs text-[#636672] leading-relaxed">
              Modular OOP architectures, React frontends, Java Spring Boot microservices, and high-performance algorithms.
            </p>
          </div>

          <div className="pr-4 border-l-0 lg:border-r border-[#D8D5CE]/70">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#121316] mb-1.5">
              03. DATA PIPELINES & ETL
            </h3>
            <p className="text-xs text-[#636672] leading-relaxed">
              Vectorized transformations with NumPy & Pandas, schema validation, and cloud data workflows via AWS Academy.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#121316] mb-1.5">
              04. RAPID PROTOTYPING & HACKATHONS
            </h3>
            <p className="text-xs text-[#636672] leading-relaxed">
              Smart India Hackathon 2026 selected, Bharat Leadership, and 24-hr sprint execution at VIT Chennai.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
