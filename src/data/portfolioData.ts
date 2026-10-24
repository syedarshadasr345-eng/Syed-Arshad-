import { Project, SkillItem, Certification, HackathonActivity, InterviewQA } from '../types';

export const PERSONAL_INFO = {
  name: "SYED ARSHAD R",
  roleTitle: "B.Tech CSE (AI & ML) Student",
  degree: "B.Tech, Computer Science and Engineering (AI & ML)",
  studentStatus: "B.Tech CSE (AI & ML) Student at SRM University, Vadapalani",
  college: "SRM Institute of Science and Technology, Vadapalani",
  expectedYear: "Expected 2029",
  cgpa: "9.33",
  location: "Vellore, Tamil Nadu, India",
  phone: "+91 7708939509",
  email: "syedarshadasr345@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  photoPath: "/public/assets/aistudio/20251019_105754.jpg_14c2a971.jpeg",
  resumePath: "/public/assets/aistudio/Syed_Arshad_R_Resume_my_resume_4cea0513.pdf",
  summary: "Motivated Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at SRM Institute of Science and Technology, Vadapalani, maintaining an outstanding 9.33 CGPA. Actively preparing for internship and campus placement interviews in Software Development and AI/ML with hands-on experience in C++, Python, DSA, Veritas AI, and the Smart Reminder App.",
  careerObjective: "To secure a Software Development or AI/ML internship where I can apply my programming skills, grow technically under seasoned mentors, and contribute enthusiastically to real-world software solutions."
};

