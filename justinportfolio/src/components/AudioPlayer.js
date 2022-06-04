import React, { useEffect, useState, useRef } from 'react'
import styles from "../styles/AudioPlayer.module.css"
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import client from '../client'
export default function AudioPlayer({songName, setSongName}) {
    const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
    const [music, setMusic] = useState(null) // Array of the playlist
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
    const [changingSongs, setChangingSongs] = useState(false)
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation
    useEffect(() =>{
        client.fetch((
            `*[_type == "music"]{
                name, 
                link{
                    asset->
                    {
                        url
                    }
                }
            }`
        ))
        .then((data) => {
           
            setMusic(() => data)
        
            // console.log(music)
            // console.log("This is working")
            // console.log(currentlyPlaying)
            // if(currentlyPlaying === null)
            // {
            //     console.log(music[0])
            //     setCurrentlyPlaying(() => music[0])
            // }
           
        })
       
        .catch(console.error)
    }, [])
    useEffect(() =>{
        console.log("Music has changed")
        console.log(music)
        if(music !== null)
        {
            setCurrentlyPlaying(() => music[0].link.asset.url)
        }
    }, [music])
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);
  function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
} 
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {

    if (songName === "Press Play to listen to my playlist")
    {
      setSongName("Nas - The Message")
    }
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
      document.querySelector("body").classList.add('animate-background-color-change')
      if(document.querySelector("body").style.animationPlayState === 'paused')
      document.querySelector("body").style.animationPlayState = 'running'
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
      document.querySelector("body").style.animationPlayState = 'paused';
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
      //Move the array back one if possible. 
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  const forwardThirty = () => {
      //Randomly generate a number based on the size of the array
      setChangingSongs(true)
      setSongName("Loading...")
      setTimeout(() => {
        const randNum = Math.trunc(randomNumber(0, music.length - 1))
        setIsPlaying(false)
        console.log(randNum + " " + music.length + " " + music[10].link)
        progressBar.current.value = Number(progressBar.current.value);
      changeRange();
        setCurrentlyPlaying (() => music[randNum].link.asset.url)
        
        console.log(currentlyPlaying)
      
      setChangingSongs(false)
      setSongName(music[randNum].name)
      }, 3000)
     
  }
  return (
    <div className={styles.audioPlayer}>
    
      <audio ref={audioPlayer} crossOrigin="anonymous" src = {currentlyPlaying === null ? "https://cdn.sanity.io/files/pvvtq9d5/production/562b3bd063d459393e81eed15732392b57a2ca40.mp3" : currentlyPlaying} preload="metadata"></audio> 
      {/* <button className={styles.forwardBackward} onClick={backThirty}><BsArrowLeftShort /> </button> */}
      <button onClick={togglePlayPause} className={styles.playPause}>
        {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
      </button>
      <button className={styles.forwardBackward} onClick={forwardThirty} disabled = {changingSongs}> <BsArrowRightShort /></button>

      {/* current time */}
      {/*<div className={styles.currentTime}>{calculateTime(currentTime)}</div> */}

      {/* progress bar */}
      <div>
        <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
      </div>

      {/* duration */}
      {/* <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div> */}
    </div>
  )
}
