import React from 'react';
import HomeColors from './HomeColors';
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
            <HomeColors/>
        </HomeContainer>     
    );
};

export default Home;