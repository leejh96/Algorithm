//객체 생성
const obj = new Object();
const obj1 = {};
const obj2 = { name: "아무개" };

console.log("obj", obj);
console.log("obj1", obj1);
console.log("obj2", obj2);

//객체 값 추가
obj["email"] = "aa@aa.com";
obj.phone = "01012345678";
console.log(obj);

//객체 값 삭제
console.log(delete obj.phone);
console.log(obj);

//객체 내의 키값이 있는지 확인(true/false)
console.log("email" in obj);
console.log("phone" in obj);

//객체의 key, value 값 가져오기
console.log(Object.keys(obj));
console.log(Object.values(obj));

//객체 순회 문
for (const key in obj) {
  console.log(key, obj[key]);
}
