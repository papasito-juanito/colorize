import React, { Component } from 'react';
import TopReviews from '../review/TopReviews';
import axios from 'axios';
import { url } from '../../config';
import styled from 'styled-components';

const Div = styled.div`
     width: 100%;
     height: 100%;
`


class TopReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topReview: '',
        };
    }
    componentDidMount() {
        const token = localStorage.getItem('token')
        axios.get(`${url}/api/review/get/rank?color_id=${this.props.id}`, token !== null ? { headers: { 'token': token} }: null)
            .then(response => this.setState({ topReview: response.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Div>
                <div> 
                       <div style ={{width: '100%', height:'20%'}}>Top3 Reviews <div style={{width:'100%', border:'2px solid #ccc'}}></div></div>
                </div>
                <div>
                    {this.state.topReview.length !== 0 ? <TopReviews Topdata={this.state.topReview} /> : <div> <h2>등록된 리뷰가 없어요</h2></div>}
                </div>
            </Div>
        );
    }
}


export default TopReview;
