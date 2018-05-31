import React, { Component } from 'react';
import styled from 'styled-components';
import lip from '../../assets/lip.jpg';
import like from '../../assets/Heart.png';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-modal';
import axios from 'axios';
import { url } from '../../config';
import {Redirect} from 'react-router-dom';
import history from '../../utils/history';
import male from '../../assets/male.png';
import female from '../../assets/female.png';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
        overlay: {
            position: 'fixed',
            zIndex: 5
        }
};

Modal.setAppElement('#root');

const Container = styled.div`
    border: 1px solid #d9dee8;
    background-color: white;
    border-radius: 5px;
    display:flex;
    width:100%;
    height: 80%;
`

const ReviewImage = styled.img`
    margin: 1vh 1vw 1vh 1vw;
    width: 20%;
    height: 90%;
    cursor: pointer;
`

const Info = styled.div`
    margin: 1vh 0 1vh 0;
    width: 20%;
    height: 90%;
    background-color:white;
`

const ReviewContent = styled.div`
    margin: 1vh 1vw 1vh 0;
    width: 60%;
    height: 90%;
    position: relative;
  
`

const Message = styled.textarea`
    border: none;
    resize: none;
    width: 95%;
    height: 14vh;
    &: focus {
        outline: none;
    }
`

const LikeCount = styled.div`
    width: 20%
    height: 60%
    top: 7%;
    left:85%;
    position: absolute;
    align-content: center;
`

const Like = styled.img`
    width: 30%;
    height: 100%;
    cursor: pointer;
`
const BottomContainer = styled.div`
    position: relative;
    height: 30%;
`

const Modify = styled.button`
    font-size: 0.8rem;    
    width: 7%;
    height: 50%;
    color: black;
    top: 2%;
    left: 2%;
    position: absolute
    border-radius: 50%;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: RoyalBlue;
    }
`

const Delete = styled.button`
    font-size: 0.8em;    
    width: 7%;
    height: 50%;
    color: black;
    top: 2%;
    left: 10%;
    position: absolute
    border-radius: 50%;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: red;
    }
`

const Cancel = styled.button`
    font-size: 0.8em;    
    width: 7%;
    height: 50%;
    color: black;
    top: 2%;
    left: 10%;
    position: absolute
    border-radius: 50%;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: red;
    }
`

const UserDiv = styled.div`
    border: 1px solid black;
    width: 25%;
    height: 30%;
    border-radius:50%;
`

const Bubble = styled.div`
position: relative;
width: 98%;
height: 15vh;
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


class MyContent extends Component {
    constructor(props) {
        super();
        this.state = {
            rating: 3,
            like: false,
            popupIsOpen: false,
            imagepreviewUrl: ''
        }

        this._openPopup = this._openPopup.bind(this);
        this._afterOpenPopup = this._afterOpenPopup.bind(this);
        this._closePopup = this._closePopup.bind(this);
        this._reviewCancel = this._reviewCancel.bind(this);
    }


    _reviewCancel(){
        let reviewMessage = this.state.message
        this.modifyReview.value = reviewMessage
        this.setState({
            editing: !this.state.editing
        })
    }

    _openPopup(e) {
        this.setState({
            popupIsOpen: true,
            imagepreviewUrl: e.target.src
        })
    }

    _afterOpenPopup() {
        this.subtitle.style.color = '#f00';
    }

    _closePopup() {
        this.setState({ popupIsOpen: false });
    }

    componentDidMount() {
        // const token = localStorage.getItem('token')
        //user id를 받아야하는데 그게 api 받을때 없음
        // axios.get(`${url}/api/review/get/user?color_id=${this.props.id},user_id=${2}`, { headers: { 'token': token } })
        //     .then(response =>
        //       console.log(response.data)
        //     )
        //     .catch(err => console.log(err))
    }

    render() {
        console.log('mycontent', this.props.user)

        let popupImage = (<img src={this.state.imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)
            return (
                <div style={{width: '100%'}}>
                  <div style ={{width: '100%', height:'20%'}}>Your Review <div style={{width:'100%', border:'2px solid #ccc'}}></div></div>
                    <Container>
                        <ReviewImage onClick={this._openPopup} src={lip} />
                        <Info >
                            <UserDiv > <img alt='user' /></UserDiv>
                            <div style={{boxSizing:'border-box', margin:'8% 0 0 0'}}>
                            <div>{this.props.user[0].name} <img style={{width: '8%', height:'8%'}} src = {this.props.user[0].gender === 'male'? male : female}/></div>
                                <div>{this.props.user[0].age}, {this.props.user[0].tone}<br/>{'rating 필요'}</div>
                            <div>
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    value={this.state.rating}
                                    // value = {this.props.user[0].rating}
                                />
                            </div>
                            </div>
                        </Info >
                        <ReviewContent >
                            <div style={{ textAlign: 'center' }}>
                            <Bubble> <Message readOnly>{this.props.user[0].message}</Message></Bubble>
                            </div>
                            <BottomContainer >
                                <LikeCount>
                                    <Like src={like} />
                                {"likeCount"}
                                </LikeCount>
                            </BottomContainer>
                        </ReviewContent >
                        

                        <Modal
                            isOpen={this.state.popupIsOpen}
                            onAfterOpen={this._afterOpenPopup}
                            onRequestClose={this._closePopup}
                            style={customStyles}
                            contentLabel="Image popup"
                        >
                            <h2 ref={subtitle => this.subtitle = subtitle}>Review Image</h2>
                            <div style={{ width: '50vh' }}>{popupImage}</div>
                            <button style={{ cursor: 'pointer' }} onClick={this._closePopup}>close</button>
                        </Modal>
                    </Container>
                </div>
        );
    }
};

export default MyContent;