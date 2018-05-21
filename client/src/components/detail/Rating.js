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
            reviewPhoto: this.props.data,
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
        console.log(this.state.data)
        console.log('props.data type: ', typeof this.props.data)
        console.log('props.data : ', this.props.data)
        console.log('blob type : ', this.props.data instanceof Blob)
        return (
            <div style={{ border: '1px solid', width: '75%', display: 'flex' }}>
                <div style={{ backgroundColor: 'blue', width: '20%' }}>
                    <h4>내 평점: {rating}</h4>
                    <h6>평점 입력해주세요</h6>
                    <StarRatingComponent
                        name="평점"
                        value={rating}
                        onStarClick={this._onStarClick}
                    />
                </div>
                <div style={{ backgroundColor: 'pink', width: '80%', textAlign: 'center' }}>

                    <TextArea placeholder='후기 입력해주세요 ㅎㅎㅎㅎ' innerRef={ref => { this.input = ref; }} /><br />
                    <div style={{ cursor: 'pointer', textAlign: 'left' }}>
                        <button style={{ position: 'relative', left: '2%', cursor: 'pointer' }} onClick={() => { this._alertReview(); this._clickReview() }} >등록</button>
                    </div>
                </div>

            </div>

        )
    }
}

export default Rating;