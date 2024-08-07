const qBank = {
    easy: [
        {
            id: 1,
            question: "Which tag is used to render a hyperlink in React?",
            options: ["<link>", "<a>", "<href>", "<hyperlink>"],
            answer: "<a>",
        },
        {
            id: 2,
            question: "Which method is used to update the state in a functional component?",
            options: ["updateState", "setState", "useState", "changeState"],
            answer: "useState",
        },
        {
            id: 3,
            question: "Which hook is used to perform side effects in a functional component?",
            options: ["useEffect", "useState", "useContext", "useReducer"],
            answer: "useEffect",
        },
        {
            id: 4,
            question: "Which method is used to render components in React?",
            options: ["render", "return", "display", "show"],
            answer: "render",
        },
        {
            id: 5,
            question: "Which command is used to create a new React app?",
            options: ["npm install react-app", "npx create-react-app", "npm start react", "npx start react-app"],
            answer: "npx create-react-app",
        },
        {
            id: 6,
            question: "Which hook is used to access the previous state or props?",
            options: ["usePrevious", "useEffect", "useState", "useRef"],
            answer: "useRef",
        },
        {
            id: 7,
            question: "Which keyword is used to create a class component in React?",
            options: ["component", "function", "class", "createComponent"],
            answer: "class",
        },
        {
            id: 8,
            question: "Which lifecycle method is called after a component is rendered?",
            options: ["componentDidMount", "componentWillMount", "componentDidUpdate", "componentWillUnmount"],
            answer: "componentDidMount",
        },
        {
            id: 9,
            question: "Which attribute is used to specify a unique identifier for elements in React?",
            options: ["id", "ref", "key", "class"],
            answer: "key",
        },
        {
            id: 10,
            question: "What is JSX?",
            options: [
                "A JavaScript syntax extension",
                "A CSS preprocessor",
                "A React library",
                "A data-fetching library",
            ],
            answer: "A JavaScript syntax extension",
        },
    ],
    medium: [
        {
            id: 1,
            question: "Which hook would you use to manage a form input's state?",
            options: ["useEffect", "useState", "useContext", "useReducer"],
            answer: "useState",
        },
        {
            id: 2,
            question: "How do you pass data to a child component?",
            options: ["Using state", "Using props", "Using context", "Using hooks"],
            answer: "Using props",
        },
        {
            id: 3,
            question: "How do you access a global state in a React application?",
            options: ["useState", "useEffect", "useContext", "useReducer"],
            answer: "useContext",
        },
        {
            id: 4,
            question: "Which lifecycle method would you use to fetch data when a component mounts?",
            options: ["componentDidUpdate", "componentWillUnmount", "componentDidMount", "constructor"],
            answer: "componentDidMount",
        },
        {
            id: 5,
            question: "What is the use of the useReducer hook?",
            options: ["To manage local state", "To manage global state", "To perform side effects", "To manage complex state logic"],
            answer: "To manage complex state logic",
        },
        {
            id: 6,
            question: "How can you optimize performance in a React application?",
            options: ["Using useMemo", "Using useEffect", "Using useState", "Using useReducer"],
            answer: "Using useMemo",
        },
        {
            id: 7,
            question: "What is the purpose of keys in React?",
            options: ["To optimize rendering", "To bind event handlers", "To store data", "To create components"],
            answer: "To optimize rendering",
        },
        {
            id: 8,
            question: "Which of the following is a way to handle forms in React?",
            options: ["Controlled components", "Uncontrolled components", "Both", "None"],
            answer: "Both",
        },
        {
            id: 9,
            question: "What is the virtual DOM?",
            options: [
                "A real DOM used by React",
                "A copy of the real DOM that React keeps in memory",
                "A server-side rendering technique",
                "A database management system",
            ],
            answer: "A copy of the real DOM that React keeps in memory",
        },
        {
            id: 10,
            question: "How do you conditionally render a component in React?",
            options: [
                "Using an if-else statement",
                "Using a ternary operator",
                "Using logical && operator",
                "All of the above",
            ],
            answer: "All of the above",
        },
    ],
    hard: [
        {
            id: 1,
            question: "How do you memoize a function in React?",
            options: ["useCallback", "useEffect", "useMemo", "useReducer"],
            answer: "useCallback",
        },
        {
            id: 2,
            question: "How can you handle errors in React components?",
            options: ["Using error boundaries", "Using try-catch", "Using useEffect", "Using componentDidCatch"],
            answer: "Using error boundaries",
        },
        {
            id: 3,
            question: "Which hook is used to manage side effects and data fetching in a React functional component?",
            options: ["useState", "useReducer", "useEffect", "useContext"],
            answer: "useEffect",
        },
        {
            id: 4,
            question: "How can you improve performance by avoiding unnecessary re-renders in React?",
            options: ["useCallback", "useEffect", "useState", "useRef"],
            answer: "useCallback",
        },
        {
            id: 5,
            question: "What does the 'key' prop help React with?",
            options: ["Identifying which items have changed", "Binding event handlers", "Storing component state", "Creating new components"],
            answer: "Identifying which items have changed",
        },
        {
            id: 6,
            question: "Which method would you use to handle asynchronous operations in React?",
            options: ["useState", "useEffect", "useReducer", "useAsync"],
            answer: "useEffect",
        },
        {
            id: 7,
            question: "What is the purpose of the useContext hook?",
            options: ["To create context", "To consume context", "To manage local state", "To manage global state"],
            answer: "To consume context",
        },
        {
            id: 8,
            question: "How do you handle cleanup in useEffect?",
            options: ["Return a cleanup function", "Call a cleanup method", "Use the finally block", "Use useState"],
            answer: "Return a cleanup function",
        },
        {
            id: 9,
            question: "What is the main advantage of server-side rendering (SSR) in React?",
            options: [
                "Faster initial page load",
                "Easier state management",
                "Simpler code structure",
                "Better error handling",
            ],
            answer: "Faster initial page load",
        },
        {
            id: 10,
            question: "How do you handle state in a deeply nested component?",
            options: [
                "Lifting state up",
                "Using context",
                "Using Redux",
                "All of the above",
            ],
            answer: "All of the above",
        },
    ],
};

// Log the question bank data
console.log('Question Bank Data:', qBank);

export default qBank;