/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../../config';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import like from '../../assets/reviewLike.png';
import RModal from 'react-modal';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import Dropzone from 'react-dropzone';

const Empty = styled.div`
    display: flex;
    flex-direction: column
    justify-content: center;
    border-bottom: 1px solid black
    border-top: 1px solid black
    width : 100%
    min-height: 300px
    text-align: center;
    margin-top: 80px
`
const Title = styled.div`
    margin: 20px auto
    font-size: 3rem
    font-family: 'Roboto';
    font-weight: 100;
    color: black
    width: 100%;
    border-bottom: 1px solid black
    @media (max-width: 1024px) {
      text-align: center
  }

`

const EmptyTitle = styled.div`
    text-align: center;
    font-size: 4rem
    font-family: 'Roboto';
    font-weight: 100;
    color: black
    @media (max-width: 660px) {
        font-size: 3.5rem
    }
    @media (max-width: 511px) {
        font-size: 2.8rem
    }
    @media (max-width: 511px) {
        font-size: 2.8rem
    }
    @media (max-width: 379px) {
        font-size: 2.1rem
    }
`

const EmptyMessage = styled.div`
    font-size: 2rem
    font-family: 'Roboto';
    font-weight: 100;
    @media (max-width: 656px) {
        font-size: 1.75rem
    }
    @media (max-width: 573px) {
        font-size: 1.6rem
    }
    @media (max-width: 519px) {
        font-size: 1.4rem
    }
    @media (max-width: 457px) {
        font-size: 1.2rem
    }
    @media (max-width: 375px) {
        font-size: 1rem
    }    
    @media (max-width: 320px) {
        font-size: 0.8rem
    }
`
const Emptybtn = styled.button`
    min-width: 20%;
    max-height: 20%
    margin: 20px auto
    border: none;
    background-color: black;
    color: white;
    padding: 14px 28px;
    cursor: pointer;
    text-align: center;
    font-size: 1rem 
    font-family: 'Roboto';
    font-weight: 300;
    border:0
    outline:0
    &:hover {
        text-shadow: 0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F;
        // text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
    }  
`

const Wrapper = styled.div`
  width: 80%;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
      margin-top: 50px;
  }
`

const Container = styled.div`
    border: 1px solid #d9dee8;
    background-color: #F4F5F9;
    border-radius: 5px;
    display:flex;
    width:95%;
    height: 20vh;
    margin: 1% auto;

`

const LinkDiv = styled.div`
    width: 15%; 
    height: 90%;
    margin: 0 1% 0 0;
`
const ReviewImage = styled.img`
    margin: 1vh 0 1vh 1vw;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: white;
    border: 1px solid #d9dee8;
`

const MyImageDiv = styled.div`
    margin: 1vh 0 1vh 1vw;
    width: 15%;
    height: 90%;
    cursor: pointer;
    position: relative;
    background-color: white;
    border: 1px solid #d9dee8;
`
const MyImage = styled.img`
    width: 100%;
    height: 100%;
    background-color: white;
`

const DeleteImage = styled.div`
    border-radius : 50%;
    border: 1px solid #d9dee8;
    width: 20%;
    height: 20%;
    position: absolute;
    right: -5%;
    top: -5%;
    background-color: white;
    text-align: center;
`

const Info = styled.div`
    margin: 1vh 0 1vh 1vw;
    width: 20%;
    height: 90%;
    background-color: white;
    border: 1px solid #d9dee8;
`

const ReviewContent = styled.div`
    margin: 1vh 1vw 1vh 0;
    width: 50%;
    height: 70%;
    position: relative;
`

const Message = styled.textarea`
    border: none;
    margin: 1% auto auto auto;
    resize: none;
    width: 95%;
    height: 12vh;
    &:focus {
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
const Modify = styled.button`
    font-size: 0.8rem;    
    width: 7%;
    height: 70%;
    color: black;
    top: 10%;
    left: 7%;
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
    height: 70%;
    color: black;
    top: 10%;
    left: 15%;
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
    height: 70%;
    color: black;
    top: 10%;
    left: 15%;
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
    width: 20%;
    height: 30%;
    border-radius:50%;
