import React from 'react';
import styled from 'styled-components';

const ItemListContainer = styled.div`
    top:10%;
    position: absolute;
    height: 100%;
    width: 100%
    display: flex
`
//가운데로 필요
const Ul = styled.ul`
    position: absolute;
    margin-left:5%
    height: 100%;
    width: 90%;
    background-color: yellow;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Li = styled.li`
    background-color: #f1f1f1;
    width: 300px;
    height: 400px;
    margin: 10px;
    line-height: 75px;
    font-size: 30px;
    list-style: none;
`
const Wrapper = styled.div`
    height: 400px;
    width: 300px;
`

const ItemTop = styled.div`
    height: 300px;
    position:relative;
`
const Img = styled.img`
    width: 300px;
    height: 300px;
`
const Color = styled.div`
    background-color: ${props=>props.color};
    position: absolute; 
    width: 100px;
    height: 150px;
    top:0px; 
    left:200px;
`

const ItemBottom = styled.div`
    background-color: pink;
    height: 100px;
`


const Items = ({image, color, desc}) => {
    return (
        <ItemListContainer>
            <Ul>
                <Li>
                    <Wrapper>
                        <ItemTop >
                            <Img src={image} />
                            <Color color={color}/>
                        </ItemTop >
                        <ItemBottom>{desc}</ItemBottom>
                    </Wrapper>
                </Li>
            </Ul>    
        </ItemListContainer>
    );
};

export default Items;