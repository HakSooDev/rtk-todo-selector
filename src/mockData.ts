import { Todo } from "./types";

const mockTodos: Todo[] = [
  {
    id: "efldcv96j45o6078a5f511cnb4a488771831b215",
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
    id: "8el3fv70j1cod87cb665044186073134a63812ca",
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
    id: "22l14v99j69o6f77876d0c2j8f631ea9fe5e49b2",
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
    id: "75la1vbcj29o288d2ab8m40je11c7a0aef29bc82",
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
    id: "49l0bvb5j4fo278e0jd7ka981549479b4de1c220",
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
    id: "13l71vf6j9ao358f2sd7c88waf85ceed0ec2c70f",
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
    id: "acldcvcejd7obd82cz8cg773c40013ba245307d8",
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
    id: "fcl77v40jc7o4c9f9651debz3aea7ca71e808d35",
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
    id: "ebl74v61j0dncenebd89ca8819a2328f027d9b4d",
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
