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
  {
    id: "4",
    title: "Car Maintenance",
    completed: false,
    subtasks: [
      {
        id: "401",
        title: "Change oil",
      },
      {
        id: "402",
        title: "Check tire pressure",
      },
      {
        id: "403",
        title: "Wash car",
      },
    ],
  },
  {
    id: "5",
    title: "Reading",
    completed: true,
    subtasks: [
      {
        id: "501",
        title: "Read chapter 1 of 'The Great Gatsby'",
      },
      {
        id: "502",
        title: "Read chapter 2 of 'The Great Gatsby'",
      },
      {
        id: "503",
        title: "Summarize read chapters",
      },
    ],
  },
  {
    id: "6",
    title: "Prepare Dinner",
    completed: false,
    subtasks: [
      {
        id: "601",
        title: "Chop vegetables",
      },
      {
        id: "602",
        title: "Cook rice",
      },
      {
        id: "603",
        title: "Grill chicken",
      },
    ],
  },
  {
    id: "7",
    title: "Garden Work",
    completed: false,
    subtasks: [
      {
        id: "701",
        title: "Water the plants",
      },
      {
        id: "702",
        title: "Trim the hedges",
      },
      {
        id: "703",
        title: "Plant new flowers",
      },
    ],
  },
  {
    id: "8",
    title: "Plan Vacation",
    completed: false,
    subtasks: [
      {
        id: "801",
        title: "Book flights",
      },
      {
        id: "802",
        title: "Reserve hotels",
      },
      {
        id: "803",
        title: "Create itinerary",
      },
    ],
  },
  {
    id: "9",
    title: "Learn Guitar",
    completed: false,
    subtasks: [
      {
        id: "901",
        title: "Practice chords",
      },
      {
        id: "902",
        title: "Learn a new song",
      },
      {
        id: "903",
        title: "15 minutes of finger exercises",
      },
    ],
  },
];

export default mockTodos;
