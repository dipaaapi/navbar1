function openNav() {
  document.getElementById("f1").style.width = "35vw";
  document.getElementById("f3").style.width = "35vw";
  document.getElementById("footer").style.width = "74vw";
  document.getElementById("footer").style.zIndex = "-1";
  document.getElementById("f2").style.display = "none";
  document.getElementById("right-menu").style.display = "inherit";
  /*document.getElementById("right-menu").style.transition = "2s";
  document.getElementById("right-menu").style.width = "25vw";*/
  document.getElementById("content").style.position = "inherit";
  document.getElementById("content").style.display = "initial";
  document.getElementById("content").style.height = "auto";
  document.getElementById("content").style.width = "74vw";
  document.getElementById("p1-profile").style.paddingTop = "8vh";
  document.getElementById("p1-profile").style.width = "74vw";
  document.getElementById("p2-profile").style.width = "74vw";
  document.getElementById("footer").style.width = "-webkit-fill-available";
  document.getElementById("imgback").style.width = "100%";
  document.getElementById("imgback").style.borderRadius = "50px";
  document.getElementById("img-a").style.padding = "0";
  document.getElementById("img-a").style.width = "50%";
  /*document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("footer").style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("imgback").style.backgroundImage = "rgba(0,0,0,0.4)";*/
}

function closeNav() {
  /*document.getElementById("footer").style.backgroundColor = "rgb(0,0,0,0.9)";
  document.body.style.backgroundColor = "white";*/
  document.getElementById("imgback").style.borderRadius = "50%";
  document.getElementById("img-a").style.width = "";
  document.getElementById("p1-profile").style.width = "100%";
  document.getElementById("p2-profile").style.width = "100%";
  document.getElementById("footer").style.width = "-webkit-fill-available";
  document.getElementById("footer").style.padding = "0";
  document.getElementById("footer").style.margin = "0";
  document.getElementById("content").style.width = "100%";
  document.getElementById("f2").style.display = "";
  document.getElementById("content").style.margin = "0";
  document.getElementById("content").style.padding = "0";
  document.getElementById("right-menu").style.display = "none";
}