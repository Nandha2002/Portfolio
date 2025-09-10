// src/data/skills.ts
import { Code, Database, Server, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  Icon: LucideIcon;   // ← proper typing, no 'any'
  color: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    Icon: Code,
    color: "text-blue-500",
    skills: ["C", "C++", "Java", "Python"],
  },
  {
    name: "Databases",
    Icon: Database,
    color: "text-green-500",
    skills: ["MySQL"],
  },
  {
    name: "Operating Systems",
    Icon: Server,
    color: "text-purple-500",
    skills: ["UNIX", "Linux"],
  },
  {
    name: "Methodologies & Tools",
    Icon: Cpu,
    color: "text-orange-500",
    skills: ["Agile", "Waterfall", "HTML", "CSS", "JavaScript"],
  },
];
