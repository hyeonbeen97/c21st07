class stack {
    constructor(id) {
        this.id
        this.storage
    }
    push(item) { this.storage.push(item) }
    pop() { return this.storage.pop() }
}
class Queue {
    constructor(id) {
        this.id
        this.storage
    }
    push(item) { this.storage.push(item) }
    shift() { return this.storage.shift() }
}
class Deck {
    constructor(id) {
        this.id
        this.storage
    }
    push(item) { this.storage.push(item) }
    pop() { return this.storage.pop() }
    unshfit(item) { this.storage.unshift(item) }
    shift() { return this.storage.shift() }
}

const myQ = new Queue('myQ')
