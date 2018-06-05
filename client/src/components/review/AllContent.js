/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import like from '../../assets/Heart.png';
import hate from '../../assets/emptyHeart.png';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-modal';
import { url } from '../../config';
import axios from 'axios';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: { 
        position:'fixed',
        zIndex: 5 }
};

Modal.setAppElement('#root');

const Container = styled.div`
    border: 1px solid #d9dee8;
    background-color: white;
    border-radius: 5px;
    display:flex;
    width: 100%;
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
    margin: 1% auto auto auto;
    resize: none;
    width: 95%;
    height: 12vh;
    &: focus {
        outline: none;
    }
`

const LikeCount = styled.div`
    width: 20%
    height: 70%
    top: 10%;
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
    width: 20%;
    height: 30%;
`

const Loading = styled.div `
    margin-top: 2%
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid black;
    width: 60px;
    height: 60px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`
const Bubble = styled.div`
position: relative;
width: 100%;
height: 80%;
border: #7F7F7F solid 2px;

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

const token = localStorage.getItem('token')
class AllContent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            editing: true,
            popupIsOpen: false,
            imagepreviewUrl: '',
            items: this.props.data.length < 3 ? this.props.data.length : 3,
            loadingState: false,
            data : this.props.data
        }

        this._openPopup = this._openPopup.bind(this);
        this._afterOpenPopup = this._afterOpenPopup.bind(this);
        this._closePopup = this._closePopup.bind(this);
        this._handleModify = this._handleModify.bind(this);
        this._reviewLike = this._reviewLike.bind(this);
        this._displayItems = this._displayItems.bind(this);
        this._loadMoreItems = this._loadMoreItems.bind(this);
    }

    _handleModify() {
        this.setState({
            editing: !this.state.editing
        })
    }

    _reviewLike(e) {
        const reviewId = this.props.data[e.target.id].review_id
        const form = {
            review_id: reviewId
        }
        axios.post(`${url}/api/review/update/like`,form, { headers: { 'token': token } })
            .then((res) => {
                return axios.get(`${url}/api/review/get/list?color_id=${this.props.id}`, { headers: { 'token': token } })
                .then(response => {
                    // console.log(response)
                    this.setState({ data: response.data.rows })
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

    _displayItems() {
        const data = this.state.data ? this.state.data : [];
        const items = [];
        for (var i = 0; i < this.state.items; i++) {

           data.length ? items.push(
                <Container key={i}>
                    <Info >
                       <UserDiv > <img alt='user' src = {data[i].user_photo} style = {{ borderRadius:'50%',height:'100%', width:'100%'}}/></UserDiv>
                        {/* 유저 이미지 여기서 받아와서 삽입 */}
                        <div>{data[i].name}</div>
                        <div>{data[i].age}세 · {data[i].tone}</div>
                        <div>
                            <StarRatingComponent
                                name="rate2"
                                editing={false}
                                value={data[i].rating}
                            />
                        </div>
                        <div style={{ fontSize: '0.8rem'}}> {data[i].writeAt.split('T')[0]} </div>
                    </Info >
                    <ReviewImage onClick={this._openPopup} src = {data[i].review_photo}/>
                   {/* <ReviewImage src={ require(`../../../src/assets/reviews/${this.props.id}_.jpg`) } onClick={this._openPopup} /> */}
                    {/* <ReviewImage onClick={this._openPopup} src={require(`../public/user/${this.props.파람스매치랑 유저아이디이용}.jpg`)} /> */}

                    <ReviewContent >
                        <div style={{ textAlign: 'center' }}>
                            <Bubble><Message readOnly>{data[i].message}</Message> </Bubble>
                        </div>
                       <BottomContainer  >
                            <LikeCount>
                               <Like id={i} onClick={this._reviewLike} src={data[i].toggle === 'true' ? like : hate} />
                               {data[i].likes}
                            </LikeCount>
                        </BottomContainer>
                    </ReviewContent >
                </Container>
            ) : null;
        }
        return items;
    }

    _loadMoreItems() {
        console.log(3)
        this.state.items !== this.props.data.length ? this.setState({ loadingState: true }) : null;
            setTimeout( () => {
                this.setState({items: this.state.items + 2, loadingState: false });
            }, 3000)
    }

     
    componentDidMount() {
        console.log(1)
        console.log('document.body.scrollTop :', document.body.scrollTop)
        console.log('document.body.clientHeight :', document.body.clientHeight)
        console.log('document.body.scrollHeight :', document.body.scrollHeight)

        this.state.items !== this.props.data.length ? window.addEventListener("scroll", () => {  
            if (document.body.scrollTop + document.body.clientHeight <= document.body.scrollHeight ){
             this._loadMoreItems() 
            }
        }) : window.removeEventListener("scroll", this._loadMoreItems());

    }

    componentWillUpdate(nextProps, nextState){
        console.log(2)
        if(nextState.items> this.props.data.length)  {
            return nextState.items = this.props.data.length;
        }
    }

    render() {
        console.log(this.props.data)
        console.log(this.state.items)
        // console.log('카운팅@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ :', count++)
        console.log('after state :',this.state.data)
        let popupImage = (<img src={this.state.imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)

        return (
            <div style={{ width: '100%'}} ref ='iScroll' >
                {this._displayItems()}
                {this.state.loadingState ? <div style={{width:'100%',  display: 'flex', justifyContent: 'center'}}><Loading/></div>: ""}

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

export default AllContent;















// import React, { Component } from 'react';
// import styled from 'styled-components';
// import like from '../../assets/Heart.png';
// import hate from '../../assets/emptyHeart.png';
// import StarRatingComponent from 'react-star-rating-component';
// import Modal from 'react-modal';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)'
//     }
// };

// Modal.setAppElement('#root');

// const Container = styled.div`
//     border: 1px solid #d9dee8;
//     background-color: white;
//     border-radius: 5px;
//     display:flex;
//     width:95%;
//     height: 20vh;
//     margin: 1% auto;

