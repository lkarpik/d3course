let width = +window.innerWidth;

const svg = d3.select('svg')
    .attr("width", width)
    .attr("height", width / 2)
    .style('background-color', '#888');

getData();
let dataOut;
async function getData() {
    try {
        const data = await d3.csv('data.csv');
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

        let y = d3.scaleLinear().domain([0, Math.max(...chartData.map(el => el[1]))]).range([width / 2, 0]);
        let color = d3.scaleLinear().domain([0, Math.max(...chartData.map(el => el[1]))]).range(["green", "brown"]);



        console.log(chartData);
        svg.selectAll("rect")
            .data(chartData)
            .enter().append("rect")
            .style("fill", d => {
                console.log(color(d[1]));
                return color(d[1])
            })
            .attr("x", (d, i) => `${i * (50+10)}px`)

            .attr("y", (d) => y(d[1]))
            .attr("width", "50px")
            .attr("height", (d) => {
                return `${width/2 - y(d[1])}px`
            })

    } catch (error) {
        console.log(error);
    }
}

let badArray = [{
        name: "Luck",
        age: 33,
        hair: "Brown"
    },
    {
        name: "Buck",
        age: 22,
        hair: "White"
    },
    {
        name: "Buck",
        age: 5,
        hair: "White"
    },
    {
        name: "Stuck",
        age: 22,
        hair: "White"
    },
    {
        name: "Luck",
        age: 22,
        hair: "White"
    }
];

function massage() {
    console.log(badArray);
    return badArray.reduce((acc, el, index) => {

        acc.push(index);
        return acc;
    }, []);
}

console.log('masage', massage());