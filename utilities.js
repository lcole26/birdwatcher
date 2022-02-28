// ---------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * References Cited:
 * https://stackoverflow.com/questions/14926306/javascript-play-sound-on-hover-stop-and-reset-on-hoveroff 
 * 
 */
// ---------------------------------------------------------------------------------------------------------------------------------------------------------

/*
 * https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission
 * 
 */
function getLocalStream() { 
  navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
    window.localStream = stream;
    window.localAudio.srcObject = stream;
    window.localAudio.autoplay = true;
}).catch( err => {
    console.log("u got an error:" + err)
});
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// audio stuff
/**
 * 
 * @param {the intended audio to play } audio 
 * @param {decides whether to loop or not on finish. Entry format: [true | false]} loop_flag 
 */
var StartSoundOnHover = function StartSoundOnHover(audio, loop_flag) {
  var this_audio = document.getElementById(audio)
  .loop() = loop_flag;
  this_audio.play();
}

/**
 * 
 * @param {audio to stop playing on mouseoff} audio 
 */
var EndSoundOnHover = function StopLoopOnHover(audio) {
  var this_audio = document.getElementById(audio);
  this_audio.pause();
  this_audio.currentTime() = 0;
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------