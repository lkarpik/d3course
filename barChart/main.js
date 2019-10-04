let width = +window.innerWidth;

const svg = d3.select('svg')
    .attr("width", width)
    .attr("height", width / 2)
    .style('background-color', '#888');

getData();

async function getData() {
    try {
        const data = await d3.csv('data.csv');
        const chartData = (data.map(el => {
            return {
                price: +el.price,
                city: el.city
            }
        }).reduce((acc, el) => {
            if (!acc[el.city]) {
                acc[el.city] = 0;
            }
            acc[el.city] += el.price;
            return acc;
        }, {}));

        let y = d3.scaleLinear().domain([0, 2500000]).range([0, 400]);


        console.log(Object.entries(chartData));
        svg.selectAll("rect")
            .data(Object.entries(chartData))
            .enter().append("rect")
            .attr("x", (d, i) => `${i * 50}px`)
            .attr("y", "0px")
            .attr("width", "50px")
            .attr("height", (d) => {
                console.log(d);
                return `${y(d[1])}px`
            })
            .attr('transform', 'translate(' + 0 + ',' + 0 + ')')




    } catch (error) {
        console.log(error);
    }
}