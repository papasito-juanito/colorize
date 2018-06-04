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


            // .then(response =>{
            // if(response.data.success===true){
            //   this.setState({data : response.data.rows[0]})
            // }else {
            //   this.props.handleLogout()
            //   this.props.history.push('/login', {from: this.props.location})
            // }
    componentDidMount(){
        const token = localStorage.getItem('token')
        axios.get(`${url}/api/review/get/info?color_id=${this.props.id}`, { headers: { 'token': token } })
            .then(response => {
                console.log(response)
                this.setState({ user: response.data })

            }
            )
            .catch(err => console.log(err)) 
            
    }
    
    render() {
        console.log(this.state.user?this.state.user:null)
        console.log(this.props.id)
        return (
            <div>
                {!this.props.isLogined ? 
                <Div>
                    <FileUpload callback={this._callback.bind(this)} id={this.props.id} />
                    <Rating loginState = {this.props.loginState} handleLogout={this.props.handleLogout} info={this.state.user} id={this.props.id} data={this.state.data} />
                </Div> 
                : this.props.isLogined === true && this.state.user.message === 'written' ?
                <Div>
                    <MyContent id={this.props.id} user={this.state.user ? this.state.user.rows[0] : null}/>
                </Div> 
                :
                <Div>
                    <FileUpload callback={this._callback.bind(this)} id={this.props.id} />
                    <Rating loginState = {this.props.loginState} handleLogout={this.props.handleLogout} info={this.state.user} id={this.props.id} data={this.state.data} />
                </Div>    
                }

            </div>
        );
    }
}

export default Comment;
