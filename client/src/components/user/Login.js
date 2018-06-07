32/* eslint-disable */
import React, {Component} from 'react';
import styled from 'styled-components';
import { Link, Redirect, withRouter } from 'react-router-dom';
import lipImage from '../../assets/lipImage.png';
import avatar from '../../assets/avatar.png';
import lock from '../../assets/lock.png';
import axios from 'axios';
import { url } from '../../config';


const LoginContainer = styled.div`
    // display: flex;
    // flex-direction: column
    // width : 30vw;
    padding: 5% 0 5% 0
    border: 1px solid black;
    // display: -webkit-box;
    // display: -moz-box;
    // display: -ms-flexbox;
    // display: -webkit-flex;
    // display: relative;
    width: 70%;
    margin: 150px auto auto auto;
    @media (max-width: 768px) {
        margin-top: 66px;
    }

    @media (max-width: 500px) {
        width: 90%;
    }

//     @media (max-width: 375px) {
//         margin-top: 150px;
//     }
//     @media (max-width: 320px) {
//         margin-top: 100px;
//     }
// `

const LoginTop = styled.div`
    display:flex;
    flex-direction: column
`
const Text = styled.div`
    font-size: 3rem;
    margin: auto
    font-family: Roboto;
    font-weight: 100
    
    @media (max-width: 570px) {
        font-size: 2rem;
    }
    @media (max-width: 460px) {
        font-size: 1.8rem;
    }
    @media (max-width: 418px) {
        font-size: 1.6rem;
    }
`

const Img = styled.img`
    width: 20%
    height: 20%;
`

const LoginBottom= styled.div`
    height: 80%;
    width: 70%
    margin:20px auto;
`

const IdWrapper = styled.div`
    height: 10%;
`


const IdInput = styled.input`
    margin: 5px 0 20px 0;
    border: 0.5px solid #ccc;
    width: 100%;
    padding: 10px;
    font-size: 0.8rem
`

const Span = styled.span`
    display: none;
    margin-left: 10px;
    @media (max-width: 337px) {
        margin-left: 0
    }
`

const PasswordWrapper = styled.div`
    height: 10%;
`

const PasswordInput = styled.input.attrs({
    type: 'password'
})`
    margin: 5px 0 20px 0;
    border: 0.5px solid #ccc;
    width: 100%;
    padding: 10px;
    font-size: 0.8rem
`

const LoginSignupButtonWrapper = styled.div`
    display: flex;
    flex-direction: column
    text-align: center;
`

const Loginbtn = styled.button`
    width: 100%;
    height: 40%
    margin-bottom: 5px
    border: none;
    background-color: black;
    color: white;
    padding: 14px 28px;
    cursor: pointer;
    text-align: center;
    font-size: 1em;
    font-family: 'Roboto';
    font-weight: 300;
    border:0
    outline:0
    &:hover {
        text-shadow: 0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F;
        // text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
      }  
`
const Signupbtn = styled.button`
    height: 40%
    border: none;
    background-color: black;
    color: white;
    margin: 5px 0 10px 0;
    padding: 14px 28px;
    cursor: pointer;
    text-align: center;
    font-size: 1em;
    font-family: 'Roboto';
    font-weight: 300;
    border:0
    outline:0
    &:hover {
        text-shadow: 0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F;
        // text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
      }  
 
`

class Login extends Component {
    constructor(props) {
        super();
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
            if(res.data.message==="invalid password"){
                console.log('password');
                document.getElementById('password').style.display = "inline-block"
                document.getElementById('password').style.color = "red"
                document.getElementById('password').style.fontSize = "0.8rem"
                window.setTimeout(function() {
                    document.getElementById('password').style.display='none'
                 }, 1000);
            } else if(res.data.message==='invalid mail'){
                console.log('mail');
                document.getElementById('email').style.display = "inline-block"
                document.getElementById('email').style.color = "red"
                document.getElementById('email').style.fontSize = "0.8rem"
                window.setTimeout(function() {
                    document.getElementById('email').style.display='none'
                 }, 1000);
            } else if(res.data.token) {
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
                    if(pathname === '/signup'){
                        history.push('/')
                    } else {
                        search ? history.push(pathname + search) : history.push(pathname)       
                    }
        }})
        .catch(error => console.log(error))
    }

    enterToLogin = (e) => {
        const form = {
            userMail: this.email.value,
            userPassword: this.password.value
        }
        console.log('form', form);
        if (e.key === 'Enter'){
            axios.post(`${url}/api/user/post/login`, form)
            .then(res => {
                console.log('login', res);
                if(res.data.message==="invalid password"){
                    console.log('password');
                    document.getElementById('password').style.display = "inline-block"
                    document.getElementById('password').style.color = "red"
                    document.getElementById('password').style.fontSize = "0.8rem"
                    window.setTimeout(function() {
                        document.getElementById('password').style.display='none'
                     }, 1000);
                } else if(res.data.message==='invalid mail'){
                    console.log('mail');
                    document.getElementById('email').style.display = "inline-block"
                    document.getElementById('email').style.color = "red"
                    document.getElementById('email').style.fontSize = "0.8rem"
                    window.setTimeout(function() {
                        document.getElementById('email').style.display='none'
                     }, 1000);
                } else if(res.data.token) {
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
                        if(pathname === '/signup'){
                            history.push('/')
                        } else {
                            search ? history.push(pathname + search) : history.push(pathname)       
                        }
            }})
            .catch(error => console.log(error))
        }
        }

    clickSighup = () => {
        console.log('clickSighup', this.props);
        const {history} = this.props
        if(this.props.location.state){
            const {pathname} = this.props.location.state.from
            const {search} = this.props.location.state.from
            history.push('/signup', {from: {pathname: pathname, search: search}})
        } else {
            history.push('/signup', {from: {pathname: '/'}})
        }     
    }
    
    render(){
        console.log('LoginpropsLoginpropsLoginprops', this.props); 
        console.log('redirecredirecredirecredirec', this.state);    
            return (
                <LoginContainer>
                    <LoginTop>
                    <Text>Colorize yourself</Text>
                    </LoginTop>
                    <LoginBottom> 
                        <IdWrapper> 
                            이메일 주소 <Span id='email' > 잘못된 이메일입니다. </Span>
                            <IdInput innerRef={ref => { this.email = ref; }} placeholder="abc@email.com"/> 
                        </IdWrapper>
                        <PasswordWrapper> 
                            비밀번호 <Span id='password'> 패스워드가 틀렸습니다. </Span>
                            <PasswordInput onKeyPress={this.enterToLogin} innerRef={ref => { this.password = ref; }} placeholder="Enter Your Password"/> 
                        </PasswordWrapper>
                        <LoginSignupButtonWrapper> 
                            <Loginbtn if='myBtn' onClick={this.clickToLogin}> Login </Loginbtn>
                            <Signupbtn onClick={this.clickSighup}> SignUp </Signupbtn>
                        </LoginSignupButtonWrapper>
                    </LoginBottom>
                    
                </LoginContainer>
            );
          }
};

export default  withRouter(Login);