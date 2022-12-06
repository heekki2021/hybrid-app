var change = document.getElementsByClassName('testclass')[0];
change.style.color = 'orange';
change.style.width = 500;
change.style.height = 400;

function keylog(e) {
    console.log(e);
  }

addEventListener("keydown", keylog)