`

const Bubble = styled.div`
position: relative;
width: 93%;
height: 14vh;
left : 5%;
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
const HomeButton = styled.button`
    position: fixed;
    background-color:black;
    color: white;
    border: none;
    right:1%;
    bottom:1%;
    opacity: 1;
    width: 4rem;
    height: 4rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover {
    opacity: 0.3;
    border: none;
  }
`

const Arrow = styled.i`
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 6%;
`

const Loading = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid black;
    margin-top: 250px;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
      @media (max-width: 414px) {
        margin-top: 200px;
      }
      @media (max-width: 375px) {
        margin-top: 125px;
      }
`

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

const confirm = Modal.confirm;

RModal.setAppElement('#root');

const scrollStepInPx = 50;
const delayInMs = 10;
const token = localStorage.getItem('token')

class MyReviews extends Component {
  constructor(){
    super();
    this.state = {
      data : '',
      intervalId: 0,
      popupIsOpen : false,
      imagepreviewUrl : '',
      clickedComment:'',
      isReply: false,
      rating : '',
      files:'',
      image:'',
      filetype:'',
      imageAddress : '',
      imagepreviewUrl: '',
      isLoading: true,
      isUploaded: false
    }

    this.scrollStep = this.scrollStep.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this._openPopup = this._openPopup.bind(this);
    this._afterOpenPopup = this._afterOpenPopup.bind(this);
    this._closePopup = this._closePopup.bind(this);
    this._handleModify = this._handleModify.bind(this);
    this._onStarClick = this._onStarClick.bind(this);
    this._changeReply = this._changeReply.bind(this);
    this._reviewCancel = this._reviewCancel.bind(this);
    this._updateReply = this._updateReply.bind(this);
    this._reviewDelete = this._reviewDelete.bind(this);
    this.__showDeleteConfirm = this._showDeleteConfirm.bind(this)
  }


  _handleModify(e) {
    console.log(e.target.id)
    this.setState({
      editing: !this.state.editing
    })
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep, delayInMs);
    this.setState({ intervalId: intervalId });
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
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

  _onStarClick(nextValue, prevValue, name, e) {
    console.log(e.target)
    this.setState({ rating: nextValue });
  }

  _changeReply(e){
    var reviewId = this.state.data[e.target.id].review_id
    var rating = this.state.data[e.target.id].rating
    var image = this.state.data[e.target.id]
    this.setState({
      isReply: !this.state.isReply, 
      clickedComment: reviewId, rating:rating, image,
    })
  }

  _updateReply(e){
    console.log(e.target.id)
    const previousMessage = this.state.data[e.target.id].message;
     const form = {
      //  reviewPhoto : this.state.data.item_photo,
        reviewPhoto : this.state.imageAddress || this.state.data[e.target.id].review_photo,
       reviewRating : this.state.rating,
       reviewMessage : this.modifyReview.value,
       review_id : this.state.data[e.target.id].review_id
     }
        axios.post(`${url}/api/review/update/message`, form,  { headers: { 'token': token } })
          .then((response) => {
            console.log('updateres', response);
            if(response.data.success){
              isReply: !this.state.isReply
              window.location.reload()
            }
          })
          .catch(err => console.log(err));
  }

  _reviewDelete(e){
    const reviewId = this.state.data[e.target.id].review_id
    console.log(reviewId)
    const form = {
      review_id : reviewId
    }

        confirm({
      title: '선택한 리뷰를 삭제 하시겠습니까?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',

      onOk: () => {
        const token = localStorage.getItem('token')
        axios.post(`${url}/api/review/delete`, form, {
            headers: {
              'token': token
            }
          })
          .then((res) => {
            console.log(res)
              window.location.reload();
              })
        console.log('ok');

      },
      onCancel() {
        console.log('Cancel');
      },
    });
    //   axios.post(`${url}/api/review/delete`, form,  { headers: { 'token': token } })
    //       .then((response) => {
    //           console.log(response.data);
    //       })
    //       .catch(err => console.log(err));
    // window.location.reload();

  }

  _showDeleteConfirm(e) {
    console.log(e.target.id)
    // const reviewId = this.state.data[e.target.id]
    console.log(this.state)
  // const reviewId = this.state.data[e.target.id].review_id
  //     console.log(reviewId)
  // const form = {
  //   review_id: reviewId
  // }

  //   confirm({
  //     title: '선택한 리뷰를 삭제 하시겠습니까?',
  //     okText: 'Yes',
  //     okType: 'danger',
  //     cancelText: 'No',

  //     onOk: () => {
  //       const token = localStorage.getItem('token')
  //       axios.post(`${url}/api/review/delete`, form, {
  //           headers: {
  //             'token': token
  //           }
  //         })
  //         .then((res) => {
  //           console.log(res)
  //             // window.location.reload();
  //             })
  //       console.log('ok');

  //     },
  //     onCancel() {
  //       console.log('Cancel');
  //     },
  //   });
  }


  _reviewCancel(e){
    var previousMessage = this.state.data[e.target.id].message;
    this.modifyReview.value = previousMessage;
      //  let reviewMessage = this.state.message
      //  this.modifyReview.value = reviewMessage
       this.setState({
         isReply: !this.state.isReply
       })

      // const form = {
      //   reviewPhoto : ,
      //   reviewRating : ,
      //   reviewMessage : ,
      //   review_id : 
      // }

      //  const token = localStorage.getItem('token')
      //   axios.post(`${url}`, form,  { headers: { 'token': token } })
      //     .then((response) => {
      //         console.log(response.data);
            // })
          // .then(response => this.setState({
          //   data: response.data
          // }))
          // .catch(err => console.log(err))
    
  }

  _onDrop(files){
    const token = localStorage.getItem('token')
    const file = files[0];
    this.setState({file:file})
    console.log('file@@@@@@@@@@@@@@ :', file)
    const formData = new FormData();
    formData.append('file', file);
    var mimeType = file.type.split('/')[0];
    mimeType === 'image' ?
    axios.post(`${url}/api/user/post/upload`, formData, { headers: { 'token': token} } )
        .then(response => {
            this.setState({
              imageAddress : response.data.message,
            })
            document.getElementById('imgloading').style.display = 'inline-block'
        }
      )
      .catch(err => console.log(err))
      : (alert('이미지 파일만 올릴수있어요'))
    }
  goHome = () => {
      this.props.history.push('/')
  }     

  componentDidMount(){
//여기서 내가쓴 리뷰 전체모아오기
    const token = localStorage.getItem('token')
    axios.get(`${url}/api/review/get/user`, { headers: { 'token': token } })
      .then(response =>{
        console.log('resres', response);
        
        if(response.data.success===true){
          this.setState({
             data: response.data.rows,
              isLoading: false
            })
        } else {
          this.props.handleLogout()
          this.props.history.push('/login', {from: this.props.location})
        }
      })
      .catch(err => console.log(err))
  }

  render(){
    console.log('filefilefilefile', this.state.file);
    console.log('@@@@@WEFEWFWEFEWFEWFWEFW',this.state.imageAddress);
    console.log('reviewphotoreviewphotoreviewphotoreviewphoto', this.state.data);
    
    
    
    let popupImage = (<img src={this.state.imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)
    
    return (
      <div style={{fontFamily: "Nanum Gothic" }}>
      <Wrapper>
        {this.state.data.length ? <Title> My Reviews </Title> : null}
         {this.state.isLoading? <div style={{display:"none"}}>loading</div> : this.state.data.length ?
         this.state.data.map((item, i) => {
           console.log('itemitemtitemitemtitem', item);
           
           return (
            <Container key={i}>           
             <LinkDiv> <Link to={`/items/detail/${item.color_id}`} style={{ textDecoration: 'none' }}><ReviewImage src={item.item_photo} /> </Link></LinkDiv>  
                <MyImageDiv>
                {!this.state.isReply ?
                <MyImage onClick={this._openPopup} src ={item.review_photo}  />
                : this.state.isReply && this.state.clickedComment === item.review_id  ?
                <Dropzone onDrop={ this._onDrop.bind(this) } size={ 50 }  accept = "image/jpeg, image/png, image/jpg" style={{width: '100%', height: '100%'}}>
                  <div style={{width:'100%', height:'100%', textAlign:'center'}}>
                       <div style={{color: 'black' ,fontWeight: 'bold'}}> 이미지 변경 클릭 </div>
                       <div style= {{width: '100%', height:'90%'}}>
                        {/* <img style = {{ verticalAlign:'middle', width:'90%', height:'90%'}} src={item.review_photo} /> */}
                        {this.state.file ? 
                        <img id='imgloading' style = {{ verticalAlign:'middle', width:'90%', height:'90%'}} 
                        src= {this.state.imageAddress ? this.state.file.preview : 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'} />
                        :<img id='imgloading' style = {{ verticalAlign:'middle', width:'90%', height:'90%'}} src={item.review_photo} /> }
                      </div>
                  </div>      
                </Dropzone>
                : 
                <MyImage onClick={this._openPopup} src ={item.review_photo}  />}
              </MyImageDiv>
              <Info >
                <div>{item.brand}</div>
                <div>{item.name}</div>
                <div>{item.color}</div>
             
                {!this.state.isReply ? 
                  <div>내 평점:
                    <div>
                      <StarRatingComponent name="rate2" value={item.rating} editing = {false}/>
                    </div>
                  </div>
                : this.state.isReply && this.state.clickedComment === item.review_id ?
                  <div> 평점 수정: 
                    <div>
                      <StarRatingComponent name="rate2" value={this.state.rating} onStarClick={this._onStarClick}/>
                    </div>
                  </div>
                :
                  <div>내 평점:
                    <div>
                      <StarRatingComponent name="rate2" value={item.rating} editing = {false}/>
                    </div>
                  </div>
              }
     
              </Info >
              <ReviewContent >
                <div style={{ textAlign: 'center' }}>
                  <Bubble>
                    {!this.state.isReply ?  <Message readOnly>{item.message}</Message> 
                    : this.state.isReply && this.state.clickedComment === item.review_id ? <Message innerRef={ref => { this.modifyReview = ref; }}>{item.message}</Message>
                    : <Message readOnly> {item.message} </Message>  }

                  </Bubble>
                </div>
                <BottomContainer >
                  {!this.state.isReply ? <Modify id={i} onClick={this._changeReply}>수정</Modify> 
                  : this.state.isReply && this.state.clickedComment === item.review_id ? 
                  <Modify id={i} onClick={this._updateReply}>완료</Modify>
                  :<Modify id={i} onClick={this._changeReply}>수정</Modify> }

                  {!this.state.isReply ? <Delete id={i} onClick={this._reviewDelete}> 삭제</Delete> 
                    : this.state.isReply && this.state.clickedComment === item.review_id ? <Cancel id={i} onClick = {this._reviewCancel} > 취소 </Cancel>
                    : <Delete id={i} type="dashed" onClick={this._reviewDelete}> 삭제</Delete> }

                  <LikeCount>
                    <Like src={like} />
                    {item.likes}
                  </LikeCount>
                </BottomContainer>
              </ReviewContent >
            </Container>
           )
            }): <Empty>
                  <EmptyTitle>My Reviews is empty</EmptyTitle> 
                  <EmptyMessage>Colorize에서 마음에 드는 칼러의 <br/>립스틱을 구경하고 리뷰를 작성해보세요</EmptyMessage>
                  <Emptybtn onClick={this.goHome}>Colorize yourself</Emptybtn>
                </Empty>}
        <HomeButton onClick={this.scrollToTop}><Arrow /><br /> Top </HomeButton>
        <RModal
          isOpen={this.state.popupIsOpen}
          onAfterOpen={this._afterOpenPopup}
          onRequestClose={this._closePopup}
          style={customStyles}
          contentLabel="Image popup"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Review Image</h2>
          <div style={{ width: '50vh' }}>{popupImage}</div>
          <button style={{ cursor: 'pointer' }} onClick={this._closePopup}>close</button>
        </RModal>
      </Wrapper>
      </div>
    )
  }

}


export default MyReviews;