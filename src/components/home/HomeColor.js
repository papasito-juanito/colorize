import React, { Component } from 'react';
import './HomeColor.css';
import tinycolor from "tinycolor2";
import TableDragSelect from "react-table-drag-select"

class HomeColor extends Component {
  state = {
    cells: cells
  };

  handleChange = cells => this.setState({ cells });

  handleClick = () => {
    const cells = [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false]
    ];
    this.setState({ cells });
  };

  showHex = () => {
    for(var key in colorGroup) {
      for(var i=0; i<colorGroup[key].length; i++) {
        if(!colorGroup[key][i]) {
          <td>{colorGroup[key][i-1].itemHex}</td>
        }
        else {
          <td>{colorGroup[key][i].itemHex}</td>
        }
     }
    }
  }

  render() {
    return (
      <div className="HomeColor">
        <TableDragSelect value={this.state.cells} onChange={this.handleChange}>
          <tr>
              {colorGroup.A.map((element, i) => 
                <td
                id={element.id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {colorGroup.B.map((element, i) => 
                <td
                id={element.id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>👄</div>
                </td>
          )}
          </tr>
          <tr>
              {colorGroup.C.map((element, i) => 
                <td
                id={element.id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>🗢</div>
                </td>
          )}
          </tr>
          <tr>
              {colorGroup.D.map((element, i) => 
                <td
                id={element.id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {colorGroup.E.map((element, i) => 
                <td
                id={element.id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {colorGroup.F.map((element, i) => 
                <td
                id={element.id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {colorGroup.G.map((element, i) => 
                <td
                id={element.id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>❤</div>
                </td>
          )}
          </tr>
          <tr>
              {colorGroup.H.map((element, i) => 
                <td
                id={element.id}
                style={{borderRadius: '6.5px', backgroundColor: '#' + element.itemHex, width: '4rem', height: '3rem'}}>
                  <div class='heart'>❤</div>
                </td>
          )}
          </tr>

        </TableDragSelect>
        <button onClick={this.handleClick}>Reset</button>
        <button>Search for these colors!</button>
      </div>
    );
  }
}

var colorGroup = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
  G: [],
  H: []
}

function sortColorGroup(dbItemHex) {
  var lumArr = []; //array to store h values
  for(var i=0; i<dbItemHex.length; i++) {
    lumArr.push(tinycolor(dbItemHex[i].itemHex).getLuminance());
  }
  console.log('unsorted lum: ' + lum);
  lumArr.sort(function(a, b){
    return b-a;
  });
  console.log('sorted lum: ' + lum);
  var splitArr = Math.round(lumArr.length/8);
  console.log('splitArr: ' + splitArr);

  //ranges
  console.log('A ' + lumArr[0], lumArr[splitArr-1]);
  console.log('B ' + lumArr[splitArr-1], lumArr[splitArr*2-1]);
  console.log('C ' + lumArr[splitArr*2-1], lumArr[splitArr*3-1]);
  console.log('D ' + lumArr[splitArr*3-1], lumArr[splitArr*4-1]);
  console.log('E ' + lumArr[splitArr*4-1], lumArr[splitArr*5-1]);
  console.log('F ' + lumArr[splitArr*5-1], lumArr[splitArr*6-1]);
  console.log('G ' + lumArr[splitArr*6-1], lumArr[splitArr*7-1]);
  
  var idHexLum = dbItemHex.slice();
  for (var j=0; j<idHexLum.length; j++) {
    var color = tinycolor(idHexLum[j].itemHex) // tinycolor color format
    var hsl = color.toHsl(); //hsl format
    var h = hsl.h; // just need h for color sorting
    var lum = color.getLuminance(); // for lumniance sorting in each color group
    idHexLum[j].lum = lum;
    idHexLum[j].h = h;
    
    console.log('lum is...' + lum);

    //sorting by color group
    if (lum<=lumArr[0] && lum>=lumArr[splitArr-1]) {
      console.log('A');
      colorGroup.A.push(idHexLum[j]);
    }
    else if (lum<lumArr[splitArr-1] && lum>=lumArr[splitArr*2-1]) {
      console.log('B');
      colorGroup.B.push(idHexLum[j]);
    }
    else if (lum<lumArr[splitArr*2-1] && lum>=lumArr[splitArr*3-1]) {
      console.log('C');
      colorGroup.C.push(idHexLum[j]);
    }
    else if (lum<lumArr[splitArr*3-1] && lum>=lumArr[splitArr*4-1]) {
      console.log('D');
      colorGroup.D.push(idHexLum[j]);
    }
    else if (lum<lumArr[splitArr*4-1] && lum>=lumArr[splitArr*5-1]) {
      console.log('E');
      colorGroup.E.push(idHexLum[j]);
    }
    else if (lum<lumArr[splitArr*5-1] && lum>=lumArr[splitArr*6-1]) {
      console.log('F');
      colorGroup.F.push(idHexLum[j]);
    }
    else if (lum<lumArr[splitArr*6-1] && lum>=lumArr[splitArr*7-1]) {
      console.log('G');
      colorGroup.G.push(idHexLum[j]);
    }
    else {
      console.log('H');
      colorGroup.H.push(idHexLum[j]);
    }
    
    //sort by luminance high to low
    for(var key in colorGroup) {
      colorGroup[key].sort(function(obj1, obj2) {
        return obj2.h - obj1.h;
      })
    }
  }
}

var sample = [{id: '1', itemHex: 'E01D5F'}, {id: '2', itemHex: 'A52477'}, {id: '3', itemHex: 'E26E6E'}, {id: '4', itemHex: 'D45C74'}, {id: '5', itemHex: '8F2740'}, {id: '6', itemHex: 'D82255'}, {id: '7', itemHex: 'E71471'}, {id: '8', itemHex: 'EF7989'}, {id: '9', itemHex: 'D86189'}, {id: '10', itemHex: 'DE4A3C'}, {id: '11', itemHex: 'CF403C'}, {id: '12', itemHex: 'E1313E'}, {id: '13', itemHex: 'F15242'}, {id: '14', itemHex: 'EE6C74'}, {id: '15', itemHex: 'DA1215'}, {id: '16', itemHex: 'B91A2E'}, {id: '17', itemHex: 'B41E44'}, {id: '18', itemHex: 'C30F2A'}, {id: '19', itemHex: '671C23'}, {id: '20', itemHex: 'B1443F'}, {id: '21', itemHex: 'CE6C6D'}, {id: '22', itemHex: 'C86F5F'}, {id: '23', itemHex: 'C51C3B'}, {id: '24', itemHex: 'EF2463'}, {id: '25', itemHex: 'F03152'}, {id: '26', itemHex: 'C32139'}, {id: '27', itemHex: 'C52D53'}, {id: '28', itemHex: 'A92E42'}, {id: '29', itemHex: 'AF4353'}, {id: '30', itemHex: 'C6495B'}, {id: '31', itemHex: 'D45F4E'}, {id: '32', itemHex: 'E24A33'}, {id: '33', itemHex: 'E83A33'}, {id: '34', itemHex: 'E83A33'}, {id: '35', itemHex: 'E2323D'}, {id: '36', itemHex: 'BD1C2B'}, {id: '37', itemHex: 'BD1C2B'}, {id: '38', itemHex: 'C23229'}, {id: '39', itemHex: 'B44A3D'}, {id: '40', itemHex: 'EB524D'}, {id: '41', itemHex: 'DE4F53'}, {id: '42', itemHex: 'DA7666'}, {id: '43', itemHex: 'DC474B'}, {id: '44', itemHex: 'D94B37'}, {id: '45', itemHex: 'EB313F'}, {id: '46', itemHex: 'BD052B'}, {id: '47', itemHex: 'DD010D'}, {id: '48', itemHex: 'B42E35'}, {id: '49', itemHex: 'A53C41'}, {id: '50', itemHex: '731523'}, {id: '51', itemHex: 'A81C37'}, {id: '52', itemHex: 'F94C52'}, {id: '53', itemHex: 'AF4050'}, {id: '54', itemHex: 'D70937'}, {id: '55', itemHex: 'EF7E33'}, {id: '56', itemHex: 'EFB550'}, {id: '57', itemHex: 'D18DD4'}, {id: '58', itemHex: 'D8C7E7'}, {id: '59', itemHex: 'DE1273'}, {id: '60', itemHex: 'E33838'}, {id: '61', itemHex: 'C1002C'}, {id: '62', itemHex: 'D16654'}, {id: '63', itemHex: '933350'}, {id: '64', itemHex: 'E6424B'}, {id: '65', itemHex: 'D1636C'}, {id: '66', itemHex: 'FD4952'}, {id: '67', itemHex: 'F8455A'}, {id: '68', itemHex: 'E31E4B'}, {id: '69', itemHex: 'E02746'}, {id: '70', itemHex: 'B23945'}, {id: '71', itemHex: 'E5877D'}, {id: '72', itemHex: 'E07E7D'}, {id: '73', itemHex: 'FF7862'}, {id: '74', itemHex: 'EF6757'}, {id: '75', itemHex: 'F33F1C'}, {id: '76', itemHex: 'C50224'}, {id: '77', itemHex: 'CA3829'}, {id: '78', itemHex: 'C91B1D'}, {id: '79', itemHex: 'CA0E2F'}, {id: '80', itemHex: 'CD504E'}, {id: '81', itemHex: 'AB414F'}, {id: '82', itemHex: '912E33'}, {id: '83', itemHex: 'BA546A'}, {id: '84', itemHex: '007FC0'}, {id: '85', itemHex: 'FF3879'}, {id: '86', itemHex: 'FFC91E'}, {id: '87', itemHex: '1A1A22'}, {id: '88', itemHex: 'ECEBE9'}, {id: '89', itemHex: 'EFF0F7'}, {id: '90', itemHex: 'E4928E'}, {id: '91', itemHex: 'E3B87C'}, {id: '92', itemHex: 'C93E38'}, {id: '93', itemHex: 'C55B9D'}, {id: '94', itemHex: '9E0116'}, {id: '95', itemHex: 'B3000A'}, {id: '96', itemHex: 'E71F07'}, {id: '97', itemHex: 'DC400F'}, {id: '98', itemHex: 'FD8180'}, {id: '99', itemHex: 'A3C0A1'}, {id: '100', itemHex: 'BC0B40'}, {id: '101', itemHex: '8B0013'}, {id: '102', itemHex: 'A51942'}, {id: '103', itemHex: 'FF3596'}, {id: '104', itemHex: 'E56395'}, {id: '105', itemHex: 'F993BB'}, {id: '106', itemHex: 'FA4086'}, {id: '107', itemHex: 'FF7E8F'}, {id: '108', itemHex: 'D98482'}, {id: '109', itemHex: 'FB4650'}, {id: '110', itemHex: 'FF3EB5'}, {id: '111', itemHex: 'E2A99E'}, {id: '112', itemHex: 'B96756'}, {id: '113', itemHex: '8D2138'}, {id: '114', itemHex: 'DA4049'}, {id: '115', itemHex: 'DE424E'}, {id: '116', itemHex: 'CF5662'}, {id: '117', itemHex: 'FF3333'}, {id: '118', itemHex: 'F78377'}, {id: '119', itemHex: 'FFB29A'}, {id: '120', itemHex: 'FE8374'}, {id: '121', itemHex: 'FF7673'}, {id: '122', itemHex: 'EC1F2A'}, {id: '123', itemHex: 'F7A4A1'}, {id: '124', itemHex: 'FE042C'}, {id: '125', itemHex: 'FE3760'}];
sortColorGroup(sample);
console.log(colorGroup);

var cells = [
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false]
];

export default HomeColor;