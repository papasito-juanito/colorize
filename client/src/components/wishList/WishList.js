import React from 'react';
import styled from 'styled-components';
import Items from './Items'


const WishList = ({isLogined}) => {
    console.log({isLogined});
    const token = localStorage.getItem('token')
    console.log(token);
    
    return (
        <div>
            <Items/>
        </div>
    );
};

export default WishList;