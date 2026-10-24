import React, { useState } from 'react';
import { Play, ArrowUpRight, Code, Layers, Sparkles, Terminal } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onOpenDemo: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenDemo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedDetailsId, setExpandedDetailsId] = useState<string | null>(null);

  const categories = ['All', 'AI & Machine Learning', 'Full Stack & Software', 'Data Engineering'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const heroProject = PROJECTS.find((p) => p.id === 'veritas-ai') || PROJECTS[0];
  const secondaryProjects = filteredProjects.filter((p) => p.id !== heroProject.id || selectedCategory !== 'All');

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#D8D5CE]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header Replicating Pinterest Template */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-[#D8D5CE]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#717482]">
              Selected Engineering Works
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#121316] mt-1">
              PORTFOLIO
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#666977] max-w-md mt-2 md:mt-0 leading-relaxed">
            Real software systems and AI intelligence architectures built with rigorous engineering standards, clean code, and practical impact.
          </p>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 mb-10 p-1.5 bg-[#DFDDD7] border border-[#CAC7BF] rounded-xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#121316] text-[#ECEAE5] shadow-xs'
                  : 'text-[#555866] hover:text-[#121316] hover:bg-[#D5D2CA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Showcase Item (When "All" is active, matches Pinterest "SOUNDWAVE" large card layout!) */}
        {selectedCategory === 'All' && (
          <div className="mb-14">
            <div className="group relative rounded-2xl overflow-hidden border border-[#D5D2CA] bg-[#E2DFD8] shadow-sm transition-all hover:shadow-md">
              
              {/* Massive Showcase Image Container */}
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-[#22242B]">
                <img
                  src={heroProject.image}
                  alt={heroProject.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10 text-white">
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-[11px] font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Flagship AI System</span>
                    </span>
                  </div>

                  {/* Title & Tagline on image */}
                  <div className="max-w-2xl">
                    <p className="text-xs uppercase tracking-widest text-zinc-300 font-mono mb-1">
                      {heroProject.category} · {heroProject.role}
                    </p>
                    <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-2">
                      {heroProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-200 line-clamp-2 leading-relaxed">
                      {heroProject.tagline}
                    </p>
                  </div>

                </div>
              </div>

              {/* Bottom Metadata & Action Bar (Directly replicating the Pinterest template bottom bar!) */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-[#D5D2CA] bg-[#E8E6E1]">
                
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#525562]">
                    <span className="font-bold uppercase text-[#121316] tracking-wider text-sm">
                      VERITAS AI
                    </span>
                    <span>·</span>
                    <span>Automated Evidence Cross-Examination</span>
                    <span>·</span>
                    <span className="font-mono">{heroProject.year}</span>
                  </div>
                  
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {heroProject.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono bg-[#DFDDD7] border border-[#CAC7BF] rounded text-[#333642]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Sandbox Trigger Button */}
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => onOpenDemo(heroProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#121316] text-[#ECEAE5] rounded-full hover:bg-[#2C2E35] transition-all cursor-pointer shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Launch Live Demo Sandbox</span>
                  </button>

                  <button
                    onClick={() => setExpandedDetailsId(expandedDetailsId === heroProject.id ? null : heroProject.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#121316] border border-[#CAC7BF] rounded-full hover:bg-[#DFDDD7] transition-colors cursor-pointer"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>{expandedDetailsId === heroProject.id ? 'Hide Specs' : 'System Specs'}</span>
                  </button>
                </div>

              </div>

              {/* Collapsible Architecture Specs */}
              {expandedDetailsId === heroProject.id && (
                <div className="p-6 md:p-8 border-t border-[#D5D2CA] bg-[#ECEAE5] space-y-4 animate-in fade-in">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#121316] mb-2">
                      System Architecture Flow:
                    </h4>
                    <p className="text-xs font-mono bg-[#DFDDD7] p-3 rounded-lg border border-[#CAC7BF] text-[#22242B]">
                      {heroProject.architecture}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#121316] mb-2">
                      Key Engineering Accomplishments:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#444754]">
                      {heroProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#121316] mt-1.5 shrink-0"></span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === 'All' ? secondaryProjects : filteredProjects).map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-xl overflow-hidden border border-[#D5D2CA] bg-[#E5E3DE] hover:border-[#121316] transition-all shadow-xs"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#22242B]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                  <span className="text-[11px] font-mono text-zinc-300">
                    {project.category} · {project.year}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-lg font-bold uppercase text-[#121316] group-hover:text-black transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-[#525562] mt-1.5 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono bg-[#DFDDD7] border border-[#CAC7BF] rounded text-[#333642]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-[#D5D2CA] flex items-center justify-between">
                  <button
                    onClick={() => onOpenDemo(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#121316] hover:underline underline-offset-4 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Demo Sandbox</span>
                  </button>

                  <button
                    onClick={() => onOpenDemo(project)}
                    className="p-1.5 rounded-full hover:bg-[#DFDDD7] text-[#121316] transition-colors cursor-pointer"
                    aria-label="View Project"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
