import React from 'react';
import d3Wafermap from './d3Wafermap.js';

class Wafermap extends React.Component {
    componentDidMount() {
        d3Wafermap.create(
            this._rootNode,
            this.props.points,
            this.props.configuration
        );
    }

    componentDidUpdate(){
        d3Wafermap.update(
            this._rootNode,
            this.props.points
        );
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }
        
    render() {
        return (
            <div
            className="wafermap-container"
            ref={this._setRef.bind(this)}
            />
        )
    }
};

export default Wafermap;