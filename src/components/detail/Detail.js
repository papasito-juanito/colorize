import React, {Component} from 'react';
import DetailLeft from './DetailLeft';
import DetailRight from './DetailRight';
import AllReview from './AllReview';
import styled, { ThemeProvider } from 'styled-components';
import Comment from './Comment';
import TopReview from './TopReview';
import InfiniteScroll from 'react-infinite-scroller';
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
    constructor(){
        super()
        this.state = {
            data: ''
        }
    }

    componentDidMount(){
        axios.get(`http://127.0.0.1:8080/api/item/detail?color_id=${this.props.match.params.id}`)
        // .then((response) => {
        //     console.log(response);
        //   })
          .then(response => this.setState({data : response.data}))
          .catch(err => console.log(err))
    }    


    render(){
        return (
            <div>
            <Wrapper>
                <DetailLeft data={this.state.data}/>
                <DetailRight data={this.state.data} id = {this.props.match.params.id}/>
            </Wrapper>
            <Div>
                    <Comment id={this.props.match.params.id}/>
            </Div>
            <Div>
                <div style = {{height: '66vh', backgroundColor: 'skyblue'}}>
                    {/* <InfiniteScroll
                        pageStart={0}
                        // loadMore={loadFunc}
                        // hasMore={false}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                        useWindow={false}
                    >
                      
                    </InfiniteScroll> */}
                    <TopReview id={this.props.match.params.id} />
                </div>
                    <AllReview id={this.props.match.params.id}/>
            </Div>
        </div>
        )
    }
}



export default Detail;