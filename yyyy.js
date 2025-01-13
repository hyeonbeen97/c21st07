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