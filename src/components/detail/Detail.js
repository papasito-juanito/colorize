import React, { Component } from 'react';
import DetailLeft from './DetailLeft'
import DetailRight from './DetailRight'
import styled from 'styled-components';
import Comment from './Comment';
import axios from 'axios';

const Wrapper = styled.div`
    margin : 10% 10% 0 10%;
    border: 1px solid black;  
    width: 80vw;
    height: 30vh;
    display: flex;
`
const Div = styled.div`
    margin: 0 10% 0 10%;
    width: 80vw;
    height: 30vh;
`

class Detail extends Component {
    constructor(props){
        super()
        this.state = {
            data: ''
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8080/api/item/detail?color_id=1')
        .then((response) => {
            console.log(response);
            this.setState({data: response.data})
          })
    }    

    render(){
        return (
            <div>
            <Wrapper>
                <DetailLeft data={this.state.data}/>
                <DetailRight data={this.state.data}/>
            </Wrapper>
            <Div>
                
            </Div>
            <Div>
                <Comment/>
            </Div>
        </div>
        )
    }
};


export default Detail;