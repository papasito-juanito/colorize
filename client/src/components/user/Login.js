/* eslint-disable */
import React, {Component} from 'react';
import styled from 'styled-components';
import { Link, Redirect, withRouter } from 'react-router-dom';
import lipImage from '../../assets/lipImage.png';
import avatar from '../../assets/avatar.png';
import lock from '../../assets/lock.png';
import axios from 'axios';
import { url } from '../../config';


const LoginContainer = styled.div`
    margin-top:10%
    display: flex;
    flex-direction: column
    width: 80%
`

const LoginTop = styled.div`

    display:flex;
    flex-direction: row
`
const Text = styled.div`
    font-size: 2rem;
    margin-left: 25%;
`

const Img = styled.img`
    width: 20%
    height: 20%;
`

const LoginBottom= styled.div`
    border: 2px solid #ddd;
    height: 80%;
    width: 70%
    margin:auto;
`

const IdWrapper = styled.div`
    border: 2px solid #ddd;
    display: flex;
    flex-direction: row
    height: 10%;
`

const IdImageDiv = styled.div`
    border: 2px solid #ddd;
    width: 10%
    height: 50%;
`

const IdImage = styled.img`
    width: auto; 
    height: auto;
    max-width: 100%;
`

const IdInput = styled.input`
    letter-spacing: 2px;
    font-size: 100%; 
    width: 80%;
    height: 100%
`

const FindPassword = styled.div`
    text-align: right
`

const PasswordWrapper = styled.div`
    border: 2px solid #ddd;
    display: flex;
    flex-direction: row
    height: 10%;
`
const PasswordImageDiv = styled.div`
    border: 2px solid #ddd;
    width: 10%
    height: 50%;
`
const PasswordImage = styled.img`
    width: auto; 
    height: auto;
    max-width: 100%;
`

const PasswordInput = styled.input.attrs({
    type: 'password'
})`
    letter-spacing: 2px;
    font-size: 100%; 
    width: 80%;
    height: 100%
`

const LoginSignupButtonWrapper = styled.div`
    border: 2px solid #ddd;
    display: flex;
    flex-direction: column
    text-align: center;
`

const Loginbtn = styled.button`
    width: 100%;
    height: 40%
    border: none;
    background-color: black;
    color: white;
    padding: 14px 28px;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
`
const Signupbtn = styled.a`
    height: 40%
    border: none;
    background-color: black;
    color: white;
    margin-top: 5px
    padding: 14px 28px;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    &:visited {
        text-decoration: none;
    }  
`

const Facebook = styled.button`
    width: 100%;
    height: 40%
    border: none;
    background-color: #3B5998;;
    color: white;
    margin-top: 5px
    padding: 14px 28px;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
`

const fastyle = {
    color: 'white',
    fontSize: '1rem',
    width: '10%',
    textAlign: 'center',
    textDecoration: 'none',
    margin: 'auto',
}

const Google = styled.button`
    width: 100%;
    height: 40%
    border: none;
    background-color: #dd4b39;;
    color: white;
    margin-top: 5px
    padding: 14px 28px;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
`

class Login extends Component {
    constructor(props) {
        super();
        // this.state={
        //     isLogined: false,
        //     isLoading: true,
        //     redirect: false
        // }
    }
       
    clickToLogin = () => {
    const form = {
        userMail: this.email.value,
        userPassword: this.password.value
    }
    console.log('form', form);
    axios.post(`${url}/api/user/post/login`, form)
        .then(res => {
            console.log('login', res);  
            if(res.data.token){
                localStorage.setItem('token', res.data.token)
                this.props.handleLoginUser()
                const {history} = this.props
                var pathname = ""
                    if(this.props.location.state){
                        var {search} = this.props.location.state.from
                        pathname = this.props.location.state.from.pathname
                    } else {
                        console.log('elselse', this.props);
                        pathname = '/'
                    }    
                    console.log('pathname', pathname);
                    console.log('search', search);
                    search ? history.push(pathname + search) : history.push(pathname)       
        }})
        .catch(error => console.log(error))
    }

    // componentDidMount(){
    //     const token = localStorage.getItem('token')
    //     axios.get(`${url}/api/user/get/check`, {headers: {'token': token}})
    //     .then(res => {
    //         console.log('app', res);
    //         if(res.data.success === true){
    //             this.setState({
    //                 isLoading: false,
    //                 isLogined: true
    //             })
    //         } else{
    //             console.log('appfailfailresresres', res);
    //             this.setState({
    //                 isLoading: false,
    //                 isLogined: false
    //             })
    //         }
    //     })
    // }
    
    render(){
        console.log('LoginpropsLoginpropsLoginprops', this.props); 
        console.log('redirecredirecredirecredirec', this.state);
        // const { isLogined, isLoading } = this.props
        // const {isLoading, isLogined} = this.state
        // const {history} = this.props
        // var pathname = ""
        // if (this.state.redirect === true) {
        //     if(this.props.location.state){
        //         var {search} = this.props.location.state.from
        //         pathname = this.props.location.state.from.pathname
        //     } else {
        //         console.log('elselse', this.props);
        //         pathname = '/'
        //     }    
        //     console.log('pathname', pathname);
        //     console.log('search', search);
        //     return search ? <Redirect push to={pathname + search}/> : <Redirect push to={pathname} />        
        //   }
        // const {isLoading, isLogined} = this.state      
            return (
                // isLoading ? <div>loading</div> : isLogined ? <Redirect to={this.props.history.go(-1)}/> :
                <LoginContainer>
                    <LoginTop>
                    <Img src={lipImage}/>
                    <Text>Colorize</Text>
                    </LoginTop>
                    <LoginBottom> 
                        <IdWrapper> 
                            <IdImageDiv> 
                            <IdImage src={avatar}/> 
                            </IdImageDiv>
                            <IdInput innerRef={ref => { this.email = ref; }} placeholder="email"/> 
                        </IdWrapper>
                        <PasswordWrapper> 
                            <PasswordImageDiv> 
                            <PasswordImage src={lock}/> 
                            </PasswordImageDiv>
                            <PasswordInput innerRef={ref => { this.password = ref; }} placeholder="Enter your password"/> 
                        </PasswordWrapper>
                        <FindPassword> forgot password ? </FindPassword>
                        <LoginSignupButtonWrapper> 
                            <Loginbtn onClick={this.clickToLogin}> Login </Loginbtn>
                            <Signupbtn href="/signup" style={{textDecoration: 'none'}}> SignUp </Signupbtn>
                            OR
                            <Facebook> 
                                {/* <a href="#" class="fa fa-facebook" style={fastyle}>  Facebook</a> */}
                                Facebook
                            </Facebook>   
                            <Google> Google </Google> 
                        </LoginSignupButtonWrapper>
                    </LoginBottom>
                </LoginContainer>
            );
          }
};

export default  withRouter(Login);