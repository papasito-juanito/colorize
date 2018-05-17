import React, { Component } from 'react';
import logo from '../../assets/lip.jpg';
import noWish from '../../assets/emptyHeart.png'
import Wish from '../../assets/Heart.png'
import styled from 'styled-components';

const Div = styled.div`
    height : 100%;
    border: 1px solid red;
    width: 30%;
    position: relative;
`

const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const Wishlist = styled.div`
    width: 20%;
    height: 30%;
    position: relative;
    left: 0;
    top:-45vh;
    cursor : pointer;
`

const ColorDiv = styled.div`
    border: 1px solid blue;
    width: 20%;
    height: 50%;
    position: relative;
    left: 19vw;
    top:-30vh;
    background-color: blue; 
`

const DetailLeft = ({data}) => {

        return (
            <Div>
                <ImageDiv >
                    <Image src={data[0] ? data[0].photo : null} alt={'lip'} />
                </ImageDiv>
                    <ColorDiv />
                <Wishlist>
                    <Image onClick={this._clickToWish}/>  
                </Wishlist>
            </Div>
        )
    }


export default DetailLeft;