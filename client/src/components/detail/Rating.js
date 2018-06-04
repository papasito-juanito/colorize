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
    background-color:white;
    border: solid red 2px;
`
const RatingDiv = styled.div`
    width: 15vw;
    text-align: center;
    padding: 4% 0 0 0;
    box-sizing: border-box; 
`

const ReviewDiv = styled.div`
    width: 65vw;
    border: solid pink 2px;
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
    margin-left: auto;
`

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 5
        }
        this._onStarClick = this._onStarClick.bind(this);
        this._clickReview = this._clickReview.bind(this);
        this._alertReview = this._alertReview.bind(this);
    }

    _callback(params) {
        this.setState({
            data: params
        })
    }

    _onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    _clickReview() {
        const token = localStorage.getItem('token')
        const form = {
            color_id: this.props.id,
            reviewPhoto: `${this.props.id}_token`,
            // reviewPhoto: `${__dirname}/public/${this.props.data}.jpg`, this.props로 받을게 아니고 이 사이트의 url 매치랑 들어온 유저정보 
            reviewRating: this.state.rating,
            reviewMessage: this.input.value
        }

        // console.log(form)
        this.props.loginState === false ? (alert('로그인이 필요한 서비스 입니다.'), this.props.handleLogout()) :
            axios.post(`${url}/api/review/post/message`, form, { headers: { 'token': token } })
                .then((response) => {
                console.log(response);
                })
                // .then(response => this.setState({ data: response.data }))
                .catch(err => console.log(err))
        this.input.value = '';
        window.location.reload();
    }

    _alertReview() {
         this.props.loginState === true ? alert('후기가 등록되었습니다') : null;
    }

    render() {
        console.log('this.props.info.success :', this.props.info.success)
        console.log('this.props.handleLogout :', this.props.handleLogout)
        console.log('this.props.loginState :', this.props.loginState)
        const { rating } = this.state;
        return (
            <Wrapper>
                <RatingDiv>
                    <h6>평점을 입력해주세요</h6>
                    <StarRatingComponent
                        name="평점"
                        value={rating}
                        onStarClick={this._onStarClick}
                    />
                </RatingDiv>
                <FileUpload callback={this._callback.bind(this)} id={this.props.id} />
                <ReviewDiv>
                    <TextArea placeholder='사용 후기를 입력해주세요.' innerRef={ref => { this.input = ref; }} /><br />
                    <Button onClick={() => { this._alertReview(); this._clickReview() }} >등록</Button>
                </ReviewDiv>

            </Wrapper>

        )
    }
}

export default Rating;