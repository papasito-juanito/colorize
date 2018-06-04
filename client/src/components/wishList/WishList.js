/* eslint-disable */

import React, {Component} from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';
import Login from '../user/Login'
import {Redirect} from 'react-router-dom';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
 
import axios from 'axios';
import { url } from '../../config';


const confirm = Modal.confirm;

const Deletebtn = styled.button`
    position: absolute;
    border: none
    top:0
    left:0
    float:left
    font-size: 1.5rem
    border-radius: 50%;
    transition: 0.5s;
    cursor: pointer
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    @media (max-width: 768px) {
        margin-top: 50px;
    }
`;

const Container = styled.ul`
		width: 80%;
    padding: 0;
    // border: solid grey 1px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 0 -10px;
`;

const ItemLink = styled.div`
    position: relative;
    width: 17%;
    max-width: 300px;
    min-width: 225px;
    max-height: 300px;
    min-height: 300px;
		margin: 0 10px;
		margin-bottom: 20px;
    @media (max-width: 250px) {
				width: 90%;
				min-width: 100px;
    }
`;
const Item = styled.li`
    // border: solid red 1px;
    width: 100%;
    height: 100%;
    font-size: 30px;
    list-style: none;
`;
const Img = styled.img`
    width: 100%;
    height: 75%;
		background-color: white;
		object-fit: contain;
		justify-content: center;
		display: block;
`;
const Colorline = styled.div`
		width: 100%;
		height: 10px;
		background-color: #${props => props.color};
		margin-bottom: 5%;
`;
const ItemBottom = styled.div`
		float: bottom;
		width: 100%;
		height: 25%;
		display: block;
`;
const ItemDetails = styled.div`
		width: 100%;
		text-align: center;
`;
const ItemName = styled.div`
	font-size: 43%;
	text-overflow: scale;
	color: black;
	font-weight: bold;
`;
const Detail = styled.div`
		font-size: 40%;
		color: grey;
`;
const Brand = styled.span`
		font-weight: bold;
`;
const Rating = styled.div`
	font-size: 70%;
`;
const Stars = styled.span`
	vertical-align: middle;
`;
const Review = styled.span`
	font-size: 60%;
	vertical-align: middle;
	color: grey;
	`;

class WishList extends Component {
    constructor(props){
        super()
        this.state = {
            items: [],
            tokenVerified: true
        }
    }
    
    deleteOne = (e)=>{
        const form = {
            color_id: e.target.id
        }
        const token = localStorage.getItem('token') 
        axios.post(`${url}/api/wishlist/delete`, form, {headers: {'token': token}})
            .then((response) => {
                console.log('delete', response);
                console.log(token);
                axios.get(`${url}/api/wishlist/get/list`, {headers: {'token': token}})
                .then((response) => {
                    console.log('rerererere', response);
                    this.setState({
                        items: response.data.rows
                    })
                  })
              })
        console.log(e.target.id);    
    }


     showDeleteConfirm = (e) => {
        const form = {
            color_id: e.target.id
        }
               
        confirm({
          title: '선택한 아이템을 삭제 하시겠습니까?',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',

          onOk: ()=> {
            const token = localStorage.getItem('token') 
            axios.post(`${url}/api/wishlist/delete`, form, {headers: {'token': token}})
                .then((response) => {
                    console.log('delete', response);
                    console.log(token);
                    axios.get(`${url}/api/wishlist/get/list`, {headers: {'token': token}})
                    .then((response) => {
                        console.log('rerererere', response);
                        this.setState({
                            items: response.data.rows
                        })
                      })
                  })
            console.log('ok');
            
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
      

    componentDidMount(){ 
        const token = localStorage.getItem('token')  
        axios.get(`${url}/api/wishlist/get/list`, {headers: {'token': token}})
        .then((response) => {
            if(response.data.success===true){
                console.log('wishSUCCESS', response.data);
                
                this.setState({
                    items: response.data.rows
                })
            }else {
                console.log('wishFAil', response);
                console.log('thisprops', this.props);
                //Link로 타고들어오면 이게 없으면 nav로그인 상태는 유지되어있다.
                this.props.handleLogout()
                this.props.history.push('/login', {from: this.props.location})
            }
          })
    }

    render(){
        console.log('wishpropswishpropswishprops',this.props);
        return (
            <Wrapper>
                Wishlist
            <Container>
            {this.state.items.map((item, i) => (
              <ItemLink >
                  <Item key={i}>
                  <Link to={`/items/detail/${item.color_id}`} style={{ textDecoration: 'none' }}>
                    <Img src={item.photo}/>
                  </Link>  
                    {/* <Deletebtn onClick={this.deleteOne} id={item.color_id}>&times;</Deletebtn> */}
                        <Deletebtn id={item.color_id}  onClick={this.showDeleteConfirm} type="dashed">
                         &times;
                        </Deletebtn>
                        <Colorline color={item.hex}/>
                    <Link to={`/items/detail/${item.color_id}`} style={{ textDecoration: 'none' }}>
                    <ItemBottom>
                        <ItemDetails>
                            <ItemName>{item.name}</ItemName>
                            <Detail><Brand>{item.brand}</Brand> {item.volume} / {item.price}원</Detail>
                            <Rating>
                                    <Stars><StarRatingComponent
                                    name="itemList"
                                    editing={false}
                                    value={item.avg}
                                    /></Stars> <Review>({item.reviews})</Review>
                            </Rating>
                        </ItemDetails>
                    </ItemBottom>
                    </Link> 
                    </Item>
                </ItemLink>
                ))}
          </Container>
          </Wrapper>
        );
    }
};

export default WishList;

// <PageWrapper>
// <ItemListContainer >
// <Ul>
//     {this.state.items.map((item, i)=>{
//         return (
//             <Wrapper >
//             <Li key={i}>
//                 <ItemTop >
//                     <Link to={`/items/detail/${item.color_id}`} style={{ textDecoration: 'none' }}>
//                     <Img src={item.photo}/>
//                     </Link>
                   
//                     {/* <Deletebtn onClick={this.deleteOne} id={item.color_id}>&times;</Deletebtn> */}
//                     <Deletebtn id={item.color_id}  onClick={this.showDeleteConfirm} type="dashed">
//                     &times;
//                     </Deletebtn>
//                 </ItemTop >
//                 <ItemBottom to={`/items/detail/${item.color_id}`} style={{ textDecoration: 'none' }}>
//                     <Brand>{item.brand}</Brand>
//                     <ItemName>{item.name}, {item.volume}</ItemName>
//                     <Price>{item.price}</Price>
//                     <Rating>
//                         <StarRatingComponent 
//                             name="itemList" 
//                             editing={false}
//                             value={item.avg}
//                         />, <Review>({item.reviews})</Review>
//                     </Rating>
//                 </ItemBottom>
//                 </Li>
//                 <Color color={item.hex}/>
//             </Wrapper>
//         )
//     })}
// </Ul>
// </ItemListContainer>
// </PageWrapper>