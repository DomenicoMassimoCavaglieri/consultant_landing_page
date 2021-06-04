
import Video from "../video/company_video.mp4"

let videoOn = false;

initVideoSection();

function initVideoSection() {
    createVideoOverlay();
    createVideo();
    createIconPlayStop();
    setVideo();

    getIconPlayStop().onmousemove = showVideoControls;
    getIconPlayStop().onmouseleave = HideVideoControls;
    getVideo().onmousemove = showVideoControls;
    getVideo().onmouseleave = HideVideoControls;
    getVideo().onended = setVideoStop;
    getIconPlayStop().onclick = playOrStop;

}

function playOrStop() {
    (videoOn) ?  setVideoStop() : setVideoPlay();
    
}

function HideVideoControls() {
    if (videoOn) {
        getIconPlayStop().classList.add("hidden");
    }
}

function showVideoControls() {
    if (videoOn) {
        getVideo().controls = true;
        getIconPlayStop().classList.add("icon-stop");
        getIconPlayStop().classList.remove("hidden");
    }
}

function setVideoStop() {
    getIconPlayStop().classList.add("hidden");
    setTimeout( () => getIconPlayStop().classList.remove("icon-stop"),400);
    setTimeout( () => getVideo().classList.add("hidden"),600);
    setTimeout( () => getVideoOverlay().classList.add("video-overlay-poster"),100);
    
    getIconPlayStop().classList.add("icon-play");
    setTimeout( () => getIconPlayStop().classList.remove("hidden"),1200);
    getVideo().controls = false;
    setTimeout( () => getVideo().load(),900);
    videoOn = false;
}

function setVideoPlay() {
    getVideoOverlay().classList.remove("video-overlay-poster");
    getIconPlayStop().classList.add("hidden");
    getVideo().classList.remove("hidden");
    getVideo().play();
    videoOn = true;
}

function setVideo() {
    getVideo().src = Video;
    getVideo().volume = 0.5;
}

function getIconPlayStop() {
    return document.querySelector("#icon-video");
}

function getVideo() {
    return document.querySelector("#video");
}

function getVideoOverlay() {
    return document.querySelector("#video-overlay");
}

function getVideoWrapper() {
    return document.querySelector("#video-wrapper");
}

function createIconPlayStop() {
    const iconPlay = document.createElement("div");
    iconPlay.classList.add("icon-play");
    iconPlay.setAttribute("id", "icon-video");
    getVideoOverlay().appendChild(iconPlay);
}

function createVideo() {
    const video = document.createElement("video");
    video.setAttribute("id", "video");
    video.classList.add("hidden");
    getVideoOverlay().appendChild(video);

}

function createVideoOverlay() {
    const videoOverlay = document.createElement("div");
    videoOverlay.setAttribute("id", "video-overlay");
    videoOverlay.classList.add("video-overlay-poster");
    getVideoWrapper().appendChild(videoOverlay);
}
