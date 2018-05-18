import React, { Component } from 'react';
import Chart from './Chart';
import styled from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import axios from 'axios';

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
            like : false,
            data : ''
        }   
    }

    componentDidMount() {
        // axios.get(`http://127.0.0.1:8080/api/item/rate?color_id=${this.props.match.params.id}`)
        axios.get(`http://127.0.0.1:8080/api/item/rate?color_id=${this.props.id}`)
            // .then((response) => {
            //     console.log(response.data);
            //   })
            .then(response => this.setState({ data: response.data }))
            .catch(err => console.log(err))
    }    
    


    render() {
        console.log(this.props)
        
        // console.log(this.props.data[0])
        return (
            <Wrapper>
                <DetailDiv>
                    <div> name : {this.props.data ? this.props.data[0].name  : null} </div>
                    <div> price : {this.props.data ? this.props.data[0].price : null} </div>
                    <div> detail : {this.props.data ? this.props.data[0].description : null} </div>
                    {/* <flexDiv> detail : {this.props.data ? this.props.data[0].description : null}</flexDiv>    */}
                
                </DetailDiv>
                
                <ChartDiv>
                    <Chart data={this.state.data}/>
                </ChartDiv>
            </Wrapper>
        )
    }
}

export default DetailRight;