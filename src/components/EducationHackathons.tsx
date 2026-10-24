import React from 'react';
import { GraduationCap, Trophy, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { HACKATHONS } from '../data/portfolioData';

export const EducationHackathons: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-[#D8D5CE]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-5 border-b border-[#D8D5CE]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#717482]">
              Academic & Competitive Milestone Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#121316] mt-1">
              EDUCATION & HACKATHONS
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#666977] max-w-md mt-2 md:mt-0 leading-relaxed">
            Consistently high academic performance backed by active participation in university hackathons and prestigious technical forums.
          </p>
        </div>

        {/* 2-Column Grid (Left: Education, Right: Hackathons & Workshops) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (5 Cols): Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-[#D5D2CA]">
              <GraduationCap className="w-5 h-5 text-[#121316]" />
              <h3 className="text-lg font-bold uppercase tracking-tight text-[#121316]">
                Academic Background
              </h3>
            </div>

            {/* University Card */}
            <div className="p-6 rounded-2xl border border-[#D0CDC4] bg-[#E3E1DB] shadow-xs space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#121316]/5 rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono bg-[#121316] text-[#ECEAE5] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  CGPA: 9.33 / 10.0
                </span>
                <span className="text-xs font-mono text-[#6A6D7C]">Expected 2029</span>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-extrabold uppercase text-[#121316] leading-snug">
                  B.Tech, Computer Science & Engineering (AI & ML)
                </h4>
                <p className="text-xs font-medium text-[#4D505D] mt-1">
                  SRM Institute of Science and Technology, Vadapalani, Chennai
                </p>
              </div>

              <p className="text-xs text-[#585B69] leading-relaxed pt-1">
                Specialized specialization in Artificial Intelligence and Machine Learning, with extensive coursework in Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), System Design, and Data Analytics.
              </p>

              <div className="pt-2 border-t border-[#D0CDC4] flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <CheckCircle2 className="w-4 h-4" />
                <span>Ranked among top percentile of cohort</span>
              </div>
            </div>

            {/* School Education Card */}
            <div className="p-5 rounded-2xl border border-[#D5D2CA] bg-[#EAE8E3] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono bg-[#DFDDD7] border border-[#CAC7BF] text-[#22242B] px-2 py-0.5 rounded">
                  Score: 476 / 600 (79%)
                </span>
                <span className="text-xs font-mono text-[#717483]">Higher Secondary</span>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase text-[#121316]">
                  Koona Presidency Matric Higher Secondary School
                </h4>
                <p className="text-xs text-[#636675]">
                  Rigorous foundational science and mathematics curriculum.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Hackathons, Workshops & Activities */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#D5D2CA]">
              <Trophy className="w-5 h-5 text-[#121316]" />
              <h3 className="text-lg font-bold uppercase tracking-tight text-[#121316]">
                Hackathons & Technical Leadership
              </h3>
            </div>

            <div className="space-y-3">
              {HACKATHONS.map((hackathon) => (
                <div
                  key={hackathon.id}
                  className="p-5 rounded-xl border border-[#D5D2CA] bg-[#E5E3DE] hover:border-[#121316] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#121316]">
                        {hackathon.title}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        hackathon.status === 'Selected' ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold' :
                        hackathon.status === 'Registered' ? 'bg-blue-100 text-blue-900 border border-blue-300' :
                        'bg-[#DFDDD7] text-[#444755]'
                      }`}>
                        {hackathon.badge}
                      </span>
                    </div>

                    <p className="text-xs text-[#525562] leading-relaxed">
                      {hackathon.description}
                    </p>

                    <div className="flex items-center gap-3 text-[11px] font-mono text-[#6F7281] pt-1">
                      <span>Venue: {hackathon.venue}</span>
                      <span>·</span>
                      <span>Role: {hackathon.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
