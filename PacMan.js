var pos = 0;
const pacArray = [
  ['./PacMan1.png', './PacMan2.png'],
  ['./PacMan3.png', './PacMan4.png'],
];
let direction = 0;
const pacMen = []; 

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

function makePac() {
  
  let velocity = setToRandom(10); 
  let position = setToRandom(200);
let reverseX = false;
let reverseY = false;

 
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './PacMan1.png';
  newimg.width = 100;

  game.appendChild(newimg);

  return {
    position,
    velocity,
    newimg,
    reverseX,
    reverseY
  };
}

function update() {
  pacMen.forEach((item) => {
    if (item.reverseX){
    item.position.x -= item.velocity.x;
    }else {
    item.position.x += item.velocity.x;
    }
    if (item.reverseY) {
      item.position.y -= item.velocity.y;
    }else {
  item.position.y += item.velocity.y;
    }
    item.newimg.style.left = item.position.x ;
    item.newimg.style.top = item.position.y ;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  let rightBound = window.innerWidth - item.newimg.width;
  let leftBound = 0;
  let topBound = 0;
  let bottomBound = window.innerHeight - item.newimg.height;

  if (item.position.x > rightBound || item.position.x <  leftBound) {
    item.reverseX = !item.reverseX;
  }

  if (item.position.y > bottomBound || item.position.y < topBound){
    item.reverseY = !item.reverseY;
  }
}

function makeOne() {
  pacMen.push(makePac()); 
  console.log(pacMen);
}
  module.exports = { checkCollisions, update, pacMen };
