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
const radius = 30;

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
    ctx.fillText(this.value, this.x + 17, this.y + 110);
  }

  createBlock_32() {
    this.value = 32;
    this.onOff = true;
    ctx.beginPath();
    ctx.fillStyle = "#5cf7d3";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal bold 100px Arial, sans-serif";
    ctx.fillText(this.value, this.x + 17, this.y + 110);
  }

  createBlock_64() {
    this.value = 64;
    this.onOff = true;
    ctx.beginPath();
    ctx.fillStyle = "#5cf7a4";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal bold 100px Arial, sans-serif";
    ctx.fillText(this.value, this.x + 17, this.y + 110);
  }

  createBlock_128() {
    this.value = 128;
    this.onOff = true;
    ctx.beginPath();
    ctx.fillStyle = "#5cf75c";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal bold 80px Arial, sans-serif";
    ctx.fillText(this.value, this.x + 10, this.y + 110);
  }

  createBlock_256() {
    this.value = 256;
    this.onOff = true;
    ctx.beginPath();
    ctx.fillStyle = "#b1f75c";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal bold 80px Arial, sans-serif";
    ctx.fillText(this.value, this.x + 10, this.y + 110);
  }

  createBlock_512() {
    this.value = 512;
    this.onOff = true;
    ctx.beginPath();
    ctx.fillStyle = "#eff75c";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal bold 80px Arial, sans-serif";
    ctx.fillText(this.value, this.x + 10, this.y + 110);
  }

  createBlock_1024() {
    this.value = 1024;
    this.onOff = true;
    ctx.beginPath();
    ctx.fillStyle = "#f7d55c";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal bold 60px Arial, sans-serif";
    ctx.fillText(this.value, this.x + 10, this.y + 110);
  }

  createBlock_2048() {
    this.value = 2048;
    this.onOff = true;
    ctx.beginPath();
    ctx.fillStyle = "#f79d5c";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal bold 60px Arial, sans-serif";
    ctx.fillText(this.value, this.x + 10, this.y + 110);
  }

  createBlock_4096() {
    this.value = 2048;
    this.onOff = true;
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "normal bold 60px Arial, sans-serif";
    ctx.fillText(this.value, this.x + 10, this.y + 110);
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

// var MoveCheck_Up = true;
// var MoveCheck_Down = true;
// var MoveCheck_Left = true;
// var MoveCheck_Right = true;

function getKey() {
  addEventListener("keydown", function (e) {
    if (e.code == "ArrowUp") {
      var before = new Array(16);
      var after = new Array(16);
      var k = 0;
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          before[k] = _4by4block[i][j].value;
          k++;
        }
      }
      k = 0;
      blockMoveUp();
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          after[k] = _4by4block[i][j].value;
          k++;
        }
      }
      k = 0;
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (before[k] != after[k]) {
            randomBlock();
            return;
          }
          k++;
        }
      }

      console.log(e);
    }
    if (e.code == "ArrowDown") {
      var before = new Array(16);
      var after = new Array(16);
      var k = 0;
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          before[k] = _4by4block[i][j].value;
          k++;
        }
      }
      k = 0;
      blockMoveDown();
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          after[k] = _4by4block[i][j].value;
          k++;
        }
      }
      k = 0;
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (before[k] != after[k]) {
            randomBlock();
            return;
          }
          k++;
        }
      }

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

var totalScore = 0;

function randomBlock() {
  var randomRow = Math.floor(Math.random() * 4);
  var randomColumn = Math.floor(Math.random() * 4);
  switch (_4by4block[randomRow][randomColumn].onOff) {
    case true:
      randomBlock();
      break;
    case false:
      var _2or4 = Math.floor(Math.random() * 4);
      switch (_2or4) {
        case 0:
          _4by4block[randomRow][randomColumn].createBlock_2();
          break;
        case 1:
          _4by4block[randomRow][randomColumn].createBlock_2();
          break;
        case 2:
          _4by4block[randomRow][randomColumn].createBlock_2();
          break;
        case 3:
          _4by4block[randomRow][randomColumn].createBlock_4();
      }
      break;
  }
}

