import * as d3 from "d3";

const counts = [
    ["red", 12],
    ["green", 17],
    ["blue", 21],
]

const paint = (data) => {
    const container = d3.select("#container");
    container.selectAll("li").data(data).join("li").text((d) => `item ${d[0]}`)
}

paint(counts)



window.setTimeout(() => {
    counts.push(["yellow", 6])
    paint(counts)
}, 1000)
