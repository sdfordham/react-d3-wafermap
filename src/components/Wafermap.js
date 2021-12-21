import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

const Wafermap = ({ points, configuration }) => {
  const svgRef = useRef(null)

  useEffect(() => {
    const max_x = d3.max(points, p => p.x)
    const max_y = d3.max(points, p => p.y)
    const min_x = d3.min(points, p => p.x)
    const min_y = d3.min(points, p => p.y)

    const radius = max_x + 2  
    const vWidth = 4 * max_x + 1
    const vHeight =  4 * max_y + 1
    const svg = d3.select(svgRef.current)

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

    svg.attr('viewBox', [2 * min_x, 2 * min_y, vWidth, vHeight])

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

    var mouseout = function(d, i) {  // eslint-disable-line no-unused-vars
      svg.select('#d3-tooltip')
        .remove()
    }

    const g = svg.select('#d3-die')
      .selectAll('rect')
      .data(points)
      .join('rect')
      .attr('x', p => p.x)
      .attr('y', p => p.y)
      .attr('width', 0.975)
      .attr('height', 0.975)
      .attr('fill', p => p.color)
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
  }, [points])

  return <svg ref={svgRef}
    width={configuration.width}
    height={configuration.height} />
}

Wafermap.propTypes = {
  points: PropTypes.array.isRequired,
  configuration: PropTypes.object.isRequired
}

export default Wafermap
