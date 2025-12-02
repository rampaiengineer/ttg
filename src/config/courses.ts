export type CourseSlug =
  | "basic-frontend"
  | "react-advanced"
  | "vue-mastery"
  | "angular-fundamentals"
  | "python-backend"
  | "nodejs-backend"
  | "java-spring-boot"
  | "django-rest-api"
  | "full-stack-developer"
  | "mern-stack"
  | "mean-stack"
  | "lamp-stack"
  | "genai-mastery"
  | "machine-learning"
  | "deep-learning"
  | "data-science"
  | "ai-for-business"
  | "prompt-engineering"
  | "aws-cloud"
  | "docker-kubernetes"
  | "devops-engineering"
  | "mobile-react-native"
  | "flutter-development";

export interface SyllabusModule {
  title: string;
  weeks: string;
  points: string[];
}

export interface Course {
  slug: CourseSlug;
  name: string;
  shortTag: string;
  summary: string;
  duration: string;
  mode: string;
  level: string;
  highlight: string;
  category: "frontend" | "backend" | "fullstack" | "ai" | "cloud";
  overview: string;
  whyThisCourse: string[];
  syllabus: SyllabusModule[];
  tools: string[];
  projects: string[];
  mentors: { name: string; role: string; experience: string }[];
  pricingNote: string;
  installmentAvailable: boolean;
  faqs: { question: string; answer: string }[];
}

