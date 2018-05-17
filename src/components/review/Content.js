import React,{Component} from 'react';
import styled from 'styled-components';
import lip from '../../assets/lip.jpg'
import like from '../../assets/like.png'
import StarRatingComponent from 'react-star-rating-component';


const Container = styled.div`
    border: 2px solid #ccc;
    background-color: #eee;
    border-radius: 5px;
    display:inline;
    margin-left: 3%
    margin-top: 1%
    margin-right: 2%
    width:80%;
    height: 90%;
    float:left
`

const ReviewImage = styled.img`
    border: 2px solid #ccc;
    margin-top: 10px
    margin-left: 10px
    width: 20%
    height: 80%
    float:left
`

const Info = styled.div`
    border: 2px solid #ccc;
    display: inline
    float:left
    width: 20%
    height: 80%
`

const ReviewContent = styled.div`
    border: 2px solid #ccc;
    display: inline
    float:left
    width: 50%
    height: 80%
    position: relative
`

const Message = styled.textarea`
    border: 2px solid #ccc;
    height: 80%
    width: 90%
`

const LikeCount = styled.div`
    width: 10%
    height: 10%
    border: 2px solid #ccc;
    bottom: 0px;
    right:0px;
    position: absolute
    align-content: center;
`

const Like = styled.img`
    width: 20px
    height: 20px
`
const BottomContainer = styled.div`
    diplay:block;
    height: 10%
`

const Modify = styled.button`
    font-size: 16px;    
    color: black;
    bottom: 0px;
    position: absolute
    border-radius: 50%;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: RoyalBlue;
    }
`

const Delete = styled.button`
    margin-left: 50px;
    font-size: 16px;    
    color: black;
    bottom: 0px;
    position: absolute
    border-radius: 50%;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: red;
    }
`

const ModifyForm = styled.form`
    
`
const ModifyText = styled.textarea`
    border: 2px solid #ccc;
    height: 80%
`


class Content extends Component {
    constructor(props){
        super()
        this.state = {
            editing: true,
            message: '글이나오고 글이나오고 글이나오고',
            likeCount: 100,
            id: 'wonbok1213',
            age: 32,
            skin: '지성',
            rating: 3
          }
    }

    handleModify = function(){
        this.setState({
            editing: !this.state.editing
        })
    }

    render(){
        
        return (     
            <Container>
                <ReviewImage src={lip}/>
                <Info >
                    <div>{this.state.id}</div>
                    <div>{this.state.age}, {this.state.skin}</div>
                    <div>
                        <StarRatingComponent 
                            name="rate2" 
                            editing={false}
                            value={this.state.rating}
                        />
                    </div>
                </Info >    
                {this.state.editing ? 
                <ReviewContent >
                    <Message readOnly rows="10" cols="50">
                    {this.state.message}
                    </Message>
                    <BottomContainer >
                    <Modify onClick={this.handleModify.bind(this)}>수정</Modify>
                    <Delete>삭제</Delete>
                    <LikeCount>
                    <Like src={like}/>
                    {this.state.likeCount}
                    </LikeCount>
                    </BottomContainer>
                    </ReviewContent > : 
                    <ReviewContent >
                    <Message rows="10" cols="50">
                    {this.state.message}
                    </Message>
                    <BottomContainer >
                    <Modify onClick={this.handleModify.bind(this)}>완료</Modify>
                    <Delete>삭제</Delete>
                    <LikeCount>
                    <Like src={like}/>
                    {this.state.likeCount}
                    </LikeCount>
                    </BottomContainer>
                    </ReviewContent >
                }
            </Container>
        );
    }
};

export default Content;