function blockMoveUp() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      switch (_4by4block[i][j].value) {
        case 2:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 1:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_2();
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 2) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_4();

                    totalScore += 4;
                  }
                  break;
              }
              break;

            case 2:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_2();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_2();
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 2) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_4();

                        totalScore += 4;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 2) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_4();

                    totalScore += 4;
                  }
                  break;
              }

              break;

            case 3:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_2();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_2();
                      switch (_4by4block[i - 3][j].onOff) {
                        case false:
                          _4by4block[i - 2][j].createBlock_0();
                          _4by4block[i - 3][j].createBlock_2();
                          break;
                        case true:
                          if (_4by4block[i - 3][j].value == 2) {
                            _4by4block[i - 2][j].createBlock_0();
                            _4by4block[i - 3][j].createBlock_4();

                            totalScore += 4;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 2) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_4();

                        totalScore += 4;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 2) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_4();

                    totalScore += 4;
                  }
                  break;
              }
              break;
          }
          break;
        case 4:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 1:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_4();
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 4) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_8();

                    totalScore += 8;
                  }
                  break;
              }
              break;

            case 2:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_4();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_4();
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 4) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_8();

                        totalScore += 8;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 4) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_8();

                    totalScore += 8;
                  }
                  break;
              }
              break;

            case 3:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_4();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_4();
                      switch (_4by4block[i - 3][j].onOff) {
                        case false:
                          _4by4block[i - 2][j].createBlock_0();
                          _4by4block[i - 3][j].createBlock_4();
                          break;
                        case true:
                          if (_4by4block[i - 3][j].value == 4) {
                            _4by4block[i - 2][j].createBlock_0();
                            _4by4block[i - 3][j].createBlock_8();

                            totalScore += 8;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 4) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_8();

                        totalScore += 8;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 4) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_8();

                    totalScore += 8;
                  }
                  break;
              }
              break;
          }
          break;
        case 8:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 1:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_8();

                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 8) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_16();

                    totalScore += 16;
                  }
                  break;
              }
              break;

            case 2:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_8();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_8();
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 8) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_16();

                        totalScore += 16;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 8) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_16();

                    totalScore += 16;
                  }
                  break;
              }
              break;

            case 3:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_8();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_8();
                      switch (_4by4block[i - 3][j].onOff) {
                        case false:
                          _4by4block[i - 2][j].createBlock_0();
                          _4by4block[i - 3][j].createBlock_8();
                          break;
                        case true:
                          if (_4by4block[i - 3][j].value == 8) {
                            _4by4block[i - 2][j].createBlock_0();
                            _4by4block[i - 3][j].createBlock_16();

                            totalScore += 16;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 8) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_16();

                        totalScore += 16;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 8) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_16();

                    totalScore += 16;
                  }
                  break;
              }
              break;
          }
          break;
        case 16:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 1:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_16();
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 16) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_32();

                    totalScore += 32;
                  }
                  break;
              }
              break;

            case 2:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_16();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_16();
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 16) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_32();

                        totalScore += 32;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 16) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_32();

                    totalScore += 32;
                  }
                  break;
              }
              break;

            case 3:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_16();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_16();
                      switch (_4by4block[i - 3][j].onOff) {
                        case false:
                          _4by4block[i - 2][j].createBlock_0();
                          _4by4block[i - 3][j].createBlock_16();
                          break;
                        case true:
                          if (_4by4block[i - 3][j].value == 16) {
                            _4by4block[i - 2][j].createBlock_0();
                            _4by4block[i - 3][j].createBlock_32();

                            totalScore += 32;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 16) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_32();

                        totalScore += 32;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 16) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_32();

                    totalScore += 32;
                  }
                  break;
              }
              break;
          }
          break;
        case 32:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 1:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_32();
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 32) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_64();

                    totalScore += 64;
                  }
                  break;
              }
              break;

            case 2:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_32();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_32();
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 32) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_64();

                        totalScore += 64;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 32) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_64();

                    totalScore += 64;
                  }
                  break;
              }
              break;

            case 3:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_32();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_32();
                      switch (_4by4block[i - 3][j].onOff) {
                        case false:
                          _4by4block[i - 2][j].createBlock_0();
                          _4by4block[i - 3][j].createBlock_32();
                          break;
                        case true:
                          if (_4by4block[i - 3][j].value == 32) {
                            _4by4block[i - 2][j].createBlock_0();
                            _4by4block[i - 3][j].createBlock_64();

                            totalScore += 64;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 32) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_64();

                        totalScore += 64;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 32) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_64();

                    totalScore += 64;
                  }
                  break;
              }
              break;
          }
          break;
        case 64:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 1:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_64();
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 64) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_128();

                    totalScore += 128;
                  }
                  break;
              }
              break;

            case 2:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_64();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_64();
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 64) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_128();

                        totalScore += 128;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 64) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_128();

                    totalScore += 128;
                  }
                  break;
              }
              break;

            case 3:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_64();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_64();
                      switch (_4by4block[i - 3][j].onOff) {
                        case false:
                          _4by4block[i - 2][j].createBlock_0();
                          _4by4block[i - 3][j].createBlock_64();
                          break;
                        case true:
                          if (_4by4block[i - 3][j].value == 64) {
                            _4by4block[i - 2][j].createBlock_0();
                            _4by4block[i - 3][j].createBlock_128();

                            totalScore += 128;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 64) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_128();

                        totalScore += 128;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 64) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_128();

                    totalScore += 128;
                  }
                  break;
              }
              break;
          }
          break;
        case 128:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 1:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_128();
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 128) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_256();

                    totalScore += 256;
                  }
                  break;
              }
              break;

            case 2:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_128();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_128();
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 128) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_256();

                        totalScore += 256;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 128) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_256();

                    totalScore += 256;
                  }
                  break;
              }
              break;

            case 3:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_128();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_128();
                      switch (_4by4block[i - 3][j].onOff) {
                        case false:
                          _4by4block[i - 2][j].createBlock_0();
                          _4by4block[i - 3][j].createBlock_128();
                          break;
                        case true:
                          if (_4by4block[i - 3][j].value == 128) {
                            _4by4block[i - 2][j].createBlock_0();
                            _4by4block[i - 3][j].createBlock_256();

                            totalScore += 256;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 128) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_256();

                        totalScore += 256;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 128) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_256();

                    totalScore += 256;
                  }
                  break;
              }
              break;
          }
          break;
        case 256:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 1:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_256();
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 256) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_512();

                    totalScore += 512;
                  }
                  break;
              }
              break;

            case 2:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_256();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_256();
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 256) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_512();

                        totalScore += 512;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 256) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_512();

                    totalScore += 512;
                  }
                  break;
              }
              break;

            case 3:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_256();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_256();
                      switch (_4by4block[i - 3][j].onOff) {
                        case false:
                          _4by4block[i - 2][j].createBlock_0();
                          _4by4block[i - 3][j].createBlock_256();
                          break;
                        case true:
                          if (_4by4block[i - 3][j].value == 256) {
                            _4by4block[i - 2][j].createBlock_0();
                            _4by4block[i - 3][j].createBlock_512();

                            totalScore += 512;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 256) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_512();

                        totalScore += 512;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 256) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_512();

                    totalScore += 512;
                  }
                  break;
              }
              break;
          }
          break;
        case 512:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 1:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_512();
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 512) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_1024();

                    totalScore += 1024;
                  }
                  break;
              }
              break;

            case 2:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_512();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_512();
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 512) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_1024();

                        totalScore += 1024;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 512) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_1024();

                    totalScore += 1024;
                  }
                  break;
              }
              break;

            case 3:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_512();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_512();
                      switch (_4by4block[i - 3][j].onOff) {
                        case false:
                          _4by4block[i - 2][j].createBlock_0();
                          _4by4block[i - 3][j].createBlock_512();
                          break;
                        case true:
                          if (_4by4block[i - 3][j].value == 512) {
                            _4by4block[i - 2][j].createBlock_0();
                            _4by4block[i - 3][j].createBlock_1024();

                            totalScore += 1024;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 512) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_1024();

                        totalScore += 1024;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 512) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_1024();

                    totalScore += 1024;
                  }
                  break;
              }
              break;
          }
          break;
        case 1024:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 1:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_1024();
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 1024) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_2048();

                    totalScore += 2048;
                  }
                  break;
              }
              break;

            case 2:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_1024();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_1024();
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 1024) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_2048();

                        totalScore += 2048;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 1024) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_2048();

                    totalScore += 2048;
                  }
                  break;
              }
              break;

            case 3:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_1024();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_1024();
                      switch (_4by4block[i - 3][j].onOff) {
                        case false:
                          _4by4block[i - 2][j].createBlock_0();
                          _4by4block[i - 3][j].createBlock_1024();
                          break;
                        case true:
                          if (_4by4block[i - 3][j].value == 1024) {
                            _4by4block[i - 2][j].createBlock_0();
                            _4by4block[i - 3][j].createBlock_2048();

                            totalScore += 2048;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 1024) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_2048();

                        totalScore += 2048;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 1024) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_2048();

                    totalScore += 2048;
                  }
                  break;
              }
              break;
          }
          break;
        case 2048:
          switch (i) {
            case 1:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_2048();
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 2048) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_4096();

                    totalScore += 4096;
                  }
                  break;
              }
              break;

            case 2:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_2048();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_2048();
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 2048) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_4096();

                        totalScore += 4096;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 2048) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_4096();

                    totalScore += 4096;
                  }
                  break;
              }
              break;

            case 3:
              switch (_4by4block[i - 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i - 1][j].createBlock_2048();
                  switch (_4by4block[i - 2][j].onOff) {
                    case false:
                      _4by4block[i - 1][j].createBlock_0();
                      _4by4block[i - 2][j].createBlock_2048();
                      switch (_4by4block[i - 3][j].onOff) {
                        case false:
                          _4by4block[i - 2][j].createBlock_0();
                          _4by4block[i - 3][j].createBlock_2048();
                          break;
                        case true:
                          if (_4by4block[i - 3][j].value == 2048) {
                            _4by4block[i - 2][j].createBlock_0();
                            _4by4block[i - 3][j].createBlock_4096();

                            totalScore += 4096;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i - 2][j].value == 2048) {
                        _4by4block[i - 1][j].createBlock_0();
                        _4by4block[i - 2][j].createBlock_4096();

                        totalScore += 4096;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i - 1][j].value == 2048) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i - 1][j].createBlock_4096();

                    totalScore += 4096;
                  }
                  break;
              }
              break;
          }
          break;
      }
    }
  }
}

