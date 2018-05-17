import React, { Component } from 'react';
import Items from './Items'
import Sort from './Sort'


class ItemList extends Component {
    constructor(props){
        super()
        this.state = [
        {
            photo: '',
            hex: 'red',
            brand: 'NARS',
            item: 'Sex Appeal',
            price: '3,000',
            volume: '10g',
            average: 3,
            review: '10'
            },
        {
            photo: '',
            hex: 'red',
            brand: 'NARS',
            item: 'Sex Appeal',
            price: '3,000',
            volume: '10g',
            average: 3,
            review: '10'
            },
        {
            photo: '',
            hex: 'red',
            brand: 'NARS',
            item: 'Sex Appeal',
            price: '3,000',
            volume: '10g',
            average: 3,
            review: '10'
            },
            {
                photo: '',
                hex: 'red',
                brand: 'NARS',
                item: 'Sex Appeal',
                price: '3,000',
                volume: '10g',
                average: 3,
                review: '10'
                },
            {
                photo: '',
                hex: 'red',
                brand: 'NARS',
                item: 'Sex Appeal',
                price: '3,000',
                volume: '10g',
                average: 3,
                review: '10'
                },
            {
                photo: '',
                hex: 'red',
                brand: 'NARS',
                item: 'Sex Appeal',
                price: '3,000',
                volume: '10g',
                average: 3,
                review: '10'
                },
            {
                photo: '',
                hex: 'red',
                brand: 'NARS',
                item: 'Sex Appeal',
                price: '3,000',
                volume: '10g',
                average: 3,
                review: '10'
                },
            {
                photo: '',
                hex: 'red',
                brand: 'NARS',
                item: 'Sex Appeal',
                price: '3,000',
                volume: '10g',
                average: 3,
                review: '10'
                },
            {
                photo: '',
                hex: 'red',
                brand: 'NARS',
                item: 'Sex Appeal',
                price: '3,000',
                volume: '10g',
                average: 3,
                review: '10'
                }
        ]
    }
    render(){
        return (
            <div>
            <Sort />
            <Items item={this.state}/>
            </div>
        )
    }    
};

export default ItemList;