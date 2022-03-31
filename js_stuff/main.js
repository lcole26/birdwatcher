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
 * Message posting stuff ref:
 *  https://stackoverflow.com/questions/42158073/how-to-create-and-append-text-in-the-body-using-javascript
 *  https://stackoverflow.com/questions/4851699/setting-the-id-attribute-of-an-input-element-dynamically-in-ie-alternative-for
 *  https://www.codegrepper.com/code-examples/javascript/how+to+add+a+paragraph+in+html+using+javascript
 * https://stackoverflow.com/questions/29182736/creating-link-in-javascript-and-integrating-it-into-createtextnode
 */
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
/**library loading stuff */
// const f = require('../node_modules/howler/src/howler.core');
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * getter/setter stuff
 * 
 */
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
var base_url = window.location.origin;
// var base_directory = window.location.pathname.split('/').find(el => el !== "");
var base_directory = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname.split("/")[0] + "/";

var msg_end_marker = "+++";
var sms_msg_format =
  '<p class="user.{username}">{msg}<br><br> {msg_end_marker}</p>';
var sms_received_sound;
const sound_urls = {
  // sms_received_sound_url: base_url + "/" + base_directory + "/media/audio/545372__stwime__up3.ogg",
  sms_received_sound_url: "../media/audio/545372__stwime__up3.ogg",
};

const users = {
  klause: "user_klause",
  klause_img: "user_klause_img",
  boma: "user_boma",
  secondwind: "user_secondwind",
  harakiri_salaryman: "user_harakiri_salaryman",
  mog: "user_mog",
  unknown_entity: "unknown_entity",

  // various
  a_barcode_font_nolink: "a_barcode_font_nolink"
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
/**
 *
 * @returns
 */
var SetUpMsgReceivedAudio = function () {
  return new Howl({
    src: [
      // "media/audio/Serial Experiments Lain - Powerline Noise.mp3",
      sound_urls.sms_received_sound_url,
    ],
    html5: true,
  });
};

var SetUpMsgReceivedAudioFromURL = function (url) {
  return new Howl({
    src: [
      // "media/audio/Serial Experiments Lain - Powerline Noise.mp3",
      url,
    ],
    html5: true,
  });
};

var updateVolume = function (sound, new_volume) {
  sound.volume(new_volume);
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 *
 * @param {*} itemName
 * @param {*} item
 */
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
 * @param {*} msg_id
 * @param {*} timeout_factor
 */
function showMessageonTimer(msg_id, timeout_factor) {
  let msg = document.getElementById(msg_id);
  setTimeout(() => {
    // if (msg != null && msg.getAttribute("hidden").equals(true)) {
    //   msg.setAttribute("hidden", false);
    // }
    // msg.hidden = false;
    msg.style.display = "block";
    sound.play();
  }, timeout_factor * 1000);
  // if (msg != null && msg.getAttribute("hidden").equals("hidden")) {
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

/**
 * 
 * @param {*} user_class 
 * @param {*} new_message_id 
 * @param {*} time_offset 
 * @param {*} user_msg 
 * @param {*} msg_sound 
 */
var postNewMessage = function (
  user_class,
  new_message_id,
  time_offset,
  user_msg,
  msg_sound
) {
  let new_paragraph_obj = document.createElement("p");
  let new_text_node_obj = document.createTextNode(user_msg);

  setTimeout(() => {
    new_paragraph_obj.id = new_message_id;
    new_paragraph_obj.className = user_class;
    new_paragraph_obj.appendChild(new_text_node_obj);
    document.body.appendChild(new_paragraph_obj);
    if (msg_sound != null) {
      msg_sound.play();
    }
  }, time_offset * 1000);
};

/**
 * 
 * @param {*} user_class 
 * @param {*} new_message_id 
 * @param {*} time_offset 
 * @param {*} user_msg 
 * @param {*} msg_sound 
 */
var postNewMessageWithHTML = function (
  user_class,
  new_message_id,
  time_offset,
  user_msg,
  msg_sound
) {
  let new_paragraph_obj = document.createElement("p");
  let new_text_node_obj = document.createTextNode(user_msg);

  setTimeout(() => {
    new_paragraph_obj.id = new_message_id;
    new_paragraph_obj.className = user_class;
    new_paragraph_obj.innerHTML = user_msg;
    // new_paragraph_obj.appendChild(new_text_node_obj);
    document.body.appendChild(new_paragraph_obj);

    if (msg_sound != null) {
      msg_sound.play();
    }
  }, time_offset * 1000);
};

/**
 * 
 * @param {*} user_class 
 * @param {*} message_id 
 * @param {*} time_offset 
 * @param {*} new_user_msg 
 * @param {*} msg_sound 
 */
var appendNewMessage = function (
  user_class,
  message_id,
  time_offset,
  new_user_msg,
  msg_sound
) {
  setTimeout(() => {
    let _new_msg = document.createElement('p');
    _new_msg.className = user_class;
    _new_msg.innerHTML = new_user_msg;
    document.getElementById(message_id).appendChild(_new_msg);
    // document.getElementById(message_id).insertAdjacentHTML('beforeend', _new_msg.innerHTML);

    if (msg_sound != null) {
      msg_sound.play();
    }
  }, time_offset * 1000);
};

/**
 * 
 * @param {*} user_class 
 * @param {*} message_id 
 * @param {*} time_offset 
 * @param {*} new_user_msg 
 * @param {*} msg_sound 
 */
var replaceMessageOnIdTag = function (
  user_class,
  message_id,
  time_offset,
  new_user_msg,
  msg_sound
) {
  setTimeout(() => {
    let _new_msg = document.createElement('p');
    _new_msg.className = user_class;
    _new_msg.innerHTML = new_user_msg;
    // let f = document.getElementById(message_id);
    document.getElementById(message_id).innerHTML = _new_msg.innerHTML;

    if (msg_sound != null) {
      msg_sound.play();
    }
  }, time_offset * 1000);
};

function newMessageWithLink() {
  return "kekw";
}

function lol() {
  console.log("lol");
  document.write("lmao2");
}

// export { format, newMessage, newMessageWithLink, lol };