export const courses: Course[] = [
  // FRONTEND COURSES
  {
    slug: "basic-frontend",
    name: "Frontend Development Fundamentals",
    shortTag: "HTML · CSS · JavaScript",
    summary: "Master the core building blocks of modern web development from scratch.",
    duration: "3-4 months",
    mode: "Hybrid",
    level: "Beginner",
    highlight: "Perfect starting point for aspiring web developers",
    category: "frontend",
    overview: "Learn HTML5, CSS3, JavaScript, responsive design, and modern UI/UX principles.",
    whyThisCourse: [
      "Zero-to-one course for complete beginners",
      "Build real portfolio websites",
      "Strong foundation for React/Vue/Angular",
    ],
    syllabus: [
      {
        title: "HTML & Web Fundamentals",
        weeks: "Weeks 1-2",
        points: ["Semantic HTML", "Forms & Accessibility", "SEO Basics"],
      },
      {
        title: "Modern CSS",
        weeks: "Weeks 3-5",
        points: ["Flexbox & Grid", "Responsive Design", "Tailwind CSS"],
      },
      {
        title: "JavaScript Essentials",
        weeks: "Weeks 6-8",
        points: ["DOM Manipulation", "ES6+ Features", "Fetch API"],
      },
    ],
    tools: ["VS Code", "HTML5", "CSS3", "JavaScript", "Git"],
    projects: ["Portfolio Website", "Landing Pages", "Interactive Forms"],
    mentors: [{ name: "Ram", role: "Frontend Mentor", experience: "5+ years" }],
    pricingNote: "Student-friendly pricing with installments",
    installmentAvailable: true,
    faqs: [{ question: "Prerequisites?", answer: "None. Complete beginners welcome." }],
  },
  {
    slug: "react-advanced",
    name: "Advanced React & Modern Frontend",
    shortTag: "React 18 · Next.js · TypeScript",
    summary: "Master React ecosystem with hooks, state management, and production patterns.",
    duration: "4-5 months",
    mode: "Hybrid",
    level: "Intermediate",
    highlight: "Build scalable React applications like a pro",
    category: "frontend",
    overview: "Deep dive into React 18, Next.js 14, TypeScript, Redux, and performance optimization.",
    whyThisCourse: [
      "Latest React patterns and best practices",
      "TypeScript for type-safe applications",
      "Production-grade project experience",
    ],
    syllabus: [
      {
        title: "React Fundamentals & Hooks",
        weeks: "Weeks 1-4",
        points: ["Components & Props", "useState, useEffect, useContext", "Custom Hooks"],
      },
      {
        title: "Next.js & Server Components",
        weeks: "Weeks 5-8",
        points: ["App Router", "Server/Client Components", "API Routes"],
      },
      {
        title: "State Management & Testing",
        weeks: "Weeks 9-12",
        points: ["Redux Toolkit", "React Query", "Jest & Testing Library"],
      },
    ],
    tools: ["React 18", "Next.js 14", "TypeScript", "Redux", "Tailwind CSS"],
    projects: ["E-commerce Frontend", "Social Dashboard", "SaaS Application"],
    mentors: [{ name: "Ram", role: "React Expert", experience: "6+ years" }],
    pricingNote: "Premium course with placement support",
    installmentAvailable: true,
    faqs: [{ question: "Need React basics?", answer: "Yes, basic React knowledge required." }],
  },
  {
    slug: "vue-mastery",
    name: "Vue.js Complete Guide",
    shortTag: "Vue 3 · Composition API · Pinia",
    summary: "Master Vue.js 3 with Composition API, Pinia state management, and Nuxt.js.",
    duration: "3-4 months",
    mode: "Online + Weekend Labs",
    level: "Beginner",
    highlight: "Perfect for developers wanting modern Vue skills",
    category: "frontend",
    overview: "Complete Vue.js training from basics to advanced with real-world projects.",
    whyThisCourse: [
      "Vue 3 Composition API mastery",
      "Nuxt.js for production apps",
      "Growing demand for Vue developers",
    ],
    syllabus: [
      {
        title: "Vue Fundamentals",
        weeks: "Weeks 1-3",
        points: ["Vue Basics", "Directives & Data Binding", "Components"],
      },
      {
        title: "Composition API & Pinia",
        weeks: "Weeks 4-6",
        points: ["Composition API", "State Management", "Vue Router"],
      },
      {
        title: "Nuxt.js & Deployment",
        weeks: "Weeks 7-10",
        points: ["Nuxt 3 Basics", "SSR & SSG", "Production Deployment"],
      },
    ],
    tools: ["Vue 3", "Nuxt.js", "Pinia", "Vite", "TypeScript"],
    projects: ["Blog Platform", "Admin Dashboard", "Real-time Chat"],
    mentors: [{ name: "Ram", role: "Vue Expert", experience: "4+ years" }],
    pricingNote: "Affordable with flexible payment options",
    installmentAvailable: true,
    faqs: [{ question: "Vue vs React?", answer: "Vue is more beginner-friendly with gentler learning curve." }],
  },
  {
    slug: "angular-fundamentals",
    name: "Angular Complete Course",
    shortTag: "Angular 17 · TypeScript · RxJS",
    summary: "Master Angular framework for enterprise-grade web applications.",
    duration: "4-5 months",
    mode: "Weekend Intensive",
    level: "Intermediate",
    highlight: "Enterprise-level framework skills",
    category: "frontend",
    overview: "Complete Angular training with TypeScript, RxJS, and enterprise patterns.",
    whyThisCourse: [
      "High demand in enterprise companies",
      "Strong TypeScript foundation",
      "Complete framework ecosystem",
    ],
    syllabus: [
      {
        title: "Angular Basics",
        weeks: "Weeks 1-4",
        points: ["Components & Modules", "Data Binding", "Directives & Pipes"],
      },
      {
        title: "Advanced Concepts",
        weeks: "Weeks 5-8",
        points: ["Services & DI", "RxJS & Observables", "State Management"],
      },
      {
        title: "Testing & Deployment",
        weeks: "Weeks 9-12",
        points: ["Unit Testing", "E2E Testing", "Production Build"],
      },
    ],
    tools: ["Angular 17", "TypeScript", "RxJS", "NgRx", "Jasmine"],
    projects: ["Enterprise Dashboard", "CRM System", "Inventory Management"],
    mentors: [{ name: "Ram", role: "Angular Specialist", experience: "5+ years" }],
    pricingNote: "Professional course for serious developers",
    installmentAvailable: true,
    faqs: [{ question: "Why Angular?", answer: "Best for large enterprise applications with strong structure." }],
  },

  // BACKEND COURSES
  {
    slug: "python-backend",
    name: "Python Backend Development",
    shortTag: "Python · Django · FastAPI",
    summary: "Build scalable REST APIs and backend services with Python.",
    duration: "4-5 months",
    mode: "Hybrid",
    level: "Beginner",
    highlight: "Most beginner-friendly backend language",
    category: "backend",
    overview: "Master Python programming, Django/FastAPI, databases, and API development.",
    whyThisCourse: [
      "Python's growing popularity",
      "Easy to learn, powerful to use",
      "High demand for Python developers",
    ],
    syllabus: [
      {
        title: "Python Fundamentals",
        weeks: "Weeks 1-3",
        points: ["Python Syntax", "OOP Concepts", "File Handling"],
      },
      {
        title: "Web APIs",
        weeks: "Weeks 4-8",
        points: ["Django/FastAPI", "REST Principles", "Authentication"],
      },
      {
        title: "Databases & Deployment",
        weeks: "Weeks 9-12",
        points: ["PostgreSQL", "ORM", "Docker Deployment"],
      },
    ],
    tools: ["Python 3", "Django", "FastAPI", "PostgreSQL", "Docker"],
    projects: ["REST API", "E-commerce Backend", "Booking System"],
    mentors: [{ name: "Ram", role: "Python Expert", experience: "7+ years" }],
    pricingNote: "Affordable pricing with EMI options",
    installmentAvailable: true,
    faqs: [{ question: "Prerequisites?", answer: "Basic programming knowledge helpful but not required." }],
  },
  {
    slug: "nodejs-backend",
    name: "Node.js Backend Engineering",
    shortTag: "Node.js · Express · MongoDB",
    summary: "Build high-performance backend applications with JavaScript.",
    duration: "4 months",
    mode: "Online + Weekend",
    level: "Intermediate",
    highlight: "JavaScript full-stack capability",
    category: "backend",
    overview: "Master Node.js, Express.js, MongoDB, authentication, and microservices.",
    whyThisCourse: [
      "Same language for frontend & backend",
      "High performance & scalability",
      "Huge ecosystem & community",
    ],
    syllabus: [
      {
        title: "Node.js Basics",
        weeks: "Weeks 1-3",
        points: ["Node Fundamentals", "Async Programming", "NPM & Modules"],
      },
      {
        title: "Express & APIs",
        weeks: "Weeks 4-7",
        points: ["Express Framework", "RESTful APIs", "Middleware"],
      },
      {
        title: "Databases & Security",
        weeks: "Weeks 8-12",
        points: ["MongoDB", "JWT Authentication", "API Security"],
      },
    ],
    tools: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
    projects: ["API Gateway", "Real-time Chat", "Payment Integration"],
    mentors: [{ name: "Ram", role: "Node.js Expert", experience: "6+ years" }],
    pricingNote: "Professional training with job support",
    installmentAvailable: true,
    faqs: [{ question: "Node vs Python?", answer: "Node.js is faster, Python is easier to learn." }],
  },
  {
    slug: "java-spring-boot",
    name: "Java Spring Boot Mastery",
    shortTag: "Java · Spring Boot · Microservices",
    summary: "Enterprise Java development with Spring Boot framework.",
    duration: "5-6 months",
    mode: "Weekend Intensive",
    level: "Intermediate",
    highlight: "Enterprise-grade backend skills",
    category: "backend",
    overview: "Complete Spring Boot training with microservices, security, and cloud deployment.",
    whyThisCourse: [
      "Highest demand in enterprise companies",
      "Strong career growth potential",
      "Robust and battle-tested framework",
    ],
    syllabus: [
      {
        title: "Java Fundamentals",
        weeks: "Weeks 1-4",
        points: ["Java Basics", "OOP", "Collections"],
      },
      {
        title: "Spring Boot",
        weeks: "Weeks 5-10",
        points: ["Spring Core", "Spring MVC", "Spring Data JPA"],
      },
      {
        title: "Microservices & Cloud",
        weeks: "Weeks 11-16",
        points: ["Microservices", "Spring Cloud", "Kubernetes"],
      },
    ],
    tools: ["Java 17", "Spring Boot", "MySQL", "Docker", "Kubernetes"],
    projects: ["Microservices App", "Banking System", "E-commerce Platform"],
    mentors: [{ name: "Ram", role: "Java Architect", experience: "8+ years" }],
    pricingNote: "Premium enterprise-level course",
    installmentAvailable: true,
    faqs: [{ question: "Why Java?", answer: "Java dominates enterprise backend development globally." }],
  },
  {
    slug: "django-rest-api",
    name: "Django REST API Development",
    shortTag: "Django · DRF · PostgreSQL",
    summary: "Build production-ready REST APIs with Django REST Framework.",
    duration: "3-4 months",
    mode: "Online",
    level: "Beginner",
    highlight: "Rapid API development with Python",
    category: "backend",
    overview: "Master Django and Django REST Framework for building robust APIs.",
    whyThisCourse: [
      "Batteries-included framework",
      "Rapid development capability",
      "Excellent for startups",
    ],
    syllabus: [
      {
        title: "Django Basics",
        weeks: "Weeks 1-3",
        points: ["Django Setup", "Models & ORM", "Admin Panel"],
      },
      {
        title: "Django REST Framework",
        weeks: "Weeks 4-7",
        points: ["Serializers", "ViewSets", "Authentication"],
      },
      {
        title: "Advanced Topics",
        weeks: "Weeks 8-10",
        points: ["Permissions", "Throttling", "Testing & Deployment"],
      },
    ],
    tools: ["Django", "DRF", "PostgreSQL", "Celery", "Redis"],
    projects: ["Blog API", "Social Network API", "E-learning Platform"],
    mentors: [{ name: "Ram", role: "Django Expert", experience: "5+ years" }],
    pricingNote: "Great value for Python developers",
    installmentAvailable: true,
    faqs: [{ question: "Django vs Flask?", answer: "Django is full-featured, Flask is minimalist." }],
  },

  // FULL STACK COURSES
  {
    slug: "full-stack-developer",
    name: "Full-Stack Developer Program (MERN)",
    shortTag: "MongoDB · Express · React · Node.js",
    summary: "Complete full-stack development with MERN stack.",
    duration: "6 months",
    mode: "Hybrid",
    level: "Beginner",
    highlight: "Most popular full-stack combination",
    category: "fullstack",
    overview: "Master the complete MERN stack from frontend to backend and deployment.",
    whyThisCourse: [
      "Single language (JavaScript) throughout",
      "High industry demand",
      "Build complete applications",
    ],
    syllabus: [
      {
        title: "Frontend with React",
        weeks: "Weeks 1-8",
        points: ["HTML/CSS/JS", "React Fundamentals", "State Management"],
      },
      {
        title: "Backend with Node.js",
        weeks: "Weeks 9-16",
        points: ["Node.js & Express", "MongoDB", "Authentication"],
      },
      {
        title: "Full-Stack Integration",
        weeks: "Weeks 17-24",
        points: ["API Integration", "Deployment", "Capstone Project"],
      },
    ],
    tools: ["React", "Node.js", "Express", "MongoDB", "Next.js"],
    projects: ["Social Media App", "E-commerce Platform", "Task Management"],
    mentors: [{ name: "Ram", role: "Full-Stack Mentor", experience: "7+ years" }],
    pricingNote: "Comprehensive program with placement support",
    installmentAvailable: true,
    faqs: [{ question: "Job ready?", answer: "Yes, with 3+ portfolio projects and interview prep." }],
  },
  {
    slug: "mern-stack",
    name: "MERN Stack Advanced",
    shortTag: "MERN · GraphQL · TypeScript",
    summary: "Advanced MERN stack with modern tools and patterns.",
    duration: "5 months",
    mode: "Weekend Intensive",
    level: "Intermediate",
    highlight: "Advanced full-stack patterns",
    category: "fullstack",
    overview: "Advanced MERN development with GraphQL, TypeScript, and microservices.",
    whyThisCourse: [
      "Modern tech stack",
      "Production-grade patterns",
      "Scalable architecture",
    ],
    syllabus: [
      {
        title: "Advanced React",
        weeks: "Weeks 1-6",
        points: ["TypeScript", "Next.js", "Performance"],
      },
      {
        title: "GraphQL & Apollo",
        weeks: "Weeks 7-12",
        points: ["GraphQL Basics", "Apollo Server/Client", "Real-time"],
      },
      {
        title: "Microservices",
        weeks: "Weeks 13-16",
        points: ["Service Architecture", "Message Queues", "Docker"],
      },
    ],
    tools: ["React", "TypeScript", "GraphQL", "Apollo", "Docker"],
    projects: ["Real-time Dashboard", "Microservices App", "SaaS Platform"],
    mentors: [{ name: "Ram", role: "Senior Architect", experience: "10+ years" }],
    pricingNote: "Premium advanced course",
    installmentAvailable: true,
    faqs: [{ question: "Prerequisites?", answer: "Solid understanding of basic MERN stack required." }],
  },
  {
    slug: "mean-stack",
    name: "MEAN Stack Development",
    shortTag: "MongoDB · Express · Angular · Node.js",
    summary: "Enterprise full-stack development with Angular frontend.",
    duration: "6 months",
    mode: "Hybrid",
    level: "Intermediate",
    highlight: "Enterprise-focused full-stack",
    category: "fullstack",
    overview: "Complete MEAN stack training for enterprise applications.",
    whyThisCourse: [
      "Angular's enterprise popularity",
      "Strong TypeScript foundation",
      "Structured development approach",
    ],
    syllabus: [
      {
        title: "Frontend with Angular",
        weeks: "Weeks 1-10",
        points: ["Angular Basics", "TypeScript", "RxJS"],
      },
      {
        title: "Backend with Node.js",
        weeks: "Weeks 11-18",
        points: ["Express APIs", "MongoDB", "Security"],
      },
      {
        title: "Integration & Deployment",
        weeks: "Weeks 19-24",
        points: ["Full-Stack Integration", "Testing", "DevOps"],
      },
    ],
    tools: ["Angular", "Node.js", "Express", "MongoDB", "TypeScript"],
    projects: ["Enterprise CRM", "HR Management", "Inventory System"],
    mentors: [{ name: "Ram", role: "MEAN Specialist", experience: "7+ years" }],
    pricingNote: "Enterprise-level training",
    installmentAvailable: true,
    faqs: [{ question: "MEAN vs MERN?", answer: "MEAN uses Angular, MERN uses React. Both excellent." }],
  },
  {
    slug: "lamp-stack",
    name: "LAMP Stack Development",
    shortTag: "Linux · Apache · MySQL · PHP",
    summary: "Traditional web development with PHP and MySQL.",
    duration: "4 months",
    mode: "Online",
    level: "Beginner",
    highlight: "Time-tested web stack",
    category: "fullstack",
    overview: "Master PHP, MySQL, and Laravel for web application development.",
    whyThisCourse: [
      "Still widely used globally",
      "WordPress/Laravel demand",
      "Great for freelancing",
    ],
    syllabus: [
      {
        title: "PHP Fundamentals",
        weeks: "Weeks 1-4",
        points: ["PHP Basics", "OOP PHP", "MySQL"],
      },
      {
        title: "Laravel Framework",
        weeks: "Weeks 5-10",
        points: ["Laravel Basics", "Eloquent ORM", "Blade Templates"],
      },
      {
        title: "Projects & Deployment",
        weeks: "Weeks 11-14",
        points: ["E-commerce", "CMS", "Server Deployment"],
      },
    ],
    tools: ["PHP 8", "Laravel", "MySQL", "Apache", "Linux"],
    projects: ["Blog System", "E-commerce Site", "Custom CMS"],
    mentors: [{ name: "Ram", role: "PHP Expert", experience: "6+ years" }],
    pricingNote: "Budget-friendly with great ROI",
    installmentAvailable: true,
    faqs: [{ question: "Is PHP relevant?", answer: "Yes! Powers 77% of websites including WordPress." }],
  },

  // AI & ML COURSES
  {
    slug: "genai-mastery",
    name: "GenAI Mastery Program",
    shortTag: "LLMs · RAG · AI Agents",
    summary: "Build production-grade AI applications with LLMs and agents.",
    duration: "6 months",
    mode: "Hybrid",
    level: "Intermediate",
    highlight: "Cutting-edge AI development",
    category: "ai",
    overview: "Master GenAI, LLMs, RAG pipelines, and autonomous AI agents.",
    whyThisCourse: [
      "Hottest tech skill in 2024",
      "Build real AI products",
      "Future-proof your career",
    ],
    syllabus: [
      {
        title: "LLM Fundamentals",
        weeks: "Weeks 1-4",
        points: ["AI Basics", "Prompt Engineering", "OpenAI API"],
      },
      {
        title: "RAG & Vector DBs",
        weeks: "Weeks 5-10",
        points: ["RAG Architecture", "Vector Databases", "LangChain"],
      },
      {
        title: "AI Agents",
        weeks: "Weeks 11-16",
        points: ["Autonomous Agents", "Tool Use", "Production Deployment"],
      },
    ],
    tools: ["OpenAI", "LangChain", "Pinecone", "Next.js", "Python"],
    projects: ["AI Chatbot", "Knowledge Assistant", "Automation Agent"],
    mentors: [{ name: "Ram", role: "AI Engineer", experience: "5+ years" }],
    pricingNote: "Premium AI course with high ROI",
    installmentAvailable: true,
    faqs: [{ question: "Prerequisites?", answer: "Basic programming; Python recommended." }],
  },
  {
    slug: "machine-learning",
    name: "Machine Learning Complete Course",
    shortTag: "Python · Scikit-learn · ML Algorithms",
    summary: "Master machine learning algorithms and real-world applications.",
    duration: "5 months",
    mode: "Weekend",
    level: "Intermediate",
    highlight: "Core ML skills for data science",
    category: "ai",
    overview: "Comprehensive ML training covering supervised, unsupervised, and reinforcement learning.",
    whyThisCourse: [
      "Foundation for AI careers",
      "High demand skill",
      "Hands-on projects",
    ],
    syllabus: [
      {
        title: "ML Fundamentals",
        weeks: "Weeks 1-5",
        points: ["Python/NumPy/Pandas", "Statistics", "Data Preprocessing"],
      },
      {
        title: "Algorithms",
        weeks: "Weeks 6-12",
        points: ["Regression", "Classification", "Clustering"],
      },
      {
        title: "Advanced Topics",
        weeks: "Weeks 13-16",
        points: ["Ensemble Methods", "Model Deployment", "MLOps"],
      },
    ],
    tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
    projects: ["Price Prediction", "Customer Segmentation", "Fraud Detection"],
    mentors: [{ name: "Ram", role: "ML Engineer", experience: "6+ years" }],
    pricingNote: "Comprehensive ML training",
    installmentAvailable: true,
    faqs: [{ question: "Math required?", answer: "Basic statistics helpful; we cover essentials." }],
  },
  {
    slug: "deep-learning",
    name: "Deep Learning & Neural Networks",
    shortTag: "TensorFlow · PyTorch · CNN · RNN",
    summary: "Master deep learning with TensorFlow and PyTorch.",
    duration: "5-6 months",
    mode: "Online + Labs",
    level: "Advanced",
    highlight: "Advanced AI/ML specialization",
    category: "ai",
    overview: "Complete deep learning course covering CNNs, RNNs, GANs, and Transformers.",
    whyThisCourse: [
      "Cutting-edge AI technology",
      "Research & industry applications",
      "Computer vision & NLP skills",
    ],
    syllabus: [
      {
        title: "Neural Network Basics",
        weeks: "Weeks 1-4",
        points: ["Perceptrons", "Backpropagation", "TensorFlow/PyTorch"],
      },
      {
        title: "CNN & Computer Vision",
        weeks: "Weeks 5-10",
        points: ["Convolutional Networks", "Image Classification", "Object Detection"],
      },
      {
        title: "RNN & NLP",
        weeks: "Weeks 11-16",
        points: ["Recurrent Networks", "LSTMs", "Transformers"],
      },
    ],
    tools: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "HuggingFace"],
    projects: ["Image Classifier", "Object Detection", "Chatbot"],
    mentors: [{ name: "Ram", role: "DL Researcher", experience: "7+ years" }],
    pricingNote: "Advanced specialization course",
    installmentAvailable: true,
    faqs: [{ question: "Prerequisites?", answer: "ML fundamentals and Python required." }],
  },
  {
    slug: "data-science",
    name: "Data Science Complete Program",
    shortTag: "Python · Statistics · ML · Visualization",
    summary: "Complete data science training from basics to advanced analytics.",
    duration: "6 months",
    mode: "Weekend Intensive",
    level: "Beginner",
    highlight: "Most comprehensive data science course",
    category: "ai",
    overview: "Full data science curriculum covering statistics, ML, visualization, and deployment.",
    whyThisCourse: [
      "Complete career transition program",
      "Business + technical skills",
      "High-paying career path",
    ],
    syllabus: [
      {
        title: "Python & Statistics",
        weeks: "Weeks 1-6",
        points: ["Python Programming", "Statistics", "Probability"],
      },
      {
        title: "Data Analysis & ML",
        weeks: "Weeks 7-16",
        points: ["Pandas", "Machine Learning", "Model Selection"],
      },
      {
        title: "Advanced & Deployment",
        weeks: "Weeks 17-24",
        points: ["Deep Learning", "Big Data", "Model Deployment"],
      },
    ],
    tools: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "SQL"],
    projects: ["Business Analytics", "Predictive Modeling", "Dashboard"],
    mentors: [{ name: "Ram", role: "Data Scientist", experience: "8+ years" }],
    pricingNote: "Complete career program with placement",
    installmentAvailable: true,
    faqs: [{ question: "Non-tech background?", answer: "Yes! We start from basics." }],
  },
  {
    slug: "ai-for-business",
    name: "AI for Business Leaders",
    shortTag: "Strategy · No-Code · Automation",
    summary: "AI strategy and implementation for business professionals.",
    duration: "8 weeks",
    mode: "Weekend",
    level: "Beginner",
    highlight: "Non-technical AI course",
    category: "ai",
    overview: "Learn to leverage AI for business without coding. Strategy, tools, and implementation.",
    whyThisCourse: [
      "No coding required",
      "Business-focused approach",
      "Immediate ROI",
    ],
    syllabus: [
      {
        title: "AI for Business",
        weeks: "Weeks 1-2",
        points: ["AI Basics", "Use Cases", "ROI Analysis"],
      },
      {
        title: "No-Code Tools",
        weeks: "Weeks 3-5",
        points: ["ChatGPT for Business", "Zapier Automation", "AI Tools"],
      },
      {
        title: "Implementation",
        weeks: "Weeks 6-8",
        points: ["AI Strategy", "Vendor Selection", "Roadmap"],
      },
    ],
    tools: ["ChatGPT", "Zapier", "Make", "Notion AI", "Various No-Code"],
    projects: ["AI Roadmap", "Automation Workflow", "Business Process"],
    mentors: [{ name: "Ram", role: "AI Consultant", experience: "5+ years" }],
    pricingNote: "Corporate-friendly pricing",
    installmentAvailable: false,
    faqs: [{ question: "For non-tech?", answer: "Perfect for business professionals!" }],
  },
  {
    slug: "prompt-engineering",
    name: "Prompt Engineering Mastery",
    shortTag: "Prompt Design · GPT · Claude",
    summary: "Master the art of prompt engineering for optimal AI outputs.",
    duration: "6 weeks",
    mode: "Online",
    level: "Beginner",
    highlight: "Essential AI skill for everyone",
    category: "ai",
    overview: "Learn advanced prompting techniques for ChatGPT, Claude, and other LLMs.",
    whyThisCourse: [
      "Quick skill to learn",
      "Immediate productivity boost",
      "Foundation for AI work",
    ],
    syllabus: [
      {
        title: "Prompt Basics",
        weeks: "Weeks 1-2",
        points: ["Prompt Anatomy", "Best Practices", "Common Patterns"],
      },
      {
        title: "Advanced Techniques",
        weeks: "Weeks 3-4",
        points: ["Chain of Thought", "Few-Shot Learning", "Prompt Chaining"],
      },
      {
        title: "Applications",
        weeks: "Weeks 5-6",
        points: ["Coding", "Writing", "Analysis"],
      },
    ],
    tools: ["ChatGPT", "Claude", "Gemini", "Various LLMs"],
    projects: ["Prompt Library", "Automation System", "Content Generator"],
    mentors: [{ name: "Ram", role: "Prompt Expert", experience: "3+ years" }],
    pricingNote: "Most affordable AI course",
    installmentAvailable: false,
    faqs: [{ question: "Worth it?", answer: "Yes! Multiplies your productivity 10x." }],
  },

  // CLOUD & DEVOPS COURSES
  {
    slug: "aws-cloud",
    name: "AWS Cloud Practitioner to Architect",
    shortTag: "AWS · EC2 · S3 · Lambda",
    summary: "Master Amazon Web Services from basics to solutions architect level.",
    duration: "4 months",
    mode: "Weekend",
    level: "Beginner",
    highlight: "Most popular cloud platform",
    category: "cloud",
    overview: "Complete AWS training covering compute, storage, networking, and serverless.",
    whyThisCourse: [
      "AWS dominates cloud market",
      "High-paying certifications",
      "Remote job opportunities",
    ],
    syllabus: [
      {
        title: "AWS Fundamentals",
        weeks: "Weeks 1-4",
        points: ["Cloud Basics", "EC2", "S3"],
      },
      {
        title: "Advanced Services",
        weeks: "Weeks 5-10",
        points: ["Lambda", "RDS", "VPC"],
      },
      {
        title: "Architecture & Certification",
        weeks: "Weeks 11-14",
        points: ["Well-Architected Framework", "Solutions Architect", "Exam Prep"],
      },
    ],
    tools: ["AWS Console", "CLI", "CloudFormation", "Terraform", "Docker"],
    projects: ["Web App Deployment", "Serverless API", "Microservices"],
    mentors: [{ name: "Ram", role: "AWS Architect", experience: "6+ years" }],
    pricingNote: "Certification-focused training",
    installmentAvailable: true,
    faqs: [{ question: "Certification?", answer: "Yes, includes exam preparation and practice tests." }],
  },
  {
    slug: "docker-kubernetes",
    name: "Docker & Kubernetes Mastery",
    shortTag: "Docker · Kubernetes · Containers",
    summary: "Master containerization and orchestration for modern deployments.",
    duration: "3 months",
    mode: "Online + Labs",
    level: "Intermediate",
    highlight: "Essential DevOps skill",
    category: "cloud",
    overview: "Complete Docker and Kubernetes training for container orchestration.",
    whyThisCourse: [
      "Industry-standard tools",
      "Cloud-native development",
      "High demand skill",
    ],
    syllabus: [
      {
        title: "Docker Fundamentals",
        weeks: "Weeks 1-4",
        points: ["Containers", "Images", "Docker Compose"],
      },
      {
        title: "Kubernetes",
        weeks: "Weeks 5-10",
        points: ["Pods & Services", "Deployments", "Helm"],
      },
      {
        title: "Production",
        weeks: "Weeks 11-12",
        points: ["Monitoring", "Security", "CI/CD"],
      },
    ],
    tools: ["Docker", "Kubernetes", "Helm", "Prometheus", "GitLab CI"],
    projects: ["Containerized App", "K8s Cluster", "CI/CD Pipeline"],
    mentors: [{ name: "Ram", role: "DevOps Engineer", experience: "5+ years" }],
    pricingNote: "Professional DevOps training",
    installmentAvailable: true,
    faqs: [{ question: "Prerequisites?", answer: "Basic Linux and command line knowledge." }],
  },
  {
    slug: "devops-engineering",
    name: "Complete DevOps Engineering",
    shortTag: "CI/CD · Jenkins · Terraform · K8s",
    summary: "Full DevOps training covering tools, practices, and culture.",
    duration: "5-6 months",
    mode: "Weekend Intensive",
    level: "Intermediate",
    highlight: "Complete DevOps transformation",
    category: "cloud",
    overview: "Comprehensive DevOps course covering automation, CI/CD, IaC, and monitoring.",
    whyThisCourse: [
      "High-paying DevOps roles",
      "Bridge dev and ops",
      "Modern IT essential",
    ],
    syllabus: [
      {
        title: "DevOps Fundamentals",
        weeks: "Weeks 1-4",
        points: ["DevOps Culture", "Linux", "Git"],
      },
      {
        title: "CI/CD & Automation",
        weeks: "Weeks 5-12",
        points: ["Jenkins", "GitLab CI", "Ansible"],
      },
      {
        title: "Cloud & Containers",
        weeks: "Weeks 13-20",
        points: ["AWS/Azure", "Docker", "Kubernetes", "Terraform"],
      },
    ],
    tools: ["Jenkins", "Docker", "Kubernetes", "Terraform", "Ansible", "AWS"],
    projects: ["CI/CD Pipeline", "Infrastructure as Code", "Monitoring Stack"],
    mentors: [{ name: "Ram", role: "DevOps Architect", experience: "8+ years" }],
    pricingNote: "Premium comprehensive program",
    installmentAvailable: true,
    faqs: [{ question: "Career switch?", answer: "Perfect for developers moving to DevOps." }],
  },

  // MOBILE DEVELOPMENT
  {
    slug: "mobile-react-native",
    name: "React Native Mobile Development",
    shortTag: "React Native · iOS · Android",
    summary: "Build cross-platform mobile apps with React Native.",
    duration: "4 months",
    mode: "Hybrid",
    level: "Intermediate",
    highlight: "One codebase, two platforms",
    category: "frontend",
    overview: "Master React Native for building iOS and Android apps with single codebase.",
    whyThisCourse: [
      "React knowledge transfers",
      "Cost-effective development",
      "Growing demand",
    ],
    syllabus: [
      {
        title: "React Native Basics",
        weeks: "Weeks 1-5",
        points: ["Setup", "Components", "Navigation"],
      },
      {
        title: "Advanced Features",
        weeks: "Weeks 6-12",
        points: ["Native APIs", "Animations", "State Management"],
      },
      {
        title: "Deployment",
        weeks: "Weeks 13-14",
        points: ["App Store", "Play Store", "Updates"],
      },
    ],
    tools: ["React Native", "Expo", "TypeScript", "Redux", "Firebase"],
    projects: ["Social App", "E-commerce App", "Fitness Tracker"],
    mentors: [{ name: "Ram", role: "Mobile Developer", experience: "5+ years" }],
    pricingNote: "Mobile development specialization",
    installmentAvailable: true,
    faqs: [{ question: "Native vs RN?", answer: "RN faster development, native better performance." }],
  },
  {
    slug: "flutter-development",
    name: "Flutter Mobile App Development",
    shortTag: "Flutter · Dart · iOS · Android",
    summary: "Build beautiful mobile apps with Flutter and Dart.",
    duration: "4 months",
    mode: "Weekend",
    level: "Beginner",
    highlight: "Google's mobile framework",
    category: "frontend",
    overview: "Complete Flutter training for building high-performance mobile applications.",
    whyThisCourse: [
      "Fastest growing framework",
      "Beautiful UI by default",
      "Single codebase",
    ],
    syllabus: [
      {
        title: "Dart & Flutter Basics",
        weeks: "Weeks 1-5",
        points: ["Dart Language", "Flutter Widgets", "Layouts"],
      },
      {
        title: "Advanced Flutter",
        weeks: "Weeks 6-12",
        points: ["State Management", "APIs", "Firebase"],
      },
      {
        title: "Publishing",
        weeks: "Weeks 13-14",
        points: ["App Publishing", "Updates", "Analytics"],
      },
    ],
    tools: ["Flutter", "Dart", "Firebase", "Provider", "Bloc"],
    projects: ["Chat App", "Shopping App", "News App"],
    mentors: [{ name: "Ram", role: "Flutter Expert", experience: "4+ years" }],
    pricingNote: "Modern mobile development",
    installmentAvailable: true,
    faqs: [{ question: "Flutter vs React Native?", answer: "Flutter has better performance, RN better ecosystem." }],
  },
];

export function getCourseBySlug(slug: CourseSlug): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
