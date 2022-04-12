//배열을 이용한 구현
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

//linkedList로 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }
  peek() {
    return this.head.value;
  }
}

// const queue = new LinkedListQueue();
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue()); //1
queue.enqueue(8);
console.log(queue.size()); //3
// console.log(queue.size); //3
console.log(queue.peek()); //2
console.log(queue.dequeue()); //2
console.log(queue.dequeue()); //4
