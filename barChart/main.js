getData();

window.addEventListener("resize", getData);

async function getData() {
    let width = +window.innerWidth / 2;
    let height = +window.innerHeight / 2;

    let svg = d3.select('svg')
        .attr("width", width)
        .attr("height", height)
        .style('background-color', '#888');

    try {
        const data = await d3.csv('data.csv');
        console.log("data pull");
        const chartData = Object.entries(data.map(el => {
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

        let y = d3.scaleLinear().domain([0, Math.max(...chartData.map(d => d[1]))]).range([height, 0]);
        let color = d3.scaleLinear().domain([0, Math.max(...chartData.map(el => el[1]))]).range(["green", "brown"]);
        const barOffset = 10;
        let barWidth = width / chartData.length - barOffset;
        console.log(barWidth);
        // remove for responsive sizing
        svg.selectAll("rect").remove();

        svg.selectAll("rect")
            .data(chartData)
            .enter().append("rect")
            .style("fill", d => {
                console.log(color(d[1]));
                return color(d[1])
            })
            .attr("x", (d, i) => `${i * (barWidth+barOffset)}px`)

            .attr("y", (d) => y(d[1]))
            .attr("width", barWidth + "px")
            .attr("height", (d) => {
                return `${height - y(d[1])}px`
            })

    } catch (error) {
        console.log(error);
    }
}