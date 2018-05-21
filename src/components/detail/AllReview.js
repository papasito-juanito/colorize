import React, { Component } from 'react';
import axios from 'axios';
import Review from '../review/Review';
import { url } from '../../config';
class Allreview extends Component{
    constructor(){
        super()
        this.state = {
            data : ''
        }
    }

    componentDidMount() {
        // axios.get(`${url}/api/item/rate?color_id=${this.props.match.params.id}`)
        axios.get(`${url}/api/review/get/list?color_id=${this.props.id}`)
            // .then((response) => {
            //     console.log(response.data);
            //   })
            .then(response => this.setState({ data: response.data }))
            .catch(err => console.log(err))
    }



    render(){
        console.log(this.state.data)
        return(
            <div style = {{border: '1px solid black', backgroundColor:'blue'}}>
                {this.state.data.length !== 0 ? <Review data={this.state.data}/> : <div style={{ border: '1px solid black' }}> <h2>등록된 리뷰가 없어요</h2></div>}
            </div>
        )
    }

}

export default Allreview;