window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}

let car = {
  x: 225,
  y: 300,
}

  function startGame() {
    const canvas = document.querySelector('#canvas');
    canvas.style.display = "block"
    const ctx = canvas.getContext('2d');
    canvas.style.border = "1px solid black";
    const carImg = new Image();
    carImg.src = '../images/car.png'; 
    carImg.addEventListener('load', () => {
      ctx.drawImage(carImg, car.x, car.y, 50,100)
    });

    setInterval (() =>{
     ctx.clearRect(0,0, canvas.width, canvas.height);
     ctx.drawImage(carImg, car.x, car.y, 50,100)
    }, 20)
};


window.addEventListener('keydown', function(event){
    
    if(event.code == 'ArrowRight'){
      car.x += 10
    }
    
    if(event.code == 'ArrowLeft'){
      car.x -= 10
    }
    
  })


  