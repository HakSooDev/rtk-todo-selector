// mockData.ts

import { Todo } from "./types";

const mockTodos: Todo[] = [
  {
    id: "1",
    title: "Grocery Shopping",
    completed: false,
    subtasks: [
      {
        id: "101",
        title: "Buy milk",
      },
      {
        id: "102",
        title: "Buy eggs",
      },
      {
        id: "103",
        title: "Buy bread",
      },
    ],
  },
  {
    id: "2",
    title: "House Cleaning",
    completed: true,
    subtasks: [
      {
        id: "201",
        title: "Clean living room",
      },
      {
        id: "202",
        title: "Clean kitchen",
      },
      {
        id: "203",
        title: "Clean bathroom",
      },
    ],
  },
  {
    id: "3",
    title: "Workout",
    completed: false,
    subtasks: [
      {
        id: "301",
        title: "Jogging for 30 minutes",
      },
      {
        id: "302",
        title: "15 minutes of stretching",
      },
    ],
  },
];

export default mockTodos;
