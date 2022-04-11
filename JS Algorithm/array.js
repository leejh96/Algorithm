//배열 생성법
const arr1 = new Array();
const arr2 = [];
const arr3 = new Array(5);

//배열 초기화;
const arr5 = new Array(5).fill(5);
const arr4 = [1, 2, 3, 4, 5];
const arr6 = Array.from(Array(5), (value, idx) => idx + 1);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);

//arr method, property

//length
//배열의 길이를 측정하는 속성
const arr = [1, 2, 3, 4, 5, 6];
arr.length = 3;
console.log(arr);
arr.length = 10;
console.log(arr);

//join
//배열을 문자열로 변경하고 싶을 때 사용
const arrr = [1, 2, 3, 4, 5, 6];
console.log(arrr.join(", "));

//reverse
//배열을 뒤집을 때 사용
//주의할 점은 한번 사용시 원래의 배열에도 영향을 받음
console.log(arrr.reverse());
console.log(arrr);

//concat
//배열을 합치는데 사용하는 메소드
const arrr1 = [1, 2, 3, 4, 5, 6];
const arrr2 = [7, 8, 9, 10];
console.log(arrr1.concat(arrr2));

//push, pop
//배열끝에 요소를 추가하거나 삭제하는 메소드
const ar1 = [1, 2, 3, 4, 5, 6];
ar1.push(7);
ar1.push(7, 8, 9);
ar1.pop();
ar1.pop();
console.log(ar1.pop());
console.log(ar1);

// unshift, shift
// 배열 맨 앞에 요소를 추가 삭제하는 메소드
const ar2 = [1, 2, 3, 4, 5, 6];
ar2.shift();
ar2.shift();
console.log(ar2);
ar2.unshift(10);
console.log(ar2);

// slice
// 배열 중간의 값을 잘라서 사용
// slice(이상, 미만);
const ar3 = [1, 2, 3, 4, 5, 6];
console.log(ar3.slice(2, 4));
console.log(ar3);
console.log(ar3.slice(2));

//splice
//배열 중간의 값을 삭제 및 추가
//splice(삭제할 인덱스, 삭제할 갯수);
const ar4 = [1, 2, 3, 4, 5, 6];
console.log(ar4.splice(2, 2));
console.log(ar4);
console.log(ar4.splice(1, 2, 7, 8));
console.log(ar4);
//배열 순회
const ar5 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < ar5.length; i++) {
  console.log(ar5[i]);
}
for (const i of ar5) {
  console.log(i);
}
