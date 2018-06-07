/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';
import like from '../../assets/Heart.png';
import hate from '../../assets/emptyHeart.png';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-modal';
import male from '../../assets/male.png';
import female from '../../assets/female.png';
import axios from 'axios';
import { url } from '../../config';

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

const Div = styled.div`
    width: 100%;
    height: 100%;
`
const Container = styled.div `
margin-top: 10px;
    border: 1px solid black;
    border-radius: 5px;
    display:flex;
    width:100%;
    height: 25vh;
    @media (max-width: 768px) {
        flex-direction: column;
        height: 40vh;
        
    }
`
const Top = styled.div `
    height: 100%;
    width: 40%;
    display: flex;
    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
        display: flex;
    }
`
const Info = styled.div `
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

const InfoDiv = styled.div `
        position: absolute;
        padding-top:2%;
        top:50%
        left:10%;
        transform: translateY(-50%);
        flex-direction: column;
        @media (max-width: 768px) {
        display: inline-block;
    }
`
const UserDiv = styled.div `
    width: 5vw;
    height: 5vw;
    margin-bottom:10%;
    @media (max-width: 768px) {
    width: 10vw;
    height: 10vw;
    padding-top:2%;
    margin-bottom:-1%;
    }   

`
const UserImage = styled.img `
    border-radius: 50%;
    height: 100%; 
    width: 100%;
`
const ImageRating = styled.div `
    width: 60%;
    height: 100%;
`

const GenderImage = styled.img `
    width: 8%;
    height: 8%;
`
const ReviewImage = styled.img `
    cursor: pointer;
    height: 100%; 
    width: 100%;
    object-fit : cover;
    @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    }
`
const ReviewContent = styled.div `
    width: 60%;
    height: 100%;
    position: relative;
    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
    }
`
const Bubble = styled.div `
    position: relative;
    width: 98%;
    height: 70%;
    border: #7F7F7F solid 2px;
    text-align: center;
    border-radius: 5px;
    box-sizing:border-box;
    margin : 1%;
    @media (max-width: 768px) {
    width: 100%;
    height: 80%;
    border: none;
    }
`
const Message = styled.textarea `
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
const LikeCount = styled.div `
    width: 20%
    height: 60%
    top: 7%;
    left:88%;
    position: absolute;
    align-content: center;
`
const Like = styled.img `
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    @media (max-width: 768px) {
    width: 1.2rem;
    height: 1.2rem;
    }
`
const BottomContainer = styled.div `
    position: relative;
    height: 30%;
    @media (max-width: 768px) {
    width: 100%;
    height: 20%;
    }
`
const ModalDiv = styled.div `
     height: 70vh;
     width: 70vh
    @media (max-width: 768px) {
    width: 80vw;
    height: 80vw;
    object-fit : contain;
    }
`

const PointButton = styled.button`
    cursor: pointer;
    border: 0;
    outline: 0;
`

const Span = styled.span`
    font-size: 2em;
`

class TopContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupIsOpen: false,
            imagepreviewUrl: '',
            data : this.props.data
        }

        this._openPopup = this._openPopup.bind(this);
        this._afterOpenPopup = this._afterOpenPopup.bind(this);
        this._closePopup = this._closePopup.bind(this);
        this._reviewLike = this._reviewLike.bind(this);
    }

    _reviewLike(e) {
        console.log('fromallreview', this.props.data);
        console.log(e.target.id);
        
        const token = localStorage.getItem('token')
        const reviewId = e.target.id
        const form = {
            review_id: reviewId
        }
        console.log(e.target.id)
        console.log('formformform', form);
        
        axios.post(`${url}/api/review/update/like`,form, { headers: { 'token': token } })
            .then((res) => {
                console.log('resresresrse', res);
                
                return axios.get(`${url}/api/review/get/rank?color_id=${this.props.id}`, { headers: { 'token': token } })
                .then(response => {
                    console.log('reviewlikeresponse', response);    
                    this.setState({ data: response.data.rows })
                    // window.location.reload()
                })
                .catch(err => console.log(err))
                }
            )
            .catch(err => console.log(err))            
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
        console.log('asynasynasyn :', this.state.data)
        return (
            <Div>
                {this.state.data ? this.state.data.map((item, i) => {
                    return (
                        <Container key={i}>
                            <Top>
                                <Info>
                                       <InfoDiv>
                                    <UserDiv > 
                                        <UserImage alt='user'  src = {item.user_photo}/>
                                    </UserDiv>
                                    <div>{item.name}  <GenderImage src = {item.gender === 'male'? male : female}/></div>
                                    <div>{item.age}세 · {item.tone}</div>
                                    <div style={{ fontSize: '0.8rem'}}> {item.writeAt.split('T')[0]} </div>
                                    <div>
                                    <StarRatingComponent
                                        name="rate2"
                                        editing={false}
                                        value={item.rating}
                                    />
                                    </div>
                                       </InfoDiv>
                                    </Info >
                                               <ImageRating>
                                <ReviewImage onClick={this._openPopup} src = {item.review_photo}/>
                                           </ImageRating>
                            </Top>
                            <ReviewContent>
                                <Bubble>
                                    <Message readOnly>
                                        {item.message}
                                    </Message> 
                                </Bubble>
                                <BottomContainer >
                                    <LikeCount>
                                        <Like id={item.review_id} onClick={this._reviewLike} src={item.toggle === 'true' ? like : hate} />
                                        <Span> {item.likes} </Span>
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
                    <ModalDiv>{popupImage}</ModalDiv>
                    <PointButton onClick={this._closePopup}>close</PointButton>
                </Modal>
            </Div>
        );
    }
};

export default TopContent;




// /* eslint-disable */
// import React, { Component } from 'react';
// import styled from 'styled-components';
// import like from '../../assets/Heart.png';
// import hate from '../../assets/emptyHeart.png';
// import StarRatingComponent from 'react-star-rating-component';
// import Modal from 'react-modal';
// import male from '../../assets/male.png';
// import female from '../../assets/female.png';
// import axios from 'axios';
// import { url } from '../../config';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)'
//     },
//     overlay: {
//         position: 'fixed',
//         zIndex: 5
//     }
// };

// Modal.setAppElement('#root');

// const Div = styled.div`
//     width: 100%;
//     height: 100%;
// `
// const Container = styled.div`
//     border-radius: 5px;
//     border : 1px solid black
//     margin-top: 1%;
//     margin-bottom : 1%;
//     display:flex;
//     width: 100%;
//     height: 25vh;
//     @media (max-width: 768px) {
//         flex-direction: column;
//         height: 40vh;
//     }
// `
// const Top = styled.div`
//     height: 100%;
//     width: 40%;
//     display : flex;
//     @media (max-width: 768px) {
//         width: 100%;
//         height: 50%;
//     }
// `
// const UserRating = styled.div`
//    flex-direction : column;
//    width : 40%;
// `
// const UserImage = styled.img `
//     border-radius: 50%;
//     height: 100%; 
//     width: 100%;
// `
// const GenderImage = styled.img `
//     width: 8%;
//     height: 8%;
// `
// const ReviewImage = styled.img`
//     width: 11vw;
//     height: 11vw;
//     margin: auto;
//     cursor: pointer;
//     object-fit : cover;
// `
// const Info = styled.div`
//     height: 100%;
//     width: 45%;
//     flex-direction: column;
//     justify-content:center;
//     margin-top : 1%;
//     margin-left:0.5vw;
//     justify-content:center;     
// `

// const ReviewContent = styled.div`
//     width: 60%;
//     flex-direction : column;
//     @media (max-width: 768px) {
//         width: 100%;
//         height: 50%;
//     }
// `
// const Bubble = styled.div`
//     width: 100%;
//     height: 75%;
//     border-radius: 5px;
//     border: #7F7F7F solid 2px;
//     text-align: center;
//     @media (max-width: 768px) {
//     width: 100%;
//     height: 80%;
//     border: none;
//     }
// `
// const Message = styled.textarea`
//     margin:1%
//     border: none;
//     resize: none;
//     width: 95%;
//     height: 90%;
//     &: focus {
//         outline: none;
//     }
//      @media (max-width: 768px) {
//     background-color: #F4F5F9;
//     border-radius : 5px;
//     }
// `

// const LikeCount = styled.div`
//     position : absolute;
//     width: 20%
//     height: 60%
//     top: 5%;
//     left:90%;
//     align-content: center;
// `

// const Like = styled.img`
//     width: 5vh;
//     height: 5vh;
//     cursor: pointer;
//     @media (max-width: 768px) {
//     width: 1.2rem;
//     height: 1.2rem;
//     }
// `
// const BottomContainer = styled.div`
//     height: 25%;
//     position : relative;
// `

// const UserDiv = styled.div`
//     width: 5vw;
//     height: 5vw;
// `
// const PointButton = styled.button`
//     cursor: pointer;
//     border: 0;
//     outline: 0;
// `
// const ModalDiv = styled.div`
//      height: 70vh;
//      width: 70vh
// `
// const Span = styled.span`
//     font-size: 2em;
// `

// class TopContent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             popupIsOpen: false,
//             imagepreviewUrl: '',
//             data : this.props.data
//         }

//         this._openPopup = this._openPopup.bind(this);
//         this._afterOpenPopup = this._afterOpenPopup.bind(this);
//         this._closePopup = this._closePopup.bind(this);
//         this._reviewLike = this._reviewLike.bind(this);
//     }

//     _reviewLike(e) {
//         console.log('fromallreview', this.props.data);
//         console.log(e.target.id);
        
//         const token = localStorage.getItem('token')
//         const reviewId = e.target.id
//         const form = {
//             review_id: reviewId
//         }
//         console.log(e.target.id)
//         console.log('formformform', form);
        
//         axios.post(`${url}/api/review/update/like`,form, { headers: { 'token': token } })
//             .then((res) => {
//                 console.log('resresresrse', res);
                
//                 return axios.get(`${url}/api/review/get/rank?color_id=${this.props.id}`, { headers: { 'token': token } })
//                 .then(response => {
//                     console.log('reviewlikeresponse', response);    
//                     this.setState({ data: response.data.rows })
//                     // window.location.reload()
//                 })
//                 .catch(err => console.log(err))
//                 }
//             )
//             .catch(err => console.log(err))            
//     }

//     _openPopup(e) {
//         this.setState({
//             popupIsOpen: true,
//             imagepreviewUrl: e.target.src
//         })
//     }

//     _afterOpenPopup() {
//         this.subtitle.style.color = '#f00';
//     }

//     _closePopup() {
//         this.setState({ popupIsOpen: false });
//     }


//     render() {
//         let popupImage = (<img src={this.state.imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)
//         console.log('asynasynasyn :', this.state.data)
//         return (
//             <Div>
//                 {this.state.data ? this.state.data.map((item, i) => {
//                     return (
//                         <Container key={i}>
//                             <Top>
//                                 <Info>
//                                     <UserDiv > 
//                                         <UserImage alt='user'  src = {item.user_photo}/>
//                                     </UserDiv>
//                                     <div>{item.name}  <GenderImage src = {item.gender === 'male'? male : female}/></div>
//                                     <div>{item.age}세 · {item.tone}</div>
//                                     <div style={{ fontSize: '0.8rem'}}> {item.writeAt.split('T')[0]} </div>
//                                     <StarRatingComponent
//                                         name="rate2"
//                                         editing={false}
//                                         value={item.rating}
//                                     />
//                                     </Info >
//                                 <ReviewImage onClick={this._openPopup} src = {item.review_photo}/>
//                             </Top>
//                             <ReviewContent>
//                                 <Bubble>
//                                     <Message readOnly>
//                                         {item.message}
//                                     </Message> 
//                                 </Bubble>
//                                 <BottomContainer >
//                                     <LikeCount>
//                                         <Like id={item.review_id} onClick={this._reviewLike} src={item.toggle === 'true' ? like : hate} />
//                                         <Span> {item.likes} </Span>
//                                     </LikeCount>
//                                 </BottomContainer>
//                             </ReviewContent>
//                         </Container>
//                     )
//                 }) : null}

//                 <Modal
//                     isOpen={this.state.popupIsOpen}
//                     onAfterOpen={this._afterOpenPopup}
//                     onRequestClose={this._closePopup}
//                     style={customStyles}
//                     contentLabel="Image popup"
//                 >
//                     <h2 ref={subtitle => this.subtitle = subtitle}>Review Image</h2>
//                     <ModalDiv>{popupImage}</ModalDiv>
//                     <PointButton onClick={this._closePopup}>close</PointButton>
//                 </Modal>
//             </Div>
//         );
//     }
// };

// export default TopContent;