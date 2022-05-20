<p align=center><img src="sample.jpg" width="200" height="200" /></p>

# react-d3-wafermap

React component that uses [D3.js](https://d3js.org/) to generate a wafer map from a json of die data for yield analysis. It will automatically generate a proper border if the wafer is reasonably symmetric. The json should have $(x,y)$ data for each die, as well as color and mouseover text.

The D3 code can be forked on Observable [here](https://observablehq.com/@sdfordham/simple-wafermap). The component follows the ''lifecycle methods wrapping'' structure due to [Nicolas Hery](https://nicolashery.com/integrating-d3js-visualizations-in-a-react-app/) via Marco Iglesias' great book [Pro D3.js](https://www.apress.com/gp/book/9781484252024). This repo was created with [create-react-app](https://github.com/facebook/create-react-app).
