import React, { Component } from 'react';
import Chart from './Chart';
import styled from 'styled-components';
import axios from 'axios';
import { url } from '../../config';
import NumberFormat from 'react-number-format';
import LinesEllipsis from 'react-lines-ellipsis';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const DetailDiv = styled.div`
    width: 50%;
    height: 100%;
    margin: 0 3% 0 0;
    border : 1px solid #d9dee8;
    background-color:white;
    padding: 1%;
    box-sizing:border-box;
    padding : 3% 0 0 0;
`;

const Wrapper = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    background-color:#F4F5F9;
`;

const ChartDiv = styled.div`
    width: 50%;
    height: 100%;
`;

const DescriptionDiv = styled.div`
    font-size : 1.5em;
`;


class DetailRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
      data: '',
      popupIsOpen: false,
    };
    this._openPopup = this._openPopup.bind(this);
    this._afterOpenPopup = this._afterOpenPopup.bind(this);
    this._closePopup = this._closePopup.bind(this);
  }

  componentDidMount() {
    // axios.get(`${url}/api/item/rate?color_id=${this.props.match.params.id}`)
    // console.log(this.detail.offsetHeight)
    axios.get(`${url}/api/item/get/rate?color_id=${this.props.id}`)
    // .then((response) => {
    //     console.log(response.data);
    //   })
      .then(response => this.setState({
        data: response.data,
      }))
      .catch(err => console.log(err));
  }

  _openPopup() {
    this.setState({ popupIsOpen: true });
  }

  _afterOpenPopup() {
    this.subtitle.style.color = 'black';
    this.title.style.color = 'grey';

  }

  _closePopup() {
    this.setState({ popupIsOpen: false });
  }


  render() {
    console.log(this.props.data);
    return (
      <Wrapper>
        <DetailDiv>
              <div style={{ fontSize: '1.5rem', textAlign: 'center' }}> <strong>{this.props.data ? this.props.data[0].name : null}</strong></div>
              <div style={{ fontSize: '1rem' , margin: '2vh 1vw 1vh 1vw' }}>{this.props.data ? this.props.data[0].brand : null}</div>
              <div style={{ fontSize: '0.8rem',margin: '1vh 1vw 1vh 1vw' }}>{this.props.data ? this.props.data[0].category : null}</div>
              <div style={{ fontSize: '1rem',margin: '1vh 1vw 1vh 1vw', fontWeight:'bold', color:`#${this.props.data? this.props.data[0].hex : null}` }}>{this.props.data ? this.props.data[0].color : null}</div>
              <div style={{display : 'flex',  margin: '1vh 1vw 1vh 1vw'}}>
               <div style={{ fontSize: '1rem'}}>{this.props.data ? this.props.data[0].volume : null} /&nbsp; </div> 
               <div style={{ fontSize: '1rem' }}><NumberFormat value={this.props.data ? this.props.data[0].price : 0} displayType="text" thousandSeparator suffix="원" /> <br /></div>
              </div>
             <div style={{ fontSize: '1rem',margin: '1vh 1vw 1vh 1vw' }}> 
              <LinesEllipsis
                  text={`${this.props.data ? this.props.data[0].description : null}`}
                  maxLine="3"
                  ellipsis={<span style={{ cursor: 'pointer' }}onClick={this._openPopup}> ...더 보기...</span>}
                  trimRight
                  basedOn="words"
                    />
            </div>
            </DetailDiv>
        <ChartDiv>
              <Chart data={this.state.data} />
            </ChartDiv>

        <Modal
              isOpen={this.state.popupIsOpen}
              onAfterOpen={this._afterOpenPopup}
              onRequestClose={this._closePopup}
              style={customStyles}
              contentLabel="Description popup"
                >

              <h2 ref={subtitle => this.subtitle = subtitle}>상세 정보</h2>
              <div ref={title => this.title = title} style={{ width: '50vh' }}>{this.props.data ? this.props.data[0].description : null}</div>
              <button style={{ cursor: 'pointer' }} onClick={this._closePopup}>close</button>
            </Modal>

      </Wrapper>
    );
  }
}

export default DetailRight;
