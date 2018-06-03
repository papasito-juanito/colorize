import React, { Component } from 'react';
import noWish from '../../assets/emptyHeart.png';
import Wish from '../../assets/Heart.png';
import styled from 'styled-components';
import axios from 'axios';
import { url } from '../../config';

const Div = styled.div`
    height : 100%;
    border: 1px solid #d9dee8;
    width: 30%;
    position: relative;
    margin: 0 2% 0 0;
    box-sizing: border-box; 
    background-color:white;
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
    width: 2.5vw;
    height: 2.5vw;
    position: absolute;
    left: 1%;
    top:1%;
    cursor : pointer;
`

const ColorDiv = styled.div`
    width: 2.5vw;
    height: 2.5vw;
    position: absolute;
    border-radius: 50%;
    right: 1%;
    top: 1%;
    background-color: #${props => props.color};
`

class DetailLeft extends Component {
    constructor(props){
        super(props);
        this.state = {
            wish:''
        }
        this._clickToWish = this._clickToWish.bind(this);
    }
    
    _clickToWish() {
        const token = localStorage.getItem('token')
        // this.setState({wish : !this.state.wish})
        const form = {
            color_id: this.props.data[0].color_id
        }

        axios.post(`${url}/api/wishlist/update`, form,  { headers: { 'token': token } })
          .then((response) => {
              console.log(response.data);
          })
          .catch(err => console.log(err));

    }

    componentDidMount(){
       
    }

    render(){
        // console.log(this.state.wish)
        // console.log(this.props.data ? this.props.data[0].wish : null)
        console.log(this.props.data ? this.props.data[0].wish:null)
        return (
            <Div>
                <ImageDiv >
                    <Image src={this.props.data ? this.props.data[0].photo : null} alt={'lip'} />
                </ImageDiv>
                    <ColorDiv color={this.props.data ? this.props.data[0].hex : null} />
                <Wishlist>
                    <Image onClick={this._clickToWish} src={!this.props.data ? null : this.props.data[0].wish === 'true' ? Wish : noWish} alt={'wishlist'} />  
                </Wishlist>
            </Div>
        )
    }
}

export default DetailLeft;