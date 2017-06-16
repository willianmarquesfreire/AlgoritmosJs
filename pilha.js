/**
 * Stack || Pilha
 * 
 * LIFO -> Last In First Out || Último a entrar, primeiro a sair
 * 
 */
class Pilha {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items[this.items.length] = element
        // ou this.items.push()
    }
    pop() {
        return this.items.splice(this.items.length - 1, 1)
        // ou this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    clear() {
        this.items = []
    }
    size() {
        return this.items.length
    }
    sizeRecursive() {
        return this.sizeStartIn(0)
    }
    sizeStartIn(size) {
        return (this.items[size]) ? this.sizeStartIn(size+1) : size
    }
}
