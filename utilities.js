// ---------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * References Cited:
 * https://stackoverflow.com/questions/14926306/javascript-play-sound-on-hover-stop-and-reset-on-hoveroff 
 * 
 */
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * getter/setter stuff
 */

function CheckForValue(item) {
  return sessionStorage.getItem(item);
}
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
function AddSessionStorage(itemName, item) {
  sessionStorage.setItem(itemName, item);
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// text-specific stuff
function StrikeText(elem_id) {
  // var el = document.querySelector(".strike_target");
  document.getElementById(elem_id).style.setProperty('text-decoration', 'line-through');
}

var st = function () {
  alert(this.name);
}

// swiped from https://stackoverflow.com/questions/1038746/equivalent-of-string-format-in-jquery/2648463#2648463
// t's just easier for format stuff this way
var format = function (str, col) {
  col = typeof col === 'object' ? col : Array.prototype.slice.call(arguments, 1);

  return str.replace(/\{\{|\}\}|\{(\w+)\}/g, function (m, n) {
      if (m == "{{") { return "{"; }
      if (m == "}}") { return "}"; }
      return col[n];
  });
};

function newMessage(message_marker_elem_id, user, message) {
  var end_mark = document.getElementById(message_marker_elem_id);
  var msg = format("");
}

