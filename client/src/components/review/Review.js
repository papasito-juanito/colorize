import React from 'react';
import Content from './Content'


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

// const Div = styled.div`
//     width: 95%;
//     height: 50%;
//     display: flex;
//     backgroundColor : blue;
// `

const Review = ({data}) => {
    return (
             <Content data={data} />

    );
};

export default Review;