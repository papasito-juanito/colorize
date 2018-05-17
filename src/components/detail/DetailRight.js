import React, { Component } from 'react';
import Chart from './Chart';
import styled from 'styled-components';

const DetailDiv = styled.div`
    width: 40%;
    position: relative;
`

const Wrapper = styled.div`
    height: 100%;
    width: 70%;
    border: 1px solid blue;
    display: flex;
`

const ChartDiv = styled.div`
    width: 60%;
`

class DetailRight extends Component {
    constructor() {
        super()
        this.state = {
            like : false,
            rating :[5,3,4,5,2,2,1,3,4,2,3,5],
            product:
                {
                    name: 'hi',
                    price: 30000,
                    detail: '존나비쌈',
                    rating: 3
                }
        }   
    }

    render() {
        return (
            <Wrapper>
                <DetailDiv>
                    <div> name : {this.state.product.name} </div>
                    <div> price : {this.state.product.price} </div>
                    <div> detail : {this.state.product.detail} </div>
                    <div> rating : {this.state.product.rating} </div>    
                </DetailDiv>
                <ChartDiv>
                    <Chart/>
                </ChartDiv>
            </Wrapper>
        )
    }
}

export default DetailRight;