//=======variables and constants=========

let x  = "5"
let y = 5
const g = 45
const h = "Crazy"

//======functions======

function drawing (h){
    console.log("draw " + h)
}
drawing(h)

//========events=========

function SayHi(){
    console.log("Hi!!")
}

//=========conditional statements===========

if (y>g) {
    console.log("g is greater")
} else if(y==g) {
    console.log("y is equal to g")
} else {
    console.log("y is smaller than g")
}

//===============loops===================

for(let i = 0; i<=10; i++){
    console.log("Hello " + i)
}

//====================DOM Manipulation==================

function changeText(){
    document.getElementById("message").innerText="Changed"
}
//=====================Bad Words Test======================
const leoProfanity  = require("leo-profanity");
console.log(leoProfanity.clean("This is a fucking mess."));



//======================HTML====================================



<!DOCTYPE html>
<html lang="en">
<head>
  <title>Inner Harbor Forum</title>
  <link rel="stylesheet" href="IHF.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Time Modules -->
  <script src="https://cdn.jsdelivr.net/npm/dayjs/dayjs.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dayjs/plugin/relativeTime.js"></script>
  <!-- Leo Profanity -->
</head>
<body>
  <div class="background-overlay"></div>
  <div id="loader"></div>
  <div class="snow"></div>
  <div id="form-container">
    <h1 class="typing">Inner Harbor Forum</h1>
    <input type="text" placeholder="Your Name (optional)" id="name">
    <br>
    <textarea placeholder="Your message.." id="message" maxlength="1000" rows="4" cols="5"></textarea>
    <br>
    <button id="post-button" class="button-animate">Post</button>
    <p id="char-count">0 / 1000 characters</p>
    <p id="post-count">0 thoughts floated through today’s harbor.</p>
  </div>
  <div id="posts"></div>
  <button class="darkmode button-animate" onclick="activateDarkMode()">✧ Toggle Mode</button>
  <div id="lantern-container"></div>

  <!-- Admin Login Toggle Button -->
  <button id="admin-toggle">Admin Login</button>
  <div id="login-panel">
    <input type="email" id="admin-email" placeholder="Admin Email">
    <input type="password" id="admin-password" placeholder="Password">
    <button id="login-btn">Login</button>
  </div>

  <!-- JavaScript Module File -->
  <script type="module" src="IHF.js"></script>

  <!-- Inline JS for basic toggle -->
  <script>
    function activateDarkMode() {
      document.body.classList.toggle("dark-mode");
    }
  </script>
</body>
</html>
