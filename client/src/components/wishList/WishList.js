import React, {Component} from 'react';
import styled from 'styled-components';
import Items from './Items';

import axios from 'axios';
import { url } from '../../config';


class WishList extends Component {
    constructor(props){
        super()
        this.state = {
            item: []
        }
    }

    componentDidMount(){
        console.log('wishlistwishlistwishlist', this.props);  
        const token = localStorage.getItem('token')  
        axios.get(`${url}/api/wishlist/get/list`, {headers: {'token': token}})
        .then((response) => {
            console.log('wishapiwishapiwishapi', response)
            this.setState({item: response.data})
          })
    }
    render(){
        return (
            <div>
                <Items/>
            </div>
        );
    }
};

export default WishList;
