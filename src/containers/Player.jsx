import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideosSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from '../containers/NotFound';
import videoPlay from '../assets/static/videoplayback.mp4';
const Player = props =>{
    console.log(props);
    const { id } = props.match.params;
    console.log(id);
    
    const hasPlaying = Object.keys(props.playing).length > 0;

    useEffect(() => {
        props.getVideosSource(id)
    }, []);

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={videoPlay} type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack() }>
                    Regresar
                </button>
            </div>
        </div>
    ) : <NotFound/>
};

const mapStateToProps = state => {
    return{
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideosSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);