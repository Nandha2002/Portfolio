// src/data/experience.ts

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Med Tour Easy",
    role: "Data Analytics Trainee",
    period: "Aug 2023 – Sep 2023",
    location: "Delhi, India",
    points: [
      "Collaborated with a Data Analytics professional during a traineeship under a mentor’s guidance to gain real-world experience.",
      "Developed a project analyzing age differences between right-hand and left-hand users using statistical methods and visualization tools.",
    ],
  },
  {
    company: "Null Class",
    role: "Machine Learning Development Intern",
    period: "May 2023 – Jul 2023",
    location: "Coimbatore, India",
    points: [
      "Completed a development internship focused on facial recognition techniques to strengthen practical skills in ML model building.",
      "Implemented tasks related to facial feature detection and classification, improving model accuracy using data processing and pattern recognition.",
    ],
  },
];
