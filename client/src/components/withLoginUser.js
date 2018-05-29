import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../config';
import {Redirect} from 'react-router-dom';
import history from '../utils/history'

const withLoginUser = (WrappedComponent) => {
    return class extends Component {
      constructor(props){
        super()
        this.state = {
          isLogined: false
        }
      }

      componentDidMount=()=>{
        const token = localStorage.getItem('token')     
        if(token){
           axios.get(`${url}/api/user/get/check`, {headers: {'token': token}})
          .then(res=>{
            console.log('resresres', res);
            if(res.data.success===true){
              this.setState({
                isLogined: true
              })
            }
          })
        }
      }
  
      render() {
      
        const isLogined= this.state.isLogined;
        console.log('HOCHOCHOCHOCHOCHOC', isLogined);
        console.log('historyhistoryhistory', history);
        
          return  (
          <WrappedComponent {...this.props} isLogined={isLogined}/> 
          )
      }
    }
  }
  
  export default withLoginUser;
  