import React from 'react';
import '../../scss/create-flow/Form.scss'
import care2Logo from "../../images/create-flow/care2Logo.png";

const Form = () => {
    return (
        <main class="create-flow-form">
            <header class="create-flow-form__header">
                <img class="create-flow-form__logo" src={care2Logo} />
                <button class="create-flow-form__publish-button">PUBLISH</button>
            </header>
            <form class="create-flow-form__form">
                <label class="create-flow-form__header-label">BUILD YOUR PETITION</label>
                {/*Edit Image Section*/}
                <div class="create-flow-form__input-image-section">
                    <div class="create-flow-form__input-image-tab">
                        <div class="create-flow-form__input-tab-label">
                            <div class="create-flow-form__input-tab-icon">&#128247;</div>
                            CHANGE IMAGE
                        </div>
                        <div class="create-flow-form__input-tool-tip">
                            ?
                        </div>
                    </div>
                    <img src="https://media1.popsugar-assets.com/files/thumbor/PjjJ4I0zydAEM56U4ngo9GMYPFY/1x647:2001x1471/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/23/671/n/1922243/9149b6bd5d88df88e30c16.96885837_.jpg" class="create-flow-form__input-image-field"></img>
                </div>
                {/*Edit Title Section*/}
                <div className="create-flow-form__input-title-section">
                    <div className="create-flow-form__input-tab">
                        <div className="create-flow-form__input-tab-label">
                            <div className="create-flow-form__input-tab-icon">&#9998;</div>
                            EDIT TITLE
                        </div>
                        <div className="create-flow-form__input-tool-tip">
                            ?
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
                        <div className="create-flow-form__input-tab-label">
                            <div className="create-flow-form__input-tab-icon">&#128247;</div>
                            AUTHOR PHOTO
                        </div>
                        <div className="create-flow-form__input-tool-tip">
                            ?
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
                            ?
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
                            ?
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