/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';
import lip from '../../assets/lip.jpg';
import like from '../../assets/Heart.png';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-modal';
import axios from 'axios';
import { url } from '../../config';
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
    height: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        height: 30vh;
    }
`
const Top = styled.div`
    border: solid pink 2px;
    height: 100%;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const Info = styled.div`
    width: 50%;
    height: 90%;
    background-color:white;
    float: left;
    border: solid blue 1px;
`
const ReviewImage = styled.img`
    width: 50%;
    height: 90%;
    cursor: pointer;
    float: right;
    object-fit: scale-down;
    border: solid blue 1px;
`
const ReviewContent = styled.div`
    margin: 1vh 1vw 1vh 0;
    width: 60%;
    height: 100%;
    position: relative;
    border: solid red 2px;
    @media (max-width: 768px) {
        width: 100%;
        height: 15vh;
    }
`
const Bubble = styled.div`
position: relative;
width: 100%;
height: 50%;
border: #7F7F7F solid 2px;
text-align: center;
//     &::before {
// content: '';
// position: absolute;
// border-style: solid;
// border-width: 17px 17px 17px 0;
// border-color: transparent #7F7F7F;
// display: block;
// width: 0;
// z-index: 2;
// left: -20px;
// top: 19px;
//     }
//     &::after {
// content: '';
// position: absolute;
// border-style: solid;
// border-width: 15px 15px 15px 0;
// border-color: transparent #FFFFFF;
// display: block;
// width: 0;
// z-index: 3;
// left: -15px;
// top: 21px;
//     }
`
const Message = styled.textarea`
    border: none;
    resize: none;
    width: 95%;
    height: 100%;
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



class MyContent extends Component {
    constructor(props) {
        super();
        this.state = {
            rating: 3,
            like: false,
            popupIsOpen: false,
            imagepreviewUrl: '',
            data:''
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

        // componentDidMount() {
        //     const token = localStorage.getItem('token')
        //     console.log(1)
        //     axios.get(`${url}/api/review/get/info?color_id=${this.props.id}`, { headers: { 'token': token } })
        //         .then(response =>{
        //           console.log(response)
        //           this.setState({data: response})
        //         }
        //         )
        //         .catch(err => console.log(err))
        // }

        render() {
        console.log(this.props.user)
        let popupImage = (<img src={this.state.imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)
            return (
                    <Container id='MyContentCONTAINER'>
                        <Top>
                        <Info >
                            <UserDiv > <img alt='user' /></UserDiv>
                            <div style={{boxSizing:'border-box', margin:'8% 0 0 0'}}>
                            <div>{this.props.user.name} <img style={{width: '8%', height:'8%'}} src = {this.props.user.gender === 'male'? male : female}/></div>
                                <div>{this.props.user.age}, {this.props.user.tone}<br/></div>
                            <div>
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    value={this.props.user.rating}
                                    // value = {this.props.user.rating}
                                />
                            </div>
                            </div>
                        </Info >
                        <ReviewImage onClick={this._openPopup} src={this.props.user.review_photo} />
                        {/* <ReviewImage onClick={this._openPopup} src={this.props.user.review_photo} /> */}
                        </Top>
                        <ReviewContent id="REVIEWCONTENT">
                            <Bubble> <Message readOnly id="MESSAGE">{this.props.user.message}</Message></Bubble>
                            <BottomContainer >
                                <LikeCount>
                                    <Like src={like} />
                                {this.props.user.likes}
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
        );
    }
};

export default MyContent;