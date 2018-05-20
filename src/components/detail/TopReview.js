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
        return (
            <div>
                <Review data = {this.state.topReview} />
            </div>
        )
    }
}



export default TopReview;