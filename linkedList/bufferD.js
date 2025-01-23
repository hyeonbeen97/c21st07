class Buffer {
    constructor(id) {
        this.storage = []
    }
    push(item) { this.storage.push(item) }
    shift() { return this.storage.shift() }
    setValue(selector, item) {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].id == selector) {
                this.storage[i].value = item;
                break;
            }
        }
    }
    getValue(selector) {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].id == selector) {
                return this.storage[i].value;
                break;
            }
        }
    }
    setPrev(startSelector, prevSelector) {
        let tempLink = null;

        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].id == prevSelector) {
                tempLink = this.storage[i];
                break;
            }
        }
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].id == startSelector) {
                this.storage[i].prev = tempLink;
                break;
            }
        }
    }
    setNext(startSelector, nextSelector) {
        let tempLink = null;

        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].id == nextSelector) {
                tempLink = this.storage[i];
                break;
            }
        }
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].id == startSelector) {
                this.storage[i].next = tempLink;
                break;
            }
        }
    }
}
class DoubleLinkedList {
    constructor(id) {
        this.id = id;
        this._value = null
        this._next = null
        this._prev = null
    }
    set value(item) { this._value = item }
    get value() { return this._value }

    set next(nextItem) { this._next = nextItem }
    get next() { return this._next }

    set prev(prevItem) { this._prev = prevItem }
    get prev() { return this._prev }
}
const myLinkedValue = ["ZARD", "CDR", "LOVE"];
const myBuffer = new Buffer("myBuffer");

myLinkedValue.forEach((v, i, a) => {
    let tempList = new DoubleLinkedList(v);
    tempList.value = v;
    myBuffer.push(tempList);
});
myBuffer.setNext("ZARD", "CDR");
myBuffer.setNext("CDR", "LOVE");

myBuffer.setPrev("CDR", "ZARD");
myBuffer.setPrev("LOVE", "CDR");

console.log(myBuffer.next('CDR'));

