import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fblogo from '../../assets/fb_icon.svg';
import gglogo from '../../assets/gg_icon.svg';
import axios from 'axios';
import Side from './Side';


const Container = styled.div`
    height: 90vh;
    width : 90vw;
    display: flex;
    align-item: stretch;
    margin: auto;
`

const StyledLink = styled(Link) `
    font-size: 1.3em;
    width:50%;
    text-align: center;
    text-decoration: none;
    color: white;
`

const Input = styled.input.attrs({
    type: 'email'
}) `
    letter-spacing: 2px;
    font-size: 100%; 
    height: 2em; 
    width: 100%;
`
const SecondInput = Input.extend.attrs({
    type: 'password'
}) `
`
const Label = styled.label`
    text-align: left;
    font-size: 1em; 
    margin: ${props => props.margin};
 
`
const Span = styled.span`
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    text-align: right;
`
const Div = styled.div`
    height: 100%;
    width: 100%;
    margin: ${props => props.margin};
    text-align: center;
`

const FlexDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    justify-content:  ${props => props.justifyContent};
    width:  ${props => props.width};
    height:  ${props => props.height};
    background-color:  ${props => props.backgroundColor};
`
const LoginDiv = styled.div`
    width: 50%;
    background-color: ${props => props.backgroundColor};
    cursor: pointer;
    text-align: center;
    color: white;
    height: 2em;
    line-height:2em;
`
const Wrapper = styled.div`
    width: 25vw;
    margin: 20% auto 30% auto;
`
const Bar = styled.div`
    margin: 0.8em 0 0.8em 0;
    border: 2px solid #ddd;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`

class Login extends Component {
    constructor(){
        super();
    this._clickToLogin = this._clickToLogin.bind(this);
    }

    _clickToLogin = () => {
        const form = {
            email: this.email.value,
            password: this.password.value
        }

        const api = axios.create({ baseURL: 'http://localhost:8080' })
        api.post('http://127.0.0.1:8080/login', form)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }



    render() {
        return (
            <Container>
                <Side />
                <div style={{width: '40%' }}> 
                    <Div>
                        <Wrapper>
                            <Div heigth='100%' width='100%' margin='2em 0 2em 0'>
                                <span style={{ fontSize: '1.5rem' }} ><strong>My Lips</strong></span>
                            </Div>
                            <FlexDiv flexDirection='column' justifyContent='center' >
                                <Label> E-mail
                                    <Input innerRef={ref => { this.email = ref; }} placeholder='Enter your email'></Input>
                                </Label>
                                <Label>Password
                                    <SecondInput innerRef={ref => { this.password = ref; }} placeholder='Enter your password'></SecondInput>
                                </Label>
                                <Span><a href='#'> 아이디/비밀번호 찾기 </a></Span>
                                <FlexDiv backgroundColor='#666' width='100%' height='2em'>
                                    <div style={{ fontSize: "1.3em", width: '50%', cursor: 'pointer', color: 'white' }} onClick={this._clickToLogin}>Log in</div>
                                    <StyledLink to='/signup'> Sign up </StyledLink>
                                </FlexDiv>
                                <Bar/>
                                <FlexDiv backgroundColor='#666' width='100%' height='2em'>
                                    <LoginDiv onClick={this.clickToLogin} backgroundColor='#3B5998'>
                                        <Img src={fblogo} />
                                    </LoginDiv>
                                    <LoginDiv onClick={this.clickToLogin} backgroundColor='#dd4b39'>
                                        <Img src={gglogo} />
                                    </LoginDiv>
                                </FlexDiv>
                            </FlexDiv>
                        </Wrapper>
                     </Div>
                </div>
            </Container>  
        )
    }
}



export default Login;