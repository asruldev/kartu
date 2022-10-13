var btn = document.getElementById("share-btn");
var node = document.getElementById("card");
var cover = document.getElementById("cover");

document.getElementById("cover").addEventListener("click", function () {
  cover.style.transform = "rotateY(-130deg)";
  node.style.transform = "rotate(0deg)";
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var msg = document.getElementById("msg")
if(urlParams.get('m')) {
  msg.innerText = urlParams.get('m')
}

var tw = document.getElementById("tw")
msg.addEventListener("keyup", function() {
  tw.setAttribute("data-title", "Fakultas Kedokteran Ruang Guru")
  tw.setAttribute("data-url", window.location.href + `?m=${encodeURIComponent(msg.innerHTML)}`)
})
