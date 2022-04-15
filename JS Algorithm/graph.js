// 노드가 5일경우

//인접행렬 방식
const graph = Array.from(Array(5), () => Array(5).fill(false));
graph[0][1] = true;
graph[1][1] = true;
graph[1][3] = true;
graph[3][1] = true;

console.log(graph);

//인접리스트 방식
const graph2 = Array.from(Array(5), () => []);

graph2[0].push(3);
graph2[1].push(5);

console.log(graph2);
