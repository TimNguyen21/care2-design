import React from 'react';
import '../../scss/create-flow/Form.scss'
import care2logo from "../../images/create-flow/care2logo-2.png";
import angryDoggo from "../../images/create-flow/angry-doggo.jpg";

const Form = () => {
    return (
        <main class="create-flow-form">
            <header class="create-flow-form__header">
                <img class="create-flow-form__logo" src={care2logo} />
                <button class="create-flow-form__publish-button">PUBLISH</button>
            </header>
            <form class="create-flow-form__form">
                <label class="create-flow-form__header-label">BUILD YOUR PETITION</label>
                {/*Edit Image Section*/}
                <div class="create-flow-form__input-image-section">
                    <div class="create-flow-form__input-image-tab">
                        <div class="create-flow-form__change-image-link">
                            <div class="create-flow-form__input-tab-icon">&#128247;</div>
                            CHANGE IMAGE
                        </div>
                        <div class="create-flow-form__input-tool-tip">
                            <div class="create-flow-form__input-tool-tip-icon">?</div>
                            <div class="create-flow-form__input-tool-tip-info">Change image tool tip info</div>
                        </div>
                    </div>
                    <img src={angryDoggo} class="create-flow-form__input-image-field"></img>
                </div>
                {/*Edit Title Section*/}
                <div className="create-flow-form__input-title-section">
                    <div className="create-flow-form__input-tab">
                        <div className="create-flow-form__input-tab-label">
                            <div className="create-flow-form__input-tab-icon">&#9998;</div>
                            EDIT TITLE
                        </div>
                        <div className="create-flow-form__input-tool-tip">
                            <div className="create-flow-form__input-tool-tip-icon">?</div>
                            <div className="create-flow-form__input-tool-tip-info">Change title tool tip info</div>
                        </div>
                    </div>
                    <textarea class="create-flow-form__input-title-field"></textarea>
                </div>
                {/*Edit Name Section*/}
                <div className="create-flow-form__input-name-section">
                    <div className="create-flow-form__input-tab">
                        <div className="create-flow-form__input-tab-label">
                            <div className="create-flow-form__input-tab-icon">&#9998;</div>
                            EDIT NAME
                        </div>
                        <div className="create-flow-form__change-author-link">
                            <div className="create-flow-form__input-tab-icon">&#128247;</div>
                            AUTHOR PHOTO
                        </div>
                        <div className="create-flow-form__input-tool-tip">
                            <div className="create-flow-form__input-tool-tip-icon">?</div>
                            <div className="create-flow-form__input-tool-tip-info">Change name and author photo tool tip info</div>
                        </div>
                    </div>
                    <textarea className="create-flow-form__input-name-field"></textarea>
                </div>
                {/*Edit Target Section*/}
                <div className="create-flow-form__input-target-section">
                    <div className="create-flow-form__input-tab">
                        <div className="create-flow-form__input-tab-label">
                            <div className="create-flow-form__input-tab-icon">&#9998;</div>
                            EDIT TARGET
                        </div>
                        <div className="create-flow-form__input-tool-tip">
                            <div className="create-flow-form__input-tool-tip-icon">?</div>
                            <div className="create-flow-form__input-tool-tip-info">Change targeting tool tip info</div>
                        </div>
                    </div>
                    <textarea className="create-flow-form__input-target-field"></textarea>
                </div>
                {/*Edit Summary Section*/}
                <div className="create-flow-form__input-summary-section">
                    <div className="create-flow-form__input-tab">
                        <div className="create-flow-form__input-tab-label">
                            <div className="create-flow-form__input-tab-icon">&#9998;</div>
                            EDIT SUMMARY
                        </div>
                        <div className="create-flow-form__input-tool-tip">
                            <div className="create-flow-form__input-tool-tip-icon">?</div>
                            <div className="create-flow-form__input-tool-tip-info">Change summary tool tip info</div>
                        </div>
                    </div>
                    <textarea className="create-flow-form__input-summary-field"></textarea>
                </div>
            </form>
            <button className="create-flow-form__publish-button">PUBLISH</button>
        </main>
    )
}

export default Form;