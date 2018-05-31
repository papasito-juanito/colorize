import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';
import { url } from '../config';

const Container = styled.div`
  position: relative;
  display: block;
  font-size: 12px;
  line-height: 1.6;
  color: #666;
  width: 70%;
  margin: 0px auto;
  `
const Header = styled.h1`
  font-weight: bold;
  color: black;
  letter-spacing: -1px;
  text-align: center;
`
// font-family:;
const Table = styled.table`
  width: 100%;
  border-top: 2px solid #969696;
  border-collapse: collapse;
  background: #f5f5f5;
`
const Row = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`
const Column = styled.th`
  width: 100px;
  background-color: #eef1f8;
  text-align: center;
  white-space: nowrap;
  padding: 14px 30px;
  border-bottom: 1px solid #ddd;
  display: table-cell;
  vertical-align: inherit;
  line-height: 1.6;
  color: #666;
`
const Data = styled.td`
  border-left: 1px solid #ddd;
  padding: 14px 30px;
  border-bottom: 1px solid #ddd;
  display: table-cell;
  vertical-algin: inherit;
  line-height: 1.6;
  color: #666;
`
const Intable = styled.table`
  border-collapse: collapse;
  line-height: 2;
`
const InTH = styled.th`
  font-weight: normal;
  text-align: left;
  padding-left: 8px;
`

class MyInfo extends Component {
    constructor(){
        super()
        this.state = {
          hasPhoto: true,
          data: '',
          tone : false,
          nickName : false
        }

        this._toneChange = this._toneChange.bind(this);
        this._photoChange = this._photoChange.bind(this);
        this._nickNameChange = this._nickNameChange.bind(this);
        this._ChangeName = this._ChangeName.bind(this);
    }

    componentDidMount(){
      const token = localStorage.getItem('token')
      axios.get(`${url}/api/user/get/info`, { headers: { 'token': token } })
        .then(response => 
          this.setState({data : response.data})
          // console.log(response)
        )
        .catch(err => console.log(err))
    }

    _toneChange(){
      this.setState({tone : !this.state.tone})
    }

    _photoChange(){
      this.setState({hasPhoto : !this.state.hasPhoto})
    }

    _nickNameChange(){
      this.setState({nickName : !this.state.nickName})
    }

    _ChangeName(){
      console.log(this.nickname.value)  
      
       this.setState({nickName : !this.state.nickName})
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
    console.log(this.state.data);
        return (
          <Container>
            <Header>내 정보 수정</Header>
            <Table>
              <Row>
                <Column>사진</Column>
                <Data>{this.state.hasPhoto ? <div>'show my photo' <button onClick={this._photoChange}> 사진 변경</button></div> 
                : <div><input type="file"/><button onClick={this._photoChange}>취소</button></div>}</Data>
              </Row>
              <Row>
                <Column>이메일</Column>
                <Data>{this.state.data ? this.state.data[0].mail : null}</Data>
              </Row>
              <Row>
                <Column>닉네임</Column>
                <Data>
                  {/* <input  ref={ref => { this.nickname = ref; }} value ={!this.state.data ? null : this.state.nickName === false ? this.state.data[0].name : null}/>
                  {!this.state.nickName ? <button onClick = {this._nickNameChange} style={{'margin-left': '15px'}}>닉네임 변경</button>
                    : <div><button onClick = {this._ChangeName}>변경</button> <button onClick={this._nickNameChange}>변경취소</button></div>} */}
                    {this.state.nickName === false ? <div><input value = {this.state.data ? this.state.data[0].name : null} ref={ref => { this.nickname = ref; }}  readOnly/> <button onClick = {this._nickNameChange} style={{'margin-left': '15px'}}>닉네임 변경</button></div>
                    : <div><input ref={ref => { this.nickname = ref; }} /><button onClick = {this._ChangeName}>변경</button> <button onClick={this._nickNameChange}>변경취소</button></div>}
                 {/* {this.state.nickName === false ? <div>{this.state.data ? this.state.data[0].name:null} <button onClick = {this._nickNameChange} style={{'margin-left': '15px'}}>닉네임 변경</button></div>
                 : <div><input  ref={ref => { this.nickname = ref; }}/><button onClick = {this._ChangeName}>변경</button> <button onClick={this._nickNameChange}>변경취소</button></div>} */}
                </Data>
              </Row>
              <Row>
                <Column>피부타입</Column>
                <Data>
                  {!this.state.data ? null : this.state.tone === false ? this.state.data[0].tone : null}
                   {this.state.tone === false ? <button onClick = {this._toneChange}style={{'margin-left': '15px'}}>피부타입 변경</button> : null }
                  {this.state.tone === true ? 
                    <div><Dropdown options={this.colorOptions} placeholder="USER'S PERSONAL COLOR" /> <button onClick={this._toneChange}>변경취소</button></div> 
                  : null}
                </Data>
              </Row>              
              <Row>
                <Column>비밀번호</Column>
                <Data><Intable>
                  <tr><td colspan='2'>비밀번호는 5-10자 이내로 설정해주세요.</td></tr>
                  <tr>
                    <InTH>현재 비밀번호</InTH>
                    <td><input type='password'/></td>
                  </tr>
                  <tr>
                    <InTH>신규 비밀번호</InTH>
                    <td><input type='password'/></td>
                  </tr>
                  <tr>
                    <InTH>비밀번호 재입력</InTH>
                    <td><input type='password'/></td>
                  </tr>
                  <tr>
                    <td><button type='button'>비밀번호 확인</button></td>
                  </tr>                  
                </Intable></Data>
              </Row>
              <Row>
                <Column>성별</Column>
                <Data>{this.state.data ? this.state.data[0].gender : null}</Data>
              </Row>
              <Row>
                <Column>생년월일</Column>
                <Data>{this.state.data ? this.state.data[0].birth.split('T')[0] : null}</Data>
              </Row>



            </Table>
          </Container>
        )
    }
}

export default MyInfo;