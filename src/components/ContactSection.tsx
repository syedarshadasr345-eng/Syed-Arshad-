import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Calendar, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    roleInterest: 'Software Development Intern',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

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
    <section id="contact" className="py-16 md:py-24 border-b border-[#D8D5CE]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-5 border-b border-[#D8D5CE]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#717482]">
              Let's Build Something High-Impact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#121316] mt-1">
              SCHEDULE AN INTERVIEW
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#666977] max-w-md mt-2 md:mt-0 leading-relaxed">
            Interested in discussing an internship, hackathon collaboration, or software engineering project? Reach out directly.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (5 Cols): Direct Contacts & Readiness */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl border border-[#CAC7BF] bg-[#E5E3DE] space-y-4">
              <h3 className="text-base font-bold uppercase tracking-tight text-[#121316]">
                Direct Candidate Coordinates
              </h3>

              <div className="space-y-3 text-xs">
                
                {/* Email item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#ECEAE5] border border-[#D5D2CA]">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#121316]" />
                    <div>
                      <span className="text-[10px] uppercase font-mono text-[#717483] block">Direct Email</span>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold text-[#121316] hover:underline">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 hover:bg-[#DFDDD7] rounded text-[#555866] transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#ECEAE5] border border-[#D5D2CA]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#121316]" />
                    <div>
                      <span className="text-[10px] uppercase font-mono text-[#717483] block">Mobile / WhatsApp</span>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="font-semibold text-[#121316] hover:underline">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 hover:bg-[#DFDDD7] rounded text-[#555866] transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3 rounded-xl bg-[#ECEAE5] border border-[#D5D2CA] flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#121316]" />
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#717483] block">Location</span>
                    <span className="font-semibold text-[#121316]">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                {/* Timezone */}
                <div className="p-3 rounded-xl bg-[#ECEAE5] border border-[#D5D2CA] flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#121316]" />
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#717483] block">Timezone</span>
                    <span className="font-semibold text-[#121316]">Indian Standard Time (IST) · UTC+5:30</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Status Pill */}
            <div className="p-4 rounded-xl bg-[#E0DED7] border border-[#D0CDC4] flex items-center gap-3 text-xs text-[#333644]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
              <span>Open to Software Engineering, Full-Stack, and AI/ML internship opportunities.</span>
            </div>

          </div>

          {/* Right Column (7 Cols): Form */}
          <div className="lg:col-span-7 bg-[#ECEAE5] border border-[#CAC7BF] rounded-2xl p-6 sm:p-8 shadow-sm">
            
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase text-[#121316]">
                  Interview Inquiry Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-[#555866] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your note regarding the <strong>{formData.roleInterest}</strong> role has been queued. Syed will respond to <strong>{formData.email}</strong> promptly.
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Interview Inquiry for ${formData.roleInterest} - ${formData.company}&body=Hi Syed,%0D%0A%0D%0A${encodeURIComponent(formData.message)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#121316] text-[#ECEAE5] rounded-full hover:bg-[#2C2E35] transition-colors"
                  >
                    <span>Also Open in Default Mail Client</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-[#333642] mb-1">
                      Your Name / Recruiter:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#CAC7BF] bg-[#F4F2EE] text-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-[#333642] mb-1">
                      Organization / Company:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Google, Tech Startup, Lab"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#CAC7BF] bg-[#F4F2EE] text-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-[#333642] mb-1">
                      Work Email Address:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#CAC7BF] bg-[#F4F2EE] text-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-[#333642] mb-1">
                      Target Role:
                    </label>
                    <select
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#CAC7BF] bg-[#F4F2EE] text-[#121316] font-mono cursor-pointer"
                    >
                      <option value="Software Development Intern">Software Development Intern</option>
                      <option value="AI / ML Engineering Intern">AI / ML Engineering Intern</option>
                      <option value="Full-Stack Developer Intern">Full-Stack Developer Intern</option>
                      <option value="Data Engineering Intern">Data Engineering Intern</option>
                      <option value="Research & Hackathon Collab">Research & Hackathon Collab</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-[#333642] mb-1">
                    Message / Interview Invitation:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details about the role, interview scheduling, or team mission..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs font-sans p-3 rounded-lg border border-[#CAC7BF] bg-[#F4F2EE] text-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#717483]">
                    Replies sent within 24 hours
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#121316] text-[#ECEAE5] rounded-full hover:bg-[#2C2E35] transition-colors cursor-pointer shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Interview Invitation</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
