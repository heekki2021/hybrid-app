// function keylog(e) {
//     console.log(e);
//   }
//   window.addEventListener("keydown", keylog);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1050;
canvas.height = 1050;
canvas.style.backgroundColor = "#C0EEE4";

class PosVector {
  constructor(x, y) {
    this.PosX = x;
    this.PosY = y;
  }
}

// ctx.fillStyle = 'black'
// ctx.fillRect(150, 150, 750, 750);

const _4by4Pos = new Array(4);
for (var i = 0; i < _4by4Pos.length; i++) {
  _4by4Pos[i] = new Array(4);
}

const _4by4block = new Array(4);
for (var i = 0; i < _4by4Pos.length; i++) {
  _4by4block[i] = new Array(4);
}

const ub = new Array(16);

//배열 16개 생성후 PosVector 오브젝트를 담아줌. x,y값을 사용할 수 있게
const PVarr = new Array(16);
var k = 0;
var w = 180;
var h = 180;

for (var i = 0; i < 4; i++) {
  w = 180;
  for (var j = 0; j < 4; j++) {
    PVarr[k] = new PosVector(w, h);
    w += 180;
    k += 1;
  }
  h += 180;
}

const x = 150;
const y = 150;
const width = 750;
const height = 900;
const radius = 20;

//시작
ctx.beginPath();
ctx.moveTo(x + radius, y);

//우측 상단 모서리
ctx.lineTo(x + width - radius, y);
ctx.quadraticCurveTo(x + width, y, x + width, y + radius);

//우측 하단 모서리
ctx.lineTo(x + width, height - radius);
ctx.quadraticCurveTo(x + width, height, x + width - radius, height);

//좌측 하단 모서리
ctx.lineTo(x + radius, height);
ctx.quadraticCurveTo(x, height, x, height - radius);

//좌측 상단 모서리
ctx.lineTo(x, y + radius);
ctx.quadraticCurveTo(x, y, x + radius, y);
ctx.closePath();

// 도형 색칠하기
ctx.fillStyle = "#F8F988";
ctx.fill();

