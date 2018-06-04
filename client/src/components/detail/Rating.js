/* eslint-disable */
import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components';
import axios from 'axios';
import { url } from '../../config';



const TextArea = styled.textarea`
    resize: none;
    maxlength: 10;
    width: 95%;
    height: 80%;
    margin: 1% 0 0 0;
    background-color: #F6F6F6;
    border-radius: 5px;
    &: focus {
        outline: none;
    }
`
const Wrapper = styled.div`
    border: 1px solid #d9dee8;
    width: 75%;
    display: flex;
    background-color:white;
`

const RatingDiv = styled.div`
    width: 20%;
    text-align: center;
    padding: 4% 0 0 0;
    box-sizing: border-box; 
`

const ReviewDiv = styled.div`
    backgroundColor: pink;
    width: 80%;
    text-align: center;
`
const SendDiv = styled.div`
    cursor: pointer;
    text-align: left; 
`
const Button = styled.button`
    position: relative;
    left: 2%;
    cursor: pointer;
    border: none;
    color: white;
    background-color: black;
    text-align: center;
    opacity: 0.6;
    transition: 0.3s;
    border-radius:10px;
    &:hover {
        opacity: 1;
    }
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

    _onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    _clickReview() {
        const token = localStorage.getItem('token')
        const form = {
            color_id: this.props.id,
            reviewPhoto: this.props.image,
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
        console.log('this.props.image :', this.props.image)
        console.log('this.props.info.success :', this.props.info.success)
        console.log('this.props.handleLogout :', this.props.handleLogout)
        console.log('this.props.loginState :', this.props.loginState)
        const { rating } = this.state;
        return (
            <Wrapper>
                <RatingDiv>
                    <h4>내 평점: {rating}</h4>
                    <h6>평점 입력해주세요</h6>
                    <StarRatingComponent
                        name="평점"
                        value={rating}
                        onStarClick={this._onStarClick}
                    />
                </RatingDiv>
                <ReviewDiv>
                    <TextArea placeholder='사용후기를 입력해주세요' innerRef={ref => { this.input = ref; }} /><br />
                    <SendDiv>
                        <Button onClick={() => { this._alertReview(); this._clickReview() }} >등록</Button>
                    </SendDiv>
                </ReviewDiv>

            </Wrapper>

        )
    }
}

export default Rating;