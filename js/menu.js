function openNav() {
  document.getElementById("right-menu").style.display = "inherit";
  document.getElementById("content").style.marginRight = "25vw";
  document.getElementById("content").style.position = "absolute";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("content").style.margin = "0";
  document.getElementById("right-menu").style.display = "none";
  document.body.style.backgroundColor = "white";
}