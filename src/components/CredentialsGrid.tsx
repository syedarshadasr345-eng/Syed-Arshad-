import React, { useState } from 'react';
import { Award, CheckCircle2, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';

export const CredentialsGrid: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const partners = [
    {
      id: 'srm',
      name: 'SRM Institute of Science & Tech',
      label: 'B.Tech CSE (AI & ML) · 9.33 CGPA',
      subtext: 'Institution of Excellence',
      certRef: null,
    },
    {
      id: 'nvidia',
      name: 'NVIDIA Deep Learning Institute',
      label: 'AI Agents with Multimodal Models',
      subtext: 'Multimodal AI & Vision',
      certRef: CERTIFICATIONS.find((c) => c.id === 'nvidia-multimodal'),
    },
    {
      id: 'aws',
      name: 'AWS Academy',
      label: 'Data Engineering Virtual Internship',
      subtext: 'Cloud & Data Pipelines',
      certRef: CERTIFICATIONS.find((c) => c.id === 'aws-data-eng'),
    },
    {
      id: 'sih',
      name: 'Smart India Hackathon (SIH)',
      label: 'Selected Candidate · 2026',
      subtext: 'National Innovation Sprint',
      certRef: null,
    },
    {
      id: 'infosys',
      name: 'Infosys Springboard',
      label: 'Programming Fundamentals',
      subtext: 'Algorithms & Modular Code',
      certRef: CERTIFICATIONS.find((c) => c.id === 'infosys-programming'),
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      label: 'Student Ambassador Workshop',
      subtext: 'Developer Leadership',
      certRef: CERTIFICATIONS.find((c) => c.id === 'microsoft-ambassador'),
    },
    {
      id: 'udemy',
      name: 'Udemy Full Stack',
      label: 'Java, React & Spring Boot',
      subtext: 'Full Stack Engineering',
      certRef: CERTIFICATIONS.find((c) => c.id === 'udemy-fullstack'),
    },
    {
      id: 'vit',
      name: 'VIT Chennai & ACM',
      label: 'Hackathon & Tech Workshops',
      subtext: 'Competitive Programming',
      certRef: null,
    },
  ];

  return (
    <section id="credentials" className="py-14 md:py-20 border-b border-[#D8D5CE]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header matching Pinterest template */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#D8D5CE]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#717482]">
              Validated Competencies
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[#121316] mt-1">
              Credentials & Affiliations
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#666977] max-w-md mt-2 md:mt-0">
            Rigorous training from global tech leaders, universities, and competitive national hackathon forums.
          </p>
        </div>

        {/* 2-Row x 4-Column Structured Grid with Hairline Dividers (Matching Template) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#D5D2CA] rounded-xl overflow-hidden bg-[#E7E5E0]">
          {partners.map((partner, index) => {
            const isClickable = !!partner.certRef;
            return (
              <div
                key={partner.id}
                onClick={() => partner.certRef && setSelectedCert(partner.certRef)}
                className={`p-6 border-b sm:border-b-0 border-r border-[#D5D2CA] last:border-b-0 flex flex-col justify-between min-h-[140px] transition-all ${
                  isClickable
                    ? 'hover:bg-[#DFDDD7] cursor-pointer group'
                    : 'bg-[#ECEAE5]'
                } ${index % 4 === 3 ? 'lg:border-r-0' : ''} ${
                  index >= 4 ? 'border-t sm:border-t lg:border-t border-[#D5D2CA]' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#121316]/70"></span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#121316]">
                      {partner.name}
                    </span>
                  </div>
                  {isClickable && (
                    <span className="text-[10px] uppercase font-mono text-[#737684] opacity-0 group-hover:opacity-100 transition-opacity">
                      Inspect ↗
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold text-[#121316] leading-tight">
                    {partner.label}
                  </p>
                  <p className="text-[11px] text-[#717483] mt-1 font-mono">
                    {partner.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive note */}
        <div className="mt-4 flex items-center justify-between text-[11px] text-[#717483] font-mono">
          <span>* Click on certified tiles to view syllabus, skills acquired, and verification data</span>
          <span className="hidden sm:inline">100% Verified Credentials</span>
        </div>

      </div>

      {/* Credential Inspection Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="w-full max-w-lg bg-[#ECEAE5] border border-[#CAC7BE] rounded-2xl p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#DFDDD7] text-[#121316] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#686B79] mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Verified Certificate · {selectedCert.issuer}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[#121316] tracking-tight mb-2">
              {selectedCert.title}
            </h3>

            <p className="text-xs font-mono text-[#737684] mb-4">
              Issued / Completed: {selectedCert.date}
            </p>

            <p className="text-sm text-[#464955] leading-relaxed mb-6">
              {selectedCert.description}
            </p>

            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#121316] mb-2.5">
                Skills & Competencies Acquired:
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-[#121316]">
                {selectedCert.skillsAcquired.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-[#DFDDD7] border border-[#D0CDC4] rounded-md font-mono text-[11px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D5D2CA] flex items-center justify-between">
              <span className="text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Verified in Syed's Resume Portfolio
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-1.5 text-xs font-semibold uppercase bg-[#121316] text-[#ECEAE5] rounded-full hover:bg-[#2F3138] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
