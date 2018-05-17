import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';
import Side from './Side';
import { SwatchesPicker  } from 'react-color';

const Container = styled.div`
    height: 90vh;
    width : 90vw;
    display: flex;
    align-item: stretch;
    margin: auto;
`

const Input = styled.input.attrs({
    type: 'text'
}) `
    letter-spacing: 2px;
    font-size: 100%; 
    height: 2em; 
    width: 100%;
`
const PasswordInput = Input.extend.attrs({
    type: 'password'
}) `
`

const EmailInput = Input.extend.attrs({
    type: 'email'
}) `
`

const Label = styled.label`
    text-align: left;
    font-size: 1em; 
    margin: ${props => props.margin};
    
`
const Span = styled.span`
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    text-align: right;
`
const Div = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
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
    width: 100%;
    background-color: ${props => props.backgroundColor};
    cursor: pointer;
    text-align: center;
    color: white;
    height: 2em;
    line-height:2em;
`

const Wrapper = styled.div`
    width: 25vw;
    margin: 30% auto;
`

const colorOptions = [
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

const genderOptions = [
    { value: '남자', label: '남자' },
    { value: '여자', label: '여자' }
]

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            agree: false,
            colorSelected: '',
            genderSelected: '',
            email: '',
            password: '',
            birthdate: '',
            background: '#fff'
        }
        this._agreePolicy = this._agreePolicy.bind(this);
        this._onGenderSelect = this._onGenderSelect.bind(this);
        this._onColorSelect = this._onColorSelect.bind(this);
        this._onForm = this._onForm.bind(this);
        this._handleChangeComplete = this._handleChangeComplete.bind(this);
    }

    _agreePolicy() {
        this.setState({ agree: !this.state.agree })
    }

    _onGenderSelect(option) {
        this.setState({ genderSelected: option.value })
    }

    _onColorSelect(option) {
        this.setState({ colorSelected: option.value })
    }

    _onForm() {
        const form = {
            email: this.email.value,
            password: this.password.value,
            nickname: this.nickname.value,
            birthdate: this.birthdate.value, 
            gender: this.state.genderSelected,
            color: this.state.colorSelected,
            colorpick : this.state.background
        };

        console.log(form)
        // const api = axios.create({ baseURL: 'http://localhost:8080' })
        // !this.state.agree ? alert('약관에 동의하세요') :
        //     api.post('http://127.0.0.1:8080/register', form)
        //         .then(res => console.log(res))
        //         .catch(error => console.log(error))

    }

    _handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };


    render() {
        console.log(1);
        return (
            <Container>
                <Side />
                <div style={{ backgroundColor: 'white', border: '1px solid purple', width: '40%' }}> 
                    {/* <Div heigth='50%' width='80%' margin='auto'> */}
                        <Wrapper>
                            <Div heigth='100%' width='100%' margin='2em 0 2em 0'>
                                <span style={{ fontSize: '1.5em' }} ><strong>My Lips</strong></span>
                            </Div>
                            <FlexDiv flexDirection='column' justifyContent='center' >
                                <Label> E-mail
                                    <EmailInput innerRef={ref => { this.email = ref; }} placeholder='Enter your email'></EmailInput>
                                </Label>
                                <Label>Password
                                    <PasswordInput innerRef={ref => { this.password = ref; }} placeholder='Enter your password'></PasswordInput>
                                </Label>
                                <Label> Nickname
                                    <Input innerRef={ref => { this.nickname = ref; }} placeholder='Enter your nickname'></Input>
                                </Label>
                                <Label> Birthdate
                                    <Input innerRef={ref => { this.birthdate = ref; }} placeholder='Enter your birthdate'></Input>
                                </Label>
                                <Label> Gender
                                    <Dropdown options={genderOptions} onChange={this._onGenderSelect} value={this.state.genderSelected} placeholder="Select your gender" />
                                </Label>
                                <Label> Your Color
                                    <Dropdown options={colorOptions} onChange={this._onColorSelect} value={this.state.colorSelected} placeholder="Select your color" />
                                </Label>
                                <Span>
                                    <a href='#'> 약관보기 </a>
                                </Span>
                                <Span>
                                    <input type='checkbox' onClick={this._agreePolicy} />약관에 동의합니다
                                </Span>
                                <LoginDiv backgroundColor='#666' onClick={this._onForm}>
                                    Create Your account
                                </LoginDiv>
                            </FlexDiv>
                        </Wrapper>
                    {/* </Div> */}
                    <SwatchesPicker innerRef={ref => { this.color = ref; }} onChangeComplete={this._handleChangeComplete}/>
                </div>
            </Container>
        )
    }
}



export default Signup;