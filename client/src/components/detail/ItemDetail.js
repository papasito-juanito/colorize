/* eslint-disable */
import React, {Component} from 'react';
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
const Wrapper = styled.div`
    height: 100%;
    width: 50vw;
    display: flex;
    background-color:#F4F5F9;
    border: solid red 3px;
    flex-direction: column;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
  	}
`;
const Top = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
    background-color:#F4F5F9;
    border: solid red 3px;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
  	}
`;
const DetailDiv = styled.div`
  width: 40%;
  height: 100%;
  margin: 0 0 0 3%;
  border : 1px solid #d9dee8;
  background-color:white;
  padding: 5% 5% 5% 0;
  box-sizing:border-box;
  padding : 3% 0 0 0;
  text-align: left;
  font-size: 1rem;
  color: black;
  float: top;
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    padding: 0;
    margin: 0;
    text-align: center;
  }
`;
const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
const Brand = styled.div`
`;
const Category = styled.div`
  font-size: 0.8rem;
`;
const ColorName = styled.div`
  font-weight: bold;
  display: inline-block;
  color: #${props => props.color};
`;
const ColorBox = styled.div`
  background: #${props => props.color};
  width: 100%;
  height: 7px;
`;
const VolPrice = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const More = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const ChartDiv = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
  }
`;
const Description = styled.div`
  width: 100%;
  height: 30%;
  font-size : 0.7em;
  @media (max-width: 768px) {
      display: none;
  }
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
        data: response.data.rows,
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
        <Top>
        <DetailDiv>
            <Name>{this.props.data ? this.props.data[0].name : null}</Name>
            <Brand>{this.props.data ? this.props.data[0].brand : null}</Brand>
            <Category>{this.props.data ? this.props.data[0].category : null}</Category>
            <ColorName color={this.props.data? this.props.data[0].hex : null}>{this.props.data ? this.props.data[0].color : null}
              <ColorBox color={this.props.data? this.props.data[0].hex : null}/>
            </ColorName>
            <VolPrice>
            <div>{this.props.data ? this.props.data[0].volume : null} /&nbsp; </div> 
              <NumberFormat value={this.props.data ? this.props.data[0].price : 0} displayType="text" thousandSeparator suffix="원" />
            </VolPrice>
            <More onClick={this._openPopup}>상세정보</More>
        </DetailDiv>
        <ChartDiv>
              <Chart data={this.state.data} />
        </ChartDiv>
        </Top>
        <Description>
          <LinesEllipsis
            text={`${this.props.data ? this.props.data[0].description : null}`}
            maxLine="3"
            ellipsis={<span style={{ cursor: 'pointer' }}onClick={this._openPopup}> ...더 보기...</span>}
            trimRight
            basedOn="words"/>
        </Description>

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
