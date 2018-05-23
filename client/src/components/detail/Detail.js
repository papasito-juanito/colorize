import React, {Component} from 'react';
import DetailLeft from './DetailLeft';
import DetailRight from './DetailRight';
import AllReview from './AllReview';
import styled, { ThemeProvider } from 'styled-components';
import Comment from './Comment';
import TopReview from './TopReview';
// import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
import { url } from '../../config';



const Wrapper = styled.div`
    margin : 6% auto 2% auto;
    width: 80vw;
    height: 50vh;
    display: flex;
    background-color: #F4F5F9;
`
const Div = styled.div`
    margin: auto auto 2% auto ;
    width: 80vw;
    height: 30vh;
`

const ReviewDiv = styled.div`
     margin: auto auto 2% auto ;
     heigth: 100%;
     width: 80vw;
`

class Detail extends Component {
    constructor(){
        super()
        this.state = {
            data: ''
        }
    }

    componentDidMount(){
        axios.get(`${url}/api/item/detail?color_id=${this.props.match.params.id}`)
          .then(response => this.setState({data : response.data}))
          .catch(err => console.log(err))
    }    

    render(){
        console.log(this.state.data)
        return (
            <div style={{ backgroundColor:'#F4F5F9', padding:'1% 0 0 0'}}>
                <Wrapper>
                    <DetailLeft data={this.state.data}/>
                    <DetailRight data={this.state.data} id = {this.props.match.params.id}/>
                </Wrapper>
                <Div>
                    <Comment id={this.props.match.params.id}/>
                </Div>
                <ReviewDiv>
                    <TopReview id={this.props.match.params.id} data ={this.state.reviewData}/>
                </ReviewDiv>
                <ReviewDiv>
                    <AllReview id={this.props.match.params.id} data={this.state.reviewData}/>
                </ReviewDiv>
        </div>
        )
    }
}



export default Detail;