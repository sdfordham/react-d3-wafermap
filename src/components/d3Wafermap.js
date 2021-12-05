import * as d3 from 'd3'
var d3Wafermap = {}

d3Wafermap.create = (el, data, configuration) => {
  var svg = d3.select(el).append('svg')
    .attr('width', configuration.width)
    .attr('height', configuration.height)

  svg.append('circle')
    .style('fill', 'gray')
    .style('stroke', 'black')
    .style('stroke-width', 0.025)
    .attr('id', 'd3-outer-circ')
    .attr('cx', 0.5)
    .attr('cy', 0.5)

  svg.append('circle')
    .style('fill', 'gray')
    .style('stroke', 'black')
    .style('stroke-width', 0.025)
    .attr('id', 'd3-inner-circ')
    .attr('cx', 0.5)
    .attr('cy', 0.5)
    
  svg.append('g').attr('id', 'd3-die')

  d3Wafermap.update(el, data)
}

d3Wafermap.update = (el, data) => {
  const max_x = d3.max(data, ({x}) => x)
  const max_y = d3.max(data, ({y}) => y)
  const min_x = d3.min(data, ({x}) => x)
  const min_y = d3.min(data, ({y}) => y)
    
  const radius = max_x + 2
  const vWidth = 4 * max_x + 1
  const vHeight =  4 * max_y + 1

  var svg = d3.select(el).select('svg')
    .attr('viewBox', [2 * min_x, 2 * min_y, vWidth, vHeight])

  const outer_c = svg.select('#d3-outer-circ')
    .attr('r', radius + 0.2)

  const inner_c = svg.select('#d3-inner-circ')
    .attr('r', radius)

  function mouseover(d, i) {
    svg.select('#d3-die')
      .append('text')
      .attr('id', 'd3-tooltip')
      .attr('x', radius)
      .attr('y', radius)
      .attr('font-size', '2px')
      .text(i.mouseover)
  }

  var mouseout = function(d, i) { // eslint-disable-line no-unused-vars
    svg.select('#d3-tooltip')
      .remove()
  }

  const g = svg.select('#d3-die')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', ({x}) => x)
    .attr('y', ({y}) => y)
    .attr('width', 0.975)
    .attr('height', 0.975)
    .attr('fill', ({color}) => color)
    .attr('stroke', 'black')
    .attr('stroke-width', 0.025)
    .on('mouseover', mouseover)
    .on('mouseout', mouseout)
  
  svg.call(d3.zoom()
    .extent([[0, 0], [vWidth, vHeight]])
    .scaleExtent([1, 8])
    .on('zoom', zoomed))

  function zoomed({transform}) {
    g.attr('transform', transform)
    outer_c.attr('transform', transform)
    inner_c.attr('transform', transform)
  }
}

export default d3Wafermap
