import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../config';
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid #d9dee8;
    background-color: white;
    border-radius: 5px;
    display:flex;
    width:95%;
    height: 20vh;
    margin: 1% auto;

`

const ReviewImage = styled.img`
    margin: 1vh 0 1vh 1vw;
    width: 20%;
    height: 90%;
    cursor: pointer;
`

const Info = styled.div`
    margin: 1vh 0 1vh 1vw;
    width: 20%;
    height: 90%;
`

const ReviewContent = styled.div`
    margin: 1vh 1vw 1vh 0;
    width: 60%;
    height: 70%;
    position: relative;
`

const Message = styled.textarea`
    border: none;
    resize: none;
    width: 95%;
    height: 12vh;
`

const LikeCount = styled.div`
    width: 20%
    height: 70%
    top: 20%;
    left: 90%;
    position: absolute;
`

const Like = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
`
const BottomContainer = styled.div`
    position: relative;
    height: 30%;
`

const UserDiv = styled.div`
    border: 1px solid black;
    width: 20%;
    height: 30%;
    border-radius:50%;
`

const Bubble = styled.div`
position: relative;
width: 98%;
height: 14vh;
padding: 0px;
background: #FFFFFF;
-webkit-border-radius: 17px;
-moz-border-radius: 17px;
border-radius: 17px;
border: #7F7F7F solid 3px;

    &::before {
content: '';
position: absolute;
border-style: solid;
border-width: 17px 17px 17px 0;
border-color: transparent #7F7F7F;
display: block;
width: 0;
z-index: 2;
left: -20px;
top: 19px;
    }
    &::after {
content: '';
position: absolute;
border-style: solid;
border-width: 15px 15px 15px 0;
border-color: transparent #FFFFFF;
display: block;
width: 0;
z-index: 3;
left: -15px;
top: 21px;
    }
`

class MyReviews extends Component {
  constructor(){
    super();
    this.state = {
      data : ''
    }
  }

  componentDidMount(){
//여기서 내가쓴 리뷰 전체모아오기

  }

  render(){
    return (
      <div>
        {this.props.data ? this.props.data.map((item, i) => {
          return (
            <Container key={i}>
              <ReviewImage onClick={this._openPopup} />
              {/* <ReviewImage onClick={this._openPopup} src={require(`../public/user/${this.props.파람스매치랑 유저아이디이용}.jpg`)} /> */}
              <Info >
                <UserDiv > <img alt='user' /></UserDiv>
                {/* 유저 이미지 여기서 받아와서 삽입 */}
                <div>{item.name}</div>
                <div>{item.age}, {item.tone}</div>
                <div>
                  <StarRatingComponent
                    name="rate2"
                    editing={false}
                    value={item.rating}
                  />
                </div>
              </Info >
              <ReviewContent >
                <div style={{ textAlign: 'center' }}>
                  <Bubble><Message readOnly>{item.message}</Message> </Bubble>
                  {/* {this.state.editing ? <Message readOnly>{data[i].message}</Message> : <Message>{data[i].message}</Message>} */}
                  {/* 윗코드는 내 리뷰 할때만 필요 */}
                </div>
                <BottomContainer >
                  <LikeCount>
                    <Like onClick={this._reviewLike} src={item.toggle === 'true' ? like : hate} />
                    {item.likes}
                  </LikeCount>
                </BottomContainer>
              </ReviewContent >
            </Container>
          )
        }) : null}
      </div>
    )
  }

}


export default MyReviews;