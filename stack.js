class Stack {    //스택 만들기
    constructor(id) {
        this.id = id;
        this.storage = [];
    }
    pushItem(item) { this.storage.push(item); } //push 스택
    popItem() { return this.storage.pop(); }  //pop스택
    displayItem() { document.write(this.storage); }
}