import React, { Component } from 'react';
import Review from '../review/Review';
import axios from 'axios';
import { url } from '../../config';

class TopReview extends Component {
    constructor(){
        super();
        this.state = {
            topReview : ''
        }
    }
    componentDidMount() {
        // axios.get(`${url}/api/item/rate?color_id=${this.props.match.params.id}`)
        axios.get(`${url}/api/review/get/rank?color_id=${this.props.id}`)
            // .then((response) => {
            //     console.log(response.data);
            // })
            .then(response => this.setState({ topReview: response.data }))
            .catch(err => console.log(err))
    }
    
    render(){
        console.log(this.state.topReview)
        return (
            <div style = {{width: '100%', height: '100%', backgroundColor: 'green'}}>
                {this.state.topReview.length !== 0 ? <Review data = {this.state.topReview}  /> : <div style={{border: '1px solid black'}}> <h2>등록된 리뷰가 없어요</h2></div>}
            </div>
        )
    }
}



export default TopReview;