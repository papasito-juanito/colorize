/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';

import history from '../../utils/history'
import { Link } from 'react-router-dom';

import Items from './Items'
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
    background-color: black;
    cursor: pointer;
    text-decoration: none;
    font-size: 1em;
    font-family: 'Roboto';
    font-weight: 300;
    &:visited {
        color: white;
    }
    &: hover {
        text-shadow: 0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F;
    }
`;

const Loading = styled.div`
    margin-top: 15%
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid black;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`
const HomeButton = styled.button`
    position: fixed;
    background-color:black;
    color: white;
    border: none;
    right:1%;
    bottom:1%;
    opacity: 1;
    width: 4rem;
    height: 4rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover {
    opacity: 0.3;
    border: none;
  }
  &:active {
      border:none
  }
`

const Arrow = styled.i`
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 6%;
`
const scrollStepInPx = 50;

const delayInMs = 10;

class ItemList extends Component {
    constructor(props){
        super()
        this.state = {
            item: [],
            isLoading: true
        }
        this.scrollStep = this.scrollStep.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep, delayInMs);
        this.setState({ intervalId: intervalId });
        document.getElementById('top').style.borderColor = "none"
    }
     
     handeHighPrice = () => {         
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=price DESC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data.rows})
          })
        document.getElementById('desc').style.textShadow = '0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F';
        document.getElementById('asc').style.textShadow = 'none';
        document.getElementById('rating').style.textShadow = 'none';
        document.getElementById('latest').style.textShadow = 'none';
        document.getElementById('review').style.textShadow = 'none';
        }
    
     handleLowPrice = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=price ASC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data.rows})
          })
        document.getElementById('asc').style.textShadow = '0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F';
        document.getElementById('desc').style.textShadow = 'none';
        document.getElementById('rating').style.textShadow = 'none';
        document.getElementById('latest').style.textShadow = 'none';
        document.getElementById('review').style.textShadow = 'none';
    }
    
     handleRating = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=avg DESC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data.rows})
          })
        document.getElementById('rating').style.textShadow = '0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F';
        document.getElementById('desc').style.textShadow = 'none';
        document.getElementById('asc').style.textShadow = 'none';
        document.getElementById('latest').style.textShadow = 'none';
        document.getElementById('review').style.textShadow = 'none';
    }
    
     handleLatest = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=date DESC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data.rows})
          })
        document.getElementById('latest').style.textShadow = '0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F'; 
        document.getElementById('desc').style.textShadow = 'none';
        document.getElementById('asc').style.textShadow = 'none';
        document.getElementById('rating').style.textShadow = 'none';
        document.getElementById('review').style.textShadow = 'none';
    }
        
    handleReview = () => {
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=reviews DESC`)
        .then((response) => {
            console.log('price',response)
            this.setState({item: response.data.rows})
          })
        document.getElementById('review').style.textShadow = '0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F'; 
        document.getElementById('latest').style.textShadow = 'none';
        document.getElementById('desc').style.textShadow = 'none';
        document.getElementById('asc').style.textShadow = 'none';
        document.getElementById('rating').style.textShadow = 'none';
    }

    componentDidMount(){
        console.log('itemsitemsitemsitems', this.props);    
        axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]&order_by=avg DESC`)
        .then((response) => {
            console.log(response)
            this.setState({item: response.data.rows, isLoading: false})
          })
        switch (this.props.history.location.search.split('=')[1]) {
            case 'price_desc' : this.handeHighPrice(); 
                break;
            case 'price_asc' : this.handleLowPrice(); 
                break;
            case 'latest' : this.handleLatest(); 
                break; 
            case 'reviews_desc' : this.handleReview(); 
                break; 
            default : document.getElementById('rating').style.textShadow = '0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F';
                break;
        }
    }
    // reviews_DESC
    render(){
        console.log(this.props.location);
        console.log('itemsitemsitemsitems', this.state.item);
        return (
            <Wrapper>
                    <SortContainer>
                        <Btn to={`?sort=rating`} onClick={this.handleRating} id='rating'>별점순</Btn>
                        <Btn to={`?sort=reviews_desc`} style={{marginLeft: '10px'}} onClick={this.handleReview} id='review'>리뷰순</Btn>
                        <Btn to={`?sort=price_desc`} style={{marginLeft: '10px'}} onClick={this.handeHighPrice} id='desc'>높은가격순</Btn>
                        <Btn to={`?sort=price_asc`} style={{marginLeft: '10px'}} onClick={this.handleLowPrice} id='asc'>낮은가격순</Btn>
                        <Btn to={`?sort=latest`} style={{marginLeft: '10px'}} onClick={this.handleLatest} id='latest'>최신순</Btn>
                    </SortContainer>
                    {this.state.isLoading ?   
                <Loading />:<Items item={this.state.item}/> }
                <HomeButton id="top" onClick={this.scrollToTop}><Arrow/><br/> Top </HomeButton>
            </Wrapper>
        )
    }    
};

export default ItemList;