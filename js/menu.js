function openNav() {
  document.getElementById("right-menu").style.display = "inherit";
  document.getElementById("right-menu").style.transition = ".8s";
  document.getElementById("content").style.marginRight = "25vw";
  document.getElementById("content").style.position = "absolute";
  document.getElementById("f2").style.display = "none";
  document.getElementById("footer").style.width = "-webkit-fill-available";
  /*document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("footer").style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("imgback").style.backgroundImage = "rgba(0,0,0,0.4)";*/
}

function closeNav() {
  /*document.getElementById("footer").style.backgroundColor = "rgb(0,0,0,0.9)";
  document.body.style.backgroundColor = "white";*/
  document.getElementById("f2").style.display = "";
  document.getElementById("content").style.margin = "0";
  document.getElementById("right-menu").style.display = "none";
}