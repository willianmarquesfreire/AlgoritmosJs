var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 2, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
];

var INF = Number.MAX_SAFE_INTEGER;

let minDistance = (dist, visited) => {
    let min = INF, minIndex = -1;

    for (let v = 0; v < dist.length; v++) {
        if (visited[v] == false && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
}

let dijikstra = src => {
    let dist = [], visited = [],
        length = graph.length;

    for (let i = 0; i < length; i++) {
        dist[i] = INF;
        visited[i] = false;
    }

    dist[src] = 0;

    for (let i = 0; i < length; i++) {
        let u = minDistance(dist, visited);
        visited[u] = true;

        for (let v = 0; v < length; v++) {
            if (!visited[v] && this.graph[u][v] != 0 && dist[u] != INF
            && dist[u] + this.graph[u][v] < dist[v]) {
                dist[v] = dist[u] + this.graph[u][v];
            }
        }
    }
    return dist;
}

console.log(dijikstra(1))