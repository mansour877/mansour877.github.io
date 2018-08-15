// lalala
var lalala = document.getElementById("lalala")
var playlalala = document.getElementById("playlalala")
var pauselalala = document.getElementById("pauselalala")
var startAgainlalala = document.getElementById("startAgainlalala")
// theme song
var themeSong = document.getElementById("themeSong")
var playTheme = document.getElementById("playTheme")
var pauseTheme = document.getElementById("pauseTheme")
var startAgainTheme = document.getElementById("startAgainTheme")

var go = document.getElementById("go")
var home = document.getElementById("home")

var MenuScreen = document.getElementById("MenuScreen")
var HomeScreen = document.getElementById("HomeScreen")

// pages buttons

function goHome() { 
 
  HomeScreen.style.visibility = "visible";
  themeSong.pause(); 
  MenuScreen.style.visibility = "hidden";
}

function goMenu() { 

  HomeScreen.style.visibility = "hidden";
  lalala.pause(); 
  MenuScreen.style.visibility = "visible";
  
}




// Music buttons
// lalala
function playl() { 

  lalala.play();  
  playlalala.style.visibility = "hidden";
  pauselalala.style.visibility = "visible";
}

function finishl() {
 playlalala.style.visibility = "visible";
 pauselalala.style.visibility = "hidden";

}

function pausel() { 
  lalala.pause(); 
  playlalala.style.visibility = "visible";
  pauselalala.style.visibility = "hidden";
}

function startAgainl(){
  lalala.currentTime = 0;
}

// theme song
function playT() { 
  themeSong.play();  
  playTheme.style.visibility = "hidden";
  pauseTheme.style.visibility = "visible";
}

function finishT() {
 playTheme.style.visibility = "visible";
 pauseTheme.style.visibility = "hidden";

}

function pauseT() { 
  themeSong.pause(); 
  playTheme.style.visibility = "visible";
  pauseTheme.style.visibility = "hidden";
}

function startAgainT(){
  themeSong.currentTime = 0;
}