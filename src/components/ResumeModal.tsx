import React, { useState, useEffect } from 'react';
import { X, Download, Printer, ExternalLink, FileText, CheckCircle2, Eye } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, CERTIFICATIONS, HACKATHONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'pdf' | 'interactive'>('pdf');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-5xl h-[92vh] bg-[#ECEAE5] border border-[#CAC7BF] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-[#D8D5CE] bg-[#E3E0D8]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#121316]">
              Syed_Arshad_R_Resume.pdf
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-[#6A6D7C]">
              (Verified SRM Vadapalani 9.33 CGPA)
            </span>
          </div>

          {/* Mode Switch & Actions */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-0.5 bg-[#D5D2C9] rounded-lg border border-[#CAC7BF]">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 text-xs font-semibold uppercase rounded-md transition-colors cursor-pointer ${
                  viewMode === 'pdf' ? 'bg-[#121316] text-[#ECEAE5]' : 'text-[#444755] hover:text-[#121316]'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-3 py-1 text-xs font-semibold uppercase rounded-md transition-colors cursor-pointer ${
                  viewMode === 'interactive' ? 'bg-[#121316] text-[#ECEAE5]' : 'text-[#444755] hover:text-[#121316]'
                }`}
              >
                Formatted Text
              </button>
            </div>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Syed_Arshad_R_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#121316] text-[#ECEAE5] rounded-full hover:bg-[#2C2E35] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#D5D2C9] text-[#121316] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 bg-[#40434C] overflow-y-auto">
          {viewMode === 'pdf' ? (
            <div className="w-full h-full flex flex-col">
              <iframe
                src={`${PERSONAL_INFO.resumePath}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full h-full border-0"
                title="Syed Arshad R Resume"
              />
              <div className="p-2 bg-[#2D3037] text-zinc-300 text-[11px] font-mono text-center border-t border-zinc-700">
                Notice: If browser blocks PDF embed, switch to "Formatted Text" or click "Download PDF" above.
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-10 max-w-3xl mx-auto bg-white text-zinc-900 my-6 rounded-xl shadow-lg font-sans text-xs sm:text-sm">
              {/* Header */}
              <div className="border-b-2 border-indigo-600 pb-4 mb-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-900">
                  {PERSONAL_INFO.name}
                </h2>
                <p className="font-semibold text-zinc-700 mt-0.5">
                  {PERSONAL_INFO.degree} Student | {PERSONAL_INFO.college}
                </p>
                <p className="text-xs text-zinc-600 mt-1 font-mono">
                  {PERSONAL_INFO.location} | {PERSONAL_INFO.phone} | {PERSONAL_INFO.email}
                </p>
              </div>

              {/* Summary */}
              <div className="mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 border-b border-zinc-200 pb-1 mb-2">
                  Professional Summary
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              {/* Education */}
              <div className="mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 border-b border-zinc-200 pb-1 mb-2">
                  Education
                </h3>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-zinc-900">{PERSONAL_INFO.degree}</p>
                    <p className="text-zinc-600">{PERSONAL_INFO.college}</p>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <p className="font-bold text-indigo-800">CGPA: {PERSONAL_INFO.cgpa}</p>
                    <p className="text-zinc-500">{PERSONAL_INFO.expectedYear}</p>
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-start text-xs">
                  <div>
                    <p className="font-semibold text-zinc-800">School Education</p>
                    <p className="text-zinc-600">Koona Presidency Matric Higher Secondary School</p>
                  </div>
                  <div className="font-mono text-zinc-700">
                    476/600 (79%)
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 border-b border-zinc-200 pb-1 mb-2">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 gap-1 text-xs text-zinc-700">
                  <p><strong>Programming Languages:</strong> Python, C++, C</p>
                  <p><strong>Libraries:</strong> NumPy, Pandas</p>
                  <p><strong>Tools & Platforms:</strong> Jupyter Notebook, Google Colab, VS Code</p>
                  <p><strong>Core Concepts:</strong> Object-Oriented Programming (OOP), Data Structures and Algorithms (DSA)</p>
                  <p><strong>Areas of Interest:</strong> Artificial Intelligence, Machine Learning, Data Analysis</p>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 border-b border-zinc-200 pb-1 mb-2">
                  Projects
                </h3>
                <div className="space-y-2">
                  <div>
                    <p className="font-bold text-zinc-900">Smart Reminder App | Personal Project</p>
                    <p className="text-zinc-700">Built an app that helps users keep track of tasks and important activities through timely reminders.</p>
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900">Veritas AI: Evidence Intelligence</p>
                    <p className="text-zinc-700">Developed a project focused on evidence intelligence, using AI to help analyse and organise evidence.</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 border-b border-zinc-200 pb-1 mb-2">
                  Certifications
                </h3>
                <ul className="list-disc list-inside text-xs text-zinc-700 space-y-0.5">
                  {CERTIFICATIONS.map(c => (
                    <li key={c.id}><strong>{c.title}</strong>, {c.issuer}</li>
                  ))}
                </ul>
              </div>

              {/* Hackathons */}
              <div className="mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 border-b border-zinc-200 pb-1 mb-2">
                  Hackathons, Workshops & Activities
                </h3>
                <ul className="list-disc list-inside text-xs text-zinc-700 space-y-0.5">
                  <li>Selected in the internal hackathon for Smart India Hackathon (SIH) 2026.</li>
                  <li>Registered for the Bharat Leadership Hackathon.</li>
                  <li>Participated in my first hackathon at VIT Chennai.</li>
                  <li>Attended an ACM workshop at VIT Chennai.</li>
                  <li>Participated in technical workshops conducted on campus.</li>
                </ul>
              </div>

              {/* Career Objective */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 border-b border-zinc-200 pb-1 mb-2">
                  Career Objective
                </h3>
                <p className="text-zinc-700">
                  {PERSONAL_INFO.careerObjective}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
