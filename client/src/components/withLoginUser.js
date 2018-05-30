/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../config';
import {Redirect} from 'react-router-dom';
import history from '../utils/history'
import { resolve } from 'url';

const withLoginUser = (WrappedComponent) => {
    return class extends Component {
      constructor(props){
        super()
        this.state = {
          isLogined: false
        }
      }

      authCheck=async()=>{
        const token = localStorage.getItem('token')     
        if(token){
           const res = await axios.get(`${url}/api/user/get/check`, {headers: {'token': token}})
           console.log('resresresresresres', res);
           if(res.data.success){
            this.setState({
                isLogined: true
              })
           }
          // .then(res=>{
        //     console.log('resresres', res);
        //     if(res.data.success===true){
        //       this.setState({
        //         isLogined: true
        //       })
        //     }
        //   })
        }
      }
  
      render() {
        // this.authCheck().then(console.log(this.state.isLogined)
        // )
        const isLogined= this.authCheck().then(this.state.isLogined);
        console.log('HOCHOCHOCHOCHOCHOC', isLogined);
        console.log('historyhistoryhistory', history);
        
          return  (
            isLogined ? 
          <WrappedComponent {...this.props} isLogined={isLogined}/> 
          : <Redirect to='/' />
          )
      }
    }
  }
  
  export default withLoginUser;
  