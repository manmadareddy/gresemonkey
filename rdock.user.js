// ==UserScript==
// @name        rdock.user.js
// @namespace   me
// @include     https://*.yahoo.com/
// @include     http://*.yahoo.com/
// @version     1
// @grant       none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
addGlobalStyle('#rdock-ad{outline:1px solid #ccc;width:25px;font-size:24px;text-align:center; position: fixed;top:20%;right:5px;}');
addGlobalStyle('#rdock-ad a{text-decoration: none;}');

arr = [];

arr[0] = '<a href="https://search.yahoo.com">Y A H O O  S E A R C H</a>';
arr[1] = '<a href="https://search.yahoo.com">Y A H O O  F I N A N C E  </a>';
arr[2] = '<a href="https://mobile.yahoo.com/yahoo/?src=gta">Y A H O O  A P P  </a>';
arr[3] = '<a href="https://www.yahoo.com/bin/set">M A K E  Y A H O O  H O M E P A G E</a>';

arr[4] = '<a href="https://help.yahoo.com/kb/helpcentral">N E E D  H E L P ?</a>';
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var div=document.createElement("div");
div.setAttribute('id','rdock-ad');
    
document.body.insertBefore(div,document.body.firstChild);
setInterval(function(){
    var i = getRandomInt(0, arr.length);
    div.innerHTML =arr[i];
},3000);
