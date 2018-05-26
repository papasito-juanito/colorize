import React from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';
import lipstick from '../../assets/lipstick.svg';
// const queryString = require('query-string');


const ItemListContainer = styled.div`
    top:10%;
    position: absolute;
    height: 100%;
    width: 100%
    margin-left:5%
    display: flex
    flex-direction: column;
`

//가운데로 필요
const Ul = styled.ul`
    position: absolute;
    height: 100%;
    width: 90%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top:5%
`

const Wrapper = styled(Link)`
    position: relative
    margin: 20px
    width: 330px;
    height: 430px;
    &:visited {
        color: black;
        text-decoration: none 
    }  
`

const Li = styled.li`
    background-color: #f1f1f1;
    width: 300px;
    height: 400px;
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
    marin:auto
    height: 300px;
    position:relative;
`
const Img = styled.img`
    width: 300px;
    height: 300px;
    background-color: "white"
`
const Color = styled.div`
    position: absolute; 
    top:10px
    right: 20px
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
const SortContainer = styled.div`
    margin-top: 2%;
    margin-left: 3%;
    overflow: hidden;
`

const Btn = styled.button`
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
`

const Items = ({item}) => {
    
    return (
        
        <ItemListContainer >
        <SortContainer>
            <Btn>기본순</Btn>
            <Btn>높은가격순</Btn>
            <Btn>낮은가격순</Btn>
            <Btn>별점순</Btn>
            <Btn>최신순</Btn>
        </SortContainer>    
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