// `

// const ReviewImage = styled.img`
//     margin: 1vh 0 1vh 1vw;
//     width: 20%;
//     height: 90%;
//     cursor: pointer;
// `

// const Info = styled.div`
//     margin: 1vh 0 1vh 1vw;
//     width: 20%;
//     height: 90%;
// `

// const ReviewContent = styled.div`
//     margin: 1vh 1vw 1vh 0;
//     width: 60%;
//     height: 70%;
//     position: relative;
// `

// const Message = styled.textarea`
//     border: 2px solid #ccc;
//     resize: none;
//     width: 95%;
//     height: 12vh;
// `

// const LikeCount = styled.div`
//     width: 20%
//     height: 70%
//     top: 20%;
//     left: 90%;
//     position: absolute;
// `

// const Like = styled.img`
//     width: 1.5rem;
//     height: 1.5rem;
//     cursor: pointer;
// `
// const BottomContainer = styled.div`
//     position: relative;
//     height: 30%;
// `

// const UserDiv = styled.div`
//     border: 1px solid black;
//     width: 20%;
//     height: 30%;
//     border-radius:50%;
// `



// class Content extends Component {
//     constructor(props) {
//         super();
//         this.state = {
//             editing: true,
//             message: '글이나오고 글이나오고 글이나오고',
//             likeCount: 100,
//             id: 'wonbok1213',
//             age: 32,
//             skin: '지성',
//             rating: 3,
//             like: false,
//             popupIsOpen: false,
//             imagepreviewUrl: ''
//         }

//         this._openPopup = this._openPopup.bind(this);
//         this._afterOpenPopup = this._afterOpenPopup.bind(this);
//         this._closePopup = this._closePopup.bind(this);
//         this._handleModify = this._handleModify.bind(this);
//         this._reviewLike = this._reviewLike.bind(this);
//     }

//     _handleModify = function () {
//         this.setState({
//             editing: !this.state.editing
//         })
//     }

//     _reviewLike = function () {
//         this.setState({ like: !this.state.like })
//         !this.state.like ? this.setState({ likecount: this.state.likeCount++ }) : this.setState({ likecount: this.state.likeCount-- })
//         //누르면 개별 likes 올라가고 토글 개별로 되게 
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
//         const data = this.props ? this.props.data : null;
//         console.log(this.props.data)
//         console.log(data)
//         let popupImage = (<img src={this.state.imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)

