import React from 'react';
import DetailLeft from './DetailLeft'
import DetailRight from './DetailRight'
import styled from 'styled-components';
import Comment from './Comment';
import Reviews from './Reviews';
import InfiniteScroll from 'react-infinite-scroller';
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
    

var Detail = () => (
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
);


export default Detail;