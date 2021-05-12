import React, { useState, useContext, createContext } from "react";
import ReactDOM from 'react-dom';
import { Container, Inner, Overlay, Close, Button } from "./style/player";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }){
    const [ showVideo, setShowVideo ] = useState(false);

    return (
        <PlayerContext.Provider value={{showVideo, setShowVideo}}>
            <Container {...restProps} >{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ ...restProps }){
    const { showVideo, setShowVideo } = useContext(PlayerContext);

    return  showVideo ? 
         ReactDOM.createPortal(
            <Overlay onClick={({target})=>{ target.id !== 'netflix-player' && setShowVideo(false)}}>
                <Inner>
                    <video
                        id="netflix-player"
                        controls
                    >
                        <source src="/videos/bunny.mp4" type="video/mp4" />
                    </video>
                    <Close />
                </Inner>
            </Overlay>,
            document.body
         ) : null;
}

Player.Button = function PlayerButton({  ...restProps }){
    const { showVideo, setShowVideo } = useContext(PlayerContext);
    return <Button onClick={()=> setShowVideo(!showVideo)} {...restProps} >Play</Button>
}