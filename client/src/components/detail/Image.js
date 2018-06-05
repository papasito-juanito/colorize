/* eslint-disable */
import React, { Component } from 'react';
import noWish from '../../assets/emptyHeart.png';
import Wish from '../../assets/Heart.png';
import styled from 'styled-components';
import axios from 'axios';
import { url } from '../../config';

const Div = styled.div`
    height : 100%;
    border: solid red 3px;
    width: 30vw;
    position: relative;
    box-sizing: border-box; 
    background-color:white;
    @media (max-width: 768px) {
        width: 100%;
	    justify-content:center;
	    height: 200px;
	}
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    justify-content: center;
    display: block;
    // background: pink;
    @media (max-width: 768px) {

	}
`

const Wishlist = styled.div`
    width: 2.5vw;
    height: 2.5vw;
    position: absolute;
    left: 1%;
    top:1%;
    cursor : pointer;
`
const Heart = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    justify-content: center;
    display: block;
    background: pink;
`

class DetailLeft extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        
        return (
            <Div>
                <Image src={this.props.data ? this.props.data[0].item_photo : null} alt={'lip'} />
                <Wishlist>
                    <Heart onClick={this.props.changeWish} src={!this.props.data ? null : this.props.data[0].wish === 'true'  ? Wish : noWish} alt={'wishlist'} />  
                </Wishlist>
            </Div>
        )
    }
}

export default DetailLeft;