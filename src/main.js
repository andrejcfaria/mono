// const canvas = document.querySelector("canvas");
// canvas.width = 800;
// canvas.height = 640;

// const ctx = canvas.getContext("2d");

// function fillCircle(context, x, y, radius, color = "red") {
//   context.beginPath();
//   context.arc(x, y, radius, 0, 2 * Math.PI, false);
//   context.fillStyle = color;
//   context.fill();
// }

// fillCircle(ctx, canvas.width / 2, canvas.height / 2, 69);

// canvas.addEventListener('keydown',function (e)  {
//   console.log(e.code)
//  switch(e.code) {
//   case "KeyA":
//     console.log("LEFT")
//     break
//   case "KeyS":  
//        console.log("DOWN")
//        break
// case  "KeyD":
//        console.log("Rigth")
//        break;
//        case  "KeyW":
//        console.log("UP")
//     break;
//   default:

// }
// })




window.addEventListener("load", function(){
  const canvas = document.getElementById("canvas1")
  const ctx = canvas.getContext("2d");

  canvas.width = 1280;
  canvas.height = 720;

class Player {
  constructor(game) {
    this.game = game;
  }

  draw(context) {
    context.beginPath()
    context.arc(400, 500, 50, 0, Math.PI * 2)
    context.fill();
    
  }
}


class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.player = new Player(this);
    this.mouse = {
      x: this.width * 0.5,
      y: this.height * 0.5,
      pressed: false
    }

  canvas.addEventListener("mousedown", function (e) {
    this.mouse.x = e.offsetX;
    this.mouse.y = e.offsetY;
    console.log(this.mouse)
    console.log(e.offsetX, e.offsetY)
  }.bind(this))

    canvas.addEventListener("mousedown", (e) => {
    this.mouse.x = e.offsetX;
    this.mouse.y = e.offsetY;
    console.log(this.mouse)
    console.log(e.offsetX, e.offsetY)
  })

  }



  logData() {
    console.log(this)
  } 

  render (context){
    this.player.draw(context)
  }


}






const _game = new Game(canvas);
// _game.logData()
_game.render(ctx)

})