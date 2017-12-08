import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import FlatButton from 'material-ui/FlatButton';
import Display from './Display';
import ButtonWrapper from './ButtonWrapper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ['A','A#','B','C','C#',
              'D','D#','E','F','F#',
              'G','G#'],
      currNote: 'A',
      hlNote: ""
    }
  }
  buttonStyle = {
    minWidth: 30
  }

  notePressed = (item) => (event) => {
    console.log(item);
    if (item === this.state.currNote) {
      let newNote = this.state.notes[Math.floor(Math.random()*12)];
      while (newNote == this.state.currNote) {
        newNote = this.state.notes[Math.floor(Math.random()*12)];
      }
      // Highlight other instances of note
      this.setState({hlNote: this.state.currNote,currNote: newNote}, () => {
        setTimeout(() => {
          this.setState({hlNote: ""});
        }, 1000);
      });
    }
  }

  render() {
    return (
      <div className="App">
        < MuiThemeProvider >
          <div class="main-view">
          <Display currNote={this.state.currNote}/>
            <table className="neck-table">
              <tr className="open-strings">
                <td className="row-1"><ButtonWrapper row="row-1" notePressed={this.notePressed} highlighted={this.state.hlNote} note="G" /></td>
                <td className="row-1"><ButtonWrapper row="row-1" notePressed={this.notePressed} highlighted={this.state.hlNote} note="D" /></td>
                <td className="row-1"><ButtonWrapper row="row-1" notePressed={this.notePressed} highlighted={this.state.hlNote} note="A" /></td>
                <td className="row-1"><ButtonWrapper row="row-1" notePressed={this.notePressed} highlighted={this.state.hlNote} note="E" /></td>
              </tr>
              <tr>
                <td className="row-2"><ButtonWrapper row="row-2" notePressed={this.notePressed} highlighted={this.state.hlNote} note="G#" /></td>
                <td className="row-2"><ButtonWrapper row="row-2" notePressed={this.notePressed} highlighted={this.state.hlNote} note="D#" /></td>
                <td className="row-2"><ButtonWrapper row="row-2" notePressed={this.notePressed} highlighted={this.state.hlNote} note="A#" /></td>
                <td className="row-2"><ButtonWrapper row="row-2" notePressed={this.notePressed} highlighted={this.state.hlNote} note="F" /></td>
              </tr>
              <tr>
                <td className="row-3"><ButtonWrapper row="row-3" notePressed={this.notePressed} highlighted={this.state.hlNote} note="A" /></td>
                <td className="row-3"><ButtonWrapper row="row-3" notePressed={this.notePressed} highlighted={this.state.hlNote} note="E" /></td>
                <td className="row-3"><ButtonWrapper row="row-3" notePressed={this.notePressed} highlighted={this.state.hlNote} note="B" /></td>
                <td className="row-3"><ButtonWrapper row="row-3" notePressed={this.notePressed} highlighted={this.state.hlNote} note="F#" /></td>
              </tr>
              <tr>
                <td className="row-4"><ButtonWrapper row="row-4" notePressed={this.notePressed} highlighted={this.state.hlNote} note="A#" /></td>
                <td className="row-4"><ButtonWrapper row="row-4" notePressed={this.notePressed} highlighted={this.state.hlNote} note="F" /></td>
                <td className="row-4"><ButtonWrapper row="row-4" notePressed={this.notePressed} highlighted={this.state.hlNote} note="C" /></td>
                <td className="row-4"><ButtonWrapper row="row-4" notePressed={this.notePressed} highlighted={this.state.hlNote} note="G" /></td>
              </tr>
              <tr>
                <td className="row-5"><ButtonWrapper row="row-5" notePressed={this.notePressed} highlighted={this.state.hlNote} note="B" /></td>
                <td className="row-5"><ButtonWrapper row="row-5" notePressed={this.notePressed} highlighted={this.state.hlNote} note="F#" /></td>
                <td className="row-5"><ButtonWrapper row="row-5" notePressed={this.notePressed} highlighted={this.state.hlNote} note="C#" /></td>
                <td className="row-5"><ButtonWrapper row="row-5" notePressed={this.notePressed} highlighted={this.state.hlNote} note="G#" /></td>
              </tr>
              <tr>
                <td className="row-6"><ButtonWrapper row="row-6" notePressed={this.notePressed} highlighted={this.state.hlNote} note="C" /></td>
                <td className="row-6"><ButtonWrapper row="row-6" notePressed={this.notePressed} highlighted={this.state.hlNote} note="G" /></td>
                <td className="row-6"><ButtonWrapper row="row-6" notePressed={this.notePressed} highlighted={this.state.hlNote} note="D" /></td>
                <td className="row-6"><ButtonWrapper row="row-6" notePressed={this.notePressed} highlighted={this.state.hlNote} note="A" /></td>
              </tr>
            </table>
          </div>
        </MuiThemeProvider>
      </div>
      
    );
  }
}

export default App;
