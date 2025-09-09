// src/data/hobbies.ts

export type Hobby = {
  name: string;
  emoji: string;
  description: string;
};

export const hobbies: Hobby[] = [
  {
    name: "Volunteering",
    emoji: "🤝",
    description:
      "Field Re-Setter at the First Robotics Competition (Mar 2025, Windsor, Canada). Supported event logistics and robotics matches.",
  },
  {
    name: "Pets",
    emoji: "🐶🐠",
    description:
      "Experience with dogs and fish as pets, enjoying animal care and companionship.",
  },
  {
    name: "Technology",
    emoji: "💻",
    description:
      "Exploring machine learning competitions, coding projects, and systems programming challenges.",
  },
  {
    name: "Outdoors",
    emoji: "🌱",
    description:
      "Interest in eco-friendly projects like smart irrigation and sustainable tech solutions.",
  },
];
