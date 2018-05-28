import React from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';
import lipstick from '../../assets/lipstick.svg';
// const queryString = require('query-string');


const ItemListContainer = styled.div` 
    height: 100%;
    width: 80%;
    margin-top: 2%;
    display: flex;
    justify-content: center;
`

//가운데로 필요
const Ul = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0;
    padding-left: 6%;
    display: flex;
    flex-wrap: wrap;
`

const Wrapper = styled(Link)`
    position: relative;
    margin: 1%;
    width: 20%;
    min-width: 15rem;
    height: 25rem;
    display:flex;
    flex-direction: row;
    &:visited {
        color: black;
        text-decoration: none 
    }  
`

const Li = styled.li`
    background-color: #f1f1f1;
    width: 100%;
    margin-top: 15px
    font-size: 30px;
    list-style: none;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &:hover {
        box-shadow: 16px 16px 16px rgba(0,0,0,0.2);
    }
`

const ItemTop = styled.div`
    width: 100%;
`
const Img = styled.img`
    height: 18rem;
    width: 100%;
    background-color: "white"
`
const Color = styled.div`
    position: absolute; 
    top:10px
    right: -5px;
    border-style: solid;
    border-width: 0 70px 70px 0;
    border-color: transparent #${props=>props.color} transparent transparent;
`

const ItemBottom = styled.div`
    marin:auto
    height: 100px;
`
const Brand = styled.div`
    font-size:8px;
    text-align: center
`
const ItemName = styled.div`
    font-size:16px;
    text-align: center
`
const Price = styled.div`
    font-size: 14px;
    text-align: center
`

const Rating = styled.div`
    font-size: 19px;
    text-align: center
`
const Review = styled.span`
    font-size: 13px;
`

const Items = ({item}) => {
    
    return (
        
        <ItemListContainer >
            <Ul>
                {item.map((item, i)=>{
                    return (
                        <Wrapper to={`/items/detail/${item.color_id}`} style={{ textDecoration: 'none' }} >
                        <Li key={i}>
                            <ItemTop >
                                <Img src={item.photo}/>
                                {/* <Color color={item.hex}/> */}
                            </ItemTop >
                            <ItemBottom>
                                <Brand>{item.brand}</Brand>
                                <ItemName>{item.name}, {item.volume}</ItemName>
                                <Price>{item.price}</Price>
                                <Rating>
                                    <StarRatingComponent 
                                        name="itemList" 
                                        editing={false}
                                        value={item.avg}
                                    />, <Review>({item.reviews})</Review>
                                </Rating>
                            </ItemBottom>
                            </Li>
                            <Color color={item.hex}/>
                        </Wrapper>
                    )
                })}
            </Ul>
        </ItemListContainer>
    );
};

export default Items;