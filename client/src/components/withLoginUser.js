import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../config';
import {Redirect} from 'react-router-dom';
import history from '../utils/history'

const withLoginUser = (WrappedComponent, props) => {
    return class extends Component {
      state = {
        isLogined: false
      }
    
      async authcheck(){
        const token = localStorage.getItem('token')     
        if(token){
          const res = await axios.get(`${url}/api/user/get/check`, {headers: {'token': token}})    
              // if(res.data.success === true){
                .then(()=>this.setState({
                  isLogined: true}))
              // }, )
              return res.data.success
            }
            
        }
  
      render() {
        console.log('fxfxfxfxfxfxfxfxf',this.authcheck());
        const isLogined= this.state.isLogined;
        console.log('HOC', this.state,isLogined);
          return (isLogined ? 
          <WrappedComponent {...this.props} isLogined={isLogined}/> :
          <Redirect to ='/' />
          )
      }
    }
  }
  
  export default withLoginUser;
  