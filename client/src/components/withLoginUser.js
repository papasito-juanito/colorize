import React, { Component } from 'react';
import axios from 'axios';
import { url } from '../config';

const withLoginUser = () => (WrappedComponent) => {
    return class extends Component {
      state = {
        isLogined: false
      }
  
    //   async checkUserToken() {
    //     const token = localStorage.getItem('token')
    //     try {
    //       const response = await axios.get(`${url}/api/user/get/check`, {headers: {'token': token}});
    //       this.setState({
    //         isLogined: response.data
    //       });
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   }
  
      componentDidMount() {
        const token = localStorage.getItem('token')
        if(token){
            axios.get(`${url}/api/user/get/check`, {headers: {'token': token}})
            .then(res => {
                console.log('nav', res);
                if(res.data.success === true){
                    this.setState({
                        isLogined: true
                    })
                }
            })
        }
      }
  
      render() {
        const isLogined= this.state.isLogined;
        return (
          <WrappedComponent {...this.props} isLogined={isLogined}/>
        )
      }
    }
  }
  
  export default withLoginUser;
  