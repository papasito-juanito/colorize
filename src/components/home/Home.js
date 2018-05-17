import React from 'react';
import HomeColor from './HomeColor';
import HomeTitle from './HomeTitle';
import styled from 'styled-components';

const HomeContainer = styled.div`
    background-color: green;
    top:10%;
    height:100%;
    width:100%;
    position: absolute;
`

const Home = () => {
    return (
        <HomeContainer>  
            <HomeTitle/>
            <HomeColor/>
        </HomeContainer>     
    );
};

export default Home;