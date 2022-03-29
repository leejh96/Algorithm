function checkStr(str) {
  const arr = str.split(" ").map((n) => parseInt(n, 10));
  console.log(arr);

  let prev_value;
  for (let i = 0; i < arr.length; i++) {
    if (prev_value !== undefined) {
      if (arr[i] - prev_value !== 1) {
        return "No";
      }
      prev_value = arr[i];
    } else {
      prev_value = arr[i];
    }
  }
  return "Yes";
}

console.log(checkStr("1 4 2 6 3"));
