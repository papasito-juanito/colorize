import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components';
import axios from 'axios';

const logged = true;

const TextArea = styled.textarea`
    resize: none;
    maxLength: 500;
    width: 95%;
    height: 80%;
    margin: 1% 0 0 0;
`
class Rating extends Component {
    constructor(){
        super();
        this.state = {
            rating:5
        }
        this._onStarClick = this._onStarClick.bind(this);
        this._clickReview = this._clickReview.bind(this);
    }

    _onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    _clickReview() {
        const form = {
            color_id: this.props.id,
            reviewPhoto: 1,
            reviewRating: this.state.rating,
            user_id: 1,
            reviewMessage: this.input.value,
    }
        
        // console.log(form)
        !logged ? alert('로그인 먼저해') :
            axios.post(`http://127.0.0.1:8080/api/review/post`, form)
            // .then((response) => {
            // console.log(response.data);
            // })
        .then(response => this.setState({ data: response.data }))
        .catch(err => console.log(err))
          this.input.value='';
    }





    render() {
        const { rating } = this.state;

        return (
            <div style={{ border: '1px solid', width: '75%', display:'flex' }}>
             <div style={{backgroundColor:'blue', width: '20%'}}>
                <h4>내 평점: {rating}</h4>
                <h6>평점 입력해주세요</h6>
                <StarRatingComponent
                    name="평점"
                    value={rating}
                    onStarClick={this._onStarClick}
                />
                </div>
                <div style={{ backgroundColor: 'pink', width: '80%', textAlign:'center' }}>

                    <TextArea placeholder = '후기 입력해주세요 ㅎㅎㅎㅎ' innerRef={ref => {this.input=ref;}}/><br/>
                    <div style={{ cursor: 'pointer', textAlign : 'left'}}>
                        <button style= {{position: 'relative', left: '2%', cursor: 'pointer'}} onClick={this._clickReview} >등록</button>
                    </div>
                </div>  

            </div>

        )
    }
}

export default Rating;