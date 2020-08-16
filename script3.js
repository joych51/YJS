

function send() {
  var text = document.getElementById("chattingBox").value;
  document.getElementById("textBox").innerHTML += `<br>`;
  document.getElementById("textBox").innerText += text;

  document.getElementById("chattingBox").value ="";

}
