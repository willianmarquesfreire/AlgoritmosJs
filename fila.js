/**
 * Fila || Queue
 * 
 * FIFO -> First In First out || Primeiro a entrar, Primeiro a sair
 * 
 */

class Fila {
    constructor() {
        this.items = []
    }
    enqueue(element) {
        this.items[this.items.length] = element
        // ou items.push(element)
    }
    dequeue() {
        return this.items.splice(0, 1)
        // ou items.shift()
    }
    front() {
        return this.items[0]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    sizeRecursive() {
        return this.sizeStartIn(0)
    }
    sizeStartIn(size) {
        return (this.items[size]) ? this.sizeStartIn(size + 1) : size
    }
}


// Utilizando WeakMap

var Queue = (function () {
    let items = new WeakMap();
    class Fila {
        constructor() {
            items.set(this, [])
        }
        enqueue(element) {
            items[items.length] = element
            // ou items.push(element)
        }
        dequeue() {
            return items.splice(0, 1)
            // ou items.shift()
        }
        front() {
            return items[0]
        }
        isEmpty() {
            return items.length === 0
        }
        size() {
            return items.length
        }
        sizeRecursive() {
            return sizeStartIn(0)
        }
        sizeStartIn(size) {
            return (items[size]) ? sizeStartIn(size + 1) : size
        }
    }
})();
