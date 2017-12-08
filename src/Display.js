import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Vex from 'vexflow';

import './Display.css';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vf: {},
            system: {},
            score: {}
        }
    }

    render() {
        return(
            <div>
                <p style={{width: '120px'}} >{this.props.currNote}</p>
            </div>
        )
    }
}

export default Display;