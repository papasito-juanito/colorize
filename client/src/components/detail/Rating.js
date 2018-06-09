/* eslint-disable */
import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components';
import axios from 'axios';
import { url } from '../../config';
import FileUpload from './FileUpload';
import Dropzone from 'react-dropzone';
import ImageCompressor from 'image-compressor.js';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import AvatarEditor from 'react-avatar-editor'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: white;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const TopWrite = styled.div`
    width: 32vw;
    display: flex;
    @media (max-width: 768px) {
        width: 100%;
        height: 20vh;
        margin-bottom: 1%;
    }
`
const RatingDiv = styled.div`
    width: 15vw;
    height: 100%;
    margin-right: 1vw;
    position: relative;
    border: 1px solid black;
    @media (max-width: 768px) {
    width: 33vw;
    }
`
const CenterDiv = styled.div`
    position : absolute;
    margin: auto;
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
`
const ReviewImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit : contain;
`
const ImageDiv = styled.div `
    width: 16vw;
    height: 100%;
    margin-right: 1vw;
    border: 1px solid black;
    @media (max-width: 768px) {
    width: 47vw;
    margin : 0;
    }
`
const ReviewDiv = styled.div`
    width: 48vw;
    border: 1px solid black;
    @media (max-width: 768px) {
        width: 100%;
        height: 25vh;
    }
`
const BottomContainer = styled.div`
    display: flex;
    padding-right: 1%;
    justify-content: flex-end;
`

const TextArea = styled.textarea`
    width: 98%;
    height: 70%;
    margin: 1%;
    resize : none;
    border-radius : 5px;
    background-color: #F6F6F6;
    @media (max-width: 768px) {
       border:none;
    }
`
const ImgDiv = styled.div`
    width: 100%;
    height: 100%;
    text-align:center;
`
const Img = styled.img `
    width: 80%;
    height: 80%;
    border-radius: 50%;
    object-fit: contain;
`
const sendButton = styled.button`
    position: relative;
    height: 25px;
    cursor: pointer;
    border: none;
    color: white;
    background-color: black;
    text-align: center;
`
const ChangePic = styled.img `
  vertical-align: middle;
  justify-content: center;
  width: 80%;
  height: 80%;
  border-radius: 5px;
  object-fit: contain;
`

const Modify = styled.button `
    font-size: 0.8rem;    
    color: white;
    border: none;
    cursor: pointer;
    padding: 3px 7px 3px 7px;
    margin: 5px 10px 5px 0px;
    border: 0;
    outline:0;
    background-color: black;
    &:hover {
      text-shadow: 0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F;
    }
    @media (max-width: 768px) {
      font-size: 0.6rem;
      height: 20px;
      width: 50px;
  }
`
const token = localStorage.getItem('token')

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            imageAddress : '',
            file : '',
            imagepreviewUrl: '',
            popupIsOpen : false
        }
        this._onStarClick = this._onStarClick.bind(this);
        this._clickReview = this._clickReview.bind(this);
        this._onDrop = this._onDrop.bind(this);
    }

    _onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    _clickReview() {
        const token = localStorage.getItem('token')
        const form = {
            color_id: this.props.id,
            reviewPhoto: this.state.imageAddress,
            reviewRating: this.state.rating,
            reviewMessage: this.input.value
        }
        this.props.loginState === false ? (this.login(), this.props.handleLogout()) :
        !this.state.imageAddress ? this.picture() : 
             axios.post(`${url}/api/review/post/message`, form, { headers: { 'token': token } })
                .then((response) => {
                console.log('review response@@@@@', response);
                })
                .then(res => (
                    this.input.value = '', this.review()
                ))
                .then(res => window.location.reload())
                .catch(err => console.log(err))
                // window.location.reload()
    }

    // _alertReview() {
    //      this.props.loginState === true && this.state.imageAddress ? this.review() : null;
    // }

    uploadImage() {
        Modal.error({
            title: 'Image 파일만 업로드 가능합니다.'
        });
    }

    review() {
        Modal.error({
            title: '후기가 등록되었습니다.',
               onOk: ()=> {
          window.location.reload()
        }
        });
    }

    login() {
        Modal.error({
            title: '로그인이 필요한 서비스 입니다.'
        });
    }
    picture() {
        Modal.error({
            title: '사진 등록은 필수입니다'
        });
    }

    _onDrop(files, reject){
      const file =  files[0];
       const formData = new FormData();
       formData.append('file', file);
       var mimeType = file.type.split('/')[1];
       mimeType === 'jpg' || mimeType === 'JPG' || mimeType === 'jpeg' || mimeType === 'JPEG' || mimeType === 'png' || mimeType === 'PNG' ?
        (this.setState({file}),
            axios.post(`${url}/api/review/post/upload`, formData, { headers: { 'token': token} } )
            .then(response => {
            this.setState({imageAddress : response.data.message})
            })
            .catch(err => console.log(err)))
            : this.uploadImage();
    }

    render() {
        const { rating } = this.state;
        return (
            <Wrapper>
                <TopWrite>
                    <RatingDiv>
                        <CenterDiv>
                            <div>평점 입력해 주세요</div>
                            <StarRatingComponent
                                name="평점"
                                value={rating}
                                onStarClick={this._onStarClick}
                            />
                        </CenterDiv>
                    </RatingDiv>
                    <ImageDiv>
                        <Dropzone style={{width:'100%', height:'100%'}} onDropAccepted={ this._onDrop } onDropRejected={this.uploadImage} accept = "image/*">
                            <ImgDiv>
                                <ImgDiv>
                                    <div style={{color: 'black' ,fontWeight: 'bold'}}> 
                                        사진을 등록해 주세요 
                                    </div>
                                        {this.state.file ?
                                        <ChangePic src= {this.state.imageAddress ? this.state.file.preview : 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'}  />
                                        :null}
                                </ImgDiv>
                           </ImgDiv>
                           {/* <AvatarEditor width={250} height={250} scale={1.2} image={this.state.imageAddress} /> */}
                        </Dropzone>
                    </ImageDiv>                   
                </TopWrite>
                <ReviewDiv>
                    <TextArea placeholder='사용 후기를 입력해주세요.' innerRef={ref => { this.input = ref; }} /><br />
                    <BottomContainer>
                        <Modify onClick={() => {this._clickReview() }}>등록</Modify>
                    </BottomContainer>
                </ReviewDiv>
            </Wrapper>
        )
    }
}

export default Rating;