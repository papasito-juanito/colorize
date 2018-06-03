/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';

import history from '../../utils/history'
import { Link } from 'react-router-dom';

import Items from './Items'
import Sort from './Sort'
import axios from 'axios';
import { url } from '../../config';


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    @media (max-width: 768px) {
        margin-top: 50px;
    }
`;

const SortContainer = styled.div`
    display: flex;
    margin-top: 30px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const Btn = styled(Link)`
    border: none;
    color:white
    outline: none;
    padding: 12px 16px;
    background-color: grey;
    cursor: pointer;
    text-decoration: none;
    &:visited {
        color: white;
    }
`;

const style = {
    textDecoration: "none"
}

class ItemList extends Component {
    constructor(props){
        super()
        this.state = {
            item: []
        }
    }
    
    componentDidMount(){
        console.log('itemsitemsitemsitems', this.props);    
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=avg DESC`)
        .then((response) => {
            console.log(response)
            this.setState({item: response.data.rows})
          })
        switch (this.props.history.location.search.split('=')[1]) {
            case 'price_desc' : this.handeHighPrice(); 
                break;
            case 'price_asc' : this.handleLowPrice(); 
                break;
            case 'latest' : this.handleLatest(); 
                break; 
            default : document.getElementById('rating').style.background ="black"
                break;
        }
    }
 
     handeHighPrice = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=price DESC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data.rows})
          })
        //   document.getElementById('desc').style.background ="black"
        }
    
     handleLowPrice = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=price ASC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data.rows})
          })
        //   document.getElementById('asc').style.background ="black"
    }
    
     handleRating = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=avg DESC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data.rows})
          })
        //   document.getElementById('rating').style.background ="black"
    }
    
     handleLatest = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=date DESC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data.rows})
          })
        //   document.getElementById('latest').style.background ="black"  
    }
  
    render(){
        console.log(this.props.location);
        console.log('itemsitemsitemsitems', this.state.item);
        return (
            <Wrapper>
                    <SortContainer>
                        <Btn to={`?sort=rating`} activeStyle={{ color: 'black' }} onClick={this.handleRating.bind(this)} id='rating'>별점순</Btn>
                        <Btn to={`?sort=price_desc`} activeStyle={{ color: 'black' }} onClick={this.handeHighPrice.bind(this)} id='desc'>높은가격순</Btn>
                        <Btn to={`?sort=price_asc`} activeStyle={{ color: 'black' }} onClick={this.handleLowPrice.bind(this)} id='asc'>낮은가격순</Btn>
                        <Btn to={`?sort=latest`} activeStyle={{ color: 'black' }} onClick={this.handleLatest.bind(this)} id='latest'>최신순</Btn>
                    </SortContainer>  
                <Items item={this.state.item}/>
            </Wrapper>
        )
    }    
};

export default ItemList;