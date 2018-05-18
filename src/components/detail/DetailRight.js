import React, { Component } from 'react';
import Chart from './Chart';
import styled from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

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

const flexDiv = styled.div`
    display: -webkit-box;
    white-space: normal;
    line-height: 20px;
    height: 40px;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

`
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

class DetailRight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            like : false
        }   
    }


    render() {

        return (
            <Wrapper>
                <DetailDiv>
                    <div> name : {this.props.data ? this.props.data[0].item : null} </div>
                    <div> price : {this.props.data ? this.props.data[0].price : null} </div>
                    {/* <div> detail : {this.props.data ? this.props.data[0].description : null} </div> */}
                    <flexDiv> detail : {this.props.data ? this.props.data[0].description : null}</flexDiv>   
                
                </DetailDiv>
                
                <ChartDiv>
                    <Chart/>
                </ChartDiv>
            </Wrapper>
        )
    }
}

export default DetailRight;