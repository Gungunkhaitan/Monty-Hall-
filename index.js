let gameloop = new GameLoop();
let hall = new Hall();

gameloop.init = function() {
    hall.init(gameloop.cnv);
}

gameloop.resize = function() {
    hall.resize(gameloop.cnv);
}

gameloop.update = function() {
    hall.update(gameloop.cnv);
}

gameloop.render = function() {
    gameloop.ctx.fillStyle = '#1bafdb';         
    gameloop.ctx.fillRect(0,0, gameloop.cnv.width, gameloop.cnv.height);
    hall.render(gameloop.ctx);
}

window.onload = function() {
}

window.onresize = function() {
    gameloop.onresize();
}

function startGame() {
    gameloop.start();
}

