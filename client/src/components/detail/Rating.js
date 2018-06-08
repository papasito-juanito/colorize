/* eslint-disable */
import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components';
import axios from 'axios';
import { url } from '../../config';
import FileUpload from './FileUpload';


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
        height: 15vh;
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
    width: 47vw;
    border: 1px solid black;
    @media (max-width: 768px) {
        width: 100%;
        height: 20vh;
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
`
const Button = styled.button`
    position: relative;
    height: 25px;
    cursor: pointer;
    border: none;
    color: white;
    background-color: black;
    text-align: center;
`


class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            imageAddress : '',
            file : '',
            imagepreviewUrl: '',
            popupIsOpen : false,
            data : '',
            filebtnSelected: false
        }
        this._onStarClick = this._onStarClick.bind(this);
        this._clickReview = this._clickReview.bind(this);
        this._alertReview = this._alertReview.bind(this);
        this._imagePreview = this._imagePreview.bind(this);
    }

    _callback(params) {
        console.log('params', params);
        
        this.setState({
            imageAddress: params
        })
    }

    _imagePreview(file, imagepreviewUrl ) {
        this.setState({
            file : file,
            imagepreviewUrl: imagepreviewUrl
        })
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
        this.props.loginState === false ? (alert('로그인이 필요한 서비스 입니다.'), this.props.handleLogout()) :
        !this.state.imageAddress ? alert('사진 등록은 필수입니다') : 
             (axios.post(`${url}/api/review/post/message`, form, { headers: { 'token': token } })
                .then((response) => {
                console.log(response);
                })
                .catch(err => console.log(err))
            ,this.input.value = '', window.location.reload())
    }

    _alertReview() {
         this.props.loginState === true && this.state.imageAddress ? alert('후기가 등록되었습니다') : null;
    }

    render() {
        console.log('this.props.image :', this.props.image)
        console.log('this.props.info.success :', this.props.info.success)
        console.log('this.props.handleLogout :', this.props.handleLogout)
        console.log('this.props.loginState :', this.props.loginState)
        console.log('address : ', this.state.imageAddress)

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
                        <ReviewImage src = {!this.state.imagepreviewUrl ? null : this.state.imageAddress ? this.state.imageAddress : 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'}/>
                    </ImageDiv>                   
                </TopWrite>
                <ReviewDiv>
                    <TextArea placeholder='사용 후기를 입력해주세요.' innerRef={ref => { this.input = ref; }} /><br />
                    <BottomContainer>
                     <FileUpload imagePreview = {this._imagePreview} callback={this._callback.bind(this)} id={this.props.id} />
                    <Button onClick={() => { this._alertReview(); this._clickReview() }}>등록</Button>
                    </BottomContainer>
                </ReviewDiv>
            </Wrapper>

        )
    }
}

export default Rating;