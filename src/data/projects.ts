export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Erasmus Connect",
    description:
      "Full-stack platform for Erasmus project discovery and application. Winner of Lumen Development 2023 and 3rd place at Digital Innovation Incubator Croatia 2024.",
    tech: ["Vue.js", "Firebase"],
    github: "https://github.com/ErasmusConnect",
    featured: true,
  },
  {
    title: "HACKL Zagreb",
    description:
      "Cultural events discovery app for the city of Zagreb. 2nd place at HACKL Hackathon 2024.",
    tech: ["Flutter", "Node.js"],
    github: "https://github.com/Zicer2024",
    featured: true,
  },
  {
    title: "Skin Lesion Classification",
    description:
      "Deep learning classification of dermatoscopic images using ResNet, EfficientNet, and Vision Transformers.",
    tech: ["Python", "PyTorch", "Computer Vision"],
    github: "https://github.com/neumre2025/projekt",
    featured: true,
  },
  {
    title: "RTG Teeth Detection",
    description:
      "Neural network for detection and segmentation of teeth on dental X-ray images using deep learning.",
    tech: ["Python", "PyTorch", "Computer Vision"],
    github: "https://github.com/fbuljan/RTG-image-teeth-detection",
    featured: true,
  },
  {
    title: "Sikum",
    description:
      "AI-powered personalized news aggregator with web scraping, OpenAI-based categorization, and a swipe-based feed. Built at the SheepAI hackathon.",
    tech: ["TypeScript", "React", "Express", "Prisma", "OpenAI"],
    github: "https://github.com/fbuljan/sheep-ai",
    featured: true,
  },
  {
    title: "Codeplay",
    description:
      "Endless runner game controlled via custom Arduino joysticks that students build themselves. Features tilt controls, analog aiming, and progressive difficulty.",
    tech: ["C#", "Unity", "Arduino"],
    github: "https://github.com/fbuljan/codeplay",
    featured: true,
  },
  {
    title: "Finance Friends",
    description:
      "AI-powered financial education platform with an interactive chat assistant.",
    tech: ["Next.js", "MUI"],
    github: "https://github.com/FinanceFriend",
  },
  {
    title: "Car Detection & Counter",
    description:
      "Comparing YOLOv8, Fast R-CNN, and a fine-tuned model for car detection and counting on road images. Course project at FER.",
    tech: ["Python", "YOLO", "OpenCV"],
    github: "https://github.com/fbuljan/car-detection-and-counter",
  },
  {
    title: "PennyPlanner",
    description:
      "Full-stack personal finance management app built as a Bachelor's thesis at FER.",
    tech: ["Vue 3", "ASP.NET", "C#"],
    github: "https://github.com/fbuljan/PennyPlanner-frontend",
  },
  {
    title: "Missile Defense Simulation",
    description:
      "Interactive simulation of a guided missile defense system, built as a team project for the Interactive Simulation Systems course at FER.",
    tech: ["Unity", "ShaderLab", "C#"],
    github:
      "https://github.com/fbuljan/Simplified-Interactive-Simulation-of-Guided-Missile-System-for-Air-Defense",
  },
  {
    title: "Simulated Annealing",
    description:
      "Classic and adaptive Simulated Annealing algorithms applied to global optimization benchmarks, with grid search for hyperparameter tuning.",
    tech: ["MATLAB", "Optimization"],
    github: "https://github.com/fbuljan/simulated-annealing",
  },
];
