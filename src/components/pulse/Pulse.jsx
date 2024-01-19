import { useState, useEffect } from 'react';
import './pulse.sass'

const Pulse = () => {
  const [audio] = useState(new Audio('./Psalm-Trees-fever.mp3'));
  const [playing, setPlaying] = useState(true);
  const [played, setPlayed] = useState(null);

  const toggle = () => {
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  }

  useEffect(() => {
    function initialPlay(e) {
      if (e.target.classList.contains('pulsing-ui') == false) {
        if(played) {
          return null;
        } else {
          audio.play()
          setPlayed(true);
        }
      }
    } 
    document.body.addEventListener('click', initialPlay)

    return () => {
      document.body.removeEventListener('click', initialPlay)
    }

    },[played]);

  useEffect(() => {
    audio.addEventListener('ended', () => {
     setPlayed(false);
    })
    return () => {
      audio.removeEventListener('ended', () => setPlayed(false));
    };
  }, []);

  return (
    <div>
      <button 
        type="button" 
        className={`site-volume ${playing ? 'is-playing' : null}`} 
        title="Toggle sound"
        onClick={() => toggle()}
        >
        <span className="u-visually-hidden">Toggle sound</span>
        <span className="pulsing-ui"></span>
      </button>
    </div>
  )
}

export default Pulse