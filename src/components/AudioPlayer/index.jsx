import React, { useEffect, useState} from 'react';
import Song from '../../static/music/audio.mpeg';
import Play from '../../static/icons/play.png';
import Pause from '../../static/icons/pause.png';
import classes from './style.module.scss';

const AudioPlayer = ({ isPlaying, setIsPlaying}) => {
  const [audio] = useState(new Audio(Song));

  const play = () => {
    audio.play();
    setIsPlaying(true);
  }

  useEffect(() => {
    play()
  })

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  const onClickBtn = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className={classes.audioContainer}>
      <img onClick={onClickBtn} src={isPlaying ? Pause : Play} alt="audio-player" />
    </div>
  );
};

export default AudioPlayer
