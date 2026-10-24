import React, { useState } from 'react';
import { Terminal, Code, Cpu, Database, CheckCircle, Copy, Check } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILLS[0]);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const categories = ['All', 'Languages', 'AI & Libraries', 'Frameworks & Tools', 'Core CS'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSkill.codeSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-[#D8D5CE]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-[#D8D5CE]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#717482]">
              Algorithmic & Engineering Fluency
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#121316] mt-1">
              TECHNICAL SKILLS
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#666977] max-w-md mt-2 md:mt-0 leading-relaxed">
            Hands-on code implementations in C++, Python, and full-stack frameworks grounded in OOP and DSA core concepts.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8 p-1.5 bg-[#DFDDD7] border border-[#CAC7BF] rounded-xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#121316] text-[#ECEAE5] shadow-xs'
                  : 'text-[#555866] hover:text-[#121316] hover:bg-[#D5D2CA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Column Inspector (Left: Skills List, Right: Code & Implementation Deep Dive) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols): Skills List with Proficiency Meters */}
          <div className="lg:col-span-5 space-y-3">
            {filteredSkills.map((skill) => {
              const isSelected = skill.name === activeSkill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => {
                    setActiveSkill(skill);
                    setCopiedSnippet(false);
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col gap-2 ${
                    isSelected
                      ? 'bg-[#121316] text-[#ECEAE5] border-[#121316] shadow-sm'
                      : 'bg-[#E5E3DE] text-[#22242B] border-[#D5D2CA] hover:bg-[#DFDDD7]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold uppercase tracking-tight">
                      {skill.name}
                    </span>
                    <span className={`text-xs font-mono tabular-nums ${isSelected ? 'text-zinc-300' : 'text-[#676A79]'}`}>
                      {skill.proficiency}%
                    </span>
                  </div>

                  {/* Clean progress bar */}
                  <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isSelected ? 'bg-emerald-400' : 'bg-[#121316]'
                      }`}
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>

                  <p className={`text-xs line-clamp-1 ${isSelected ? 'text-zinc-300' : 'text-[#636675]'}`}>
                    {skill.experience}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Code Viewer & Project Application */}
          <div className="lg:col-span-7 bg-[#21232B] text-zinc-100 rounded-2xl border border-[#333644] overflow-hidden shadow-lg">
            
            {/* Terminal Header */}
            <div className="px-5 py-3.5 bg-[#181920] border-b border-[#333644] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <span className="text-xs font-mono text-zinc-400 ml-2">
                  {activeSkill.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}_snippet.preview
                </span>
              </div>

              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded border border-zinc-700 transition-colors cursor-pointer"
                title="Copy code snippet"
              >
                {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs overflow-x-auto text-emerald-300 leading-relaxed bg-[#1B1D25]">
              <pre>
                <code>{activeSkill.codeSnippet}</code>
              </pre>
            </div>

            {/* Application Context Footer */}
            <div className="p-5 bg-[#181920] border-t border-[#333644] space-y-3">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Practical Application in Syed's Projects:
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {activeSkill.context}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 pt-2 border-t border-zinc-800">
                <span>Category: <strong className="text-zinc-200">{activeSkill.category}</strong></span>
                <span>·</span>
                <span>Proficiency: <strong className="text-emerald-400">{activeSkill.proficiency}%</strong></span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
