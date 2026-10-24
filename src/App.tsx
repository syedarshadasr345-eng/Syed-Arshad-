import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredentialsGrid } from './components/CredentialsGrid';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDemoModal } from './components/ProjectDemoModal';
import { InterviewSimulator } from './components/InterviewSimulator';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationHackathons } from './components/EducationHackathons';
import { ResumeModal } from './components/ResumeModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeDemoProject, setActiveDemoProject] = useState<Project | null>(null);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  const handleOpenDemo = (project: Project) => {
    setActiveDemoProject(project);
  };

  const handleCloseDemo = () => {
    setActiveDemoProject(null);
  };

  return (
    <div className="min-h-screen bg-[#ECEAE5] text-[#121316] font-sans selection:bg-[#121316] selection:text-[#ECEAE5]">
      
      {/* 3-Zone Top Bar Navigation */}
      <Navbar 
        onOpenResume={handleOpenResume}
        onOpenContact={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main>
        {/* Hero Section based on Pinterest Template */}
        <Hero onOpenResume={handleOpenResume} />

        {/* Credentials / Affiliations Grid (Replicating "TRUSTED BY" 2x4 Grid) */}
        <CredentialsGrid />

        {/* About & Engineering Vision (Replicating "CRAFTING MEANINGFUL BRANDS" Split) */}
        <AboutSection onOpenResume={handleOpenResume} />

        {/* Selected Portfolio Works with Large Featured Card */}
        <ProjectsSection onOpenDemo={handleOpenDemo} />

        {/* Recruiter & Interviewer Q&A Prep Room */}
        <InterviewSimulator />

        {/* Interactive Technical Skills & Code Inspector */}
        <SkillsMatrix />

        {/* Education & Hackathons Timeline */}
        <EducationHackathons />

        {/* Recruiter Contact & Schedule Interview Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Interactive Project Sandbox Modal */}
      <ProjectDemoModal 
        project={activeDemoProject} 
        onClose={handleCloseDemo} 
      />

      {/* Full-screen PDF & Text Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={handleCloseResume} 
      />

    </div>
  );
}
