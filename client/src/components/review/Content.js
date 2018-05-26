

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
    margin:1%;
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
z-index: 0;
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
z-index: 1;
left: -15px;
top: 21px;
    }
`

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: true,
            like: false,
            popupIsOpen: false,
            imagepreviewUrl: '',
            items: this.props.data.length < 3 ? this.props.data.length : 3,
            loadingState: false
        }

        this._openPopup = this._openPopup.bind(this);
        this._afterOpenPopup = this._afterOpenPopup.bind(this);
        this._closePopup = this._closePopup.bind(this);
        this._handleModify = this._handleModify.bind(this);
        this._reviewLike = this._reviewLike.bind(this);
        this._displayItems = this._displayItems.bind(this);
        this._loadMoreItems = this._loadMoreItems.bind(this)
    }

    _handleModify = function () {
        this.setState({
            editing: !this.state.editing
        })
    }

    _reviewLike = function () {
        this.setState({ like: !this.state.like })
        // !this.state.like ? this.setState({ likecount: this.state.likeCount++ }) : this.setState({ likecount: this.state.likeCount-- })
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

    _displayItems() {
        const data = this.props ? this.props.data : [];
        const items = [];
        for (var i = 0; i < this.state.items; i++) {
           items.push(
                <Container key={i}>
                    <ReviewImage onClick={this._openPopup} />
                    {/* <ReviewImage onClick={this._openPopup} src={require(`../public/user/${this.props.파람스매치랑 유저아이디이용}.jpg`)} /> */}
                    <Info >
                        <UserDiv > <img alt='user' /></UserDiv>
                        {/* 유저 이미지 여기서 받아와서 삽입 */}
                        <div>{data[i].name}</div>
                        <div>{data[i].age}, {data[i].tone}</div>
                        <div>
                            <StarRatingComponent
                                name="rate2"
                                editing={false}
                                value={data[i].rating}
                            />
                        </div>
                    </Info >
                    <ReviewContent >
                        <div style={{ textAlign: 'center' }}>
                            <Bubble><Message readOnly>{data[i].message}</Message> </Bubble>
                            {/* {this.state.editing ? <Message readOnly>{data[i].message}</Message> : <Message>{data[i].message}</Message>} */}
                            {/* 윗코드는 내 리뷰 할때만 필요 */}
                        </div>
                        <BottomContainer >
                            <LikeCount>
                                <Like onClick={this._reviewLike} src={this.state.like ? like : hate} />
                                {data[i].likes}
                            </LikeCount>
                        </BottomContainer>
                    </ReviewContent >
                </Container>
            )
        }
        return items;
    }

    _loadMoreItems() {
        this.state.items !== this.props.data.length ? this.setState({ loadingState: true }) : null;
            setTimeout( () => {
                this.setState({items: this.state.items + 2, loadingState: false });
            }, 3000)
    }

     
    componentDidMount() {
        this.state.items !== this.props.data.length ? window.addEventListener("scroll", () => {  
            if (document.body.scrollTop + document.body.clientHeight >= document.body.scrollHeight ){
             this._loadMoreItems() 
            }
        }) : window.removeEventListener("scroll", this._loadMoreItems());

       
    }

    componentWillUpdate(nextProps, nextState){
        if(nextState.items> this.props.data.length)  {
            return nextState.items = this.props.data.length;
        }
    }

    render() {
        let popupImage = (<img src={this.state.imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)

        return (
            <div style={{ width: '100%'}} ref ='iScroll' >
                {this._displayItems()}
                {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}

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


