import React, { Component } from 'react';
import styled from 'styled-components';
import FileUpload from './FileUpload';
import Rating from './Rating';
import MyContent from '../review/MyContent';

const Div = styled.div`
    width: 80vw;
    height: 30vh;
    display: flex;
    background-color: #F4F5F9;
`;
const review = false;
//로그인 안되었을때 ? 리뷰 없는상태, 로그인 되었을때? 리뷰 여부 검사
class Comment extends Component {
    constructor() {
        super();
        this.state = {
            data: ''
        };
    }

    _callback(params) {
        this.setState({
            data: params
        })
    }

    render() {
        return (
            <div>
                {!review ?
                    <Div>
                        <FileUpload callback={this._callback.bind(this)} id={this.props.id} />
                        <Rating id={this.props.id} data={this.state.data} />
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
