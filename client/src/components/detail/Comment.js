import React, { Component } from 'react';
import styled from 'styled-components';
import FileUpload from './FileUpload';
import Rating from './Rating';
import MyContent from '../review/MyContent';
import axios from 'axios';
import { url } from '../../config';

const Div = styled.div`
    width: 80vw;
    height: 30vh;
    display: flex;
    background-color: #F4F5F9;
`;
const review = false;
//로그인 안되었을때 ? 리뷰 없는상태, 로그인 되었을때? 리뷰 여부 검사
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            user:''
        };
    }

    _callback(params) {
        this.setState({
            data: params
        })
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        // axios.get(`${url}/api/item/rate?color_id=${this.props.match.params.id}`)
        axios.get(`${url}/api/review/get/info?color_id=${this.props.id}`, { headers: { 'token': token } })
            // .then((response) => {
            //     console.log(response);
            // })
            .then(response => this.setState({ user: response.data }))
            .catch(err => console.log(err));
    }
    
    render() {
        return (
            <div>
                {!review ?
                    <Div>
                        <FileUpload callback={this._callback.bind(this)} id={this.props.id} />
                        <Rating info = {this.state.user} id={this.props.id} data={this.state.data} />
                    </Div>
                    :
                    <Div>
                        <MyContent />
                    </Div>}
            </div>
        );
    }
}

export default Comment;
