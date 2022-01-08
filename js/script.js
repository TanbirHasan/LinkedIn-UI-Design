var see = document.getElementById("more");
var dotbtn = document.getElementById("dots");
see.style.display = "none";

seeMore = () => {
  see.style.display = "block";
  dotbtn.style.display = "none";
};

var up = document.getElementById("privacy-up");
var down = document.getElementById("privacy-down");
var dropdown = document.getElementById("privacy-drop-down");
up.style.display = "none";
dropdown.style.visibility = "hidden";

privacyArrowDown = () => {
  if (down.style.display != "none") {
    down.style.display = "none";
    up.style.display = "inline-block";
    dropdown.style.visibility = "visible";
  } else {
    down.style.display = "inline-block";
  }
};

privacyArrowup = () => {
  if (up.style.display != "none") {
    up.style.display = "none";
    dropdown.style.visibility = "hidden";
    down.style.display = "inline-block";
  } else {
    up.style.display = "inline-block";
  }
};

var dropNav = document.getElementById("profile-nav");
dropNav.style.display = "none";
var NavProfileDetails = false;
profileNav = () => {
  if (NavProfileDetails === false) {
    NavProfileDetails = true;
  } else {
    NavProfileDetails = false;
  }
  if (NavProfileDetails === true) {
    dropNav.style.display = "block";
  } else {
    dropNav.style.display = "none";
  }
};





// style for sharenavsection 


var sharepost = document.getElementsByClassName("sharepost");
sharepost.style.display = "none";






function postshare(){
  var post = document.getElementById("sharepost");
  post.style.display = "block";
  var overlay = document.getElementById("overlay");
  var innerbody = document.getElementById("innerbody")
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.205)"
  overlay.style.zIndex = "1000"
  overlay.style.position = "absoulate";
  overlay.style.height = "100%";
  overlay.style.width = "100%";
  overlay.style.top = "0%";
  overlay.style.left = "0%";
  innerbody.style.zIndex = "-1"
}

var crossbutton = document.getElementById("cross");

function buttonclicked(){
  var post = document.getElementById("sharepost");
  post.style.display = "none";
  
}









function showdetails(){
  var details = document.getElementById("details");
  console.log("button clicked");
  details.classList.toggle("show");



}



function showdetailstwo(){
  var detailstwo = document.getElementById("detailstwo");
  console.log("button clicked");
  detailstwo.classList.toggle("show");
}



function showdetailsthree(){
  var detailsthree = document.getElementById("detailsthree");
  console.log("button clicked");
  detailsthree.classList.toggle("show");
}



function showdetailsfour(){
  var detailsfour = document.getElementById("detailsfour");
  console.log("button clicked");
  detailsfour.classList.toggle("show");
}




