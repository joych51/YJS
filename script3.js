

function send() {
  var text = document.getElementById("chattingBox").value;
  document.getElementsByClassName("mid_top").innerText += text;
  alert(text);
}