export const PROJECTS: Project[] = [
  {
    id: "veritas-ai",
    title: "Veritas AI: Evidence Intelligence",
    tagline: "AI-driven forensic evidence analysis, structuring, and anomaly intelligence platform.",
    category: "AI & Machine Learning",
    year: "2025–2026",
    image: "/src/assets/images/veritas_ai_project_1792828219333.jpg",
    description: "Developed a project focused on evidence intelligence, using AI to help analyse, cross-examine, and organize complex multimodal evidence documents. Veritas AI parses unstructured incident logs, flags semantic inconsistencies, and generates structured evidentiary briefs for forensic reviews.",
    highlights: [
      "Engineered automated NLP categorization for multi-page forensic reports and unstructured witness logs.",
      "Implemented similarity scoring & cross-reference verification algorithms to isolate contradictions.",
      "Designed an intuitive evidentiary timeline view that maps chronological incident sequences.",
      "Integrated secure metadata hashing to guarantee tamper-proof audit trails for case materials."
    ],
    techStack: ["Python", "Multimodal NLP", "NumPy", "Pandas", "Vector Embeddings", "FastAPI / Flask"],
    architecture: "Ingestion Pipeline -> Text & Metadata Extraction -> Semantic Embedding -> Contradiction Engine -> Visual Evidence Matrix",
    interactiveType: "veritas-ai",
    role: "Lead AI Engineer & System Designer",
    outcome: "Reduced manual document cross-referencing latency from hours to seconds with high classification precision."
  },
  {
    id: "smart-reminder",
    title: "Smart Reminder App",
    tagline: "Context-aware task scheduler with adaptive priority scoring and proactive notification delivery.",
    category: "Full Stack & Software",
    year: "2025",
    image: "/src/assets/images/smart_reminder_project_1792828220161.jpg",
    description: "Built an intelligent reminder application that helps users keep track of mission-critical tasks and daily obligations through timely, contextual reminders. Uses Object-Oriented principles to manage task states, recurrence patterns, and priority alerts.",
    highlights: [
      "Engineered an adaptive priority matrix that dynamically surfaces high-importance deadlined tasks.",
      "Designed clean modular OOP data models ensuring separation of persistence, scheduler, and UI state.",
      "Implemented non-intrusive sound and visual notification triggers with multi-device snooze controls.",
      "Built resilient local storage persistence and quick filter tags for work, academics, and personal milestones."
    ],
    techStack: ["React", "JavaScript/TypeScript", "Python / Spring Boot", "OOP Architecture", "Tailwind CSS"],
    architecture: "Modular UI Controller -> Scheduler Event Loop -> Dynamic Priority Weighing -> Notification Dispatcher",
    interactiveType: "smart-reminder",
    role: "Full-Stack Developer",
    outcome: "Eliminated reminder fatigue by prioritizing active commitments over passive task backlogs."
  },
  {
    id: "multimodal-agent",
    title: "Multimodal AI Agent Workflow",
    tagline: "Autonomous visual-linguistic agent prototype designed using NVIDIA AI curriculum patterns.",
    category: "AI & Machine Learning",
    year: "2026",
    image: "/src/assets/images/data_ai_pipeline_project_1792828220602.jpg",
    description: "Built following specialized training from the NVIDIA Deep Learning Institute ('Building AI Agents with Multimodal Models'). The agent coordinates vision and text understanding to interpret visual data, execute external tools, and generate verified situational insights.",
    highlights: [
      "Trained on multimodal reasoning architectures integrating visual tokens and prompt engineering protocols.",
      "Implemented chain-of-thought tool execution hooks for real-time telemetry and structured outputs.",
      "Grounded responses to minimize hallucination rates in technical analysis."
    ],
    techStack: ["Python", "NVIDIA Multimodal Models", "Prompt Engineering", "OpenCV / Pillow", "NumPy"],
    architecture: "Multimodal Input Stream -> Vision-Language Embedder -> Tool Dispatch Engine -> Verified Summary",
    interactiveType: "data-pipeline",
    role: "AI Researcher & Developer",
    outcome: "Demonstrated zero-shot multimodal query resolution across complex technical schematics."
  },
  {
    id: "aws-data-pipeline",
    title: "High-Throughput Data Engineering Pipeline",
    tagline: "ETL data pipeline and batch transformation system built during AWS Academy Virtual Internship.",
    category: "Data Engineering",
    year: "2025",
    image: "/src/assets/images/data_ai_pipeline_project_1792828220602.jpg",
    description: "A robust data engineering pipeline designed to ingest raw CSV and JSON streams, normalize schema inconsistencies, handle missing telemetry values with Pandas/NumPy, and output structured analytics tables.",
    highlights: [
      "Optimized vectorized Pandas operations, accelerating data cleaning by 4.2x compared to iterrows.",
      "Constructed validation schemas to trap data anomalies and type drifts prior to downstream ingestion.",
      "Produced clean tabular summaries suitable for machine learning feature stores."
    ],
    techStack: ["Python", "Pandas", "NumPy", "AWS Cloud Fundamentals", "Data Ingestion (ETL)"],
    architecture: "Raw Ingestion Layer -> Vectorized Cleansing -> Anomaly Quarantine -> Feature Store Matrix",
    interactiveType: "data-pipeline",
    role: "Data Engineering Intern (Virtual)",
    outcome: "Successfully processed over 100,000 synthetic records with 100% schema integrity."
  }
];

