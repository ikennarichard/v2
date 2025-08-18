import { useCallback, useEffect, useState } from "react";
import "./pulse.sass";

const Pulse = () => {
  const [audio] = useState(new Audio("./Psalm-Trees-fever.mp3"));
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(null);
  const AUDIO_VOLUME = 0.00391;

  const playAudio = useCallback(
    (e) => {
      if (e.target.classList.contains("pulsing-ui")) return;

      if (hasPlayed) return;

      audio.volume = AUDIO_VOLUME;
      audio
        .play()
        .catch((error) => console.error("Audio playback failed:", error));
      setHasPlayed(true);
    },
    [hasPlayed, audio]
  );

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.volume = AUDIO_VOLUME;
      audio
        .play()
        .catch((error) => console.error("Audio playback failed:", error));
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying, audio]);

  useEffect(() => {
    document.body.addEventListener("click", playAudio);
    return () => document.body.removeEventListener("click", playAudio);
  }, [playAudio]);

  useEffect(() => {
    const handleAudioEnd = () => setHasPlayed(false);
    audio.addEventListener("ended", handleAudioEnd);
    return () => audio.removeEventListener("ended", handleAudioEnd);
  }, [audio]);

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  return (
    <div>
      <button
        type="button"
        aria-label={isPlaying ? "Pause sound" : "Play sound"}
        className={`site-volume ${isPlaying ? "is-playing" : null}`}
        title="Toggle sound"
        onClick={togglePlay}
      >
        <span className="u-visually-hidden">Toggle sound</span>
        <span className="pulsing-ui"></span>
      </button>
    </div>
  );
};

export default Pulse;
