class SingleLinkedList {
    constructor(id, v) {
        this.id = id;
        this._value = v;
        this.nextNode = null;
    }
    get value() { return this._value; }
    set value(item) { this._value = item; }
    setNext(nextNode) { this.nextNode = nextNode; }
    next() { return this.nextNode; }
}
class Queue {
    constructor() {
        // 큐의 첫 번째 노드
        this.head = null;
        // 큐의 마지막 노드
        this.tail = null;
        // 큐의 길이
        this.size = 0;
    }
    enqueue(v) {
        const newNode = new Node(v);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }
}
const Q = new Queue();
console.log(Q)


const sLL1 = new SingleLinkedList("sLL1", "ZARD");
const sLL2 = new SingleLinkedList("sLL2", "ZAR3");
const sLL3 = new SingleLinkedList("sLL3", "ZA23");

sLL1.setNext(sLL2);
sLL2.setNext(sLL3);
console.log(sLL1);
