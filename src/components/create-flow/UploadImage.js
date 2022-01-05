import React from 'react';
import '../../scss/create-flow/UploadImage.scss'
import uploadIcon from "../../images/create-flow/upload-icon.png";

const UploadImage = () => {
    return (
        <section className="create-flow-upload-image">
            <div class="create-flow-upload-image__header">
                <div class="create-flow-upload-image__header-label">Choose an image</div>
                <div class="create-flow-upload-image__tool-tip">?</div>
                <div class="create-flow-upload-image__close-button">x</div>
            </div>
            <div class="create-flow-upload-image__tab-options">
                <div class="create-flow-upload-image__tab-option--upload create-flow-upload-image__tab-option--active">MY IMAGES</div>
                <div class="create-flow-upload-image__tab-option--care2-images">Free from Care2</div>
            </div>
            <div class="create-flow-upload-image__description">Upload an image in JPG, PNG, of GIF format. Up to 1.5 MB</div>
            <img class="create-flow-upload-image__icon" src={uploadIcon} />
            <div>Let's Add Your Image</div>
            <div>CLICK UPLOAD OR DRAG TO THIS WINDOW</div>
            <input class="create-flow-upload-image__upload-button" type="button" value="Upload" />
        </section>
    )
}

export default UploadImage;