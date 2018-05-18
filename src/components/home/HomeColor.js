import React, { Component } from 'react';
import './HomeColor.css';
import tinycolor from "tinycolor2";
import TableDragSelect from "react-table-drag-select";
import {Link} from "react-router-dom";

class HomeColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cells: this.cells,
        data: [],
    }
}

  handleChange = cells => this.setState({ cells });

  handleClick = () => {
    const cells = [
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    ];
    this.setState({ cells });
  };

  showHex = () => {
    for(var key in this.colorGroup) {
      for(var i=0; i<this.colorGroup[key].length; i++) {
        if(!this.colorGroup[key][i]) {
          <td>{this.colorGroup[key][i-1].itemHex}</td>
        }
        else {
          <td>{this.colorGroup[key][i].itemHex}</td>
        }
     }
    }
  }

  getID = () => {
    var link = '';
    var elements = document.getElementsByClassName("undefined cell-enabled cell-selected");
    for (var i=0; i<elements.length; i++) {
      link = link + elements[i].id + '&';
    }
    link = link.slice(0, -1);
    window.location.href = `/items/${link}`;
  }
  
  cells = [
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  ];

  render() {
    this.colorGroup = this.props.colorGroup;
    console.log(this.state.cells);
    return (
      <div className="HomeColor">
        <TableDragSelect value={this.state.cells} onChange={this.handleChange}>
          <tr>
              {this.colorGroup.A.map((element, i) => 
                <td
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.B.map((element, i) => 
                <td
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>👄</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.C.map((element, i) => 
                <td
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>🗢</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.D.map((element, i) => 
                <td
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.E.map((element, i) => 
                <td
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.F.map((element, i) => 
                <td
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.G.map((element, i) => 
                <td
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.H.map((element, i) => 
                <td
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>❤</div>
                </td>
          )}
          </tr>

        </TableDragSelect>
        <button onClick={this.handleClick}>Reset</button>
        <button onClick={this.getID}>Search for these colors!</button>
      </div>
    );
  }
}

export default HomeColor;