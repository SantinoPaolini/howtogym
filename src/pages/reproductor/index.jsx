import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

const App = () => {
  const playerRef = useRef(null);

  const MuteBtn = () => {  
    const player = playerRef.current.getInternalPlayer(); //crea el boton y se fija si esta presionado
    if (player.isMuted()) { //logica de presionar el boton y mutear  
      player.unMute();
    } else {
      player.mute();
    }
  };

  return (
    <>
    <div className='react-player'>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=dWV4uWd2GvM' //le ponemos cualquier arhivo/url que reproduzcamos pero hay q especificar donde esta
        ref={playerRef}
        controls
      />
    </div>
    <button onClick={MuteBtn}>Mutar</button> 
    </>
  );
}

export default App;