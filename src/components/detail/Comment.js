import React, {Component} from 'react';
import styled from 'styled-components';
import FileUpload from './FileUpload';
import Rating from './Rating';

const Div = styled.div`
    width: 80vw;
    height: 30vh;
    display: flex;
`
class Comment extends Component {
  

    render(){
    console.log(this.props.id)
        return (
            <Div>
                <FileUpload/>
                <Rating id = {this.props.id}/>
            </Div>

        )
    }
}

export default Comment;