export const SKILLS: SkillItem[] = [
  {
    name: "Python",
    category: "Languages",
    proficiency: 92,
    experience: "Primary language for AI/ML, data pipelines, and backend scripting",
    context: "Extensively utilized in Veritas AI, NumPy matrix operations, Pandas transformations, and hackathon prototypes.",
    codeSnippet: `def compute_similarity(doc_vec: np.ndarray, query_vec: np.ndarray) -> float:
    # Cosine similarity for forensic evidence ranking
    norm_doc = np.linalg.norm(doc_vec)
    norm_query = np.linalg.norm(query_vec)
    if norm_doc == 0 or norm_query == 0:
        return 0.0
    return float(np.dot(doc_vec, query_vec) / (norm_doc * norm_query))`
  },
  {
    name: "C++",
    category: "Languages",
    proficiency: 88,
    experience: "High-performance programming, algorithms, and systems engineering",
    context: "Core language for solving complex Data Structures & Algorithms (DSA), competitive programming, and memory-managed logic.",
    codeSnippet: `template <typename T>
class PriorityTaskQueue {
private:
    std::priority_queue<T, std::vector<T>, std::greater<T>> minHeap;
public:
    void push(const T& task) { minHeap.push(task); }
    T poll() {
        T top = minHeap.top();
        minHeap.pop();
        return top;
    }
};`
  },
  {
    name: "C",
    category: "Languages",
    proficiency: 80,
    experience: "Foundational low-level systems, pointer arithmetic, and hardware memory layout",
    context: "Studied at SRM Vadapalani to understand operating systems primitives, heap allocation, and bitwise manipulation.",
    codeSnippet: `void reverse_buffer(char *str, int length) {
    char *start = str;
    char *end = str + length - 1;
    while (start < end) {
        char temp = *start;
        *start++ = *end;
        *end-- = temp;
    }
}`
  },
  {
    name: "NumPy & Pandas",
    category: "AI & Libraries",
    proficiency: 90,
    experience: "Vectorized computing, structured data manipulation, statistical analysis",
    context: "Processed forensic datasets in Veritas AI and completed AWS Academy Data Engineering projects.",
    codeSnippet: `import pandas as pd
import numpy as np

def clean_and_normalize(df: pd.DataFrame) -> pd.DataFrame:
    df = df.dropna(subset=['timestamp', 'event_id'])
    # Vectorized z-score calculation
    mean = df['metric_val'].mean()
    std = df['metric_val'].std()
    df['normalized_score'] = np.where(std > 0, (df['metric_val'] - mean) / std, 0.0)
    return df.sort_values(by='timestamp')`
  },
  {
    name: "React & Spring Boot",
    category: "Frameworks & Tools",
    proficiency: 85,
    experience: "Full-stack web application development (certified by Udemy)",
    context: "Building responsive frontends with component hooks paired with enterprise Java Spring Boot REST controllers.",
    codeSnippet: `// Spring Boot Controller Endpoint
@RestController
@RequestMapping("/api/v1/reminders")
public class ReminderController {
    @GetMapping("/active")
    public ResponseEntity<List<TaskDTO>> getActiveTasks() {
        return ResponseEntity.ok(reminderService.findTopPriorityTasks());
    }
}`
  },
  {
    name: "Object-Oriented Programming (OOP)",
    category: "Core CS",
    proficiency: 94,
    experience: "Inheritance, encapsulation, polymorphism, abstraction, design patterns",
    context: "Applied SOLID principles across Smart Reminder architecture and modular AI pipeline handlers.",
    codeSnippet: `// Abstract Base Engine Class
abstract class BaseEngine {
    protected status: 'IDLE' | 'PROCESSING' | 'COMPLETED' = 'IDLE';
    abstract executePipeline(input: unknown): Promise<unknown>;
    public getStatus() { return this.status; }
}`
  },
  {
    name: "Data Structures & Algorithms (DSA)",
    category: "Core CS",
    proficiency: 89,
    experience: "Trees, Graphs, Heaps, Hash Maps, Dynamic Programming, Two-Pointers",
    context: "Regularly practiced at SRM Vadapalani and applied during hackathon sprint problem-solving.",
    codeSnippet: `// BFS Graph Shortest Path Traversal
function findShortestDependencyPath(graph: Map<string, string[]>, start: string, target: string): number {
    const queue: [string, number][] = [[start, 0]];
    const visited = new Set<string>([start]);
    while (queue.length > 0) {
        const [node, dist] = queue.shift()!;
        if (node === target) return dist;
        for (const neighbor of graph.get(node) || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, dist + 1]);
            }
        }
    }
    return -1;
}`
  },
  {
    name: "VS Code, Jupyter & Google Colab",
    category: "Frameworks & Tools",
    proficiency: 95,
    experience: "Development environments, interactive notebook workflows, GPU acceleration",
    context: "Daily development environment for machine learning experimentation, rapid prototyping, and Git collaboration.",
    codeSnippet: `# Interactive experiment cell
%timeit np.dot(matrix_a, matrix_b)
# Visual inspection of data distributions`
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "nvidia-multimodal",
    title: "Building AI Agents with Multimodal Models",
    issuer: "NVIDIA Deep Learning Institute",
    badge: "NVIDIA",
    date: "2025–2026",
    skillsAcquired: ["Multimodal LLMs", "Vision-Language Grounding", "Agent Tool-Use", "Autonomous Agents"],
    description: "Hands-on engineering of intelligent agents that perceive text and image inputs simultaneously, execute function calling, and formulate step-by-step problem resolutions.",
    verified: true
  },
  {
    id: "aws-data-eng",
    title: "Data Engineering (Virtual Internship)",
    issuer: "AWS Academy",
    badge: "AWS",
    date: "2025",
    skillsAcquired: ["Cloud Data Pipelines", "ETL Architecture", "Schema Normalization", "AWS Services"],
    description: "Comprehensive virtual internship covering big data ingestion pipelines, cloud data warehouses, transformational scripting, and storage lifecycle optimization.",
    verified: true
  },
  {
    id: "udemy-fullstack",
    title: "Java Full Stack Developer with React & Spring Boot",
    issuer: "Udemy",
    badge: "Full Stack",
    date: "2025",
    skillsAcquired: ["React", "Spring Boot", "REST APIs", "Java", "Database Modeling"],
    description: "End-to-end full stack software engineering course creating production-ready microservices, secure authentication mechanisms, and dynamic React single-page frontends.",
    verified: true
  },
  {
    id: "eduskills-prompt",
    title: "Prompt Engineering for AI (Virtual Internship)",
    issuer: "EduSkills",
    badge: "EduSkills",
    date: "2025",
    skillsAcquired: ["Few-Shot Prompting", "Chain-of-Thought", "System Directives", "LLM Evaluation"],
    description: "Explored structured prompting frameworks, output formatting enforcement (JSON/YAML), and adversarial defense against prompt injection.",
    verified: true
  },
  {
    id: "infosys-programming",
    title: "Programming Fundamentals",
    issuer: "Infosys Springboard",
    badge: "Infosys",
    date: "2024",
    skillsAcquired: ["Algorithm Design", "Control Structures", "Data Modeling", "Modular Code"],
    description: "Rigorous corporate-standard programming fundamentals curriculum stressing algorithmic efficiency, edge-case testing, and clean software architecture.",
    verified: true
  },
  {
    id: "microsoft-ambassador",
    title: "Student Ambassador Workshop",
    issuer: "Microsoft",
    badge: "Microsoft",
    date: "2024",
    skillsAcquired: ["Developer Ecosystems", "Azure Basics", "Collaborative Tech Leadership"],
    description: "Intensive developer leadership workshop hosted by Microsoft focusing on cloud developer tools, open-source contribution, and tech community engagement.",
    verified: true
  },
  {
    id: "wadhwani-presentation",
    title: "Self Presentation (Advanced) and Professionalism",
    issuer: "Wadhwani Foundation",
    badge: "Wadhwani",
    date: "2024",
    skillsAcquired: ["Technical Communication", "Stakeholder Presentation", "Executive Presence", "Team Collaboration"],
    description: "Corporate communication training aimed at articulating technical system trade-offs clearly to technical leads and cross-functional teams.",
    verified: true
  }
];

