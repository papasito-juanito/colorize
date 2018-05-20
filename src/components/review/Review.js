import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import Content from './/Content'


// const Container = styled.div`
//     top:10%;
//     position: absolute;
//     height: 30%;
//     margin-top:2%;
//     margin-left:5%;
//     width: 90%
//     border: 2px solid #ccc;
//     background-color: #eee;
//     border-radius: 5px;
// `

const Div = styled.div`
    width: 80vw;
    height: 20vh;
    display: flex;
    border: 1px solid blue;
`

const Review = ({data, review}) => {
    console.log('data : ', data)
    console.log('review :' , review)
    return (
        <Div>
             <Content data={data}/>
        </Div>
    );
};

export default Review;