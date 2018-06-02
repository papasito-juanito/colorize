import React, { Component } from 'react';
import './HomeColor.css';
import TableDragSelect from "react-table-drag-select";
import styled from 'styled-components';

const Button = styled.button`
  padding: 1% 2%;
  font-size: 1em;
  color: #fff;
  text-align: center;
  cursor: pointer;
  color: #fff;
  background-color: #000000;
  margin: 1%;
  border: 0;
  font-family: 'Roboto';
  font-weight: 300;
  &:hover {
    text-shadow: 0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F;
    // text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
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
    // const encodeLink = encodeURIComponent(link);
    window.location.href = `/items/${link}?sort=rating`;
    // return <Link to ={`/items/${link}?sort=rating`}/>
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
    return (
      <div className="HomeColor" style={{ backgroundColor:'white', margin:'20px 2% 2% 2%', width:'100%', heigth:'100%'}}>
        <div style={{ margin:'0% 5% 3% 5%'}}>
        <TableDragSelect style={{marginLeft:'auto', marginRight:'auto'}} value={this.state.cells} onChange={this.handleChange}>
          <tr>
              {this.colorGroup.A.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{backgroundColor: '#' + element.itemHex, width: '5vw', height: '7.5vh'}}>
                  <div className='heart'/>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.B.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{backgroundColor: '#' + element.itemHex, width: '5vw', height: '7.5vh'}}>
                  <div className='heart'/>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.C.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{backgroundColor: '#' + element.itemHex, width: '5vw', height: '7.5vh'}}>
                  <div className='heart'/>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.D.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{backgroundColor: '#' + element.itemHex, width: '5vw', height: '7.5vh'}}>
                  <div className='heart'/>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.E.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{backgroundColor: '#' + element.itemHex, width: '5vw', height: '7.5vh'}}>
                  <div className='heart'/>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.F.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{backgroundColor: '#' + element.itemHex, width: '5vw', height: '7.5vh'}}>
                  <div className='heart'/>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.G.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{backgroundColor: '#' + element.itemHex, width: '5vw', height: '7.5vh'}}>
                  <div className='heart'/>
                </td>
          )}
          </tr>
          <tr>
              {this.colorGroup.H.map((element, i) => 
                <td
                key={i}
                id={element.color_id}
                style={{backgroundColor: '#' + element.itemHex, width: '5vw', height: '7.5vh'}}>
                  <div className='heart'/>
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