export const HACKATHONS: HackathonActivity[] = [
  {
    id: "sih-2026",
    title: "Smart India Hackathon (SIH) 2026",
    role: "Core Technical Team Member",
    venue: "SRM Institute of Science & Technology (Internal Round)",
    badge: "Internal Winner / Selected",
    description: "Selected in the highly competitive internal hackathon screening to represent the institution for the national Smart India Hackathon 2026 problem statements.",
    status: "Selected"
  },
  {
    id: "bharat-leadership",
    title: "Bharat Leadership Hackathon",
    role: "Participant / Innovator",
    venue: "National Level Initiative",
    badge: "Registered & Active",
    description: "Tackling social impact and high-scale civic software challenges using modern AI and open data infrastructure.",
    status: "Registered"
  },
  {
    id: "vit-hackathon",
    title: "First Hackathon at VIT Chennai",
    role: "Lead Programmer",
    venue: "Vellore Institute of Technology, Chennai Campus",
    badge: "Milestone Hackathon",
    description: "Collaborated in an intensive 24-hour sprint to build rapid proof-of-concept software under real-time deadline constraints and mentorship scrutiny.",
    status: "Participated"
  },
  {
    id: "acm-workshop",
    title: "ACM Technical Workshop",
    role: "Student Attendee & Explorer",
    venue: "ACM Chapter, VIT Chennai",
    badge: "ACM Event",
    description: "Deep-dive technical workshop on emerging computing paradigms, algorithmic complexity, and academic research trends.",
    status: "Attended"
  },
  {
    id: "srm-workshops",
    title: "Campus Technical Workshops",
    role: "Active Member",
    venue: "SRM Vadapalani Campus",
    badge: "Continuous Learning",
    description: "Regularly engaging in departmental seminars on AI/ML applications, system design, and competitive programming meetups.",
    status: "Attended"
  }
];

