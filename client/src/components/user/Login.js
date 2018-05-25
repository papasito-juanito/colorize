import React, {Component} from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import Modal from 'react-modal';
import lipImage from '../../assets/lipImage.png';
import avatar from '../../assets/avatar.png';
import lock from '../../assets/lock.png';
import axios from 'axios';
import history from '../../utils/history'

const LoginContainer = styled.div`
    margin-top:10%
    display: flex;
    flex-direction: column
    z-index: 2
`

const customStyles = {
    content: {
        width: '38vw',
        height: '70vh',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)'
      }

};

const CloseButton = styled.div`
    content: '✖';
    color: #777;
    font: 14px/100% arial, sans-serif;
    position: absolute;
    right: 5px;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    top: 5px;
    cursor: pointer;
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

Modal.setAppElement(document.getElementById('root'));

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            modalIsOpen: true

          };
       
          this.openModal = this.openModal.bind(this);
        //   this.afterOpenModal = this.afterOpenModal.bind(this);
          this.closeModal = this.closeModal.bind(this);
        }
       
    openModal() {
        this.setState({modalIsOpen: true});
    }
    
    // afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     this.subtitle.style.color = '#f00';
    // }
    
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    clickToLogin = () => {
    const form = {
        userMail: this.email.value,
        userPassword: this.password.value
    }

    console.log('form', form);
    const api = axios.create({ baseURL: 'http://localhost:8080' })
    api.post('/api/user/get/login', form)
        .then(res => {
            console.log(res); 
            this.props.handleLoginUser()   
            if(res.status===200){
                this.closeModal()        
                history.push(history.location.pathname)
        }})
        .catch(error => console.log(error))
    }

    render(){
        console.log('renderHistory', history);
        const {renderLogin} = this.props        
        return (
            <LoginContainer>
                    <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Login Modal"
                    shouldCloseOnOverlayClick={false}
                    >
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
                            <Loginbtn onClick={()=>{this.clickToLogin.bind(this);}}> Login </Loginbtn>
                            <Signupbtn href="/signup" style={{textDecoration: 'none'}}> SignUp </Signupbtn>
                            OR
                            <Facebook> Facebook </Facebook>
                            <Google> Google </Google> 
                        </LoginSignupButtonWrapper>
                    </LoginBottom>    
                    <CloseButton 
                        onClick={()=>{this.closeModal(); renderLogin(); this.clickToLogin();}}>
                        X</CloseButton>
                    </Modal>
            </LoginContainer>
        );
    }
};

export default Login;