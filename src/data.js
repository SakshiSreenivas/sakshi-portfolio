export const profile = {
  name: "Sakshi S",
  tagline: "Final-year ISE student at BIT Bangalore. I build full-stack projects and sing Carnatic classical music.",
  email: "sakshisreenivas214@gmail.com",
  linkedin: "https://www.linkedin.com/in/sakshi-s-266142286",
  github: "https://github.com/SakshiSreenivas",
  about:
    "I am pursuing a Bachelor's degree in Information Science Engineering at BIT Bangalore, strengthening my software engineering skills with the goal of growing into a skilled software professional. I enjoy building projects that teach me real-world development. Alongside technology, I am exploring the fundamentals of stock market investing and have a keen interest in singing and vocal performance. I am a quick learner with strong communication skills, a problem-solving mindset, and a disciplined, consistent approach to my work.",
};

export const skills = [
  { group: "Languages", items: ["Java (basic)", "Python (basic)"] },
  { group: "Web", items: ["MERN Stack", "HTML", "CSS"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { group: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Vercel", "Render"] },
];

export const education = [
  { school: "Bangalore Institute of Technology", detail: "B.E. Information Science and Engineering", years: "2023 – 2027" },
  { school: "The Oxford Senior Secondary School (CBSE)", detail: "Science", years: "2023" },
];

// Put the real certificate URL in `link`. Leave "" to hide the button.
export const certifications = [
  { name: "Java Fundamentals", issuer: "Infosys Springboard", link: "" },
  { name: "DSA Fundamentals", issuer: "Apna College", link: "" },
  { name: "Web Development", issuer: "Apna College", link: "" },
];

// Leave github/demo as "" to hide that button. Add real URLs later.
export const projects = [
  {
    title: "CodeRoom",
    stack: ["MERN", "Socket.io", "Monaco Editor", "Groq", "JDoodle API"],
    desc: "Real-time multiplayer code editor with collaborative editing, AI code explanations, multi-language execution, version history, and low-latency synchronization with optimized state management.",
    github: "https://github.com/SakshiSreenivas/coderoom",
    demo: "",
  },
  {
    title: "IRIS: Intelligent Incident Prioritisation System",
    stack: ["Python", "FastAPI", "XGBoost", "React", "WebSocket", "Supabase"],
    desc: "AI-powered alert prioritization with real-time incident classification, ML-based severity prediction (99.73% accuracy), false alarm detection, a deduplication engine, a live WebSocket dashboard, and a 9-feature engineering pipeline.",
    github: "https://github.com/SakshiSreenivas/iris",
    demo: "",
  },
];

// Add recordings: put the file in public/music/ and add an entry below.
// Example: { title: "Varnam", raga: "Mohanam", src: "/music/varnam.mp3" }
export const recordings = [
  { title: "Gajavadana Beduve", src: "/music/recording-2.mp3" },
  { title: "Naguva Nayana", src: "/music/recording-1.mp3" },
];
export const story = [
  {
    title: "Who I am",
    text: "An Information Science student and aspiring software engineer who loves turning ideas into practical solutions. From building full-stack projects to exploring AI and Generative AI, I believe the best way to learn is to build, experiment, and keep improving."
  },
  {
    title: "Beyond code",
    text: "A Carnatic singer at heart, finding my own rhythm both on and off the stage. Music has taught me patience, discipline, and the beauty of consistent practice — values I carry into every project and every new challenge."
  },
  {
    title: "Where I'm headed",
    text: "Working towards becoming a well-rounded software professional, exploring the possibilities of AI, and building things that make a difference. Along the way, I'm learning about personal finance and investing, because I'm just as curious about building a future as I am about building technology."
  },
];