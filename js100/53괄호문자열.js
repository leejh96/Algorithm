const str = ")()((()()()()(()(())((()()((";

const stack = [];

for (let i of str) {
  if (i === "(") {
    stack.push(i);
  }
  if (i === ")" && stack.length !== 0) {
    stack.pop();
  }
}

if (stack.length) {
  console.log("no");
} else {
  console.log("yes");
}
