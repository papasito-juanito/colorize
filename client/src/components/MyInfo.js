/* eslint-disable */


import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';
import { url } from '../config';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';


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

const Button = styled.button `
    cursor: pointer;
    width: 10%;
    height: 5vh;
    border: none;
    color: white;
    background-color: black;
    text-align: center;
    opacity: 0.6;
    transition: 0.3s;
    border: 1px solid #d9dee8;
    margin-right: 5%
    &:hover {
        opacity: 1;
    }
`
const CancelButton = styled.button `
    cursor: pointer;
    width: 10%;
    height: 5vh;
    border: none;
    color: black;
    background-color: #F4F5F9;
    text-align: center;
    opacity: 0.6;
    transition: 0.3s;
    border: 1px solid #d9dee8;
    &:hover {
        opacity: 1;
    }
`
//닉네임 중복확인 api 비밀번호 확인 api  validation 확인 

class MyInfo extends Component {
    constructor(){
        super()
        this.state = {
          hasPhoto: true,
          data: '',
          tone : false,
          nickName : false,
          colorSelected : '',
          validate : true,
          files:'',
          imagepreviewUrl: '',
          photos:''
          
        }

        this._toneChange = this._toneChange.bind(this);
        this._photoChange = this._photoChange.bind(this);
        this._nickNameChange = this._nickNameChange.bind(this);
        this._comparePassword = this._comparePassword.bind(this);
        this._passwordInput = this._passwordInput.bind(this);
        this._submit = this._submit.bind(this);
        this._onColorSelect = this._onColorSelect.bind(this);
        this._onDrop = this._onDrop.bind(this);
        this._submitImg = this._submitImg.bind(this);
        this.insta = this.insta.bind(this);
    }