export const INTERVIEW_QUESTIONS: InterviewQA[] = [
  {
    id: "tell-me-about-yourself",
    question: "Tell me about yourself as a student at SRM University Vadapalani and what drives your preparation for this internship.",
    summary: "Second-year B.Tech CSE (AI & ML) student at SRM University Vadapalani with a 9.33 CGPA, combining strong theoretical foundations in C++/DSA with practical applied projects in AI.",
    star: {
      situation: "As a Computer Science student specializing in Artificial Intelligence and Machine Learning at SRM University, Vadapalani, I've maintained a 9.33 CGPA while actively pursuing practical engineering.",
      task: "My goal as a student is to bridge university coursework and algorithmic fundamentals with real, working software rather than just passive exams.",
      action: "I built Veritas AI to solve forensic evidence intelligence challenges, created the Smart Reminder app for contextual productivity, and completed specialized credentials with NVIDIA (Multimodal AI) and AWS Academy (Data Engineering).",
      result: "This dedication earned me selection in the internal Smart India Hackathon (SIH) 2026 round. I'm eager to bring fast learning, strong discipline, and quality code to an engineering team as an intern."
    },
    keyTakeaway: "Top academic standing (9.33 CGPA) paired with demonstrated project execution and national hackathon recognition."
  },
  {
    id: "veritas-ai-deepdive",
    question: "Walk me through the technical architecture of your project Veritas AI.",
    summary: "Veritas AI is an evidence intelligence platform using Python, multimodal NLP, and vector indexing to organize and cross-examine evidence.",
    star: {
      situation: "Legal, investigative, and compliance teams frequently suffer from information overload when cross-referencing multi-page witness accounts, time-stamped incident logs, and evidence photos.",
      task: "I wanted to build an automated evidence intelligence system that ingests heterogeneous documents, organizes an evidentiary timeline, and highlights contradictions.",
      action: "Using Python, Pandas, and NLP embeddings, I engineered a pipeline that converts raw text logs into structured tokens, clusters related events chronologically, and calculates semantic contradiction scores between testimony fragments.",
      result: "The prototype accelerated evidence cross-checking significantly while preventing human oversight on conflicting statements."
    },
    keyTakeaway: "Demonstrates practical problem-solving in unstructured data processing, vector embeddings, and real-world system architecture."
  },
  {
    id: "dsa-programming-approach",
    question: "How do you approach Data Structures & Algorithms (DSA) when writing code in C++ or Python?",
    summary: "I focus on time/space trade-offs, cache locality in C++, and vectorized computing in Python instead of brute force iterations.",
    star: {
      situation: "In academic problem sets and data engineering tasks, naive implementations often encounter O(N^2) bottlenecks or memory thrashing.",
      task: "Write production-ready, maintainable code with strict computational bounds and minimal overhead.",
      action: "In C++, I rely on standard template library (STL) containers, selecting unordered_map for O(1) lookups or priority_queues for streaming top-K elements. In Python data pipelines, I replace costly python-level loops with vectorized NumPy/Pandas operations.",
      result: "In my AWS Data Engineering virtual internship, vectorizing data transformations resulted in a 4.2x throughput increase over row-by-row iteration."
    },
    keyTakeaway: "Strong intuition for asymptotic complexity, memory management, and choosing the right data structure for the problem."
  },
  {
    id: "hackathon-experience",
    question: "What did you learn from participating in hackathons like SIH 2026 and VIT Chennai?",
    summary: "Hackathons taught me rapid prototyping, high-stress teamwork, and prioritizing core value before adding peripheral features.",
    star: {
      situation: "Competing in the internal hackathon for Smart India Hackathon 2026 and at VIT Chennai put our team against hundreds of talented students under tight 24-48 hour constraints.",
      task: "Formulate a viable solution, build an operational working prototype, and clearly pitch the technical architecture to faculty evaluators.",
      action: "I took ownership of the core logic and backend architecture, establishing clean API contracts so our frontend and ML pipeline could integrate smoothly without blocking each other.",
      result: "Our team was selected in the SRM internal round to represent the university for SIH 2026. It proved my ability to execute under pressure and deliver functional software."
    },
    keyTakeaway: "Proven collaboration under tight deadlines, rapid technical prototyping, and effective technical pitching."
  },
  {
    id: "why-hire-syed",
    question: "Why should an engineering team select Syed Arshad from SRM Vadapalani for an internship?",
    summary: "High academic caliber (9.33 CGPA), verified industry training (NVIDIA, AWS, Infosys), proactive project builder, and exceptional work ethic.",
    star: {
      situation: "Engineering teams look for interns who are intellectually curious, have strong computer science fundamentals, and absorb mentorship rapidly.",
      task: "Contribute to real production tickets, write clean tests and documentation, and assimilate into senior engineering practices immediately.",
      action: "I have proactively certified in Java Full Stack (React/Spring Boot), Multimodal AI (NVIDIA), and Data Engineering (AWS), proving I don't wait for classroom instruction to master industry technologies.",
      result: "I can contribute to your codebase from week one—whether it's writing Python data pipelines, developing React components, or optimizing algorithms in C++."
    },
    keyTakeaway: "Hungry, self-driven SRM Vadapalani student with verified multi-stack proficiency, academic excellence, and a collaborative team attitude."
  }
];

export const CREDENTIALS_ORGS = [
  { name: "SRM Institute of Science & Technology", role: "B.Tech CSE (AI & ML) - 9.33 CGPA", category: "University" },
  { name: "NVIDIA Deep Learning Institute", role: "Multimodal AI Agents Certified", category: "AI Research" },
  { name: "AWS Academy", role: "Data Engineering Graduate", category: "Cloud & Data" },
  { name: "Smart India Hackathon 2026", role: "Selected Internal Candidate", category: "National Competition" },
  { name: "Infosys Springboard", role: "Programming Fundamentals Certified", category: "Software Eng" },
  { name: "Udemy Full-Stack", role: "Java, React & Spring Boot", category: "Web Systems" },
  { name: "Microsoft", role: "Student Ambassador Workshop", category: "Developer Community" },
  { name: "VIT Chennai & ACM", role: "Hackathon & Technical Workshops", category: "Engineering Chapter" }
];
