import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components';

const logged = true;

const TextArea = styled.textarea`
    resize: none;
    maxLength: 200;
    width: 90%;
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
        var review = {
            rating : this.state.rating,
            comment : this.input.value
        }
        !logged ? alert('로그인 먼저해') :
        console.log(review);
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
                        <button style= {{position: 'relative', left: '5%', cursor: 'pointer'}} onClick={this._clickReview} >등록</button>
                    </div>
                </div>  

            </div>

        )
    }
}

export default Rating;