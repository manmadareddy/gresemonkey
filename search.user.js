// ==UserScript==
// @name        search.user.js
// @namespace   me
// @include     https://search.yahoo.com/*
// @version     1
// @grant       none
// ==/UserScript==
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var keyword = getParameterByName('p'),
    actKey = '',
    url    = '',
    actUrl = '',
    domain = '',
    verticals = ["images","video","news","local","maps"];
    lastIndex = keyword.lastIndexOf("@");
if(lastIndex !=-1){
   actKey = keyword.substr(0,lastIndex);
   domain = keyword.substr(lastIndex+1);

   if(domain && verticals.indexOf(domain) !=-1){
       actUrl = document.location;
       url = actUrl.protocol+'//' + domain +'.search.yahoo.com'+ actUrl.pathname;
       url += location.search.replace('p='+encodeURIComponent(keyword).replace('%20','+'),'p='+actKey);
      console.log(location.search);
      console.log(encodeURIComponent(keyword).replace('%20','+'));
      console.log(url);

       document.location = url;
   }
}
