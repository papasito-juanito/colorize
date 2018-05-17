import React from 'react';
import styled from 'styled-components';
import lip from '../../assets/lip.jpg'

const Wrapper = styled.div`
    height: 90%;
    width: 20%;
    border: 1px solid gold;
    margin: 1%;
    
`

const ItemTop = styled.div`
    height: 70%;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
`
// const Color = styled.div`
//     background-color: red;
//     position: absolute; 
//     width: 100px;
//     height: 150px;
//     top:0px; 
//     left:200px;
// `

const ItemBottom = styled.div`
    background-color: pink;
    height: 30%;
`


const Item = () => {
    return (
        <Wrapper>
            <ItemTop >
                <Img src={lip} alt={'imgimg'}/>
                {/* <Color /> */}
            </ItemTop >
            <ItemBottom></ItemBottom>
        </Wrapper>
    );
};

export default Item;