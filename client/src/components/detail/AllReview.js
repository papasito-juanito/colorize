/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import AllReviews from '../review/AllReviews';
import { url } from '../../config';
import styled from 'styled-components';


const Div = styled.div`
     width: 100%;
     height: 100%;
`

class Allreview extends Component{
    constructor(){
        super()
        this.state = {
            data : ''
        }
    }


    componentDidMount() {
        const token = localStorage.getItem('token')
        axios.get(`${url}/api/review/get/list?color_id=${this.props.id}`, { headers: { 'token': token } })
            .then(response => {
               if(response.data.success===true){
                this.setState({ data: response.data.rows })
               } else {
                   console.log('allreview', response);
                this.props.handleLogout()
               }
            }
        )
    }

    render(){
        return(
            <Div>
                <div>
                   <div style ={{width: '100%', height:'20%'}}>All Reviews <div style={{width:'100%', border:'2px solid #ccc'}}></div></div>
                </div>
                <div>
                    {this.state.data.length !== 0 ? <AllReviews id = {this.props.id} data={this.state.data}/> : <div> <h2>등록된 리뷰가 없어요</h2></div>}
                </div>
            </Div>
        )
    }

}

export default Allreview;