//         return (
//             <div style={{ width: '100%' }}>

//                 {this.props.data ? this.props.data.map((item, i) => {
//                     return (
//                         <Container key={i}>
//                             <ReviewImage onClick={this._openPopup} />
//                             {/* <ReviewImage onClick={this._openPopup} src={require(`../public/user/${this.props.파람스매치랑 유저아이디이용}.jpg`)} /> */}
//                             <Info >
//                                 <UserDiv > <img alt='user' /></UserDiv>
//                                 {/* 유저 이미지 여기서 받아와서 삽입 */}
//                                 <div>{item.user}</div>
//                                 <div>{item.age}, {item.tone}</div>
//                                 <div>
//                                     <StarRatingComponent
//                                         name="rate2"
//                                         editing={false}
//                                         value={item.rating}
//                                     />
//                                 </div>
//                             </Info >
//                             <ReviewContent >
//                                 <div style={{ textAlign: 'center' }}>
//                                     {this.state.editing ? <Message readOnly>{item.message}</Message> : <Message>{item.message}</Message>}
//                                 </div>
//                                 <BottomContainer >
//                                     <LikeCount>
//                                         <Like onClick={this._reviewLike} src={this.state.like ? like : hate} />
//                                         {item.likes}
//                                     </LikeCount>
//                                 </BottomContainer>
//                             </ReviewContent >
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
//                     <div style={{ width: '50vh' }}>{popupImage}</div>
//                     <button style={{ cursor: 'pointer' }} onClick={this._closePopup}>close</button>
//                 </Modal>
//             </div>
//         );
//     }
// };

// export default Content;



// import React, { Component } from 'react';
// import styled from 'styled-components';
// import like from '../../assets/Heart.png';
// import hate from '../../assets/emptyHeart.png';
// import StarRatingComponent from 'react-star-rating-component';
// import Modal from 'react-modal';
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
//     }
// };

// Modal.setAppElement('#root');

// const Container = styled.div`
//     border: 1px solid #d9dee8;
//     background-color: white;
//     border-radius: 5px;
//     display:flex;
//     width:95%;
//     height: 20vh;
//     margin: 1% auto;

// `

// const ReviewImage = styled.img`
//     margin: 1vh 0 1vh 1vw;
//     width: 20%;
//     height: 90%;
//     cursor: pointer;
// `

// const Info = styled.div`
//     margin: 1vh 0 1vh 1vw;
//     width: 20%;
//     height: 90%;
// `

// const ReviewContent = styled.div`
//     margin: 1vh 1vw 1vh 0;
//     width: 60%;
//     height: 70%;
//     position: relative;
// `

// const Message = styled.textarea`
//     border: 2px solid #ccc;
//     resize: none;
//     width: 95%;
//     height: 12vh;
// `

// const LikeCount = styled.div`
//     width: 20%
//     height: 70%
//     top: 20%;
//     left: 90%;
//     position: absolute;
// `

// const Like = styled.img`
//     width: 1.5rem;
//     height: 1.5rem;
//     cursor: pointer;
// `
// const BottomContainer = styled.div`
//     position: relative;
//     height: 30%;
// `

// const UserDiv = styled.div`
//     border: 1px solid black;
//     width: 20%;
//     height: 30%;
//     border-radius:50%;
// `



// class Content extends Component {
//     constructor(props) {
//         super();
//         this.state = {
//             editing: true,
//             message: '글이나오고 글이나오고 글이나오고',
//             likeCount: 100,
//             id: 'wonbok1213',
//             age: 32,
//             skin: '지성',
//             rating: 3,
//             like: false,
//             popupIsOpen: false,
//             imagepreviewUrl: '',
//             data:[],
//             requestSent: false
//         }

//         this._openPopup = this._openPopup.bind(this);
//         this._afterOpenPopup = this._afterOpenPopup.bind(this);
//         this._closePopup = this._closePopup.bind(this);
//         this._handleModify = this._handleModify.bind(this);
//         this._reviewLike = this._reviewLike.bind(this);
//     }

//     _handleModify = function () {
//         this.setState({
//             editing: !this.state.editing
//         })
//     }

