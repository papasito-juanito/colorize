import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import Content from './/Content'


const Container = styled.div`
    top:10%;
    position: absolute;
    height: 30%;
    margin-top:2%;
    margin-left:5%;
    width: 90%
    border: 2px solid #ccc;
    background-color: #eee;
    border-radius: 5px;
`

const Review = () => {
    return (
         <Container>
             <Item />
             <Content/>
        </Container>
    );
};

export default Review;