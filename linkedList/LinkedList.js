
class Stack {
    constructor(id) {
        this.id = id;
        this.storage = [];
    }
    push(item) { this.storage.push(item); }
    pop() { return this.storage.pop(); }
}

class Queue {
    constructor(id) {
        this.id = id;
        this.storage = [];
    }
    push(item) { this.storage.push(item); }
    shift() { return this.storage.shift(); }
}

class Deck {
    constructor(id) {
        this.id = id;
        this.storage = [];
    }
    push(item) { this.storage.push(item); }
    pop() { return this.storage.pop(); }
    unshift(item) { this.storage.unshift(item); }
    shift() { return this.storage.shift(); }
}


class SingleLinkedList {
    constructor(id) {
        this.id = 0;
        this._value = "";
        this.nextNode = null;
    }
    get value() { return this._value; }
    set value(item) { this._value = item; }
    setNext(nextNode) { this.nextNode = nextNode; }
    next() { return this.nextNode; }
}
const sLL1 = new SingleLinkedList("sLL1");
const sLL2 = new SingleLinkedList("sLL2");
const sLL3 = new SingleLinkedList("sLL3");
sLL1.value = "ZARD";
sLL2.value = "CDR";
sLL3.value = "Love";
sLL1.setNext(sLL2);
sLL2.setNext(sLL3);
console.log(sLL1.next().next().value);

class DoubleLinkedList {
    constructor(id) {
        this.id = id;
        this._value = "";
        this.pNode = null;
        this.nNode = null;
    }
    set value(value) { this._value = value; }
    get value() { return this._value; }
    setPNode(node) { this.pNode = node; }
    setNNode(node) { this.nNode = node; }
    prevNode() { return this.pNode; }
    nextNode() { return this.nNode; }
}

const dll1 = new DoubleLinkedList("dll1");
const dll2 = new DoubleLinkedList("dll2");
const dll3 = new DoubleLinkedList("dll3");
dll1.value = "Love";
dll2.value = "CDR";
dll3.value = "Zard";
dll1.setNNode(dll2);
dll2.setPNode(dll1);
dll2.setNNode(dll3);
dll3.setPNode(dll2);

console.log(dll1.nextNode().nextNode().prevNode().value);
