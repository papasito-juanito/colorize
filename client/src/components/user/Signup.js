import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';
import validator from 'validator';
import mail from '../../assets/mail.png'
import lock from '../../assets/lock.png';
import nickname from '../../assets/nickname.png';
import birthdate from '../../assets/birthdate.png';
import gender from '../../assets/gender.png';
import skin from '../../assets/skin.png';
import bottom from '../../assets/bottom.png';

const Container = styled.div`
    height: 90vh;
    width : 90vw;
    display: flex;
    flex-direction: column
    align-item: stretch;
    margin-top:10%;
    margin-left: 5%
    
`

const SignupContainer = styled.div`
    height: 80vh;
    width : 40vw;
    margin-top: 20%
    margin: 0 auto;
	position: relative
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
    font-size: 1rem%; 
    width: 80%;
    height: 90%
`
const InvalidId = styled.div`
    color:red
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

const PasswordInput = styled.input`
    letter-spacing: 2px;
    font-size: 1rem%; 
    width: 80%;
    height: 90%
`
const InvalidPassword = styled.div`
    color:red
`
const NicknameWrapper = styled.div`
    border: 2px solid #ddd;
    display: flex;
    flex-direction: row
    height: 10%;
    
`

const NicknameImageDiv = styled.div`
    border: 2px solid #ddd;
    width: 10%
    height: 50%;
`

const NicknameImage = styled.img`
    width: auto; 
    height: auto;
    max-width: 100%;
`

const NicknameInput = styled.input`
    letter-spacing: 2px;
    font-size: 1rem%; 
    width: 80%;
    height: 90%
`
const InvalidNickname = styled.div`
    color:red
`
const BirthdateWrapper = styled.div`
    border: 2px solid #ddd;
    display: flex;
    flex-direction: row
    height: 10%;
    
`
const BirthdateImageDiv = styled.div`
    border: 2px solid #ddd;
    width: 10%
    height: 50%;
`

const BirthdateImage = styled.img`
    width: auto; 
    height: auto;
    max-width: 100%;
`

const BirthdateInput = styled.input`
    letter-spacing: 2px;
    font-size: 1rem%; 
    width: 80%;
    height: 90%
`
const InvalidBirthdate = styled.div`
    color:red
`

const GenderWrapper = styled.div`
    border: 2px solid #ddd;
    display: flex;
    flex-direction: row
    height: 10%;
`

const GenderImageDiv = styled.div`
    border: 2px solid #ddd;
    width: 10%
    height: 50%;
`

const GenderImage = styled.img`
    width: auto; 
    height: auto;
    max-width: 100%;
`

const MaleInput = styled.input`

`
const FemaleInput = styled.input`

`
const SkinWrapper = styled.div`
    border: 2px solid #ddd;
    display: flex;
    flex-direction: row
    height: 10%;
    
`
const SkinImageDiv = styled.div`
    border: 2px solid #ddd;
    width: 10%
    height: 50%;
`

const SkinImage = styled.img`
    width: auto; 
    height: auto;
    max-width: 100%;
`
const SignupButtonWrapper = styled.div`
    border: 2px solid #ddd;
    display: flex;
    flex-direction: column
    text-align: center;
`
const Signupbtn = styled.div`
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

const Bottom = styled.div`
    bottom: 0px
    width:50%
    height: auto
`

