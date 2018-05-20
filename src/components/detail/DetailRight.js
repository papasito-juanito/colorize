import React, { Component } from 'react';
import Chart from './Chart';
import styled from 'styled-components';
import axios from 'axios';
import { url } from '../../config';
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

class DetailRight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            like : false,
            data : ''
        }   
    }

    componentDidMount() {
        // axios.get(`${url}/api/item/rate?color_id=${this.props.match.params.id}`)
        axios.get(`${url}/api/item/rate?color_id=${this.props.id}`)
            // .then((response) => {
            //     console.log(response.data);
            //   })
            .then(response => this.setState({ data: response.data }))
            .catch(err => console.log(err))
    }    
    


    render() {

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