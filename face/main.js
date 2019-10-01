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
    .attr('fill', 'black')
    .attr('transform', `translate(0, ${-width / 16})`);

const leftEye = gEyes.append('circle')
    .attr('cx', -width / 2 / 2 / 2)
    .attr('r', width / 32);

const rightEye = gEyes.append('circle')
    .attr('cx', width / 2 / 2 / 2)
    .attr('r', width / 32);

const eyebrowsG = gEyes.append('g')
    .attr('transform', `translate(0, ${-width / 16})`);

eyebrowsG
    .transition()
    .duration(1000)
    .attr('transform', `translate(0, ${-width / 16-50})`)
    .transition()
    .duration(1000)
    .attr('transform', `translate(0, ${-width / 16})`);




const lEyebrow = eyebrowsG.append('rect')
    .attr('width', width / 16)
    .attr('height', width / 64)
    .attr('x', width / 2 / 2 / 2 - (width / 32));


const rEyebrow = eyebrowsG.append('rect')
    .attr('width', width / 16)
    .attr('height', width / 64)
    .attr('x', -width / 2 / 2 / 2 - (width / 32));

const smile = g.append('path')
    .attr('d', arc({
        innerRadius: 0,
        outerRadius: width / 8,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 / 2
    }))
    .attr('fill', 'black');