import { Lesson, Quiz, Achievement } from './types';

export const APP_NAME = 'EconoByte';

export const CATEGORIES = ['Microeconomics', 'Macroeconomics', 'Finance', 'Behavioral'];

export const ACHIEVEMENTS: Achievement[] = [
  { id: '1', title: 'First Steps', icon: '🚀', description: 'Complete your first lesson', unlocked: false },
  { id: '2', title: 'Quiz Master', icon: '🧠', description: 'Score 100% on a quiz', unlocked: false },
  { id: '3', title: 'Streak Week', icon: '🔥', description: 'Learn for 7 days in a row', unlocked: false },
];

export const MOCK_LESSONS: Lesson[] = [
  {
    id: '1',
    title: 'Supply and Demand: The Basics',
    slug: 'supply-and-demand',
    summary: 'Understand the fundamental forces that drive market prices.',
    content: [
      "Imagine you're selling lemonade on a hot summer day. Everyone is thirsty, so you can charge $2 a cup. But if it starts raining, nobody wants lemonade, and you might have to drop the price to 50 cents. That's supply and demand in action!",
      "**Supply** is how much of something is available. If you have 100 cups of lemonade, that's your supply.",
      "**Demand** is how much people want it. On a hot day, demand is high. On a cold day, demand is low.",
      "**The Law of Demand**: When the price goes up, people buy less. When the price goes down, people buy more.",
      "**The Law of Supply**: When the price goes up, sellers want to produce more to make more profit.",
      "The **Equilibrium Price** is where the supply curve and demand curve meet. It's the 'perfect' price where buyers want to buy exactly as much as sellers want to sell."
    ],
    difficulty: 'beginner',
    category: 'Microeconomics',
    estimatedMinutes: 3,
    tags: ['basics', 'markets', 'pricing'],
    order: 1
  },
  {
    id: '2',
    title: 'Opportunity Cost: No Free Lunch',
    slug: 'opportunity-cost',
    summary: 'Why every choice you make has a hidden cost.',
    content: [
      "You have $20. You can go to the movies OR buy a new t-shirt. You can't do both. If you choose the movies, the t-shirt is your **opportunity cost**.",
      "In economics, the cost of something isn't just money. It's what you give up to get it.",
      "Think about your time. If you spend 2 hours playing video games, the opportunity cost is the 2 hours you could have spent studying, sleeping, or working.",
      "Key Takeaway: Resources (time, money, energy) are scarce. Every decision involves a trade-off. Understanding opportunity cost helps you make better decisions by considering what you are losing, not just what you are gaining."
    ],
    difficulty: 'beginner',
    category: 'Microeconomics',
    estimatedMinutes: 4,
    tags: ['decision-making', 'scarcity'],
    order: 2
  },
  {
    id: '3',
    title: 'Inflation: Why Stuff Gets Expensive',
    slug: 'inflation',
    summary: 'The silent thief of your money\'s value.',
    content: [
      "Ever hear your grandparents say, 'In my day, a movie ticket cost a nickel'? That's **inflation**.",
      "Inflation is the general increase in prices and the fall in the purchasing value of money over time.",
      "What causes it? 1. **Demand-Pull**: Too much money chasing too few goods. 2. **Cost-Push**: It costs more to make things (like oil prices going up), so companies charge more.",
      "A little inflation (around 2%) is actually considered healthy for the economy because it encourages spending. But **Hyperinflation** (prices rising out of control) destroys economies."
    ],
    difficulty: 'intermediate',
    category: 'Macroeconomics',
    estimatedMinutes: 5,
    tags: ['money', 'prices', 'economy'],
    order: 3
  }
];

export const MOCK_QUIZZES: Record<string, Quiz> = {
  '1': {
    id: 'q1',
    lessonId: '1',
    title: 'Supply & Demand Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'q1_1',
        text: 'If the price of a product increases, what usually happens to demand?',
        options: ['It increases', 'It decreases', 'It stays the same', 'It disappears'],
        correctAnswerIndex: 1,
        explanation: 'According to the Law of Demand, as price goes up, quantity demanded goes down.'
      },
      {
        id: 'q1_2',
        text: 'What is the "Equilibrium Price"?',
        options: ['The highest possible price', 'The lowest possible price', 'Where supply meets demand', 'The price set by the government'],
        correctAnswerIndex: 2,
        explanation: 'Equilibrium is the point where the quantity supplied equals the quantity demanded.'
      }
    ]
  },
  '2': {
    id: 'q2',
    lessonId: '2',
    title: 'Opportunity Cost Quiz',
    passingScore: 70,
    questions: [
      {
        id: 'q2_1',
        text: 'What is opportunity cost?',
        options: ['The price tag on an item', 'The value of the next best alternative you gave up', 'The cost of doing business', 'A discount'],
        correctAnswerIndex: 1,
        explanation: 'Opportunity cost is the value of what you lose when choosing between two or more options.'
      },
      {
        id: 'q2_2',
        text: 'If you choose to study instead of working, what is the opportunity cost?',
        options: ['The knowledge you gain', 'The tuition fees', 'The money you would have earned working', 'The cost of books'],
        correctAnswerIndex: 2,
        explanation: 'The wages lost from not working are the opportunity cost of that time.'
      }
    ]
  },
  '3': {
    id: 'q3',
    lessonId: '3',
    title: 'Inflation Quiz',
    passingScore: 60,
    questions: [
      {
        id: 'q3_1',
        text: 'What is inflation?',
        options: ['When prices go down', 'When the economy shrinks', 'A general increase in prices', 'When employment rises'],
        correctAnswerIndex: 2,
        explanation: 'Inflation represents the rate at which the general level of prices for goods and services is rising.'
      }
    ]
  }
};