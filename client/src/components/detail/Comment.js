/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import MyContent from '../review/MyContent';
import axios from 'axios';
import { url } from '../../config';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;


class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            user:''
        };
    }

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
        console.log(this.state.data)
        console.log(this.props.isLogined)
        return (
            <Container>
                {!this.props.isLogined ?
                <Div>
                    <Rating loginState = {this.props.isLogined} handleLogout={this.props.handleLogout} info={this.state.user} id={this.props.id} data={this.state.data} />
                </Div> 
                : this.props.isLogined === true && this.state.user.message === 'written' ?
                <Div>
                    <MyContent id={this.props.id} user={this.state.user ? this.state.user.rows[0] : null}/>
                </Div> 
                :
                <Div>
                    <Rating loginState = {this.props.isLogined} handleLogout={this.props.handleLogout} info={this.state.user} id={this.props.id} data={this.state.data} />
                </Div>    
                }

            </Container>
        );
    }
}

export default Comment;
