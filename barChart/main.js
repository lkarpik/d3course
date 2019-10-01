let width = +window.innerWidth;

const svg = d3.select('svg')
    .attr("width", width)
    .attr("height", width / 2)
    .style('background-color', '#888');

let newData;
d3.csv('data.csv').then(data => {
    newData = data.map(el => {
        el.price = +el.price;
        return el
    })
    return data
});
setTimeout(() => console.log(newData), 100);