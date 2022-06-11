
import './App.css';
import React, {useState} from 'react'

import AudioPlayer from './components/AudioPlayer';
function App() {
  const current = new Date();
  const [textAnimate, setTextAnimate] = useState(false)
  const [textAnimateGit, setTextAnimateGit] = useState(false)
  const [textAboutAnimateAppear, setTextAboutAnimateAppear] = useState(false)
  const [hideAbout, setHideAbout] = useState(false)
  const [hideGit, setHideGit] = useState(true)
  const [buttonVisibility, setButtonVisibility] = useState(true)
  const [aboutMeButtonVisibility, setAboutMeButtonVisibility] = useState(true)
  const [gitHubButtonVisibility, setGitHubButtonVisibility] = useState(false)
  const [userInformationSchema, setUserInformationSchema] = useState([]);
  const [currentSongPlaying, setCurrentSongPlaying] = useState("Press Play to listen to my playlist")

  function hideAboutText()
  {
    console.log(userInformationSchema)
    setButtonVisibility(false)
    setTextAboutAnimateAppear(false)
    setTextAnimate(true)
    setTimeout(() => {
  setHideAbout(true)
  setTextAnimateGit(true)
  setHideGit(false)
   setTextAnimate(false)
   setButtonVisibility(true)
   setAboutMeButtonVisibility(false)
   setGitHubButtonVisibility(true)
    }, 980)
    
    setTextAnimateGit(false)
  }
  function showAboutText()
  {  
    setTextAnimateGit(false)
    setButtonVisibility(false)
    setTimeout(() => {
      setTextAnimate(false)
    setHideGit(true)
    setTextAboutAnimateAppear(true)
      setHideAbout(false)
      setButtonVisibility(true)
      setAboutMeButtonVisibility(true)
   setGitHubButtonVisibility(false)
    }, 980)
    setTextAboutAnimateAppear(false)
  }
  function changeSettings()
  {
    if(hideGit !== false) 
    {
      hideAboutText()
    }
    else
    {
      showAboutText()
    }
  }
  return (
    <div className="App">
    <div class="md:container md:mx-auto mt-6">
    
      <div class="flex flex-row ml-5">
     {hideAbout === false ? <React.Fragment>
       <div class={`font-serif inline-grid gap-5 grid-cols-2 grid-rows-2 text-left font-medium mr-20 ${textAboutAnimateAppear === true ? 'animate-fade-in' : ''}  ${hideAbout === false ? ' ' : 'opacity-0'} ${textAnimate === false ? '' : 'animate-fade-out'}`}>
         <div>
           <p>
           Hi my name is Justin Young I'm a software engineer currently working in the aerospace industry helping NASA with their artemis two space program. 
  I was born in Memphis, raised in Memphis and currently live in Oklahoma City. I went to school for computer science and I've been programming since I was 16. Besides programming I LOVE music it's my second passion I love jazz, neo-soul and afrobeats.
           </p>
         </div>
         <div>
           <p>My journey into programming begin in high-school where I aspired to create my own video game.</p>
         </div>
       </div>
      {/* <p class={`basis-1/4 text-left font-medium mr-20 ${textAboutAnimateAppear === true ? 'animate-fade-in' : ''}  ${hideAbout === false ? ' ' : 'opacity-0'} ${textAnimate === false ? '' : 'animate-fade-out'}`}>Justin Young is a software engineer currently working in the aerospace industry helping NASA build the artemis two space program. 
  I have a degree in computer science from TSU. My favorite languages is C++, Python, and Javascript.</p>
  <p class={`basis-1/4 text-left font-medium mr-20 ${textAboutAnimateAppear === true ? 'animate-fade-in' : ''} ${hideAbout === false ? ' ' : 'opacity-0'} ${textAnimate === false ? '' : 'animate-fade-out'}`}>My journey into programming begin in high-school where I aspired to create my own video game.</p>  */}
     </React.Fragment> : 
     <React.Fragment>
        <div class={`font-serif grid gap-5 grid-cols-2 grid-rows-2 text-left font-medium mr-20 ${textAnimate === false ? 'animate-fade-out' : ' '} ${hideGit === true ? 'opacity-0' : ''} ${textAnimateGit === false ? '' : 'animate-fade-in-down'}`} href="github.com/tuyyui">
        {/*------------------ COLUMN 1 -------------------------------- */}
          
            <div class="">
          <a class="hover-underline-animation hover:blue text-lg mb-4 cursor-pointer" href='https://github.com/tuyyui/3DP-lib'>
            Ray Tracer Project
          </a>
          <p class="text-gray-600/75">
            Ray Tracer project built from scratch following a ray-tracer guide closely.
          </p>
          </div>
          <div>
            <a class="mb-4 text-lg hover-underline-animation cursor-pointer" href='https://github.com/tuyyui/Motion-Intensity-Analyzer-ComputerVision'>
              Motion Intensity Analyzer
            </a>
            <p class="text-gray-600/75">Captures the intensity of motion from a web-cam sdfsdfa</p>
          </div>
         
         
        
            <div class="font-serif">
          <a class="mb-4 text-lg hover-underline-animation cursor-pointer" href='https://github.com/tuyyui/Social-Network-Project'>
            Social NetWork Project
          </a>
          <p class="text-gray-600/75">
            Social network website built using Django
          </p>
          </div>
          <div class="font-serif">
            <a class="mb-4 text-lg hover-underline-animation cursor-pointer">
              EfieApp
            </a>
            <p class="text-gray-600/75">Full-Stack project using the MERN stack. (In Development)</p>
          </div>
          
          
       
        </div>
        
        
     </React.Fragment>}
  
   

 
  
  <div class="font-serif inline-block font-medium text-right">
  
    <button disabled = {buttonVisibility && aboutMeButtonVisibility ? false : true} class=" disabled:opacity-50  hover:underline inline-block " onClick={() => changeSettings()}>Github</button>/<button disabled = {buttonVisibility && gitHubButtonVisibility ? false : true} class=" disabled:opacity-50  hover:underline inline-block " onClick={() => changeSettings()}>AboutMe</button>
    <p class="whitespace-nowrap">Current Position: Avonics Software Engineer</p>
    </div>

      </div>
  </div>
    
  <div class ="footer">
  <AudioPlayer songName = {currentSongPlaying} setSongName = {setCurrentSongPlaying}/>
  
    <div class="flex justify-between">
    
      <div class="place-items-begin">
          <p>{currentSongPlaying}</p>
      </div>
      <div class="color-black place-items-end ">
        Contact me mrjustinyoung991@gmail.com 
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
