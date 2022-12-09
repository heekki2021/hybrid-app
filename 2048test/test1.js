var change = document.getElementsByClassName('testclass')[0];
change.style.color = 'orange';
change.style.width = 500;
change.style.height = 400;

function keylog(e) {
    console.log(e);
  }

addEventListener("keydown", keylog)

var lotto = [];

for(var i=0; i<6; i++){
  var num = Math.floor(Math.random()*44) + 1;

  for(var j in lotto){
    while(num == lotto[j]){
      num = Math.floor(Math.random() * 44) + 1;
    }
  }

  lotto.push(num);
}