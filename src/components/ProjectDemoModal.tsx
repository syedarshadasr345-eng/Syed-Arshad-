import React, { useState } from 'react';
import { X, Play, CheckCircle, AlertTriangle, FileSearch, Clock, Plus, Trash2, BellRing, Sparkles, Database } from 'lucide-react';
import { Project } from '../types';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl bg-[#ECEAE5] border border-[#CAC7BE] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8D5CE] bg-[#E2DFD8]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#121316]">
              Interactive Sandbox · {project.title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-[#D5D2C9] text-[#121316] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {project.id === 'veritas-ai' && <VeritasAIDemo />}
          {project.id === 'smart-reminder' && <SmartReminderDemo />}
          {(project.id === 'multimodal-agent' || project.id === 'aws-data-pipeline') && (
            <DataPipelineDemo project={project} />
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#E2DFD8] border-t border-[#D8D5CE] flex items-center justify-between text-xs text-[#555865]">
          <span>Project by Syed Arshad R · SRM Vadapalani</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold uppercase bg-[#121316] text-[#ECEAE5] rounded-full hover:bg-[#2A2B32] transition-colors"
          >
            Done Inspecting
          </button>
        </div>
      </div>
    </div>
  );
};

// Sub-component: Veritas AI Interactive Simulation
const VeritasAIDemo: React.FC = () => {
  const sampleCases = [
    {
      name: "Case 104-A: Witness vs Gate Log Discrepancy",
      docA: "Witness Statement: 'Subject was seen entering Building C at 10:15 PM wearing a dark overcoat.'",
      docB: "Turnstile Access Log: 'RFID Card #8829 (Subject) logged at Entrance Gate A at 10:48 PM.'",
      expectedConflict: "Temporal Contradiction (33 min variance between verbal claim and biometric timestamp)."
    },
    {
      name: "Case 209-B: Procurement Invoice Validation",
      docA: "Vendor Invoice #4401: '10x GPU Compute Accelerators shipped on Oct 12, Unit Price $2,400.'",
      docB: "Warehouse Receipt #4401: '8x Units accepted on Oct 14 with minor serial mismatch.'",
      expectedConflict: "Quantity Deficit (-2 units missing) and Serial Hash discrepancy detected."
    }
  ];

  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [docA, setDocA] = useState(sampleCases[0].docA);
  const [docB, setDocB] = useState(sampleCases[0].docB);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSelectCase = (index: number) => {
    setSelectedCaseIndex(index);
    setDocA(sampleCases[index].docA);
    setDocB(sampleCases[index].docB);
    setResult(null);
  };

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setResult(null);
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        contradictionScore: selectedCaseIndex === 0 ? 87.4 : 94.1,
        entitiesExtracted: selectedCaseIndex === 0 
          ? ["Subject", "Building C", "10:15 PM", "RFID #8829", "Entrance Gate A", "10:48 PM"]
          : ["Vendor Invoice #4401", "GPU Compute Accelerators", "Unit Price $2,400", "Warehouse Receipt", "Oct 14"],
        timeline: [
          { time: selectedCaseIndex === 0 ? "10:15 PM" : "Oct 12", event: "Verbal statement claim", source: "Doc A", verified: false },
          { time: selectedCaseIndex === 0 ? "10:48 PM" : "Oct 14", event: "System physical telemetry record", source: "Doc B", verified: true }
        ],
        findings: sampleCases[selectedCaseIndex].expectedConflict,
        confidence: "98.2% Model Certainty"
      });
    }, 1200);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#636675] mb-1">
          <FileSearch className="w-4 h-4 text-[#121316]" />
          <span>Evidence Intelligence Engine</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#121316]">
          Veritas AI Cross-Examination Simulator
        </h3>
        <p className="text-xs sm:text-sm text-[#555866] mt-1">
          Select or edit sample forensic evidence documents below to simulate Veritas AI's multimodal cross-reference engine.
        </p>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap gap-2">
        {sampleCases.map((c, i) => (
          <button
            key={c.name}
            onClick={() => handleSelectCase(i)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
              selectedCaseIndex === i
                ? 'bg-[#121316] text-[#ECEAE5] border-[#121316]'
                : 'bg-[#DFDDD7] text-[#333640] border-[#D0CDC4] hover:bg-[#D5D2CA]'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono font-semibold uppercase text-[#333640] mb-1.5">
            Document / Statement A:
          </label>
          <textarea
            value={docA}
            onChange={(e) => setDocA(e.target.value)}
            rows={4}
            className="w-full text-xs font-mono p-3 rounded-lg border border-[#CAC7BF] bg-[#F4F2EE] text-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316]"
          />
        </div>
        <div>
          <label className="block text-xs font-mono font-semibold uppercase text-[#333640] mb-1.5">
            Document / Telemetry B:
          </label>
          <textarea
            value={docB}
            onChange={(e) => setDocB(e.target.value)}
            rows={4}
            className="w-full text-xs font-mono p-3 rounded-lg border border-[#CAC7BF] bg-[#F4F2EE] text-[#121316] focus:outline-none focus:ring-1 focus:ring-[#121316]"
          />
        </div>
      </div>

      {/* Action */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleRunAnalysis}
          disabled={isAnalyzing}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#121316] text-[#ECEAE5] rounded-full hover:bg-[#2C2E35] transition-all cursor-pointer disabled:opacity-50"
        >
          {isAnalyzing ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
              <span>Running NLP Pipeline...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Cross-Examine with Veritas AI</span>
            </>
          )}
        </button>

        <span className="text-[11px] font-mono text-[#6A6D7C]">
          Pipeline: Ingestion → NLP Entity Tokenizer → Vector Cosine Diff
        </span>
      </div>

      {/* Analysis Output */}
      {result && (
        <div className="p-5 rounded-xl border border-[#CAC7BF] bg-[#E4E2DC] space-y-4 animate-in fade-in duration-300">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D5D2C9] pb-3">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase">
              <AlertTriangle className="w-4 h-4" />
              <span>Contradiction Detected (Score: {result.contradictionScore}%)</span>
            </div>
            <span className="text-xs font-mono bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded">
              {result.confidence}
            </span>
          </div>

          <div className="text-xs text-[#282B34] leading-relaxed">
            <strong className="font-semibold text-[#121316]">Core Finding: </strong>
            {result.findings}
          </div>

          {/* Timeline visualization */}
          <div>
            <p className="text-[11px] font-mono font-semibold uppercase text-[#555866] mb-2">
              Synthesized Incident Timeline:
            </p>
            <div className="space-y-2">
              {result.timeline.map((item: any, idx: number) => (
                <div key={idx} className="flex items-center gap-3 text-xs p-2 rounded bg-[#ECEAE5] border border-[#D5D2C9]">
                  <span className="font-mono font-bold text-[#121316] w-20 shrink-0">{item.time}</span>
                  <span className="text-[#333642] flex-1">{item.event}</span>
                  <span className="font-mono text-[10px] text-[#717483] px-1.5 py-0.5 rounded bg-[#DFDDD7]">
                    {item.source}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Entities */}
          <div>
            <p className="text-[11px] font-mono font-semibold uppercase text-[#555866] mb-1.5">
              Extracted Entities & Tokens:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {result.entitiesExtracted.map((ent: string) => (
                <span key={ent} className="text-[11px] font-mono px-2 py-0.5 bg-[#ECEAE5] border border-[#D0CDC4] rounded text-[#22242B]">
                  {ent}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Sub-component: Smart Reminder App Interactive Simulation
const SmartReminderDemo: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Prepare Veritas AI Architecture Deck for Tech Interview", priority: "CRITICAL", due: "10:30 AM", completed: false, category: "Interview" },
    { id: 2, title: "Review C++ Priority Queue & Graph Traversal (DSA)", priority: "HIGH", due: "01:00 PM", completed: false, category: "Study" },
    { id: 3, title: "Sync with Smart India Hackathon (SIH 2026) Project Team", priority: "MEDIUM", due: "04:30 PM", completed: true, category: "Hackathon" }
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newPriority, setNewPriority] = useState<"CRITICAL" | "HIGH" | "MEDIUM">("HIGH");
  const [alertFired, setAlertFired] = useState<string | null>(null);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTitle.trim(),
      priority: newPriority,
      due: "In 30 mins",
      completed: false,
      category: "Work"
    };
    setTasks([newTask, ...tasks]);
    setNewTitle("");
  };

  const handleToggle = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleSimulateAlert = (taskTitle: string) => {
    setAlertFired(`Simulated Reminder: "${taskTitle}" is scheduled now!`);
    setTimeout(() => setAlertFired(null), 4000);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#636675] mb-1">
          <Clock className="w-4 h-4 text-[#121316]" />
          <span>Productivity & Task Architecture</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#121316]">
          Smart Reminder Task Scheduler
        </h3>
        <p className="text-xs sm:text-sm text-[#555866] mt-1">
          Demonstrating Object-Oriented state management, adaptive priority scoring, and scheduled notification dispatches.
        </p>
      </div>

      {alertFired && (
        <div className="p-3.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 text-xs flex items-center justify-between animate-in fade-in">
          <div className="flex items-center gap-2 font-medium">
            <BellRing className="w-4 h-4 text-amber-700 animate-bounce" />
            <span>{alertFired}</span>
          </div>
          <button 
            onClick={() => setAlertFired(null)}
            className="font-mono text-[11px] underline cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Add Task Form */}
      <form onSubmit={handleAddTask} className="p-4 rounded-xl border border-[#CAC7BF] bg-[#DFDDD7] flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Add an interview obligation or task..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1 text-xs px-3.5 py-2.5 rounded-lg border border-[#CAC7BF] bg-[#ECEAE5] text-[#121316] placeholder:text-[#888B97] focus:outline-none focus:ring-1 focus:ring-[#121316]"
        />
        <select
          value={newPriority}
          onChange={(e: any) => setNewPriority(e.target.value)}
          className="text-xs px-3 py-2.5 rounded-lg border border-[#CAC7BF] bg-[#ECEAE5] text-[#121316] font-mono cursor-pointer"
        >
          <option value="CRITICAL">Critical Priority</option>
          <option value="HIGH">High Priority</option>
          <option value="MEDIUM">Medium Priority</option>
        </select>
        <button
          type="submit"
          className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#121316] text-[#ECEAE5] rounded-lg hover:bg-[#2C2E35] transition-colors cursor-pointer shrink-0 flex items-center justify-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </form>

      {/* Task List */}
      <div className="space-y-2.5">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
              task.completed
                ? 'bg-[#E3E1DB] border-[#D0CDC5] opacity-60'
                : 'bg-[#ECEAE5] border-[#CAC7BF] shadow-xs'
            }`}
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
                className="w-4 h-4 rounded border-[#9CA3AF] text-[#121316] cursor-pointer"
              />
              <div className="min-w-0 flex-1">
                <p className={`text-xs font-medium text-[#121316] truncate ${task.completed ? 'line-through text-[#666977]' : ''}`}>
                  {task.title}
                </p>
                <div className="flex items-center gap-2 mt-0.5 text-[11px] font-mono text-[#6A6D7C]">
                  <span>Due: {task.due}</span>
                  <span>·</span>
                  <span className={`px-1.5 py-0.2 rounded font-bold text-[10px] ${
                    task.priority === 'CRITICAL' ? 'bg-rose-100 text-rose-800' :
                    task.priority === 'HIGH' ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {task.priority}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleSimulateAlert(task.title)}
                className="px-2.5 py-1 text-[11px] font-mono bg-[#DFDDD7] hover:bg-[#D5D2CA] text-[#121316] rounded border border-[#CAC7BF] transition-colors cursor-pointer flex items-center gap-1"
                title="Simulate prompt trigger"
              >
                <BellRing className="w-3 h-3 text-[#121316]" />
                <span className="hidden sm:inline">Dispatch Alert</span>
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="p-1 text-[#787B8A] hover:text-rose-700 transition-colors cursor-pointer"
                aria-label="Delete"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sub-component: Data Pipeline / Multimodal Agent Demo
const DataPipelineDemo: React.FC<{ project: Project }> = ({ project }) => {
  const [recordsProcessed, setRecordsProcessed] = useState(100000);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleBenchmark = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setRecordsProcessed(prev => prev + 50000);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#636675] mb-1">
          <Database className="w-4 h-4 text-[#121316]" />
          <span>Computational Architecture</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#121316]">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#555866] mt-1">
          {project.tagline}
        </p>
      </div>

      <div className="p-5 rounded-xl border border-[#CAC7BF] bg-[#DFDDD7] space-y-4">
        <div className="flex items-center justify-between border-b border-[#D0CDC4] pb-3">
          <span className="text-xs font-bold uppercase text-[#121316]">Pipeline Status</span>
          <span className="text-xs font-mono bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded">
            OPERATIONAL · AWS / PYTHON
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-3 bg-[#ECEAE5] rounded border border-[#CAC7BF]">
            <span className="text-[10px] text-[#717483] block">Throughput</span>
            <strong className="text-sm font-bold text-[#121316]">4.2x Faster</strong>
          </div>
          <div className="p-3 bg-[#ECEAE5] rounded border border-[#CAC7BF]">
            <span className="text-[10px] text-[#717483] block">Records Streamed</span>
            <strong className="text-sm font-bold text-[#121316]">{recordsProcessed.toLocaleString()}</strong>
          </div>
          <div className="p-3 bg-[#ECEAE5] rounded border border-[#CAC7BF]">
            <span className="text-[10px] text-[#717483] block">Vector Accuracy</span>
            <strong className="text-sm font-bold text-[#121316]">99.8%</strong>
          </div>
          <div className="p-3 bg-[#ECEAE5] rounded border border-[#CAC7BF]">
            <span className="text-[10px] text-[#717483] block">Anomaly Rate</span>
            <strong className="text-sm font-bold text-[#121316]">0.02%</strong>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={handleBenchmark}
            disabled={isProcessing}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#121316] text-[#ECEAE5] rounded-full hover:bg-[#2C2E35] transition-colors cursor-pointer disabled:opacity-50"
          >
            {isProcessing ? "Benchmarking Stream..." : "Run Vectorized Ingestion Benchmark"}
          </button>
        </div>
      </div>
    </div>
  );
};
