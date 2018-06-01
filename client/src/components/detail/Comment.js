/* eslint-disable */
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

        axios.get(`${url}/api/review/get/info?color_id=${this.props.id}`, { headers: { 'token': token } })
            .then(response => 
                this.setState({ user: response.data.rows })
            )
            .catch(err => console.log(err)) 
            
    }
    
    render() {
        console.log(this.state.user?this.state.user:null)
        return (
            <div>
                {!this.state.user ? 
                <Div>
                    <FileUpload callback={this._callback.bind(this)} id={this.props.id} />
                    <Rating loginState={this.props.loginState} info={this.state.user} id={this.props.id} data={this.state.data} />
                </Div> 
                : this.state.user[0] && this.state.user[0].message ?
                <Div>
                    <MyContent id={this.props.id} user={this.state.user}/>
                </Div> 
                :
                <Div>
                    <FileUpload callback={this._callback.bind(this)} id={this.props.id} />
                    <Rating loginState={this.props.loginState} info={this.state.user} id={this.props.id} data={this.state.data} />
                </Div>    
                }

            </div>
        );
    }
}

export default Comment;
