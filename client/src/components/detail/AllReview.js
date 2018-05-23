import React, { Component } from 'react';
import axios from 'axios';
import Review from '../review/Review';
import { url } from '../../config';
import styled from 'styled-components';


const Div = styled.div`
    border: 1px solid black;
    background-color: blue;
    `

class Allreview extends Component{
    constructor(){
        super()
        this.state = {
            data : ''
        }
    }


    componentDidMount() {
        axios.get(`${url}/api/review/get/list?color_id=${this.props.id}`)
            .then(response => this.setState({ data: response.data }))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <Div>
                {this.state.data.length !== 0 ? <Review data={this.state.data}/> : <div> <h2>등록된 리뷰가 없어요</h2></div>}
            </Div>
        )
    }

}

export default Allreview;