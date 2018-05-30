import React, {Component} from 'react';
import styled from 'styled-components';
import Items from './Items';
import styled from 'styled-components';

import axios from 'axios';
import { url } from '../../config';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class WishList extends Component {
    constructor(props){
        super()
        this.state = {
            items: []
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
            <Wrapper>
                <Items items={this.state.item}/>
            </Wrapper>
        );
    }
};

export default WishList;
