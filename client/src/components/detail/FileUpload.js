import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { url } from '../../config';

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
            blob: ''
        }
        this._openPopup = this._openPopup.bind(this);
        this._afterOpenPopup = this._afterOpenPopup.bind(this);
        this._closePopup = this._closePopup.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
        this._fileUploadHandler = this._fileUploadHandler.bind(this);
        this._getContent = this._getContent.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
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

    _getContent(e) {
        // var b64Data = this.state.imagepreviewUrl.split(',')[1];
        this.props.callback(e.target.files[0])

        // blobUtil.base64StringToBlob(b64Data)
        // .then(function (blob) {
        //     console.log(blob)
        // }).catch(function (err) {
        //     console.log(err)
        // });


        // console.log(b64Data)
        // fetch(b64Data)
        //     .then(res => res.blob())
        //     .then(res => console.log(res))
        // .then(blob => this.props.callback(blob))


    }


    _fileUploadHandler(e) {
        const formData = new FormData();
        formData.append('image', this.state.file, this.state.file.name)
        axios.post
        // console.log('e.target.files[0] of blob instance :', e.target.files[0] instanceof Blob)
        // console.log('this.state.file of blob instance :', this.state.file instanceof Blob)
        // console.log('formData :', formData instanceof Blob)
        // axios.post('http://localhost:8080/api/......', this.state.imagepreviewUrl, {            
        //     onUploadProgress :  ProgressEvent => {
        //         console.log('Upload Progress :', Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%')
        //     }
        // })
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
        // var b64Data = this.state.imagepreviewUrl.split('base64,')[1];

        // fetch(b64Data)
        // .then(res => res.blob())
        // .then(blob => console.log(blob))

        // var b64Data = this.state.imagepreviewUrl.split('base64,')[1];
        // var blob = b64toBlob(b64Data, contentType);
        // var blobUrl = URL.createObjectURL(blob);
        // window.location = blobUrl;

        // console.log('blob instance :', blob instanceof Blob)

        // var form = {
        //     color_id: 2,
        //     reviewPhoto: e.target.files[0],
        //     reviewRating: 5,
        //     user_id: 1,
        //     reviewMessage: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
        // }
        // axios.post(`${url}/api/review/post`, form)
        //     .then((response) => {
        //     console.log(response.data);
        //     })
        //     .then(response => this.setState({ data: response.data }))
        //     .catch(err => console.log(err))
    }

    // _clickReview() {
    //     const form = {
    //         color_id: this.props.id,
    //         reviewPhoto: 1,
    //         reviewRating: this.state.rating,
    //         user_id: 1,
    //         reviewMessage: this.input.value,
    //     }

    //     // console.log(form)
    //     !logged ? alert('로그인 먼저해') :
    //         axios.post(`${url}/api/review/post`, form)
    //             // .then((response) => {
    //             // console.log(response.data);
    //             // })
    //             .then(response => this.setState({ data: response.data }))
    //             .catch(err => console.log(err))
    //     this.input.value = '';
    // }

    render() {
        console.log(this.state.file)
        console.log(this.state.imagepreviewUrl.split(',')[1])
        // console.log(this.state.imagepreviewUrl)
        let { imagepreviewUrl } = this.state;
        // console.log('imagepreviewUrl :', imagepreviewUrl)
        let $imagePreview = null;
        let popupImage = (<img src={imagepreviewUrl} style={{ width: '100%', height: '100%' }} alt='yours' />)


        this.state.imagepreviewUrl ? $imagePreview = (<img onClick={this._openPopup} src={imagepreviewUrl} style={{ height: '100%', width: '80%' }} alt='Yours' />) :
            $imagePreview = (<div> Please select an Image for Preview</div>);

        return (
            <div style={{ width: '25%', border: '1px solid', display: 'flex', flexDirection: 'column' }}>
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <input style={{ width: '100%' }}
                        type='file'
                        onChange={(e) => { this._handleImageChange(e); this._getContent(e) }} />

                    {/* <button className="submitButton"
                            type = "submit"
                            onClick={(e) => this._handleSubmit(e)}> 
                            Upload Image
                    </button> */}
                </form>
                <div style={{ height: '80%', cursor: 'pointer' }}>
                    {$imagePreview}
                </div>
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
            </div>
        )
    }
}


export default FileUpload;