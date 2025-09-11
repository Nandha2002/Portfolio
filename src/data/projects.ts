import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Phishing Detection Model for SMS/Text Messages",
    description:
      "Built a cross-lingual SMS phishing detector using Hindi and Telugu datasets with TF-IDF and " +
      "preprocessing to enhance multilingual detection accuracy. Applied ML and Indic language models " +
      "(SVM, Random Forest, LSTM, Indic BERT, MuRIL) achieving up to 97.72% accuracy in phishing detection.",
    image: "/projects/phishing-detection.png", // You'll need to add this image
    technologies: [
      "Python",
      "Machine Learning",
      "SQL",
      "TF-IDF",
      "SVM",
      "Random Forest",
      "LSTM",
      "Indic BERT",
      "MuRIL",
      "Natural Language Processing",
      "Cross-lingual Detection",
      "Text Classification"
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/Nandha2002/Phishing-Detection-Model",
    },
    featured: true,
  },
  {
    id: "2",
    title: "AI and Sensor Driven System for Irrigation",
    description:
      "Developed a smart irrigation system to determine and release required water level in agricultural " +
      "fields based on real-time parameters including soil moisture, humidity, and temperature. " +
      "Automated water supply process using sensor data analysis to optimize water usage and improve crop health.",
    image: "/projects/smart-irrigation.png", // You'll need to add this image
    technologies: [
      "Python",
      "Machine Learning",
      "SQL",
      "Arduino",
      "IoT",
      "Sensor Integration",
      "Data Analysis",
      "Agricultural Technology",
      "Automation",
      "Real-time Processing"
    ],
    category: "IoT & Automation",
    links: {
      github: "https://github.com/Nandha2002/AI-and-Sensor-Driven-System",
    },
    featured: true,
  },
  {
    id: "3",
    title: "Music Recommendation Using Facial Expression",
    description:
      "Designed a system to identify user emotions through facial expressions leveraging Convolutional " +
      "Neural Networks (CNN) to enable emotion-based interaction. Integrated Spotify API to fetch and " +
      "play songs based on detected emotion, providing a personalized music experience based on facial cues.",
    image: "/projects/music-recommendation.png", // You'll need to add this image
    technologies: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "Computer Vision",
      "Facial Recognition",
      "Emotion Detection",
      "Spotify API",
      "HTML",
      "CSS",
      "Web Development"
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/Nandha2002/Personal_Project",
    },
    featured: true,
  },
  {
    id: "4",
    title: "Facial Features Recognition System",
    description:
      "Implemented facial recognition techniques during Machine Learning Development internship at NULL CLASS. " +
      "Focused on facial feature detection and classification using data processing and pattern recognition " +
      "methods to improve accuracy in facial feature identification.",
    image: "/projects/facial-recognition.png", // You'll need to add this image
    technologies: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Facial Recognition",
      "Pattern Recognition",
      "Data Processing",
      "Feature Detection",
      "Classification Algorithms"
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/Nandha2002/Nullclass_Internship", // Add GitHub link if available
    },
    featured: false,
  },
  {
    id: "5",
    title: "Death Age Analysis: Handedness Impact Study",
    description:
      "Developed a comprehensive data analysis project titled 'Analyze Death Age Difference of Right-Hand users " +
      "with Left-Hand users' using statistical methods and data visualization tools. Enhanced understanding " +
      "of age-related trends across handedness groups through rigorous data analysis.",
    image: "/projects/data-analysis.png", // You'll need to add this image
    technologies: [
      "Python",
      "Machine Learning",
      "MySQL",
      "Data Analysis",
      "Statistical Methods",
      "Data Visualization",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Statistical Analysis"
    ],
    category: "Data Science",
    links: {
      github: "https://github.com/Nandha2002/MTE_Intern_Project", // Add GitHub link if available
    },
    featured: false,
  },
];
