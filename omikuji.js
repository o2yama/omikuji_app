var username;
var result;

username = prompt('名前を入力してください。\nOKを押すとおみくじが引けます。');
if (username == '') {
  username = '名無し';
}
document.getElementById("name").innerHTML = username;


var luck = Math.floor( Math.random() * 5);
if (luck == 0) {
  result = '大吉';
  document.getElementById("result").style.color = 'red';
}
if (luck == 1) {
  result = '中吉';
  document.getElementById("result").style.color = 'orange';
}
if (luck == 2) {
  result = '小吉';
  document.getElementById("result").style.color = 'yellow';
}
if (luck == 3) {
  result = '凶';
  document.getElementById("result").style.color = 'blue';
}
if (luck == 4) {
  result = '大凶';
  document.getElementById("result").style.color = 'purple';
}
document.getElementById("result").innerHTML = result;