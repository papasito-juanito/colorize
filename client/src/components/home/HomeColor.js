import React, { Component } from 'react';
import './HomeColor.css';
import tinycolor from "tinycolor2";
import TableDragSelect from "react-table-drag-select";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Button = styled.button`
  padding: 1% 2%;
  font-size: 1em;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #121212;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  margin: 1%;
  &:hover {
    background-color: #484848;
  }  
  &:active {
    background-color: #121212;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }  

`

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
    const encodeLink = encodeURIComponent(link);
    window.location.href = `/items/${encodeLink}`;
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
      <div className="HomeColor" style={{ backgroundColor:'white', margin:'2% 2% 2% 2%', width:'100%', heigth:'100%'}}>
        <div style={{ margin:'5% 5% 3% 5%'}}>
        <TableDragSelect style={{marginLeft:'auto', marginRight:'auto'}} value={this.state.cells} onChange={this.handleChange}>
          <tr>
              {this.colorGroup.A.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div className='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.B.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div className='heart'>👄</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.C.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div className='heart'>🗢</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.D.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div className='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.E.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div className='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.F.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div className='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.G.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div className='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.H.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div className='heart'>❤</div>
                </td>
          )}
          </tr>

        </TableDragSelect>
        </div>
        <div style={{textAlign:'center'}}>
          <Button onClick={this.handleClick}>Reset</Button>
          <Button onClick={this.getID}>Search for these colors!</Button>
        </div>
      </div>
    );
  }
}

export default HomeColor;