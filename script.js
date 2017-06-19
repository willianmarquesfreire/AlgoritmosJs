String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

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
        return (this.items[size]) ? this.sizeStartIn(size + 1) : size
    }
}

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

function Dictionary() {
    let items = {};

    this.get = key => {
        let a = this.has(key) ? items[key] : undefined
        return a;
    }

    this.set = (key, value) => {
        items[key] = value
    }

    this.delete = key => {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.has = key => {
        return items.hasOwnProperty(key)
    }

    this.clear = () => {
        items = {}
    }

    this.size = () => {
        return Object.keys(items).length
    }

    this.keys = () => {
        return Object.keys(items)
    }

    this.getItems = () => {
        return items
    }

    this.values = () => {
        let values = [];
        for (let k in items) {
            if (this.has(k)) values.push(items[k])
        }
        return values
    }
}


function Graph() {
    let vertices = [];
    let adjList = new Dictionary();

    this.AddVertex = v => {
        v = v.replaceAll(' ', '');
        vertices.push(v);
        adjList.set(v, []);
    }

    this.addEdge = (v, w) => {
        v = v.replaceAll(' ', '');
        w = w.replaceAll(' ', '');
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    this.toString = () => {
        let s = '';
        for (let i in vertices) {
            s += vertices[i] + ' -> ';
            let neighbors = adjList.get(vertices[i]);
            for (let j in neighbors) {
                s += neighbors[j] + ' '
            }
            s += '\n';
        }
        return s;
    }

    this.initializeColor = () => {
        let color = [];
        for (let i in vertices) {
            color[vertices[i]] = 'white';
        }
        return color;
    }

    this.bfsView = (v, callback) => {
        let color = this.initializeColor(),
            queue = new Fila();

        queue.enqueue(v);

        while (!queue.isEmpty()) {
            let u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for (let i in neighbors) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    }

    this.bfs = v => {
        var color = this.initializeColor(),
            queue = new Fila(),
            d = [],
            pred = [];

        queue.enqueue(v);

        for (let i in vertices) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';

            for (let j in neighbors) {
                let w = neighbors[j];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return {
            distances: d,
            predecessors: pred
        }
    }

    this.goto = (a, b) => {
        a = a.replaceAll(' ', '');
        b = b.replaceAll(' ', '');
        let search = this.bfs(a);
        let predecessors = search.predecessors;

        let route = [];
        let atual = b;
        
        while (atual != a) {
            route.unshift(predecessors[atual][0]);
            atual = predecessors[atual][0];
        }

        route.push(b);
        return route;
    }
}


let graph = new Graph();

let myVertices = [
    'apucarana',
    'astorga',
    'arapongas',
    'bela vista do paraiso',
    'mandaguari',
    'maringa',
    'assai',
    'londrina',
    'jataisinho',
    'rolandia',
    'sao sebatiao',
    'sertanopolis',
    'marialva',
    'nova esperanca',
    'paranavai',
    'porecatu',
    'santa fe',
    'iguaracu',
    'primeiro de maio',
    'mandaguacu',
    'sao sebastiao'
];

for (let i in myVertices) {
    graph.AddVertex(myVertices[i])
}


graph.addEdge('apucarana', 'mandaguari');
graph.addEdge('apucarana', 'arapongas');
graph.addEdge('arapongas', 'astorga');
graph.addEdge('astorga', 'maringa');
graph.addEdge('bela vista do paraiso', 'porecatu');
graph.addEdge('londrina', 'assai');
graph.addEdge('londrina', 'bela vista do paraiso');
graph.addEdge('londrina', 'jataisinho');
graph.addEdge('londrina', 'rolandia');
graph.addEdge('londrina', 'sao sebastiao');
graph.addEdge('londrina', 'sertanopolis');
graph.addEdge('mandaguari', 'maringa');
graph.addEdge('maringa', 'mandaguacu');
graph.addEdge('maringa', 'marialva');
graph.addEdge('maringa', 'nova esperanca');
graph.addEdge('paranavai', 'nova esperanca');
graph.addEdge('rolandia', 'apucarana');
graph.addEdge('santa fe', 'iguaracu');
graph.addEdge('sertanopolis', 'primeiro de maio');



function printNode(value) {
    console.log("Visited Vertex: " + value)
}

console.log(graph.bfs('paranavai'))

console.log(graph.goto('apucarana', 'paranavai'))