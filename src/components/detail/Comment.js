import React, {Component} from 'react';
import styled from 'styled-components';
import FileUpload from './FileUpload';
import Rating from './Rating';
import MyContent from '../review/MyContent'

const Div = styled.div`
    width: 80vw;
    height: 30vh;
    display: flex;
`
const review = false;

class Comment extends Component {
  

    render(){
        return (
            <div>
                {!review ? 
            <Div>
                <FileUpload/>
                <Rating id = {this.props.id}/>
            </Div>
                    : 
                    <Div>
                    <MyContent/>
                    </Div>}
            </div>
        )
    }
}

export default Comment;