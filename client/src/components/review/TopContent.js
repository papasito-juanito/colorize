import React, { Component } from 'react';
import styled from 'styled-components';
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
    },
    overlay: {
        position: 'fixed',
        zIndex: 5
    }
};

Modal.setAppElement('#root');

const Container = styled.div`
border: 1px solid #d9dee8;
background-color: blue;
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
    border: solid pink 2px;
    height: 100%;
    width: 40%;
    display : flex;
    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
    }
`

const UserRating = styled.div`
   flex-direction : column;
`
const ReviewImage = styled.img`
width: 60%;
height: 80%;
cursor: pointer;
object-fit: scale-down;
border: solid blue 1px;
`

const Info = styled.div`
height: 70%;
background-color: lightblue;
flex-direction: column;
justify-content:center;
`

const ReviewContent = styled.div`
width: 60%;
background-color: yellow;
flex-direction : column;
@media (max-width: 768px) {
    width: 100%;
    height: 50%;
}
`
const Bubble = styled.div`
width: 100%;
height: 70%;
border: #7F7F7F solid 2px;
text-align: center;
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
    position : absolute;
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
   border : 1px solid blue;
    height: 30%;
    position : relative;
`

const UserDiv = styled.div`
    width: 25%;
    height: 30%;
    
`




class TopContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: true,
            likeCount: 100,
            like: false,
            popupIsOpen: false,
            imagepreviewUrl: ''
        }

        this._openPopup = this._openPopup.bind(this);
        this._afterOpenPopup = this._afterOpenPopup.bind(this);
        this._closePopup = this._closePopup.bind(this);
        this._handleModify = this._handleModify.bind(this);
        this._reviewLike = this._reviewLike.bind(this);
    }

    _handleModify = function () {
        this.setState({
            editing: !this.state.editing
        })
    }

    _reviewLike = function () {
        this.setState({ like: !this.state.like })
        !this.state.like ? this.setState({ likecount: this.state.likeCount++ }) : this.setState({ likecount: this.state.likeCount-- })
        //누르면 개별 likes 올라가고 토글 개별로 되게 
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
        // const data = this.props ? this.props.data : null;
        console.log(this.props.data)
        // console.log(data)
        let popupImage = (<img src={this.state.imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)

        return (
            <div style={{ width: '100%' }}>

                {this.props.data ? this.props.data.map((item, i) => {
                    return (
                        <Container key={i}>
                            <Top>
                                <UserRating>
                                    <Info>
                                        <UserDiv > 
                                            <img alt='user'  src = {item.user_photo} style = {{ borderRadius:'50%',height:'100%', width:'100%'}} />
                                        </UserDiv>
                                        <div>{item.name}</div>
                                        <div>{item.age}세 </div>
                                        <div>{item.tone}</div>
                                        <div style={{ fontSize: '0.8rem'}}> {item.writeAt.split('T')[0]} </div>
                                    </Info >
                                    <div style={{height: '30%', border: '1px solid black', textAlign:'center'}}>
                                        <StarRatingComponent
                                            name="rate2"
                                            editing={false}
                                            value={item.rating}
                                        />
                                    </div>
                                </UserRating>
                                <ReviewImage onClick={this._openPopup} src = {item.review_photo}/>
                            </Top>
                            <ReviewContent>
                                <Bubble>
                                    <Message readOnly>
                                        {item.message}
                                    </Message> 
                                </Bubble>
                                <BottomContainer >
                                    <LikeCount>
                                        <Like onClick={this._reviewLike} src={item.toggle === 'true' ? like : hate} />
                                        {item.likes}
                                    </LikeCount>
                                </BottomContainer>
                            </ReviewContent>
                        </Container>
                    )
                }) : null}


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
            </div>
        );
    }
};

export default TopContent;
