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
var msg_end_marker = "+++";
var sms_msg_format =
  '<p class="user.{username}">{msg}<br><br> {msg_end_marker}</p>';
var sms_received_sound;
const sound_urls = {
  sms_received_sound_: "/media/audio/545372__stwime__up3.ogg",
};

const users = {
  klause: "klause",
  boma: "boma",
  secondwind: "secondwind",
  harakiri_salaryman: "harakiri_salaryman",
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
function CheckForValue(item) {
  return sessionStorage.getItem(item);
}
/*
 * https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission
 *
 */
function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then((stream) => {
      window.localStream = stream;
      window.localAudio.srcObject = stream;
      window.localAudio.autoplay = true;
    })
    .catch((err) => {
      console.log("u got an error:" + err);
    });
}

var SetUpMsgReceivedAudio = function () {
  // msgReceivedAudio = new audio
  // var sms_chirp = new Howl
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
function AddSessionStorage(itemName, item) {
  sessionStorage.setItem(itemName, item);
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// text-specific stuff
/**
 *
 * @param {*} elem_id
 */
function StrikeText(elem_id) {
  // var el = document.querySelector(".strike_target");
  document
    .getElementById(elem_id)
    .style.setProperty("text-decoration", "line-through");
}

/**
 *
 * @param {*} str
 * @param {*} col
 * @returns
 * swiped from https://stackoverflow.com/questions/1038746/equivalent-of-string-format-in-jquery/2648463#2648463
 * it's just easier for format stuff this way.
 *
 * Usage:
 * format("i can speak {language} since i was {age}",{language:'javascript',age:10});
 * format("i can speak {0} since i was {1}",'javascript',10});
 */
var format = function (str, col) {
  col =
    typeof col === "object" ? col : Array.prototype.slice.call(arguments, 1);

  return str.replace(/\{\{|\}\}|\{(\w+)\}/g, function (m, n) {
    if (m == "{{") {
      return "{";
    }
    if (m == "}}") {
      return "}";
    }
    return col[n];
  });
};

var newMessage = function (
  message_marker_elem_id,
  user,
  message_id,
  msg_end_marker,
  time_offset
) {
  var end_mark = document.getElementById(message_marker_elem_id);
  var user_msg = document.getElementById(user_msg);
  var msg = format(sms_msg_format, {
    username: user,
    msg: user_msg,
    msg_end_marker: msg_end_marker,
  });
  setTimeout(() => {
    end_mark.innerHTML += user_msg;
  }, time_offset);
};

function newMessageWithLink() {
  return "kekw";
}

function lol() {
  console.log("lol");
  document.write("lmao2");
}

// export { format, newMessage, newMessageWithLink, lol };
