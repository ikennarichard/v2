import { useCallback, useEffect, useRef, useState } from "react";
import "./pulse.sass";

const AUDIO_SRC = "./Psalm-Trees-fever.mp3";
const AUDIO_VOLUME = 0.011;

const Pulse = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(AUDIO_SRC);
    audioRef.current.volume = AUDIO_VOLUME;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const playAudio = useCallback(
    (e) => {
      if (!(e.target).classList.contains("pulsing-ui")) {
        if (!hasPlayed && audioRef.current) {
          audioRef.current
            .play()
            .catch((error) =>
              console.error("Audio playback failed:", error)
            );
          setHasPlayed(true);
        }
      }
    },
    [hasPlayed]
  );

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio
        .play()
        .catch((error) =>
          console.error("Audio playback failed:", error)
        );
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  useEffect(() => {
    document.body.addEventListener("click", playAudio);
    return () => document.body.removeEventListener("click", playAudio);
  }, [playAudio]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleAudioEnd = () => setHasPlayed(false);
    audio.addEventListener("ended", handleAudioEnd);

    return () => audio.removeEventListener("ended", handleAudioEnd);
  }, []);

  return (
    <div>
      <button
        type="button"
        aria-label={isPlaying ? "Pause sound" : "Play sound"}
        className={`site-volume ${isPlaying ? "is-playing" : ""}`}
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