class baseBlock {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  createBlock() {
    ctx.beginPath();
    ctx.fillStyle = "#FFCAC8";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class block {
  constructor(PosX, PosY, width, height) {
    this.x = PosX;
    this.y = PosY;
    this.width = width;
    this.height = height;
    this.onOff = false;
    this.value = 0;
  }
  createBlock_0() {
    this.value = 0;
    this.onOff = false;
    ctx.beginPath();
    ctx.fillStyle = "#FFCAC8";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  // #FFCAC8
  createBlock_2() {
    this.value = 2;
    this.onOff = true;
    ctx.beginPath();
    ctx.fillStyle = "#64767A";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal bold 100px Arial, sans-serif";
    ctx.fillText(this.value, this.x + 47, this.y + 110);
  }

  createBlock_4() {
    this.value = 4;
    this.onOff = true;
    ctx.beginPath();
    ctx.fillStyle = "#71ABB8";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal bold 100px Arial, sans-serif";
    ctx.fillText(this.value, this.x + 47, this.y + 110);
  }

  createBlock_8() {
    this.value = 8;
    this.onOff = true;
    ctx.beginPath();
    ctx.fillStyle = "#71CDE1";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal bold 100px Arial, sans-serif";
    ctx.fillText(this.value, this.x + 47, this.y + 110);
  }

  createBlock_16() {
    this.value = 16;
    this.onOff = true;
    ctx.beginPath();
    ctx.fillStyle = "#39D6F8";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal bold 100px Arial, sans-serif";
    ctx.fillText(this.value, this.x + 47, this.y + 110);
  }
}

k = 0;
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    _4by4block[i][j] = new block(PVarr[k].PosX, PVarr[k].PosY, 150, 150);
    k += 1;
  }
}

function start() {
  var oneOrTwo = Math.floor(Math.random() * 2) + 1;

  if (oneOrTwo == 1) {
    var _2or4 = Math.floor(Math.random() * 2) + 1;
    if (_2or4 == 1) {
      var row = Math.floor(Math.random() * 4);
      var column = Math.floor(Math.random() * 4);

      _4by4block[row][column].createBlock_2();
    } else if (_2or4 == 2) {
      var row = Math.floor(Math.random() * 4);
      var column = Math.floor(Math.random() * 4);

      _4by4block[row][column].createBlock_4();
    }
  } else if (oneOrTwo == 2) {
    var overlap = false;
    const row1 = new Array(2);
    const column1 = new Array(2);

    for (var i = 0; i < 2; i++) {
      var num = Math.floor(Math.random() * 4);
      for (var j in row1) {
        if (num == row1[j]) {
          overlap = true;
        }
      }
      row1[i] = num;
    }

    for (i = 0; i < 2; i++) {
      var num = Math.floor(Math.random() * 4);
      if (overlap == true) {
        for (var j in column1) {
          while (num == column1[j]) {
            num = Math.floor(Math.random() * 4);
          }
        }
        column1[i] = num;
      } else if (overlap == false) {
        column1[i] = num;
      }
    }

    _4by4block[row1[0]][column1[0]].createBlock_2();
    _4by4block[row1[1]][column1[1]].createBlock_4();
  }
}

function getKey() {
  addEventListener("keydown", function (e) {
    if (e.code == "ArrowUp") {
      blockMoveUp();
      console.log(e);
    }
    if (e.code == "ArrowDown") {
      console.log(e);
    }
    if (e.code == "ArrowLeft") {
      console.log(e);
    }
    if (e.code == "ArrowRight") {
      console.log(e);
    }
  });
}

function blockMoveUp() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (_4by4block[i][j].onOff == true && i == 1) {
        if (_4by4block[i][j].value == 2) {
          _4by4block[i - 1][j].createBlock_2();
          _4by4block[i][j].createBlock_0();
        }
        if (_4by4block[i][j].value == 4) {
          _4by4block[i - 1][j].createBlock_4();
          _4by4block[i][j].createBlock_0();
        }
      } else if (_4by4block[i][j].onOff == true && i == 2) {
        if (_4by4block[i][j].value == 2) {
          _4by4block[i - 1][j].createBlock_2();
          _4by4block[i][j].createBlock_0();
        }

        if (_4by4block[i][j].value == 4) {
          _4by4block[i - 1][j].createBlock_4();
          _4by4block[i][j].createBlock_0();
        }
      } else if (_4by4block[i][j].onOff == true && i == 3) {
        if (_4by4block[i][j].value == 2) {
          _4by4block[i - 1][j].createBlock_2();
          _4by4block[i][j].createBlock_0();
        }
        if (_4by4block[i][j].value == 4) {
          _4by4block[i - 1][j].createBlock_4();
          _4by4block[i][j].createBlock_0();
        }
      }
    }
  }
}

// row1
var bb1 = new baseBlock(180, 180, 150, 150);
bb1.createBlock();

var bb2 = new baseBlock(360, 180, 150, 150);
bb2.createBlock();

var bb3 = new baseBlock(540, 180, 150, 150);
bb3.createBlock();

var bb4 = new baseBlock(720, 180, 150, 150);
bb4.createBlock();

// row2
var bb5 = new baseBlock(180, 360, 150, 150);
bb5.createBlock();

var bb6 = new baseBlock(360, 360, 150, 150);
bb6.createBlock();

var bb7 = new baseBlock(540, 360, 150, 150);
bb7.createBlock();

var bb8 = new baseBlock(720, 360, 150, 150);
bb8.createBlock();

// row3
var bb9 = new baseBlock(180, 540, 150, 150);
bb9.createBlock();

var bb10 = new baseBlock(360, 540, 150, 150);
bb10.createBlock();

var bb11 = new baseBlock(540, 540, 150, 150);
bb11.createBlock();

var bb12 = new baseBlock(720, 540, 150, 150);
bb12.createBlock();

// row4
var bb13 = new baseBlock(180, 720, 150, 150);
bb13.createBlock();

var bb14 = new baseBlock(360, 720, 150, 150);
bb14.createBlock();

var bb15 = new baseBlock(540, 720, 150, 150);
bb15.createBlock();

var bb16 = new baseBlock(720, 720, 150, 150);
bb16.createBlock();

start();
getKey();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(animate);
}
