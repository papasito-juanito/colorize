import React, { Component } from 'react';
import styled from 'styled-components';

import history from '../../utils/history'

import Items from './Items'
import Sort from './Sort'
import axios from 'axios';
import { url } from '../../config';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


class ItemList extends Component {
    constructor(props){
        super()
        this.state = {
            item: []
        }
    }
    
    componentDidMount(){
        // console.log(this.props);
        // const decode = decodeURIComponent(this.props.match.params.id)
        // console.log(decode);        
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]`)
        .then((response) => {
            console.log(response)
            this.setState({item: response.data})
          })
    }    
  
    render(){
        return (
            <Wrapper>
                <Sort history={this.props}/>
                <Items item={this.state.item}/>
            </Wrapper>
        )
    }    
};

export default ItemList;