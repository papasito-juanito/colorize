import React, { Component } from 'react';
import axios from 'axios';
import Review from '../review/Review';

class Allreview extends Component{
    constructor(){
        super()
        this.state = {
            data : ''
        }
    }

    componentDidMount() {
        // axios.get(`http://127.0.0.1:8080/api/item/rate?color_id=${this.props.match.params.id}`)
        axios.get(`http://127.0.0.1:8080/api/review/get/list?color_id=${this.props.id}`)
            // .then((response) => {
            //     console.log(response.data);
            //   })
            .then(response => this.setState({ data: response.data }))
            .catch(err => console.log(err))
    }



    render(){
        return(
            <div style = {{border: '1px solid black'}}>
            <Review review={this.state.data} />
                <h2> 리뷰 다나오는창 </h2>
                <div> <h3>review</h3> </div>
                <div> <h3>review</h3> </div>
                <div> <h3>review</h3> </div>
                <div> <h3>review</h3> </div>
                <div> <h3>review</h3> </div>
                <div> <h3>review</h3> </div>
                <div> <h3>review</h3> </div>
                <div> <h3>review</h3> </div>
                <div> <h3>review</h3> </div>
                <div> <h3>review</h3> </div>
                <div> <h3>review</h3> </div>
                
            </div>
        )
    }

}

export default Allreview;