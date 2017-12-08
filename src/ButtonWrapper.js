import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton'

import './ButtonWrapper.css';

class ButtonWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: props.note,
            buttonStyle: {
                minWidth: 30
            }
        }
    }

    render() {
        var buttonStyle = {
            minWidth: 30
        }

        if (this.props.highlighted === this.state.note) {
           buttonStyle = {
               minWidth: 30,
               color: 'gray'
           }
        }

        return (
            <div>
                <FlatButton onClick={this.props.notePressed(this.state.note)} fullWidth={false} style={buttonStyle}>{this.state.note}</FlatButton>
            </div>
        )
    }
}

export default ButtonWrapper;