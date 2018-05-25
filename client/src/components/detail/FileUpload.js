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

const Div = styled.div`
    width: 25%;
    border: 1px solid #d9dee8;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 0 2% 0 0;
    box-sizing: border-box; 
`
const ImgDiv = styled.div`
    height: 80%;
    width: 100%;
    cursor: pointer;
`



Modal.setAppElement('#root');

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagepreviewUrl: '',
            popupIsOpen: false,
            selectedFile: '',
            data: '',
            userID: ''
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
        console.log(file)

        reader.readAsDataURL(file)

        reader.onload = () => {
            this.setState({
                file: file,
                imagepreviewUrl: reader.result
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
        // const token = localStorage.getItem('token')
        const formData = new FormData();
        formData.append('file', this.uploadInput.files[0]);
        formData.append('filename', `${this.props.id}_token`);
        // this.props.callback(`${this.state.userID + ':' + this.props.id}`)

        axios.post(`${url}/api/review/post/upload`, formData)
        // axios.post(`${url}/api/review/post/upload`, formData, { headers: { 'token': token } })
            .then((response) => {
            console.log(response);
            })
            // .then(response => this.setState({ data: response.data }))
            .catch(err => console.log(err))

        // fetch('http://localhost:8000/upload', {
        //     method: 'POST',
        //     body: formData,
        // })
        // .then((response) => {
            // response.json().then((body) => {
                // console.log(response)
                // this.setState({ imageURL: `http://localhost:8000/${body.file}` });
            // });
            // .catch(err) => console.log(err);
        // });
    }



    render() {
        let { imagepreviewUrl } = this.state;
        let $imagePreview = null;
        let popupImage = (<img src={imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)

        this.state.imagepreviewUrl ? $imagePreview = (<img onClick={this._openPopup} src={imagepreviewUrl} style={{ height: '100%', width: '80%' }} alt='Yours' />) :
            $imagePreview = (<div> Please upload your Review Image </div>);

        return (
            <Div>
                <input style={{ width: '100%' }}
                    type='file'
                    ref={ref => { this.uploadInput = ref; }}
                    onChange={(e) => { this._handleImageChange(e); this._fileUploadHandler(e) }} />
                <ImgDiv>
                    {$imagePreview}
                </ImgDiv>
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
            </Div>
        )
    }
}


export default FileUpload;