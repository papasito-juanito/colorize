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
    border: 1px solid black;
    border-radius: 5px;
    display:flex;
    width:100%;
    height: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        height: 40vh;
        
    }
`
const Top = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
        display: flex;
    }
`
const Info = styled.div`
    width: 40%;
    height: 100%;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    position : relative;
    @media (max-width: 768px) {
        width: 40%;
        height: 100%;
    }
`

const InfoDiv = styled.div`
        position: absolute;
        top:35%;
        left: 5%;
        transform: translateY(-50%);
        flex-direction: column;
    @media (max-width: 768px) {
        display: inline-block;


    }
`
const UserDiv = styled.div`
    width: 5vw;
    height: 5vw;
    @media (max-width: 768px) {
    width: 30%;
    height: 30%;
    }   

`
const UserImage = styled.img `
    border-radius: 50%;
    height: 100%; 
    width: 100%;
`
const ImageRating = styled.div`
    flex-direction : column;
    width: 60%;
    height: 100%;
      @media (max-width: 768px) {
        width: 60%;
        height: 100%;
        flex-direction: column;
    }
`
const ImageDiv = styled.div `
    width: 100%;
    height: 80%;
    position: relative;
`
const GenderImage = styled.img `
    width: 8%;
    height: 8%;
`
const ReviewImage = styled.img`
    width: 10vw;
    height: 10vw;
    cursor: pointer;
    margin: auto;
    position: absolute;
    top: 50% ;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit : cover;
    @media (max-width: 768px) {
    width: 80%;
    height: 80%;
    }
`
const ReviewContent = styled.div`
    width: 60%;
    height: 100%;
    position: relative;
    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
    }
`
const Bubble = styled.div`
    position: relative;
    width: 100%;
    height: 70%;
    border: #7F7F7F solid 2px;
    text-align: center;
    border-radius: 5px;
    @media (max-width: 768px) {
    width: 100%;
    height: 80%;
    border: none;
    }
`
const Message = styled.textarea`
    border: none;
    resize: none;
    width: 95%;
    height: 100%;
    overflow: auto;
    &: focus {
        outline: none;
    }
    @media (max-width: 768px) {
    background-color: #F4F5F9;
    border-radius : 5px;
    }
    
`
const LikeCount = styled.div`
    width: 20%
    height: 60%
    top: 7%;
    left:88%;
    position: absolute;
    align-content: center;
`
const Like = styled.img`
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
`
const BottomContainer = styled.div`
    position: relative;
    height: 30%;
    @media (max-width: 768px) {
    width: 100%;
    height: 20%;
    }
`






class MyContent extends Component {
    constructor(props) {
        super();
        this.state = {
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

        render() {
        let popupImage = (<img src={this.state.imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)

            return (
                <Container>
                    <Top>
                        <Info>
                            <InfoDiv>
                                <UserDiv> 
                 
                                    <UserImage alt='user' src = {this.props.user.user_photo}/>
                                </UserDiv>
                                <div>{this.props.user.name} <GenderImage alt ='gender' src = {this.props.user.gender === 'male'? male : female}/></div>
                                <div>{this.props.user.age}세 · {this.props.user.tone}<br/></div>
                                <div style={{ fontSize: '0.8rem'}}> {this.props.user.writeAt.split(' ')[0]} </div>
                            </InfoDiv>
                        </Info>
                        <ImageRating>
                            <ImageDiv>
                                <ReviewImage onClick={this._openPopup} src={this.props.user.review_photo} />
                            </ImageDiv>
                            <div style={{ height: '20%', textAlign:'center'}}>
                                <StarRatingComponent
                                        name="rate2"
                                        editing={false}
                                        value={this.props.user.rating}
                                />
                            </div>
                        </ImageRating>
                    </Top>
                    <ReviewContent>
                        <Bubble> 
                            <Message readOnly>
                                {this.props.user.message}
                            </Message>
                        </Bubble>
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