    componentDidMount(){
      const token = localStorage.getItem('token');
      axios.get(`${url}/api/user/get/info`, {headers: { 'token': token }})
        .then(response =>{
            if(response.data.success===true){
              this.setState({data : response.data.rows[0]})
            }else {
              this.props.handleLogout()
              this.props.history.push('/login', {from: this.props.location})
            }
          }) 

    }
    _submitImg(){
         axios.post(`${url}/test`, {'base64' :this.state.imagepreviewUrl, 'mail' : this.state.data.mail})
           .then((result) => {
             console.log(result)
           })
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

    insta(){
      var token = "1999393974.aeb3e70.9d79c6af391944e690362b4aacb9516f";
      var count = "10";
      // axios.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=" + token + "&count=" + count)
      axios.get(`https://www.instagram.com/explore/tags/제주/?__a=1`)
      // .then(res => console.log(res))
        // .then(res => res.json())
        .then(res =>
        //   //  console.log(res.graphql.hashtag.edge_hashtag_to_top_posts.edges[0].node.display_url)
          this.setState({photos : res.data.graphql.hashtag.edge_hashtag_to_top_posts.edges[1].node.display_url})
        )
        // )
        .catch(err=>console.log(err))
      //     if (response.data.length > 0) {
      //       for (var i = 0; i < response.data.length; i++) {
      //         insta = '<div class="insta-box">';
      //         insta += "<a target='_blank' href='" + response.data[i].link + "'>";
      //         insta += "<div class='image-layer'>";
      //         insta += '<img src="' + response.data[i].images.low_resolution.url + '">';
      //         insta += "</div>";
      //         //insta += "<div class='caption-layer'>";  
      //         //insta += "<span class='insta-likes'>" + response.data[i].likes.count + " Likes</span>";  
      //         //insta += "</div>";  
      //         insta += "</a>";
      //         insta += "</div>";
      //         $("#instaPics").append(insta);
      //       }
      //     }
      //   }
      // });
      // [출처] 인스타그램 api | 작성자 jhee_608

    }

    _comparePassword(){
      console.log(this.newPassword.value)
      console.log(this.confirmPassword.value)
      this.newPassword.value !== this.confirmPassword.value ? 
       this.setState({validate : false})
        // alert('입력한 비밀번호가 일치하지 않습니다') 
      
       : 
       this.setState({validate : true})
      // alert('ok');
    }

    _passwordInput(){
      !this.newPassword.value ? alert('새로운 패스워드를 먼저 입력해주세요') : null;
    }

    _onColorSelect(option) {
      console.log(option.value)
      this.setState({ colorSelected: option.value })
    }

    _onDrop(files){

      var file = files[0];
      console.log(files)
      console.log(file)
      console.log(typeof file.preview)
       let reader = new FileReader();

       reader.readAsDataURL(file)

             reader.onload = () => {
               this.setState({
                 file:file,
                 imagepreviewUrl: reader.result
               })
             }
            //  console.log(this.state.imagepreviewUrl)
      

      // var options = {
      //     headers : {
      //       'content-type': "application/json"
      //     //  'multipart/form-data'
      //     }
      //   }
   
      }

            // axios.get(`${url}`, {
            //     filename: file.name,
            //     filetype: file.type
            // })
            // .then((result) => {
            //   var signedUrl = result.data.signedUrl;

    // this.setState({
    //   files
    // });
  // files.forEach(file => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const fileAsBinaryString = reader.result;
  //     // do whatever you want with the file content
  //   };
  //   reader.onabort = () => console.log('file reading was aborted');
  //   reader.onerror = () => console.log('file reading has failed');

  //   reader.readAsBinaryString(file);
  // });
// }



      // var file = files[0];
      // console.log(file)
      // var options = {
      //    headers : {
      //      'content-type': file.type
      //     //  'multipart/form-data'
      //    }
      //   }
      // axios.post(`${url}/update`, file, options)
      //   .then((result) => {
      //       console.log(result)
      //   })
      //   .catch(err => console.log(err))
      // }

      // axios.get(`${url}`, {
      //     filename: file.name,
      //     filetype: file.type
      // })
      // .then((result) => {
      //   var signedUrl = result.data.signedUrl;

  

  


      // })
  

    _submit(){
      const token = localStorage.getItem('token')
      const form = {
        // userPassword : this.newPassword.value || 비밀번호 변경안하면 뭘 보내줘야하는지? , 
        userName : this.nickname.value, 
        userPhoto : 3,
        toneName : this.state.colorSelected || this.state.data.tone

      }
      this.state.validate !== true ? alert('비밀번호 확인해주세요') : 
      axios.post(`${url}`, form,  { headers: { 'token': token } })
          .then(response => 
              // this.setState({ user: response.data })
              console.log(response)
          )
          .catch(err => console.log(err)) 
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
      console.log('datadatadtata', this.state.data)
      console.log('myinfomyinfomyinfo', this.props);
      
        // console.log(this.state.imagepreviewUrl)
        return (
          this.state.data ?
          <Container>
            <Header>내 정보 수정</Header>
            <Table>
              <Row>
                <Column>사진</Column>
                <Data>{this.state.hasPhoto ? <div>'show my photo' <button onClick={this._photoChange}> 사진 변경</button></div> 
                  : <div><Dropzone onDrop={ this._onDrop } size={ 50 }>
                       <div> Drop some files here!</div>
                           </Dropzone>
                           <button onClick={this._submitImg}> 변경</button>
                          <button onClick={this._photoChange}> 취소</button></div>}
                                 {/* : <div><input type="file"/><button onClick={this._photoChange}>취소</button></div>} */}
                </Data>
              </Row>
              <Row>
                <Column>이메일</Column>
                <Data>{this.state.data ? this.state.data.mail : null}</Data>
              </Row>
              <Row>
                <Column>닉네임</Column>
                <Data>
                    {this.state.nickName === false ? <div><input value = {this.state.data ? this.state.data.name : null} ref={ref => { this.nickname = ref; }}  readOnly/> <button onClick = {this._nickNameChange} style={{'margin-left': '15px'}}>닉네임 변경</button></div>
                    : <div><input ref={ref => { this.nickname = ref; }} /><button onClick={this._nickNameChange}>변경취소</button></div>}
                </Data>
              </Row>
              <Row>
                <Column>피부타입</Column>
                <Data>
                  {!this.state.data ? null : this.state.tone === false ? this.state.data.tone : null}
                   {this.state.tone === false ? <button onClick = {this._toneChange}style={{'margin-left': '15px'}}>피부타입 변경</button> : null }
                  {this.state.tone === true ? 
                    <div><Dropdown options={this.colorOptions} placeholder="USER'S PERSONAL COLOR" onChange={this._onColorSelect} value = {this.state.colorSelected} /> <button onClick={this._toneChange}>변경취소</button></div> 
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
                    <td><input onChange = {this._comparePassword} ref={ref => { this.newPassword = ref; }} type='password'/></td>
                  </tr>
                  <tr>
                    <InTH>비밀번호 재입력</InTH>
                    <td> <input onClick={this._passwordInput} onChange = {this._comparePassword} ref={ref => { this.confirmPassword = ref; }}type='password'/></td>
                  </tr>
                  <tr>
                    <td>
                  
                      {/* <button type='button'>비밀번호 확인</button> */}
                      </td>
                  </tr>                  
                </Intable>
                      {!this.confirmPassword && !this.newPassword ?  null : this.confirmPassword.value && this.newPassword.value ? <div>{this.state.validate === true ? 'Ok' : '입력한 비밀번호가 일치하지 않습니다'}</div>:null}
                      
                      </Data>
              </Row>
              <Row>
                <Column>성별</Column>
                <Data>{this.state.data ? this.state.data.gender : null}</Data>
              </Row>
              <Row>
                <Column>생년월일</Column>
                <Data>{this.state.data ? this.state.data.birth.split('T')[0] : null}</Data>
              </Row>
            </Table>
            <div style={{margin: ' 5% auto auto auto' , textAlign:'center'}}>
              <Button onClick={this._submit}> 
                  변경 
              </Button>
                <Link to='/' style={{ textDecoration: 'none' }}> <CancelButton>취소</CancelButton> </Link>
            </div>
            {/* <button onClick={this.insta}> 검색 </button> */}
            {/* < img style = {{width:'100px', height:'100px'}} src = {this.state.photos ? this.state.photos : null} */}
             {/*//이건나중에 < img style = {{width:'100px', height:'100px'}} src = {this.state.photos ? this.state.photos.data[0].images.standard_resolution.url : null} */}
            
          
            </Container>
            : "Loading"
        )
    }
}

export default MyInfo;