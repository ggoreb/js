'use strict';

function change() {
  document.getElementById("demo").innerHTML = "change";
}
function run(event) {
  // 출력방법!
  console.log(event);
  if(event.keyCode == 65) {
    document.body.style.backgroundColor = '#ff0000';
  } else if(event.keyCode == 66) {
    document.body.style.backgroundColor = 'blue';
  }
}