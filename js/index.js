window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}

const myObstacles = []
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let myFrames = 0;

let car = {
  x: 225,
  y: 300,
}

  function startGame() {
    canvas.style.display = "block"
    canvas.style.border = "1px solid black";
    const carImg = new Image();
    carImg.src = '../images/car.png'; 
    carImg.addEventListener('load', () => {
      ctx.drawImage(carImg, car.x, car.y, 50,100)
    });

    setInterval (() =>{
      myFrames ++

      if (myFrames % 120 === 0) {
    let minWidth = 30;
    let range = 100;
    let width = Math.floor(Math.random()* range + minWidth) 
    let xPosition = Math.floor(Math.random()*canvas.width)
    myObstacles.push(new Component(width, 20, 'black', xPosition , 0));
      }
    

     ctx.clearRect(0,0, canvas.width, canvas.height);
     ctx.drawImage(carImg, car.x, car.y, 50,100)
      updateObstacles()
    }, 20)
};


window.addEventListener('keydown', function(event){
    if(event.code == 'ArrowRight'){
      if (car.x < 380) {
      car.x += 10
    }
    }
    
    if(event.code == 'ArrowLeft'){
      if (car.x > 70){
      car.x -= 10 
    }
    }
  })

  

  class Component {
    constructor (width, height, color, x, y){
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
    }

    draw () {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
 
  function updateObstacles () {
    for (let i = 0; i < myObstacles.length; i++){
      myObstacles[i].y += 5;
      myObstacles[i].draw()
    }
    
  }