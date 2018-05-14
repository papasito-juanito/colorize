import React from 'react';
import Items from './Items'
import Sort from './Sort'


const ItemList = ({image, color, desc}) => {    
    return (
        <div>
        <Sort />
        <Items 
        image={image}
        color={color}
        desc={desc}
        />
        </div>
     
    )
};

export default ItemList;