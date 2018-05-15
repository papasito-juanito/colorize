import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 300px;
    width: 200px;
    float:left
`

const ItemTop = styled.div`
    height: 200px;
    position:relative;
`
const Img = styled.img`
    width: 200px;
    height: 200px;
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
    height: 80px;
`


const Item = ({image, color, desc}) => {
    return (
        <Wrapper>
            <ItemTop >
                <Img />
                <Color />
            </ItemTop >
            <ItemBottom></ItemBottom>
        </Wrapper>
    );
};

export default Item;