function blockMoveDown() {
  for (var i = 3; i > -1; i--) {
    for (var j = 3; j > -1; j--) {
      switch (_4by4block[i][j].value) {
        case 2:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 2:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_2();
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 2) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_4();

                    totalScore += 4;
                  }
                  break;
              }
              break;

            case 1:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_2();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_2();
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 2) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_4();

                        totalScore += 4;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 2) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_4();

                    totalScore += 4;
                  }
                  break;
              }

              break;

            case 0:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_2();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_2();
                      switch (_4by4block[i + 3][j].onOff) {
                        case false:
                          _4by4block[i + 2][j].createBlock_0();
                          _4by4block[i + 3][j].createBlock_2();
                          break;
                        case true:
                          if (_4by4block[i + 3][j].value == 2) {
                            _4by4block[i + 2][j].createBlock_0();
                            _4by4block[i + 3][j].createBlock_4();

                            totalScore += 4;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 2) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_4();

                        totalScore += 4;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 2) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_4();

                    totalScore += 4;
                  }
                  break;
              }
              break;
          }
          break;
        case 4:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 2:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_4();
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 4) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_8();

                    totalScore += 8;
                  }
                  break;
              }
              break;

            case 1:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_4();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_4();
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 4) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_8();

                        totalScore += 8;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 4) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_8();

                    totalScore += 8;
                  }
                  break;
              }
              break;

            case 0:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_4();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_4();
                      switch (_4by4block[i + 3][j].onOff) {
                        case false:
                          _4by4block[i + 2][j].createBlock_0();
                          _4by4block[i + 3][j].createBlock_4();
                          break;
                        case true:
                          if (_4by4block[i + 3][j].value == 4) {
                            _4by4block[i + 2][j].createBlock_0();
                            _4by4block[i + 3][j].createBlock_8();

                            totalScore += 8;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 4) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_8();

                        totalScore += 8;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 4) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_8();

                    totalScore += 8;
                  }
                  break;
              }
              break;
          }
          break;
        case 8:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 2:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_8();

                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 8) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_16();

                    totalScore += 16;
                  }
                  break;
              }
              break;

            case 1:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_8();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_8();
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 8) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_16();

                        totalScore += 16;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 8) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_16();

                    totalScore += 16;
                  }
                  break;
              }
              break;

            case 0:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_8();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_8();
                      switch (_4by4block[i + 3][j].onOff) {
                        case false:
                          _4by4block[i + 2][j].createBlock_0();
                          _4by4block[i + 3][j].createBlock_8();
                          break;
                        case true:
                          if (_4by4block[i + 3][j].value == 8) {
                            _4by4block[i + 2][j].createBlock_0();
                            _4by4block[i + 3][j].createBlock_16();

                            totalScore += 16;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 8) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_16();

                        totalScore += 16;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 8) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_16();

                    totalScore += 16;
                  }
                  break;
              }
              break;
          }
          break;
        case 16:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 2:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_16();
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 16) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_32();

                    totalScore += 32;
                  }
                  break;
              }
              break;

            case 1:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_16();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_16();
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 16) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_32();

                        totalScore += 32;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 16) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_32();

                    totalScore += 32;
                  }
                  break;
              }
              break;

            case 0:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_16();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_16();
                      switch (_4by4block[i + 3][j].onOff) {
                        case false:
                          _4by4block[i + 2][j].createBlock_0();
                          _4by4block[i + 3][j].createBlock_16();
                          break;
                        case true:
                          if (_4by4block[i + 3][j].value == 16) {
                            _4by4block[i + 2][j].createBlock_0();
                            _4by4block[i + 3][j].createBlock_32();

                            totalScore += 32;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 16) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_32();

                        totalScore += 32;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 16) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_32();

                    totalScore += 32;
                  }
                  break;
              }
              break;
          }
          break;
        case 32:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 2:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_32();
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 32) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_64();

                    totalScore += 64;
                  }
                  break;
              }
              break;

            case 1:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_32();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_32();
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 32) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_64();

                        totalScore += 64;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 32) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_64();

                    totalScore += 64;
                  }
                  break;
              }
              break;

            case 0:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_32();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_32();
                      switch (_4by4block[i - 3][j].onOff) {
                        case false:
                          _4by4block[i + 2][j].createBlock_0();
                          _4by4block[i + 3][j].createBlock_32();
                          break;
                        case true:
                          if (_4by4block[i + 3][j].value == 32) {
                            _4by4block[i + 2][j].createBlock_0();
                            _4by4block[i + 3][j].createBlock_64();

                            totalScore += 64;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 32) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_64();

                        totalScore += 64;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 32) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_64();

                    totalScore += 64;
                  }
                  break;
              }
              break;
          }
          break;
        case 64:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 2:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_64();
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 64) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_128();

                    totalScore += 128;
                  }
                  break;
              }
              break;

            case 1:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_64();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_64();
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 64) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_128();

                        totalScore += 128;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 64) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_128();

                    totalScore += 128;
                  }
                  break;
              }
              break;

            case 0:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_64();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_64();
                      switch (_4by4block[i + 3][j].onOff) {
                        case false:
                          _4by4block[i + 2][j].createBlock_0();
                          _4by4block[i + 3][j].createBlock_64();
                          break;
                        case true:
                          if (_4by4block[i + 3][j].value == 64) {
                            _4by4block[i + 2][j].createBlock_0();
                            _4by4block[i + 3][j].createBlock_128();

                            totalScore += 128;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 64) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_128();

                        totalScore += 128;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 64) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_128();

                    totalScore += 128;
                  }
                  break;
              }
              break;
          }
          break;
        case 128:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 2:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_128();
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 128) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_256();

                    totalScore += 256;
                  }
                  break;
              }
              break;

            case 1:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_128();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_128();
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 128) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_256();

                        totalScore += 256;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 128) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_256();

                    totalScore += 256;
                  }
                  break;
              }
              break;

            case 0:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_128();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_128();
                      switch (_4by4block[i + 3][j].onOff) {
                        case false:
                          _4by4block[i + 2][j].createBlock_0();
                          _4by4block[i + 3][j].createBlock_128();
                          break;
                        case true:
                          if (_4by4block[i + 3][j].value == 128) {
                            _4by4block[i + 2][j].createBlock_0();
                            _4by4block[i + 3][j].createBlock_256();

                            totalScore += 256;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 128) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_256();

                        totalScore += 256;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 128) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_256();

                    totalScore += 256;
                  }
                  break;
              }
              break;
          }
          break;
        case 256:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 2:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_256();
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 256) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_512();

                    totalScore += 512;
                  }
                  break;
              }
              break;

            case 1:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_256();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_256();
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 256) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_512();

                        totalScore += 512;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 256) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_512();

                    totalScore += 512;
                  }
                  break;
              }
              break;

            case 0:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_256();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_256();
                      switch (_4by4block[i + 3][j].onOff) {
                        case false:
                          _4by4block[i + 2][j].createBlock_0();
                          _4by4block[i + 3][j].createBlock_256();
                          break;
                        case true:
                          if (_4by4block[i + 3][j].value == 256) {
                            _4by4block[i + 2][j].createBlock_0();
                            _4by4block[i + 3][j].createBlock_512();

                            totalScore += 512;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 256) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_512();

                        totalScore += 512;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 256) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_512();

                    totalScore += 512;
                  }
                  break;
              }
              break;
          }
          break;
        case 512:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 2:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_512();
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 512) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_1024();

                    totalScore += 1024;
                  }
                  break;
              }
              break;

            case 1:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_512();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_512();
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 512) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_1024();

                        totalScore += 1024;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 512) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_1024();

                    totalScore += 1024;
                  }
                  break;
              }
              break;

            case 0:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_512();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_512();
                      switch (_4by4block[i + 3][j].onOff) {
                        case false:
                          _4by4block[i + 2][j].createBlock_0();
                          _4by4block[i + 3][j].createBlock_512();
                          break;
                        case true:
                          if (_4by4block[i + 3][j].value == 512) {
                            _4by4block[i + 2][j].createBlock_0();
                            _4by4block[i + 3][j].createBlock_1024();

                            totalScore += 1024;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 512) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_1024();

                        totalScore += 1024;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 512) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_1024();

                    totalScore += 1024;
                  }
                  break;
              }
              break;
          }
          break;
        case 1024:
          console.log(_4by4block[i][j].value);
          switch (i) {
            case 2:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_1024();
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 1024) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_2048();

                    totalScore += 2048;
                  }
                  break;
              }
              break;

            case 1:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_1024();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_1024();
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 1024) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_2048();

                        totalScore += 2048;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 1024) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_2048();

                    totalScore += 2048;
                  }
                  break;
              }
              break;

            case 0:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_1024();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_1024();
                      switch (_4by4block[i + 3][j].onOff) {
                        case false:
                          _4by4block[i + 2][j].createBlock_0();
                          _4by4block[i + 3][j].createBlock_1024();
                          break;
                        case true:
                          if (_4by4block[i + 3][j].value == 1024) {
                            _4by4block[i + 2][j].createBlock_0();
                            _4by4block[i + 3][j].createBlock_2048();

                            totalScore += 2048;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 1024) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_2048();

                        totalScore += 2048;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 1024) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_2048();

                    totalScore += 2048;
                  }
                  break;
              }
              break;
          }
          break;
        case 2048:
          switch (i) {
            case 2:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_2048();
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 2048) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_4096();

                    totalScore += 4096;
                  }
                  break;
              }
              break;

            case 1:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_2048();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_2048();
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 2048) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_4096();

                        totalScore += 4096;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 2048) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_4096();

                    totalScore += 4096;
                  }
                  break;
              }
              break;

            case 0:
              switch (_4by4block[i + 1][j].onOff) {
                case false:
                  _4by4block[i][j].createBlock_0();
                  _4by4block[i + 1][j].createBlock_2048();
                  switch (_4by4block[i + 2][j].onOff) {
                    case false:
                      _4by4block[i + 1][j].createBlock_0();
                      _4by4block[i + 2][j].createBlock_2048();
                      switch (_4by4block[i + 3][j].onOff) {
                        case false:
                          _4by4block[i + 2][j].createBlock_0();
                          _4by4block[i + 3][j].createBlock_2048();
                          break;
                        case true:
                          if (_4by4block[i + 3][j].value == 2048) {
                            _4by4block[i + 2][j].createBlock_0();
                            _4by4block[i + 3][j].createBlock_4096();

                            totalScore += 4096;
                          }
                          break;
                      }
                      break;
                    case true:
                      if (_4by4block[i + 2][j].value == 2048) {
                        _4by4block[i + 1][j].createBlock_0();
                        _4by4block[i + 2][j].createBlock_4096();

                        totalScore += 4096;
                      }
                      break;
                  }
                  break;
                case true:
                  if (_4by4block[i + 1][j].value == 2048) {
                    _4by4block[i][j].createBlock_0();
                    _4by4block[i + 1][j].createBlock_4096();

                    totalScore += 4096;
                  }
                  break;
              }
              break;
          }
          break;
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

// _4by4block[2][0].createBlock_4();
// _4by4block[3][0].createBlock_4();

// _4by4block[2][1].createBlock_2();
// _4by4block[3][1].createBlock_2();

start();
getKey();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(animate);
}
