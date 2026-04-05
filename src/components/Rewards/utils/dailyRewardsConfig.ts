export type DailyReward = {
  id: number;
  text: string;
  points: number;
};

export const DAILY_REWARDS: DailyReward[] = [
  { id: 1, text: "Day 1", points: 100 },
  { id: 2, text: "Day 2", points: 130 },
  { id: 3, text: "Day 3", points: 160 },
  { id: 4, text: "Day 4", points: 200 },
  { id: 5, text: "Day 5", points: 240 },
  { id: 6, text: "Day 6", points: 280 },
  { id: 7, text: "Day 7", points: 300 },
];
