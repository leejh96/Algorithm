// index * 2 = left 정점
// index * 2 + 1 =rigth 정점
// parent = Math. floor(index/2)

//array 방식
const tree = [
  undefined,
  9,
  3,
  8,
  2,
  5,
  undefined,
  7,
  undefined,
  undefined,
  undefined,
  4,
];

// linkedList 방식
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0; //head
    this.rear = 0; //tail
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  //가장 앞의 값을 반환
  peek() {
    return this.queue[this.front];
  }
  //크기 반환
  size() {
    return this.rear - this.front;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }
  display() {
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      if (currentNode) {
        console.log(currentNode.value);
        if (currentNode.left) queue.enqueue(currentNode.left);
        if (currentNode.right) queue.enqueue(currentNode.right);
      } else {
        break;
      }
    }
  }
}

const tree2 = new Tree(new Node(9));
tree2.root.left = new Node(3);
tree2.root.right = new Node(8);
tree2.root.left.left = new Node(2);
tree2.root.left.right = new Node(5);
tree2.root.right.right = new Node(7);
tree2.root.left.right.right = new Node(4);

tree2.display();
