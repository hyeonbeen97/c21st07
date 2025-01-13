export class DeckModule {
    constructor(id) {
        this.id = id;
        this.storage = [];
    }
    push(item) { this.storage.push(item) }
    pop() { return this.storage.pop() }
    unshift(item) { this.storage.unshift(item) }
    shift() { return this.storage.shift() }
    printDeck() { console.log(this.storage) }
}
const myDeck = new DeckModule("myDeck")
