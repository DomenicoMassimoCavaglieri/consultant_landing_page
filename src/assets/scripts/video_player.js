//The video player is dynamically created. 
//The play button becomes stop if the video is running and vice versa. 
//The controls are disabled if the video is stopped and appear if the video is playing 
//and if there is user interaction.

import Video from "../video/company_video.mp4"

//Video status control variable (Play / Stop)
let videoOn = false;


initVideoSection();


//Loading the initial settings
function initVideoSection() {
    createVideoOverlay();
    createVideo();

    createIconPlayStop();
    setVideo();

    getVideo().ontouchstart = handleTouch;
    getIconPlayStop().onmousemove = showVideoControls;
    getIconPlayStop().onmouseout = HideVideoControls;
    getVideo().onmousemove = showVideoControls;
    getVideo().onmouseout = HideVideoControls;
    getVideo().onended = setVideoStop;
    getIconPlayStop().onclick = playOrStop;

}


//A single button manages Play and Stop
function playOrStop() {
    (videoOn) ?  setVideoStop() : setVideoPlay();
    
}

//The stop key appears / disappears on the touch together with the native controls
function handleTouch() {
    setTimeout( (showVideoControls), 400);
    setTimeout( (HideVideoControls), 3000);
}

//Hides stop key and native controls
function HideVideoControls() {
    if (videoOn) {
        getIconPlayStop().classList.add("hidden-notransition");
    }
}

//Shows stop key and native controls
function showVideoControls() {
    if (videoOn) {
        getVideo().controls = true;
        getIconPlayStop().classList.add("icon-stop");
        getIconPlayStop().classList.remove("hidden-notransition");
    }
}

//This stops the video, shows the poster, turns the stop button to play and moves it to the center
function setVideoStop() {
    getVideo().load()
    setTimeout( () => getVideoOverlay().classList.add("video-overlay-poster"),500);
    getIconPlayStop().classList.add("hidden-notransition");
    setTimeout( () => getIconPlayStop().classList.remove("icon-stop"),450);
    getIconPlayStop().classList.add("icon-play");
    setTimeout( () => getIconPlayStop().classList.remove("hidden-notransition"),800);
    getVideo().controls = false;
    videoOn = false;
}

//This starts the video, hides the poster, turns the play button to stop and moves it to the side
function setVideoPlay() {
    getVideoOverlay().classList.remove("video-overlay-poster");
    //getIconPlayStop().classList.remove("icon-play");
    getIconPlayStop().classList.add("icon-stop");
    getIconPlayStop().classList.add("hidden-notransition");
    getVideo().play();
    videoOn = true;
}

//This assigns the video file and sets the volume to half
function setVideo() {
    getVideo().src = Video;
    getVideo().volume = 0.5;
}

//Creation of the Play / Stop button
function createIconPlayStop() {
    const iconPlay = document.createElement("div");
    iconPlay.classList.add("icon-play");
    iconPlay.setAttribute("id", "icon-video");
    getVideoWrapper().appendChild(iconPlay);
}

//Creating the overlay poster
function createVideoOverlay() {
    const videoOverlay = document.createElement("div");
    videoOverlay.setAttribute("id", "video-overlay");
    videoOverlay.classList.add("video-overlay-poster");
    getVideoWrapper().appendChild(videoOverlay);
}

//Creating the video tag and assigning the corresponding file
function createVideo() {
    const video = document.createElement("video");
    video.setAttribute("id", "video");
    getVideoWrapper().appendChild(video);

}


//These return elements of the DOM that make up the video section

function getIconPlayStop() {
    return document.querySelector("#icon-video");
}

function getVideoOverlay() {
    return document.querySelector("#video-overlay");
}

function getVideo() {
    return document.querySelector("#video");
}

function getVideoWrapper() {
    return document.querySelector("#video-wrapper");
}
