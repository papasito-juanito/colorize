import React, { Component } from 'react';
import Review from '../review/Review'


class Reviews extends Component {
    
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



export default Reviews;