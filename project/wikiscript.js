// ==UserScript==
// @name        Wiki Plugin
// @namespace   http://k5.com
// @include     *
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1
// @version     1
// ==/UserScript==
 
 if(window.location.href()> 0) //If it is a valid video
{
    var userName="";
    var title="";
    var userVideos="";
    var views="";
    
    var div=document.createElement("div");
    div.setAttribute("style",";border:1px solid red;padding:50px 10px 10px 100px;");
    div.innerHTML ="<h1>"+title+"</h1><br>";
    div.innerHTML +="<b>Uploaded By:</b>"+userName+"<br>";
    div.innerHTML +="<b>Uploaded Videos: </b>"+userVideos+"<br>";
    div.innerHTML +="<b>Total Views: </b>"+views+"<br>";
    document.body.insertBefore(div,document.body.firstChild);
 
    //hide sidebar
    var sidebar = document.getElementById("watch7-sidebar");
    if(sidebar)
    {
        sidebar.style.display="none";
    }
}