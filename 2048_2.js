function keylog(e) {
  console.log(e);
}
window.addEventListener("keydown", keylog);

const items = [];

var fbyf = new Array(4);

for (var i = 0; i < fbyf.length; i++){
  fbyf[i] = new Array(4);
}

for(var i = 0; i < 16; i++){
  items[i] = document.getElementsByClassName('item')[i];
}


var itemCount = 0;

// fbyf[0][1] = items[1];

// items[1].style.color = 'red'

for(var i = 0; i < 5; i++)
{
  
  for(var j = 0; j < 5; j++){
    fbyf[i][j] = 1;
    
    itemCount++;
  }
  
}


class block {

  constructor() {
    this.value = 0;
    this.color = "red";
    this.Bwidth = 50;
    this.Bheigh = 50;
  }

  createBlock(){
    const newDiv = document.createElement("div");
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.color = this.color;
    newDiv.style.background = 'green';
    newDiv.innerHTML = 'test5';
    newDiv.style.display = 'inline-block'
    
    document.getElementById('container').appendChild(newDiv);
  }
}

function start(){
  var oneOrTwo = Math.floor(Math.random()*3);

  if(oneOrTwo == 1){
      var row = Math.floor(Math.random()*5);
      var column = Math.floor(Math.random()*5);

      fbyf[row][column].style.color = "red";

  }
}


var b1 = new block();
b1.createBlock();