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
    outline: none;
    padding: 12px 16px;
    background-color: #f1f1f1;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
    }
    $:active {
        background-color: #666;
        color: white;
    }
`;


class ItemList extends Component {
    constructor(props){
        super()
        this.state = {
            item: []
        }
    }
    
    componentDidMount(){
        console.log('itemsitemsitemsitems', this.props);
        // const decode = decodeURIComponent(this.props.match.params.id)
        // console.log(decode);        
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]`)
        .then((response) => {
            console.log(response)
            this.setState({item: response.data})
          })
    }

     handleBasic = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]`)
        .then((response) => {
            console.log(response)
            this.setState({item: response.data})
          })
      }
    
     handeHighPrice = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=price ASC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data})
          })
        }
    
     handleLowPrice = () => {

    }
    
     handleRating = () => {
    
    }
    
     handleLatest = () => {
    
    }
  
    render(){
        console.log(this.props.location);
        console.log('itemsitemsitemsitems', this.state.item);
        return (
            <Wrapper>
                    <SortContainer>
                        <Btn to='/'>기본순</Btn>
                        <Btn to={`?sort=priceASC`} onClick={this.handeHighPrice.bind(this)}>높은가격순</Btn>
                        {/* <Btn >낮은가격순</Btn>
                        <Btn>별점순</Btn>
                        <Btn>최신순</Btn> */}
                    </SortContainer>  
                <Items item={this.state.item}/>
            </Wrapper>
        )
    }    
};

export default ItemList;