function drop(){
  let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d', {alpha: false});

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
let offsetX = 0;
let mouseX = 0;
let mouseDown = false;
let time;
let pandaImg = document.createElement('img');
let panda = {
  img: pandaImg,
  width: 0,
  height: 0,
  x: centerX,
  y: centerY
};

let pandas = [];
let count = 30;

function addPanda(x, y, w) {
  pandas.push({
    x: x,
    y: y,
    w: w,
    h: Math.ceil(w * panda.height / panda.width),
    v: w * 0.004
  });
}

function update(dt) {
  for(let i = 0; i < pandas.length; i++) {
    pandas[i].y += dt * pandas[i].v;
    pandas[i].x = pandas[i].x + (offsetX * pandas[i].v * 0.1); 
    
    if (mouseDown) {
      offsetX = mouseX - centerX;
    }

    if (pandas[i].y > canvas.height) {
      pandas[i].x = Math.random() * canvas.width;
      pandas[i].y = -pandas[i].h;
    }
  }
}

function draw() {
  requestAnimationFrame(draw);
  
  let now = new Date().getTime();
  let dt = now - (time || now);
  time = now;
  update(dt);
  
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  for (let i = 0; i < pandas.length; i++) {
    ctx.drawImage(
      panda.img, 
      pandas[i].x, 
      pandas[i].y, 
      pandas[i].w,
      pandas[i].h,
    ); 
    }
}

panda.img.src = './assets/js/dead.png';

panda.img.onload = function() {
  panda.width = panda.img.width / 4;
  panda.height = panda.img.height / 2;
  panda.x = centerX - panda.width / 4;
  panda.y = centerY - panda.height / 2;
  
  for (let i = 0; i < count; i++) {
    addPanda(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      (panda.width * 0.2) + Math.random() * (panda.width * 0.6)
    )
  }
  
  pandas.sort(function(a, b) {
    return a.w - b.w;
  });

  document.body.addEventListener('mousemove', function(ev) {
    mouseX = ev.clientX;
  });
  
  document.body.addEventListener('mousedown', function(ev) {
    mouseDown = true;
  })
  
  document.body.addEventListener('mouseup', function(ev) {
    mouseDown = false;
  })
  
  draw();
}
}