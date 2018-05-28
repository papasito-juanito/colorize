import React, { Component } from 'react';
import TopReviews from '../review/TopReviews';
import axios from 'axios';
import { url } from '../../config';
import styled from 'styled-components';

const Div = styled.div`
     width: 100%;
     height: 100%;
     border: 1px solid #d9dee8; 
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
        // axios.get(`${url}/api/item/rate?color_id=${this.props.match.params.id}`)
        axios.get(`${url}/api/review/get/rank?color_id=${this.props.id}`, token !== null ? { headers: { 'token': token} }: null)
            // .then((response) => {
            //     console.log(response);
            // })
            .then(response => this.setState({ topReview: response.data }))
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.topReview)
        return (
            <Div>
                <div> 
                    베스트리뷰
                </div>
                <div>
                    {this.state.topReview.length !== 0 ? <TopReviews Topdata={this.state.topReview} /> : <div> <h2>등록된 리뷰가 없어요</h2></div>}
                </div>
            </Div>
        );
    }
}


export default TopReview;