const BttomImg = styled.img`
    width: auto; 
    height: auto;
    max-width: 100%;
`

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            isValidEmail: true,
            isValidPassword: true,
            isValidNickname: true,
            birthdateSelected: '',
            genderSelcted: '',
            colorSelected: ''
        }
    }

    onSubmit = () => {
        const form = {
            userMail: this.email.value,
            userPassword: this.password.value,
            userName: this.nickname.value,
            birthDate: this.state.birthdateSelected, 
            gender: this.state.genderSelcted,
            toneName: this.state.colorSelected
        };

        console.log(form)
        const api = axios.create({ baseURL: 'http://localhost:8080' })
            api.post('/api/user/signup', form)
                .then(res => console.log(res))
                .catch(error => console.log(error))

    }

    onChangeEmial = () => {
        const email = this.email.value
        this.setState({
            isValidEmail: validator.isEmail(email)
        })
    }

    onChangePassword = () => {
        const password = this.password.value
        this.setState({
            isValidPassword: validator.isLength(password, {min: 5, max: 10})
        })        
    }

    onChangeNickname = () => {
        const nickname = this.nickname.value
        this.setState({
            isValidNickname: validator.isLength(nickname, {min: 5, max: 10})
        })        
    }

    onBirthdate = () => {
        const date = this.date.value
        this.setState({
            birthdateSelected: date
        })
    }

    onColorSelect(option) {
        console.log(option.value);
        
        this.setState({ colorSelected: option.value })
    }

    onSelectedGender = (e) => {
        const gender = e.target.value        
        this.setState({
            genderSelcted: gender
        })
    }

     colorOptions = [
        { value: '모르겠어요', label: '모르겠어요' },
        {
            type: 'group', name: 'Cool tone', items: [
                { value: 'Summer', label: 'Summer' },
                { value: 'Winter', label: 'Winter' },
                { value: '쿨톤', label: '쿨톤' }
            ]
        },
        {
            type: 'group', name: 'Warm tone', items: [
                { value: 'Spring', label: 'Spring' },
                { value: 'Fall', label: 'Fall' },
                { value: '웜톤', label: '웜톤' }
            ]
        }
    ]

    render() {
        console.log(this.state.genderSelcted);
        console.log('signupprops', this.props);
        return (
            <Container>
                
                <SignupContainer> 
                <IdWrapper> 
                    <IdImageDiv> 
                    <IdImage src={mail}/> 
                    </IdImageDiv>
                    <IdInput 
                    onChange={this.onChangeEmial.bind(this)} innerRef={ref => { this.email = ref; }} placeholder="abc@email.com"/> 
                    </IdWrapper>
                    {this.state.isValidEmail ? null : <InvalidId>Invalid Type</InvalidId>}
                    <PasswordWrapper> 
                    <PasswordImageDiv> 
                    <PasswordImage src={lock}/> 
                    </PasswordImageDiv>
                    <PasswordInput type="password"
                    onChange={this.onChangePassword.bind(this)} innerRef={ref => { this.password = ref; }} placeholder="Enter Your Password"/> 
                    </PasswordWrapper>
                    {this.state.isValidPassword ? null : <InvalidPassword>5~10 letters</InvalidPassword>}  
                    <NicknameWrapper> 
                    <NicknameImageDiv> 
                    <NicknameImage src={nickname}/> 
                    </NicknameImageDiv>
                    <NicknameInput
                    onChange={this.onChangeNickname.bind(this)} innerRef={ref => { this.nickname = ref; }} placeholder="Enter Your Nickname"/> 
                    </NicknameWrapper>
                    {this.state.isValidNickname ? null : <InvalidNickname>5~10 letters</InvalidNickname>}
                    <BirthdateWrapper> 
                    <BirthdateImageDiv> 
                    <BirthdateImage src={birthdate}/> 
                    </BirthdateImageDiv>
                    <BirthdateInput
                    onBlur = {this.onBirthdate.bind(this)}
                    required type='date'innerRef={ref => { this.date = ref; }}/> 
                    </BirthdateWrapper>
                    <GenderWrapper>
                    <GenderImageDiv> 
                    <GenderImage src={gender}/> 
                    </GenderImageDiv>
                    <MaleInput name="gender" onChange={this.onSelectedGender.bind(this)} type="radio" value="male"/> Male 
                    <FemaleInput name="gender" onChange={this.onSelectedGender.bind(this)} type="radio" value="female"/> Female 
                    </GenderWrapper>
                    <SkinWrapper>
                    <SkinImageDiv> 
                    <SkinImage src={skin}/> 
                    </SkinImageDiv>
                    <Dropdown options={this.colorOptions} onChange={this.onColorSelect.bind(this)} placeholder="Select your color"
                    value={this.state.colorSelected} />
                    </SkinWrapper>
                    <SignupButtonWrapper>
                        <Signupbtn onClick={this.onSubmit.bind(this)}>Go to pick lips</Signupbtn>
                    </SignupButtonWrapper>     
                </SignupContainer>
                <Bottom>
                    <BttomImg src={bottom}/>
                </Bottom>   
            </Container>
        )
    }
}

export default Signup;