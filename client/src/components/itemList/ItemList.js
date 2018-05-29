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
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SortContainer = styled.div`
    height: 3rem;
    margin-top: 10%;
    margin-left: 3%;
    overflow: hidden;
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
    &:active {
        background-color: black;
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
            this.setState({item: response.data})
          })
        switch (this.props.history.location.search.split('=')[1]) {
            case 'price_desc' : this.handeHighPrice()
                break;
            case 'price_asc' : this.handleLowPrice()
                break;
            case 'latest' : this.handleLatest()   
                break; 
            default:
                break;
        }
    }
 
     handeHighPrice = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=price DESC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data})
          })
        }
    
     handleLowPrice = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=price ASC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data})
          })
    }
    
     handleRating = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=avg DESC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data})
          })
    }
    
     handleLatest = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=date DESC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data})
          })
    }
  
    render(){
        console.log(this.props.location);
        console.log('itemsitemsitemsitems', this.state.item);
        return (
            <Wrapper>
                    <SortContainer>
                        <Btn to={`?sort=rating`} onClick={this.handleRating.bind(this)}>별점순</Btn>
                        <Btn to={`?sort=price_desc`} onClick={this.handeHighPrice.bind(this)}>높은가격순</Btn>
                        <Btn to={`?sort=price_asc`} onClick={this.handleLowPrice.bind(this)}>낮은가격순</Btn>
                        <Btn to={`?sort=latest`} onClick={this.handleLatest.bind(this)}>최신순</Btn>
                    </SortContainer>  
                <Items item={this.state.item}/>
            </Wrapper>
        )
    }    
};

export default ItemList;