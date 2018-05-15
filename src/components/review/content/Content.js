import React from 'react';
import styled from 'styled-components';
import lip from '../../../assets/lip.jpg'
import like from '../../../assets/like.png'

const Container = styled.div`
    border: 2px solid #ccc;
    background-color: #eee;
    border-radius: 5px;
    display:inline;
    margin-left: 3%
    margin-top: 1%
    margin-right: 2%
    width:80%;
    height: 90%;
    float:left
`

const ReviewImage = styled.img`
    border: 2px solid #ccc;
    margin-top: 10px
    margin-left: 10px
    width: 20%
    height: 80%
    float:left
`

const Info = styled.div`
    border: 2px solid #ccc;
    display: inline
    float:left
    width: 20%
    height: 80%
`

const Message = styled.div`
border: 2px solid #ccc;
display: inline
float:left
width: 50%
height: 80%
`

const Like = styled.img`
    width: 5%
    height: 5%
    bottom: 0px;
`


const Content = () => {
    return (
        <Container>
            <ReviewImage src={lip}/>
            <Info >
                <div>ID </div>
                <div>나이, 피부 </div>
                <div>별점 </div>
            </Info >
            <Message >
                <div>
                <Like src={like}/>
                갯수
                </div>
            </Message >
        </Container>
    );
};

export default Content;