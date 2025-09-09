// src/data/education.ts

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location?: string;
  details?: string[];
};

export const education: EducationItem[] = [
  {
    school: "University of Windsor",
    degree: "Master of Applied Computing (AI Stream)",
    period: "Jan 2025 – Present",
    location: "Windsor, Ontario, Canada",
    details: [
      "Current Average: 80%",
      "Courses: Advanced Software Engineering (Agile/Waterfall), Advanced Database Topics (Hadoop, Relational Databases), Advanced Systems Programming (UNIX/Linux), Machine Learning (Classification & Regression)"
    ],
  },
  {
    school: "Anna University",
    degree: "Bachelor of Engineering — Computer Science & Engineering",
    period: "Jul 2020 – Jul 2024",
    location: "Chennai, India",
    details: [
      "CGPA: 8.23",
      "Courses: Python Programming (Scored 90%), Data Structures in C, Object-Oriented Programming in Java"
    ],
  },
];
