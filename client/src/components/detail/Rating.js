import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components';
import axios from 'axios';
import { url } from '../../config';


const logged = true;

const TextArea = styled.textarea`
    resize: none;
    maxlength: 10;
    width: 95%;
    height: 80%;
    margin: 1% 0 0 0;
    background-color: #F6F6F6;
    border-radius: 5px;
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
        
        const form = {
            color_id: this.props.id,
            reviewPhoto:1,
            // reviewPhoto: `${__dirname}/public/${this.props.data}.jpg`, this.props로 받을게 아니고 이 사이트의 url 매치랑 들어온 유저정보 
            reviewRating: this.state.rating,
            user_id: 1,
            reviewMessage: this.input.value,
        }

        // console.log(form)
        !logged ? alert('로그인 먼저해') :
            axios.post(`${url}/api/review/post`, form)
                // .then((response) => {
                // console.log(response);
                // })
                .then(response => this.setState({ data: response.data }))
                .catch(err => console.log(err))
        this.input.value = '';
    }

    _alertReview() {
        alert('후기가 등록되었습니다');
    }

    render() {
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
                    <TextArea placeholder='후기 입력해주세요 ㅎㅎㅎㅎ' innerRef={ref => { this.input = ref; }} /><br />
                    <SendDiv>
                        <Button onClick={() => { this._alertReview(); this._clickReview() }} >등록</Button>
                    </SendDiv>
                </ReviewDiv>

            </Wrapper>

        )
    }
}

export default Rating;