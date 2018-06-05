/* eslint-disable */
import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { url } from '../../config';
import styled from 'styled-components';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const Container = styled.div`
    width: 55%;
    height: 100%;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
`
const FileButton = styled.input`
    width: 100%;
    color: transparent;
    ::-webkit-file-upload-button {
        background: black;
        color: white;
        height: 20px;
        border: none;
    }
`
const ImgDiv = styled.div`
    height: 100%;
    width: 100%;
    cursor: pointer;
    border: 2px solid red;
    object-fit: scale-down;
    margin-bottom: -20px;
`

Modal.setAppElement('#root');

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagepreviewUrl: '',
            popupIsOpen: false,
            data: '',
            imageURL:''
        }
        this._openPopup = this._openPopup.bind(this);
        this._afterOpenPopup = this._afterOpenPopup.bind(this);
        this._closePopup = this._closePopup.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
        this._fileUploadHandler = this._fileUploadHandler.bind(this);
    }


    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.readAsDataURL(file)
        reader.onload = () => {
            this.setState({
                file: file,
                imagepreviewUrl: reader.result,
                imageAddress : ''
            })
        }


    }

    _openPopup() {
        this.setState({ popupIsOpen: true });
    }

    _afterOpenPopup() {
        this.subtitle.style.color = '#f00';
    }

    _closePopup() {
        this.setState({ popupIsOpen: false });
    }

    _fileUploadHandler(e) {
      //로그인 안되어있을때 사진올리는거 막기 

        const token = localStorage.getItem('token')
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        var mimeType = e.target.files[0].type.split('image/')[1];
        console.log(mimeType)
        
        mimeType === 'png' || mimeType === 'jpg' ?
        axios.post(`${url}/api/review/post/upload`, formData, { headers: { 'token': token , id: this.props.id} } )
            // .then((response) => {
            // console.log(response);
            // })
            .then(response => {
                console.log(response)
                this.props.callback(response.data.message)
            }
                // this.setState({ imageURL: `${url}/${response.data.file}` })
            )
            .catch(err => console.log(err))
            : (alert('jpg/png 파일만 올릴수있어요'), window.location.reload())

        // fetch(`${url}/upload`, {
        //     method: 'POST',
        //     body: formData,
        // }).then((response) => {
            // response.json().then((body) => {
                // console.log(response.json())
                // this.setState({imageURL: `${url}${body.file}` });
            // });
        // })
        // .catch(err => console.log(err))

    }



    render() {
        let { imagepreviewUrl } = this.state;
        let $imagePreview = null;
        let popupImage = (<img src={imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)

        this.state.imagepreviewUrl ? $imagePreview = (<img onClick={this._openPopup} src={imagepreviewUrl} style={{ height: '100%', width: '80%' }} alt='Yours' />) :
            $imagePreview = (<div style={{textAlign:'center', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>리뷰 사진을 올려주세요</div>);

        return (
            < Container >
              
                    {/* <div style = {{height:'150px', width:'150px', border: '1px solid black'}}> <img src={require('../../assets/reviews/1528079528165images.jpeg')}/></div> */}
                    {/* <div style = {{height:'150px', width:'150px', border: '1px solid black'}}> <img src={require('../../assets/reviews/1528079528165images.jpeg')}/></div> */}

                <ImgDiv>
                    {$imagePreview}
                </ImgDiv>
                <FileButton
                    type='file'
                    accept = ".jpg, .png"
                    ref={ref => { this.uploadInput = ref; }}
                    onChange={(e) => { this._handleImageChange(e); this._fileUploadHandler(e) }} />
                <Modal
                    isOpen={this.state.popupIsOpen}
                    onAfterOpen={this._afterOpenPopup}
                    onRequestClose={this._closePopup}
                    style={customStyles}
                    contentLabel="Image popup"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Review Image</h2>
                    <div style={{ width: '50vh' }}>{popupImage}</div>
                    <button style={{ cursor: 'pointer' }} onClick={this._closePopup}>close</button>
                </Modal>
            </Container>
        )
    }
}


export default FileUpload;