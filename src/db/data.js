export const quizzes = [
  {
    quizId: "js_basics",
    quizName: "JavaScript Basics",
    questions: [
      {
        id: "js_q1",
        question: "Which company developed JavaScript?",
        options: [
          { id: "a", text: "Microsoft" },
          { id: "b", text: "Netscape" },
          { id: "c", text: "Google" },
          { id: "d", text: "Mozilla" },
        ],
        correctAnswer: "b",
        timeLimit: 10,
      },
      {
        id: "js_q2",
        question: "What is the output of typeof null?",
        options: [
          { id: "a", text: "null" },
          { id: "b", text: "object" },
          { id: "c", text: "undefined" },
          { id: "d", text: "number" },
        ],
        correctAnswer: "b",
        timeLimit: 10,
      },
      {
        id: "js_q3",
        question: "Which keyword declares a block-scoped variable?",
        options: [
          { id: "a", text: "var" },
          { id: "b", text: "const" },
          { id: "c", text: "static" },
          { id: "d", text: "global" },
        ],
        correctAnswer: "b",
        timeLimit: 10,
      },
      {
        id: "js_q4",
        question: "How do you write a single-line comment?",
        options: [
          { id: "a", text: "<!-- -->" },
          { id: "b", text: "/* */" },
          { id: "c", text: "//" },
          { id: "d", text: "#" },
        ],
        correctAnswer: "c",
        timeLimit: 10,
      },
      {
        id: "js_q5",
        question: "Which method converts JSON to an object?",
        options: [
          { id: "a", text: "JSON.parse()" },
          { id: "b", text: "JSON.stringify()" },
          { id: "c", text: "JSON.object()" },
          { id: "d", text: "JSON.convert()" },
        ],
        correctAnswer: "a",
        timeLimit: 10,
      },
      {
        id: "js_q6",
        question: "Which operator checks value AND type?",
        options: [
          { id: "a", text: "==" },
          { id: "b", text: "=" },
          { id: "c", text: "===" },
          { id: "d", text: "!=" },
        ],
        correctAnswer: "c",
        timeLimit: 10,
      },
      {
        id: "js_q7",
        question: "What is NaN?",
        options: [
          { id: "a", text: "Null and Number" },
          { id: "b", text: "Not a Number" },
          { id: "c", text: "Negative Number" },
          { id: "d", text: "New Number" },
        ],
        correctAnswer: "b",
        timeLimit: 10,
      },
      {
        id: "js_q8",
        question: "Which function delays execution?",
        options: [
          { id: "a", text: "wait()" },
          { id: "b", text: "delay()" },
          { id: "c", text: "setTimeout()" },
          { id: "d", text: "pause()" },
        ],
        correctAnswer: "c",
        timeLimit: 10,
      },
      {
        id: "js_q9",
        question: "Arrays in JavaScript are:",
        options: [
          { id: "a", text: "Primitive" },
          { id: "b", text: "Immutable" },
          { id: "c", text: "Objects" },
          { id: "d", text: "Functions" },
        ],
        correctAnswer: "c",
        timeLimit: 10,
      },
      {
        id: "js_q10",
        question: "Which loop guarantees at least one execution?",
        options: [
          { id: "a", text: "for" },
          { id: "b", text: "while" },
          { id: "c", text: "do...while" },
          { id: "d", text: "foreach" },
        ],
        correctAnswer: "c",
        timeLimit: 10,
      },
    ],
  },

  {
    quizId: "angular_basics",
    quizName: "Angular Basics",
    questions: [
      {
        id: "ng_q1",
        question: "Angular is maintained by?",
        options: [
          { id: "a", text: "Facebook" },
          { id: "b", text: "Google" },
          { id: "c", text: "Microsoft" },
          { id: "d", text: "Amazon" },
        ],
        correctAnswer: "b",
        timeLimit: 10,
      },
      {
        id: "ng_q2",
        question: "Which file defines a component?",
        options: [
          { id: "a", text: ".service.ts" },
          { id: "b", text: ".module.ts" },
          { id: "c", text: ".component.ts" },
          { id: "d", text: ".directive.ts" },
        ],
        correctAnswer: "c",
        timeLimit: 10,
      },
      {
        id: "ng_q3",
        question: "Which decorator defines a component?",
        options: [
          { id: "a", text: "@NgModule" },
          { id: "b", text: "@Component" },
          { id: "c", text: "@Injectable" },
          { id: "d", text: "@Pipe" },
        ],
        correctAnswer: "b",
        timeLimit: 10,
      },
      {
        id: "ng_q4",
        question: "Which language is Angular written in?",
        options: [
          { id: "a", text: "JavaScript" },
          { id: "b", text: "TypeScript" },
          { id: "c", text: "Dart" },
          { id: "d", text: "Python" },
        ],
        correctAnswer: "b",
        timeLimit: 10,
      },
      {
        id: "ng_q5",
        question: "Which CLI command creates a component?",
        options: [
          { id: "a", text: "ng new component" },
          { id: "b", text: "ng generate component" },
          { id: "c", text: "ng build component" },
          { id: "d", text: "ng add component" },
        ],
        correctAnswer: "b",
        timeLimit: 10,
      },
    ],
  },

  {
    quizId: "react_advanced",
    quizName: "React.js Advanced",
    questions: [
      {
        id: "react_q1",
        question: "What does React Fiber improve?",
        options: [
          { id: "a", text: "Styling" },
          { id: "b", text: "Reconciliation" },
          { id: "c", text: "Routing" },
          { id: "d", text: "Testing" },
        ],
        correctAnswer: "b",
        timeLimit: 10,
      },
      {
        id: "react_q2",
        question: "Which hook runs before paint?",
        options: [
          { id: "a", text: "useEffect" },
          { id: "b", text: "useLayoutEffect" },
          { id: "c", text: "useMemo" },
          { id: "d", text: "useCallback" },
        ],
        correctAnswer: "b",
        timeLimit: 10,
      },
    ],
  },

  {
    quizId: "flutter",
    quizName: "Flutter",
    questions: [
      {
        id: "fl_q1",
        question: "Flutter is developed by?",
        options: [
          { id: "a", text: "Apple" },
          { id: "b", text: "Facebook" },
          { id: "c", text: "Google" },
          { id: "d", text: "Microsoft" },
        ],
        correctAnswer: "c",
        timeLimit: 10,
      },
      {
        id: "fl_q2",
        question: "Which language is used in Flutter?",
        options: [
          { id: "a", text: "Java" },
          { id: "b", text: "Kotlin" },
          { id: "c", text: "Swift" },
          { id: "d", text: "Dart" },
        ],
        correctAnswer: "d",
        timeLimit: 10,
      },
    ],
  },
];
