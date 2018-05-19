import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

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
    constructor() {
        super();
        this.state = {
            file: '',
            imagepreviewUrl: '',
            popupIsOpen: false,
            selectedFile: ''
        }
        this._openPopup = this._openPopup.bind(this);
        this._afterOpenPopup = this._afterOpenPopup.bind(this);
        this._closePopup = this._closePopup.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
        this._fileUploadHandler = this._fileUploadHandler.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
    }

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onload = () => {
            this.setState({
                file: file,
                imagepreviewUrl: reader.result
            })
        }
        reader.readAsDataURL(file)
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

 

    _fileUploadHandler = () => {
        const formData = new FormData();
        formData.append('image', this.state.file, this.state.file.name)
        // axios.post('http://localhost:8080/api/......', formData)
        // .then(res => console.log(res))
        // .catch(err => console.log(err))

    }

    render(){
        

        let { imagepreviewUrl } = this.state;
        let $imagePreview = null;
        let popupImage = (<img src= {imagepreviewUrl} style={{width: '100%', height: '100%'}} alt ='yours'/>)
    

        this.state.imagepreviewUrl ? $imagePreview = (<img onClick={this._openPopup} src={imagepreviewUrl} style={{ height:'100%', width: '80%'}} alt='Yours' />) :
            $imagePreview = (<div> Please select an Image for Preview</div>);

        return (
            <div style = {{width: '25%', border: '1px solid', display:'flex', flexDirection:'column'}}>
                <form onSubmit = {(e) => this._handleSubmit(e)}>
                    <input style = {{width:'100%'}}
                           type='file'
                        onChange={(e) => { this._handleImageChange(e); this._fileUploadHandler(e)}} />
                    {/* <button className="submitButton"
                            type = "submit"
                            onClick={(e) => this._handleSubmit(e)}> 
                            Upload Image
                    </button> */}
                </form>
                <div style={{ height: '80%', cursor: 'pointer'}}>
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
                    <div style = {{width: '50vh'}}>{popupImage}</div>
                    <button style = {{cursor: 'pointer'}} onClick={this._closePopup}>close</button>
                </Modal>
            </div>
        )
    }
}


export default FileUpload;