//     _reviewLike = function () {
//         this.setState({ like: !this.state.like })
//         !this.state.like ? this.setState({ likecount: this.state.likeCount++ }) : this.setState({ likecount: this.state.likeCount-- })
//         //누르면 개별 likes 올라가고 토글 개별로 되게 
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

//     componentDidMount() {
//     window.addEventListener('scroll', this.handleOnScroll);
//     // this.initData();
//     }

//     componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleOnScroll);
//     }

//     // initData() {
//     // var data = this.createNewData(this.state.data.length, 3);
//     // this.setState({ data: data });
//     // }

//     createNewData(startKey, counter) {
//     var i = 0;
//     var data = [];
//     for (i = 0; i < counter; i++) {
//         var Data = (<div key={startKey + i} className="data-info">Fake Data {startKey + i}</div>);
//         data.push(Data);
//     }

//     return data;
//     }

//     handleOnScroll() {
//     // http://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
//     var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
//     var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
//     var clientHeight = document.documentElement.clientHeight || window.innerHeight;
//     var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

//         if (scrolledToBottom) {
//             this.querySearchResult();
//         }
//     }

//     querySearchResult() {
//     if (this.state.requestSent) {
//         return;
//     }

//     // enumerate a slow query
//         setTimeout(this.receiveData, 2000);

//     this.setState({ requestSent: true });
//     }


//     receiveData() {
//         const data=[];
//         axios.get(`${url}/api/review/get/list?color_id=${this.props.id}`)
//             .then(res => {
//                 var fakeData = this.createNewData(this.state.data.length, 3);
//                 var newData = this.state.data.concat(fakeData);
//                 this.setState({ data: newData, requestSent: false })
//                 console.log(res)
//             })
//             .catch(err => {
//                 this.setState({ requestSent: false })
//                 console.log(err)
//             })

    // $.ajax({
    //     url: "#",
    //     data: null,
    //     method: "GET",
    //     success: function (data, textStatus, jqXHR) {
    //         var fakeData = this.createNewData(this.state.data.length, 3);
    //         var newData = this.state.data.concat(fakeData);
    //         this.setState({ data: newData, requestSent: false });
    //     }.bind(this),
    //     error: function (jqXHR, textStatus, errorThrown) {
    //         this.setState({ requestSent: false });
    //     }.bind(this)
    // });
// }







//     render() {
//         const data = this.props ? this.props.data : null;
//         console.log(this.props.data)
//         console.log(data)
//         let popupImage = (<img src={this.state.imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)

//         return (
//             <div style={{ width: '100%' }}>

//                 {this.props.data ? this.props.data.map((item, i) => {
//                     return (
//                         <Container key={i}>
//                             <ReviewImage onClick={this._openPopup} />
//                             {/* <ReviewImage onClick={this._openPopup} src={require(`../public/user/${this.props.파람스매치랑 유저아이디이용}.jpg`)} /> */}
//                             <Info >
//                                 <UserDiv > <img alt='user' /></UserDiv>
//                                 {/* 유저 이미지 여기서 받아와서 삽입 */}
//                                 <div>{item.user}</div>
//                                 <div>{item.age}, {item.tone}</div>
//                                 <div>
//                                     <StarRatingComponent
//                                         name="rate2"
//                                         editing={false}
//                                         value={item.rating}
//                                     />
//                                 </div>
//                             </Info >
//                             <ReviewContent >
//                                 <div style={{ textAlign: 'center' }}>
//                                     {this.state.editing ? <Message readOnly>{item.message}</Message> : <Message>{item.message}</Message>}
//                                 </div>
//                                 <BottomContainer >
//                                     <LikeCount>
//                                         <Like onClick={this._reviewLike} src={this.state.like ? like : hate} />
//                                         {item.likes}
//                                     </LikeCount>
//                                 </BottomContainer>
//                             </ReviewContent >
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
//                     <div style={{ width: '50vh' }}>{popupImage}</div>
//                     <button style={{ cursor: 'pointer' }} onClick={this._closePopup}>close</button>
//                 </Modal>
//             </div>
//         );
//     }
// };

// export default Content;
