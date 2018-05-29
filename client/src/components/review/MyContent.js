import React, { Component } from 'react';
import styled from 'styled-components';
import lip from '../../assets/lip.jpg';
import like from '../../assets/Heart.png';
import hate from '../../assets/emptyHeart.png';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
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
    border: 2px solid #ccc;
    resize: none;
    width: 95%;
    height: 20vh;
`

const LikeCount = styled.div`
    width: 20%
    height: 60%
    top: 1%;
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

// const ModifyForm = styled.form`
    
// `
// const ModifyText = styled.textarea`
//     border: 2px solid #ccc;
//     height: 80%
// `


class MyContent extends Component {
    constructor(props) {
        super();
        this.state = {
            editing: false,
            message: '글이나오고 글이나오고 글이나오고',
            likeCount: 100,
            id: 'wonbok1213',
            age: 32,
            skin: '지성',
            rating: 3,
            like: false,
            popupIsOpen: false,
            imagepreviewUrl: ''
        }

        this._openPopup = this._openPopup.bind(this);
        this._afterOpenPopup = this._afterOpenPopup.bind(this);
        this._closePopup = this._closePopup.bind(this);
        this._handleModify = this._handleModify.bind(this);
        this._reviewLike = this._reviewLike.bind(this);
        this._reviewCancel = this._reviewCancel.bind(this);
    }

    _handleModify = function () {
        this.setState({
            editing: !this.state.editing
        })
    }

    _reviewLike = function () {
        this.setState({ like: !this.state.like })
        // !this.state.like ? this.setState({ likecount: this.state.likeCount++ }) : this.setState({ likecount: this.state.likeCount-- })
    }

    _reviewCancel(){
        let reviewMessage = this.state.message
        this.modifyReview.value = reviewMessage
        this.setState({
            editing: !this.state.editing
        })
    }

    _openPopup(e) {
        console.log(e.target.src)
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
        // console.log('mycontent', this.props)
        // if(!this.props.isLogined){
        //     this.props.history.push('/')
        // }
        let popupImage = (<img src={this.state.imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)
            return (
                <div style={{width: '100%' }}>

                    <Container>
                        <ReviewImage onClick={this._openPopup} src={lip} />
                        <Info >
                            <UserDiv > <img alt='user' /></UserDiv>
                            <div style={{boxSizing:'border-box', margin:'10% 0 0 0'}}>
                            <div>{this.state.id}</div>
                            <div>{this.state.age}, {this.state.skin}</div>
                            <div>
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    value={this.state.rating}
                                />
                            </div>
                            </div>
                        </Info >
                            <ReviewContent >
                                <div style={{ textAlign: 'center' }}>
                                {!this.state.editing ? <Message readOnly innerRef={ref => { this.review = ref; }}>{this.state.message}</Message> : <Message innerRef={ref => { this.modifyReview = ref; }}>{this.state.message}</Message>}
                                </div>
                                <BottomContainer >
                                    {!this.state.editing ? <Modify onClick={this._handleModify}>수정</Modify> : <Modify onClick={this._handleModify}>완료</Modify>}
                                    {!this.state.editing ? <Delete >삭제</Delete> : <Cancel onClick={this._reviewCancel}>취소</Cancel>}
                                {/* <Delete>삭제</Delete> */}
                                    <LikeCount>
                                        <Like onClick={this._reviewLike} src={this.state.like ? like : hate} />
                                    {this.state.likeCount}
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