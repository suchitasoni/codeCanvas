// Guess output data
export type GuessCategory =
  | "JS Basics"
  | "Async"
  | "Closures"
  | "React";

export interface GuessOutputItem {
  id: string;
  category: GuessCategory;

  // what user sees first
  code: string;

  // revealed on flip
  output: string;
  explanation: string[];

  // optional but powerful
  difficulty: "easy" | "medium" | "hard";
  relatedVideo?: string; // youtube url
  relatedBlogSlug?: string;
}


export const guessOutputData: GuessOutputItem[] = [
  {
    id: "js-001",
    category: "JS Basics",
    code: `console.log(a);
var a = 10;`,
    output: "undefined",
    explanation: [
      "`var` declarations are hoisted",
      "Only the declaration is hoisted, not the assignment",
      "`a` exists but is undefined at log time",
    ],
    difficulty: "easy",
    relatedVideo: "https://www.youtube.com/@JSpresso1",
  },
  {
    id: "async-001",
    category: "Async",
    code: `console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");`,
    output: `A
D
C
B`,
    explanation: [
      "Synchronous code runs first",
      "Promise callbacks go to microtask queue",
      "setTimeout goes to macrotask queue",
      "Microtasks are executed before macrotasks",
    ],
    difficulty: "medium",
    relatedVideo: "https://youtu.be/akPcMtzs6OQ?si=xWRp3k8u4isUQZJ-"
  },
  {
    id: "closure-001",
    category: "Closures",
    code: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();
fn();
fn();`,
    output: `1
2`,
    explanation: [
      "`inner` forms a closure over `count`",
      "`count` is preserved in memory",
      "Each call updates the same variable",
    ],
    difficulty: "medium",
  },
  {
    id: "react-001",
    category: "React",
    code: `function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(count + 1);
    setCount(count + 1);
  }, []);

  return <div>{count}</div>;
}`,
    output: "1",
    explanation: [
      "State updates with same value are batched",
      "`count` inside effect is stale (0)",
      "Both updates resolve to setCount(1)",
    ],
    difficulty: "hard",
  },
  {
    id: "hoisting-001",
    category: "JS Basics",
    code: `function demo() {
  console.log(x);
  var x = 5;
  console.log(x);
}
var x = 0;
demo();
console.log(x);
`,
    output: `undefined 
5
0`,
    explanation: [
      "var declarations are hoisted i.e. initialized at the top with undefined",
      "Inside demo, x shadows global x",
      "Outside demo, x refers to the global variable",
    ],
    difficulty: "easy",
    relatedVideo: "https://youtu.be/2nXP_d7V8ng?si=R6HOb3RGcE_ii-H9"
  },
  {
    id: "closure-002",
    category: "Closures",
    code: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter1 = outer();
const counter2 = outer();
counter1();
counter1();
counter2();`,
    output: `1
2
2`,
    explanation: [
      "`Each time `outer` is called, a new `count` is created",
      "`Each inner` closure has its own `count`",
      "`counter1` and `counter2` do not share state",
    ],
    difficulty: "medium",
    relatedVideo:"https://youtu.be/OlvujGaJVoU?si=wzfpnwk9UQmyU2zS"
  },
  {
    id: "async-002",
    category: "Async",
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => 
    console.log('A', i), 0);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() =>
    console.log('B', j), 0);
}
Promise.resolve().then(()=>
  console.log('C', 'microtask')
);
console.log('D', 'sync');`,
    output: `D sync
C microtask
A 3
A 3
A 3
B 0
B 1
B 2`,
    explanation: [
      "`var` is function-scoped, so `i` is 3 after the loop",
      "`let` is block-scoped, so `j` retains its value in each iteration",
        "Promise microtask runs before setTimeout macrotasks"
    ],    
    difficulty: "hard",
    relatedVideo: "https://youtu.be/iDwakpEOTqE?si=XkzrJX2qoHrE97vN"
  }
];
