
// import React, { Component } from 'react';
// import axios from 'axios';
// import { url } from '../config';
// import {Redirect} from 'react-router-dom';
// import history from '../utils/history'
// import { resolve } from 'url';

// const withLoginUser = (WrappedComponent) => {
//     return class extends Component {
//       constructor(props){
//         super()
//         this.state = {
//           isLogined: false
//         }
//       }

//       authCheck=()=>{
//         const token = localStorage.getItem('token')     
//         if(token){
//         axios.get(`${url}/api/user/get/check`, {headers: {'token': token}})
//           .then(res=>{
//             console.log('resresres', res);
//             if(res.data.success===true){
//               this.setState({
//                 isLogined: true
//               })
//             }
//           })
//         }
//       }
  
//       render() {
//         // this.authCheck().then(console.log(this.state.isLogined)
//         console.log('HOCHOCHOCHOCHOCHOC', this.props);
//         console.log('historyhistoryhistory', history);
//         const { isLogined } = this.props
//           return  (
//             isLogined ? 
//           <WrappedComponent {...this.props} isLogined={isLogined}/> 
//           : <Redirect to='/' />
//           )
//       }
//     }
//   }
  
//   export default withLoginUser;
  