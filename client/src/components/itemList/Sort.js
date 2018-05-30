// import React, { Component } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// import axios from 'axios';
// import { url } from '../../config';

// const SortContainer = styled.div`
//     height: 3rem;
//     margin-top: 10%;
//     margin-left: 3%;
//     overflow: hidden;
// `;

// const Btn = styled.button`
//     border: none;
//     outline: none;
//     padding: 12px 16px;
//     background-color: #f1f1f1;
//     cursor: pointer;
//     &:hover {
//         background-color: #ddd;
//     }
//     $:active {
//         background-color: #666;
//         color: white;
//     }
// `;

// const handleBasic = (history) => {
//   console.log('sorting', history);
//   console.log('adsasdasda');
// //   history.push(history.location.pathname)
//     // axios.get(`${url}/api/item/get/list?color_id=[${this.props.match.params.id.split('&')}]`)
// }

// const handeHighPrice = () => {

// }

// const handleLowPrice = () => {

// }

// const handleRating = () => {

// }

// const handleLatest = () => {

// }

// class Sort extends Component {

//     render(){
      
//       return (
//         <SortContainer>
//           <Btn>기본순</Btn>
//           <Btn>높은가격순</Btn>
//           <Btn>낮은가격순</Btn>
//           <Btn>별점순</Btn>
//           <Btn>최신순</Btn>
//        </SortContainer>  
//       );
//     }

// };

// export default Sort;