

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
    border: 2px solid #ccc;
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
            imagepreviewUrl: '',
            items: 3,
            loadingState: false
        }



        this._openPopup = this._openPopup.bind(this);
        this._afterOpenPopup = this._afterOpenPopup.bind(this);
        this._closePopup = this._closePopup.bind(this);
        this._handleModify = this._handleModify.bind(this);
        this._reviewLike = this._reviewLike.bind(this);
        this.displayItems = this.displayItems.bind(this);
        this.loadMoreItems = this.loadMoreItems.bind(this)
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

    displayItems() {
        const data = this.props ? this.props.data : [];
        const items = [];
        for (var i = 0; i < this.state.items; i++) {
            data.length ? items.push(
                <Container key={i}>
                    <ReviewImage onClick={this._openPopup} />
                    {/* <ReviewImage onClick={this._openPopup} src={require(`../public/user/${this.props.파람스매치랑 유저아이디이용}.jpg`)} /> */}
                    <Info >
                        <UserDiv > <img alt='user' /></UserDiv>
                        {/* 유저 이미지 여기서 받아와서 삽입 */}
                        <div>{data[i].user}</div>
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
                            {this.state.editing ? <Message readOnly>{data[i].message}</Message> : <Message>{data[i].message}</Message>}
                        </div>
                        <BottomContainer >
                            <LikeCount>
                                <Like onClick={this._reviewLike} src={this.state.like ? like : hate} />
                                {data[i].likes}
                            </LikeCount>
                        </BottomContainer>
                    </ReviewContent >
                </Container>
            ) : null
        }
        return items;
    }

    loadMoreItems() {
        this.setState({ loadingState: true });
        setTimeout(() => {
            this.setState({ items: this.state.items + 3, loadingState: false });
        }, 3000);
    }

    componentDidMount() {
        // this.refs.iScroll.addEventListener("scroll", () => {
        //     if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight) {
        console.log(this.refs.iScroll.scrollTop)
        console.log(this.refs.iScroll.clientHeight)
        console.log(this.refs.iScroll.scrollHeight)

            this.loadMoreItems();
     
        //     }
        // });
    }

    render() {
        console.log(this.state.loadingState)
        console.log(this.props.data)
        console.log(this.refs.iScroll)
        let popupImage = (<img src={this.state.imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)

        return (
            <div style={{ width: '100%' }} ref="iScroll" >

                {this.displayItems()}
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



