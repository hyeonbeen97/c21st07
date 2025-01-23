class Buffer {
    constructor(id) {
        this.id = id;
        this.storage = [];
    }
    push(item) { this.storage.push(item); }
    shift() { return this.storage.shift(); }
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
class LinkedList {
    constructor(id) {
        this.id = id;
        this._value = null;
        this._next = null;
    }
    set value(item) { this._value = item; }
    get value() { return this._value; }
    set next(nextItem) { this._next = nextItem; }
    get next() { return this._next; }
}

const myLinkedValue = ["ZARD", "CDR", "LOVE"];
const myBuffer = new Buffer("myBuffer");

myLinkedValue.forEach((v, i, a) => {
    let tempList = new LinkedList(v);
    tempList.value = v;
    myBuffer.push(tempList);
});

myBuffer.setNext("ZARD", "CDR");
myBuffer.setNext("CDR", "LOVE");
// myL1.next = myL2;
// myL2.next = myL3;

console.log(myBuffer.getValue("CDR").next.value);
// document.write( myBuffer.next.next.value );




