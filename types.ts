export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface User {
  id: string;
  email: string;
  displayName: string;
  role: 'user' | 'admin';
  stats: {
    lessonsCompleted: number;
    quizzesTaken: number;
    totalPoints: number;
    streakDays: number;
  };
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string[]; // Array of paragraphs for MVP simplicity
  difficulty: Difficulty;
  category: string;
  estimatedMinutes: number;
  tags: string[];
  order: number;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  lessonId: string;
  title: string;
  questions: Question[];
  passingScore: number;
}

export interface Progress {
  lessonId: string;
  status: 'not-started' | 'in-progress' | 'completed';
  quizScore?: number;
  completedAt?: string;
}

export interface Achievement {
  id: string;
  title: string;
  icon: string;
  description: string;
  unlocked: boolean;
}