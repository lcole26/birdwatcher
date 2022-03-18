// // import { newMessage, newMessageWithLink, lol } from "./utilities.js";
// import * as utilities from "./utilities.js";

// function kekw(msg_end_id) {
//   document.getElementById(msg_end_id).innerHTML += "sheee";
//   // utilities.newMessageWithLink();
// }

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
  return new Howl({
    src: [
      // "media/audio/Serial Experiments Lain - Powerline Noise.mp3",
      "../media/audio/545372__stwime__up3.ogg",
    ],
    volume: 0.5,
    html5: true,
  });
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

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
//story messaging stuff
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
  user_class,
  message_id,
  msg_end_marker,
  time_offset,
  msg_sound
) {
  // let end_mark = document.getElementById(message_marker_elem_id);
  // let user_msg = document.getElementById(user_msg);
  let msg = format(sms_msg_format, {
    username: user,
    msg: user_msg,
    msg_end_marker: msg_end_marker,
  });

  let new_paragraph_obj = document.createElement("p");
  if (message_id != null) {
    new_paragraph_obj.setAttribute("id", message_id);
  }
  new_paragraph_obj.setAttribute("class", user_class);
  let new_text_node_obj = document.createTextNode(user_msg);
  let f = document.crea;

  setTimeout(() => {
    // end_mark.innerHTML += user_msg;
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
