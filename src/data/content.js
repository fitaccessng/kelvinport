import qringHero from "../assets/qring-hero.svg";
import qringScan from "../assets/qring-scan.svg";
import fitaccessHero from "../assets/fitaccess-hero.svg";
import fitaccessSchedule from "../assets/fitaccess-schedule.svg";
import cheapshopHero from "../assets/cheapshop-hero.svg";
import cheapshopBasket from "../assets/cheapshop-basket.svg";

export const products = [
  {
    name: "QRing",
    slug: "qring",
    description:
      "Smart estate visitor management using QR codes and digital access verification.",
    tags: ["Security", "PropTech", "Access Control"],
    url: "https://useqring.online",
    summary:
      "A unified visitor platform for estates that replaces paper logs with QR-based access verification.",
    heroImage: qringHero,
    gallery: [qringScan],
    problems: [
      "Manual visitor logs are slow, error-prone, and insecure.",
      "Security teams lack real-time visibility into access activity.",
      "Residents want a frictionless way to approve guests.",
    ],
    solution:
      "QRing issues secure QR codes for each visit, enabling instant validation at gates, real-time notifications, and clear audit trails.",
    metrics: ["Reduced check-in time by 70%", "Real-time access logs"],
  },
  {
    name: "FitAccess",
    slug: "fitaccess",
    description:
      "A subscription platform giving users access to multiple premium gyms and wellness facilities.",
    tags: ["Wellness", "Subscription", "Marketplace"],
    url: "https://fitaccess.org",
    summary:
      "A membership pass that unlocks multiple gyms, fitness studios, and wellness partners.",
    heroImage: fitaccessHero,
    gallery: [fitaccessSchedule],
    problems: [
      "Premium fitness is expensive and fragmented.",
      "Users want flexibility without long-term contracts.",
      "Gyms need predictable customer acquisition.",
    ],
    solution:
      "FitAccess offers a unified subscription with dynamic partner discovery, access scheduling, and revenue sharing.",
    metrics: ["Multi-partner access", "Flexible membership tiers"],
  },
  {
    name: "Campus Cart",
    slug: "campus-cart",
    description:
      "A student-focused e-commerce platform designed to make everyday products affordable.",
    tags: ["E-commerce", "Students", "Logistics"],
    url: "https://campuscarts.online",
    summary:
      "A commerce platform for students that prioritizes affordability, delivery speed, and smart bundles.",
    heroImage: cheapshopHero,
    gallery: [cheapshopBasket],
    problems: [
      "Students overpay for essentials due to fragmented supply.",
      "Delivery delays and high fees reduce trust.",
      "Retailers struggle to reach campus communities.",
    ],
    solution:
      "Campus Cart aggregates demand, negotiates bulk pricing, and partners with campus delivery teams.",
    metrics: ["Lower cost bundles", "Campus-first logistics"],
  },
];

export const skills = [
  "Product",
  "Startup Strategy",
  "React",
  "React Native",
  "Node.js",
  "Python (Django/Flask/FastAPI)",
  "Capacitor",
  "AI Tools",
  "Automation",
  "Growth Thinking",
  "SaaS Architecture",
];

export const philosophy = [
  "I build products for problems most people ignore.",
  "Africa has massive opportunity for technology innovation.",
  "Simple ideas executed well can build powerful companies.",
];

export const timeline = [
  {
    title: "Started coding and building software",
    detail: "Began experimenting with products that solved immediate, local pain points.",
    year: "2018",
  },
  {
    title: "Worked on web and desktop systems",
    detail:
      "Built internal tools, portals, and data-heavy systems with a focus on usability.",
    year: "2020",
  },
  {
    title: "Began launching startups",
    detail:
      "Shifted from client work to building ventures with compounding product value.",
    year: "2022",
  },
  {
    title: "Building scalable technology products",
    detail: "Designing platforms with repeatable growth and long-term leverage.",
    year: "2024",
  },
  {
    title: "Expanded leadership and delivery impact",
    detail: "Leading multi-team initiatives and enterprise-scale migrations.",
    year: "2025",
  },
  {
    title: "Scaling founder-led product innovation",
    detail: "Launching new ventures with strong distribution and durable moats.",
    year: "2026",
  },
];

export const ideas = [
  "AI startups",
  "Fitness technology",
  "Digital commerce",
  "Automation tools",
  "SaaS products for Africa",
];

export const experiences = [
  {
    company: "Techspare",
    role: "Senior Developer",
    period: "2022-Present",
    highlights: [
      "Led migration to serverless AWS, cutting costs by 35%.",
      "Mentored 5+ junior devs, speeding up onboarding.",
    ],
  },
  {
    company: "Africa Economic Forum",
    role: "Head of ICT",
    period: "2023-2025",
    highlights: [
      "Modernized IT systems for 50K+ users on AWS/GCP.",
      "Reduced security risks by 70% with zero-trust policies.",
    ],
  },
  {
    company: "Cater & Merger",
    role: "Head of ICT",
    period: "2022-2024",
    highlights: [
      "Managed IT for 3 company acquisitions.",
      "Scaled dev team from 5 to 15, improving delivery speed.",
    ],
  },
  {
    company: "EagleApps",
    role: "Full-Stack Developer",
    period: "2019-2022",
    highlights: [
      "Delivered 15+ projects using MERN stack.",
      "Optimized APIs, cutting response time by 60%.",
    ],
  },
];

export const education = [
  "BSc, Computer Science - National Open University",
  "NID Software Engineering - ITF-MSTC",
];

export const technicalSkills = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Next.js", "React Native"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "Django", "Flask", "FastAPI", "GraphQL/REST"],
  },
  {
    label: "DevOps & Cloud",
    items: ["AWS (EC2, Lambda, S3)", "Docker", "CI/CD"],
  },
  {
    label: "Other",
    items: ["Microservices", "Agile/Scrum"],
  },
];

export const keyProjects = [
  {
    name: "Asista AI",
    description:
      "Built an AI assistant using React, Node.js, and Python with NLP (OpenAI/BERT).",
    url: "",
    impacts: [
      "Reduced latency by 40% using AWS Lambda & API Gateway.",
      "Added real-time analytics with WebSockets & D3.js.",
    ],
  },
  {
    name: "Techspare NG",
    description: "Senior engineering delivery across cloud, platform, and product.",
    url: "https://techspareng.online/",
    impacts: [],
  },
  {
    name: "Jovic Empire",
    description: "E-commerce build and growth-focused engineering delivery.",
    url: "https://jovicempire.online",
    impacts: [],
  },
  {
    name: "CJ Onyx",
    description: "Brand platform build with optimized performance and UX.",
    url: "https://cjonyx.com/",
    impacts: [],
  },
];

export const deliveryHighlights = [];
