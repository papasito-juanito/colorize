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
    }
};

Modal.setAppElement('#root');

const Container = styled.div`
    border: 1px solid gold;
    background-color: #eee;
    border-radius: 5px;
    display:flex;
    width:95%;
    height: 20vh;
    margin: 1% auto;

`

const ReviewImage = styled.img`
    border: 2px solid #ccc;
    margin: 1vh 0 1vh 1vw;
    width: 20%;
    height: 90%;
    cursor: pointer;
`

const Info = styled.div`
    border: 2px solid #ccc;
    margin: 1vh 0 1vh 0;
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
    border: 2px solid #ccc;
    resize: none;
    width: 95%;
    height: 12vh;
`

const LikeCount = styled.div`
    width: 20%
    height: 70%
    top: 1%;
    right:2%;
    position: absolute;
    align-content: center;
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

const Modify = styled.button`
    font-size: 1rem;    
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
    font-size: 1rem;    
    color: black;
    top: 2%;
    left: 12%;
    position: absolute
    border-radius: 50%;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: red;
    }
`

const ModifyForm = styled.form`
    
`
const ModifyText = styled.textarea`
    border: 2px solid #ccc;
    height: 80%
`


class Content extends Component {
    constructor(props) {
        super();
        this.state = {
            editing: true,
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

        let popupImage = (<img src={this.state.imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)

        return (
            <div style={{ border: '1px solid green', width: '100%' }}>

                {this.props.data ? this.props.data.map((item, i) => {
                    return (
                        <Container key={i}>
                            <ReviewImage onClick={this._openPopup} />
                            {/* <ReviewImage onClick={this._openPopup} src={require(`../public/user/${this.props.파람스매치랑 유저아이디이용}.jpg`)} /> */}
                            <Info >
                                <div style={{border:'1px solid black', width:'20%', height:'30%',borderRadius:'50%'}}><img/></div>
                                {/* 유저 이미지 여기서 받아와서 삽입 */}
                                <div>{item.user}</div>
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
                                    {this.state.editing ? <Message readOnly>{item.message}</Message> : <Message>{item.message}</Message>}
                                </div>
                                <BottomContainer >
                                    {/* {this.state.editing ? <Modify onClick={this._handleModify}>수정</Modify> : <Modify onClick={this._handleModify}>완료</Modify>}
                                <Delete>삭제</Delete> */}
                                    <LikeCount>
                                        <Like onClick={this._reviewLike} src={this.state.like ? like : hate} />
                                        {item.likes}
                                    </LikeCount>
                                </BottomContainer>
                            </ReviewContent >
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

export default Content;



// return (
//     <div style={{ border: '1px solid green', width: '100%' }}>

//         <Container>
//             <ReviewImage onClick={this._openPopup} src={lip} />
//             <Info >
//                 <div>{this.state.id}</div>
//                 <div>{this.state.age}, {this.state.skin}</div>
//                 <div>
//                     <StarRatingComponent
//                         name="rate2"
//                         editing={false}
//                         value={this.state.rating}
//                     />
//                 </div>
//             </Info >
//             {this.state.editing ?
//                 <ReviewContent >
//                     <div style={{ textAlign: 'center' }}>
//                         <Message readOnly>
//                             {this.state.message}
//                         </Message>
//                     </div>
//                     <BottomContainer >
//                         <Modify onClick={this._handleModify}>수정</Modify>
//                         <Delete>삭제</Delete>
//                         <LikeCount>
//                             <Like onClick={this._reviewLike} src={this.state.like ? like : hate} />
//                             {this.state.likeCount}
//                         </LikeCount>
//                     </BottomContainer>
//                 </ReviewContent > :

//                 <ReviewContent>
//                     <div style={{ textAlign: 'center' }}>
//                         <Message rows="10" cols="50">
//                             {this.state.message}
//                         </Message>
//                     </div>
//                     <BottomContainer >
//                         <Modify onClick={this._handleModify}>완료</Modify>
//                         <Delete>삭제</Delete>
//                         <LikeCount>
//                             <Like onClick={this._reviewLike} src={this.state.like ? like : hate} />
//                             {this.state.likeCount}
//                         </LikeCount>
//                     </BottomContainer>
//                 </ReviewContent >
//             }

//             <Modal
//                 isOpen={this.state.popupIsOpen}
//                 onAfterOpen={this._afterOpenPopup}
//                 onRequestClose={this._closePopup}
//                 style={customStyles}
//                 contentLabel="Image popup"
//             >
//                 <h2 ref={subtitle => this.subtitle = subtitle}>Review Image</h2>
//                 <div style={{ width: '50vh' }}>{popupImage}</div>
//                 <button style={{ cursor: 'pointer' }} onClick={this._closePopup}>close</button>
//             </Modal>
//         </Container>
//     </div>