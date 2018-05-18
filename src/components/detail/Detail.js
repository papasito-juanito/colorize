import React, {Component} from 'react';
import DetailLeft from './DetailLeft'
import DetailRight from './DetailRight'
import styled, { ThemeProvider } from 'styled-components';
import Comment from './Comment';
import Reviews from './Reviews';
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
    componentDidMount(){
        axios.get(`http://127.0.0.1:8080/api/item/detail?color_id=${this.props.match.params.id}`)
        .then((response) => {
            console.log(response.data);
          })
    }    


    render(){
        console.log(this.props);
        
        return (
            <div>
            <Wrapper>
                <DetailLeft/>
                <DetailRight/>
            </Wrapper>
            <Div>
                <Comment/>
            </Div>
            <Div>
                <div style = {{height: '60vh', backgroundColor: 'skyblue'}}>
                    {/* <InfiniteScroll
                        pageStart={0}
                        // loadMore={loadFunc}
                        // hasMore={false}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                        useWindow={false}
                    >
                      
                    </InfiniteScroll> */}
                    <Reviews />
                </div>
            </Div>
        </div>
        )
    }
}



export default Detail;