import React, { Component } from 'react';
import Review from '../review/Review'


class TopReview extends Component {
    
    render(){
        return (
            <div>
                <Review/>
                <Review />
                <Review />
            </div>
        )
    }
}



export default TopReview;