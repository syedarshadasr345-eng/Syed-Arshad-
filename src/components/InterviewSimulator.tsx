import React, { useState } from 'react';
import { HelpCircle, Check, Copy, Sparkles, MessageSquare, ChevronRight, Award } from 'lucide-react';
import { INTERVIEW_QUESTIONS } from '../data/portfolioData';

export const InterviewSimulator: React.FC = () => {
  const [activeQuestionId, setActiveQuestionId] = useState(INTERVIEW_QUESTIONS[0].id);
  const [activeTab, setActiveTab] = useState<'star' | 'summary'>('star');
  const [copied, setCopied] = useState(false);

  const currentQA = INTERVIEW_QUESTIONS.find((q) => q.id === activeQuestionId) || INTERVIEW_QUESTIONS[0];

  const handleCopy = () => {
    const fullText = `Question: ${currentQA.question}\n\nSummary: ${currentQA.summary}\n\nSTAR Format:\n- Situation: ${currentQA.star.situation}\n- Task: ${currentQA.star.task}\n- Action: ${currentQA.star.action}\n- Result: ${currentQA.star.result}\n\nKey Takeaway: ${currentQA.keyTakeaway}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="interview-qa" className="py-16 md:py-24 border-b border-[#D8D5CE] bg-[#E8E6E1]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-[#D5D2CA]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#717482]">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Interviewer & Recruiter Prep Deck</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#121316] mt-1">
              INTERVIEW BRIEFING
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#666977] max-w-md mt-2 md:mt-0 leading-relaxed">
            Direct, structured answers to standard hiring manager questions prepared in the STAR framework (Situation, Task, Action, Result).
          </p>
        </div>

        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols): Question Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            <p className="text-xs font-mono font-semibold uppercase text-[#555866] mb-2">
              Select an Interview Question:
            </p>
            {INTERVIEW_QUESTIONS.map((qa, index) => {
              const isActive = qa.id === activeQuestionId;
              return (
                <button
                  key={qa.id}
                  onClick={() => {
                    setActiveQuestionId(qa.id);
                    setCopied(false);
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isActive
                      ? 'bg-[#121316] text-[#ECEAE5] border-[#121316] shadow-sm'
                      : 'bg-[#ECEAE5] text-[#22242B] border-[#D5D2CA] hover:bg-[#DFDDD7]'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <span className={`text-[10px] font-mono uppercase block mb-1 ${isActive ? 'text-zinc-400' : 'text-[#717483]'}`}>
                      Question 0{index + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold leading-snug line-clamp-2">
                      {qa.question}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'translate-x-1 text-white' : 'text-[#888B98]'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Answer Card with STAR Breakdown */}
          <div className="lg:col-span-7 bg-[#ECEAE5] border border-[#CAC7BF] rounded-2xl p-6 sm:p-8 shadow-sm">
            
            {/* Top Bar inside Answer Card */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D8D5CE] pb-4 mb-6">
              <div className="flex items-center gap-1.5 p-1 bg-[#DFDDD7] rounded-lg border border-[#CAC7BF]">
                <button
                  onClick={() => setActiveTab('star')}
                  className={`px-3 py-1 text-xs font-bold uppercase rounded-md transition-colors cursor-pointer ${
                    activeTab === 'star'
                      ? 'bg-[#121316] text-[#ECEAE5]'
                      : 'text-[#555866] hover:text-[#121316]'
                  }`}
                >
                  STAR Format
                </button>
                <button
                  onClick={() => setActiveTab('summary')}
                  className={`px-3 py-1 text-xs font-bold uppercase rounded-md transition-colors cursor-pointer ${
                    activeTab === 'summary'
                      ? 'bg-[#121316] text-[#ECEAE5]'
                      : 'text-[#555866] hover:text-[#121316]'
                  }`}
                >
                  Brief Summary
                </button>
              </div>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono bg-[#DFDDD7] hover:bg-[#D5D2CA] text-[#121316] border border-[#CAC7BF] rounded-lg transition-colors cursor-pointer"
                title="Copy structured response for notes"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Notes' : 'Copy Response'}</span>
              </button>
            </div>

            {/* Question Text */}
            <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-[#121316] tracking-tight mb-4">
              "{currentQA.question}"
            </h3>

            {/* Answer Content */}
            {activeTab === 'summary' ? (
              <div className="p-4 rounded-xl bg-[#DFDDD7] border border-[#CAC7BF] text-sm text-[#333642] leading-relaxed mb-6">
                <p className="font-medium text-base mb-2 text-[#121316]">Executive Summary:</p>
                <p>{currentQA.summary}</p>
              </div>
            ) : (
              <div className="space-y-4 mb-6">
                <div className="p-3.5 rounded-xl bg-[#E2DFD8] border border-[#D5D2CA]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#121316] block mb-1">
                    [S] Situation
                  </span>
                  <p className="text-xs sm:text-sm text-[#444755] leading-relaxed">
                    {currentQA.star.situation}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#E2DFD8] border border-[#D5D2CA]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#121316] block mb-1">
                    [T] Task
                  </span>
                  <p className="text-xs sm:text-sm text-[#444755] leading-relaxed">
                    {currentQA.star.task}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#E2DFD8] border border-[#D5D2CA]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#121316] block mb-1">
                    [A] Action
                  </span>
                  <p className="text-xs sm:text-sm text-[#444755] leading-relaxed">
                    {currentQA.star.action}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#E2DFD8] border border-[#D5D2CA]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#121316] block mb-1">
                    [R] Result
                  </span>
                  <p className="text-xs sm:text-sm text-[#444755] leading-relaxed">
                    {currentQA.star.result}
                  </p>
                </div>
              </div>
            )}

            {/* Key Takeaway Callout */}
            <div className="p-4 rounded-xl bg-[#DFDDD7] border border-[#CAC7BF] flex items-start gap-3">
              <Award className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#121316]">
                  Candidate Assessment Takeaway:
                </p>
                <p className="text-xs text-[#525562] mt-0.5 leading-relaxed">
                  {currentQA.keyTakeaway}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
