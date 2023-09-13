import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

// Wrap ReactPlayer in dynamic import
const DynamicReactPlayer = dynamic(() => import('react-player'), {
  ssr: false, // Disable server-side rendering for this component
});

const App = () => {
  const playerRef = useRef(null);
  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/route", {
        method: "GET"
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };  

  const MuteBtn = () => {
    const player = playerRef.current.getInternalPlayer();
    if (player.isMuted()) {
      player.unMute();
    } else {
      player.mute();
    }
  };

  return (
    <div>
      <div className='react-player'>
        {/* Use the dynamically imported ReactPlayer */}
        <DynamicReactPlayer
          url='https://www.youtube.com/watch?v=5k7ZGhL3pI0'
          ref={playerRef}
          controls
        />
      </div>
      <button onClick={MuteBtn}>Mutar</button>
      <button onClick={handleClick}>Test</button>
    </div>
  );
};

export default App;
