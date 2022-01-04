import React from 'react';
import '../../scss/create-flow/Tutorial.scss'

const Tutorial = () => {
    return (
        <section class="create-flow-tutorial">
            <div class="create-flow-tutorial__close-button">X</div>
            <header>HOW TO BUILD A WINNING PETITION</header>
            <label>It's easy, free, and quick. In just minutes, you be on your way to lasting impact!</label>
            <div class="create-flow-tutorial__video">
                <iframe width="535px"
                        height="300px"
                        src="https://www.youtube.com/embed/xaPepCVepCg"
                        title="Care2 Video"
                        frameBorder="0"
                        allowFullScreen>
                </iframe>
            </div>
            <div class="create-flow-tutorial__close-label">Ok, I got it, let's go!</div>
        </section>
    )
}

export default Tutorial;