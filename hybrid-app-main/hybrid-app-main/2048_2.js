function keylog(e) {
  console.log(e);
}
window.addEventListener("keydown", keylog);

// var change = document.getElementsByClassName('upBlock')[0];
// change.style.color = 'red';

const fbyf = [4][4];
// const newDiv = document.createElement("div");
// const newText = document.createTextNode('안녕하세요');
// newDiv.appendChild(newText);
// document.body.appendChild(newDiv);

// newDiv.style.width = 40
// newDiv.style.height = 40
// newDiv.style.color = 'red'


class block {

  constructor() {
    this.value = 0;
    this.color = "red";
    this.Bwidth = 50;
    this.Bheigh = 50;

  
  }

  createBlock() {
    const newDiv = document.createElement("div");
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


var b1 = new block();
b1.createBlock();