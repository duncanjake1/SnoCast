import React, { useContext } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import Header from './Header.jsx'
import './styles/getCast.css'
import testAudio from './testDatas/testAudio.mp3'
import { GetCastContext } from './GetCastContext.jsx'

const GetCast = () => {

    const { castInfoConditions } = useContext(GetCastContext)
    
    return(
        <div className="page-template-grid">
            <Header />
            <div className="content-template single-container">
                <div className="report-header">
                    <img className="source-logo" src={castInfoConditions.imgUrl} alt="company logo" />
                    <h2>Title: {castInfoConditions.title}</h2>
                    <p>Source: {castInfoConditions.source}</p>
                </div>
                <div className="audio-div">
                    <p>play me!</p>
                    <ReactAudioPlayer
                        src={testAudio}
                        controls
                    />
                </div>
                <p>description: {castInfoConditions.description}</p>
                <a target="_blank" href={castInfoConditions.url}>
                    read more...
                </a>
            </div>
        </div>
    )
}
export default GetCast