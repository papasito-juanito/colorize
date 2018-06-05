/* eslint-disable */
import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components';
import axios from 'axios';
import { url } from '../../config';
import FileUpload from './FileUpload';


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    background-color: white;
    border: solid red 2px;
    @media (max-width: 768px) {
        flex-direction: column;
        height: 30vh;
    }
`
const TopWrite = styled.div`
    border: solid orange 2px;
    width: 35vw;
    display: flex;
    margin: 0;
    @media (max-width: 768px) {
        width: 100%;
        height: 15vh;
    }
`
const RatingDiv = styled.div`
    width: 45%;
    height: 100%;
    text-align: center;
    padding: 4% 0 0 0;
    box-sizing: border-box; 
    float: left;
    border: 1px solid green;
`

const ImageDiv = styled.div `
    width: 55%;
    border: 1px solid black

`

const ReviewDiv = styled.div`
    width: 45vw;
    border: solid pink 2px;
    @media (max-width: 768px) {
        width: 100%;
        height: 15vh;
    }
`
const TextArea = styled.textarea`
    width: 100%;
    height: 70%;
    margin: 5px 5px 0 0;
    background-color: #F6F6F6;
`
const Button = styled.button`
    position: relative;
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
            data : ''
        }
        this._onStarClick = this._onStarClick.bind(this);
        this._clickReview = this._clickReview.bind(this);
        this._alertReview = this._alertReview.bind(this);
        this._imagePreview = this._imagePreview.bind(this);
    }

    _callback(params) {
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
            // reviewPhoto: 3,
            reviewRating: this.state.rating,
            reviewMessage: this.input.value
        }

        // console.log(form)
        this.props.loginState === false ? (alert('로그인이 필요한 서비스 입니다.'), this.props.handleLogout()) :
        !this.state.imageAddress ? alert('사진 등록은 필수입니다') : 
             (axios.post(`${url}/api/review/post/message`, form, { headers: { 'token': token } })
                .then((response) => {
                console.log(response);
                })
                // .then(response => this.setState({ data: response.data }))
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
                <TopWrite id="TOPWRITE">
                    <RatingDiv>
                        <h6>평점을 입력해주세요</h6>
                        <StarRatingComponent
                            name="평점"
                            value={rating}
                            onStarClick={this._onStarClick}
                        />
                    </RatingDiv>
                    <ImageDiv>
                        <img src = {this.state.imagepreviewUrl ? this.state.imagepreviewUrl: null} style = {{border: '1px solid black', width:'100%', height:'100%'}}/>

                    </ImageDiv>
                   
                </TopWrite>
                <ReviewDiv>
                    <TextArea placeholder='사용 후기를 입력해주세요.' innerRef={ref => { this.input = ref; }} /><br />
                    <div style={{display : 'flex',  justifyContent : 'flex-end'}}>
                    {/* <Button onClick={document.getElementById('upload')}>등록</Button> */}
                     <FileUpload imagePreview = {this._imagePreview} callback={this._callback.bind(this)} id={this.props.id} />
           
                    <Button onClick={() => { this._alertReview(); this._clickReview() }}>등록</Button>
                    </div>
                </ReviewDiv>

            </Wrapper>

        )
    }
}

export default Rating;