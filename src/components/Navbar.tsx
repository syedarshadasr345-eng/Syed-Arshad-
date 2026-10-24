import React, { useState } from 'react';
import { FileText, Mail, Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Interview Q&A', href: '#interview-qa' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#D8D5CE] bg-[#ECEAE5]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4 md:px-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#overview" 
          className="flex items-center gap-2 text-base font-bold tracking-tight text-[#121316] uppercase hover:opacity-80 transition-opacity whitespace-nowrap shrink-0"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#121316]"></span>
          <span>SYED ARSHAD R</span>
        </a>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-[#555861]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#121316] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action (Resume & Contact) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#121316] border border-[#121316] rounded-full hover:bg-[#121316] hover:text-[#ECEAE5] transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ECEAE5] bg-[#121316] rounded-full hover:bg-[#2C2E35] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            <span>Interview Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="sm:hidden px-2.5 py-1 text-[11px] font-semibold uppercase border border-[#121316] rounded-full text-[#121316]"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#121316] hover:bg-[#DFDDD7] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D8D5CE] bg-[#ECEAE5] px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-3.5 text-sm font-medium uppercase tracking-wider text-[#40434C]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-xs hover:text-[#121316] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#D8D5CE] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 py-2 text-xs font-semibold uppercase border border-[#121316] rounded-full text-[#121316]"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume (PDF)</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2 text-xs font-semibold uppercase bg-[#121316] text-[#ECEAE5] rounded-full"
              >
                <span>Schedule Interview / Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
