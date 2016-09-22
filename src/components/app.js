import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Box from './Box';
import Dustbin from './Dustbin';

class App extends Component {
  render() {
    return (
      <div style={{height:'500px', width:'500px'}}>
        <div>
          DnD 練習
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Dustbin />
          </div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Box name='玻璃' />
            <Box name='香蕉' />
            <Box name='紙' />
          </div>
        </div>
      </div>
    );
  }
}

// react-dnd 要使用 DragDropContext 和 HTML5Backend 讓這個component可以控制拖曳
export default DragDropContext(HTML5Backend)(App);
