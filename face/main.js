let width = +window.innerWidth;

const arc = d3.arc();

const svg = d3.select('svg')
    .attr("width", width)
    .attr("height", width / 2)
    .style('background-color', '#888');

const g = svg.append('g')
    .attr('transform', `translate(${width / 2}, ${width / 4})`);

const circle = g.append('circle')
    .attr('fill', 'gold')
    .attr('stroke', 'black')
    .attr('r', width / 2 / 2);

const gEyes = g.append('g')
    .attr('fill', 'darkgrey')
    .attr('transform', `translate(0, ${-width / 16})`);

const leftEye = gEyes.append('circle')
    .attr('cx', -width / 2 / 2 / 2)
    .attr('r', width / 32);

const rightEye = gEyes.append('circle')
    .attr('cx', width / 2 / 2 / 2)
    .attr('r', width / 32);

const lEyebrow = gEyes.append('rect')
    .attr('width', width / 16)
    .attr('height', width / 64)
    .attr('x', width / 2 / 2 / 2 - (width / 32))
    .attr('y', -width / 16)

const rEyebrow = gEyes.append('rect')
    .attr('width', width / 16)
    .attr('height', width / 64)
    .attr('x', -width / 2 / 2 / 2 - (width / 32))
    .attr('y', -width / 16)


const smile = g.append('path')
    .attr('d', arc({
        innerRadius: 0,
        outerRadius: 100,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 / 2
    }))
    .attr('fill', 'black');