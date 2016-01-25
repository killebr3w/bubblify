

function Bubblify(canvasName) {
  this.canvas = $('#' + canvasName);
  this.canvasHeight = 500;
  this.canvasWidth = 1000;
  this.ctx = undefined;
  this.pointCollection = [];
  this.colors = {
    'white' : [0, 0, 100],
    'black' : [0, 0, 27],
    'red' : [0, 100, 63],
    'orange' : [40, 100, 60],
    'green' : [75, 100, 40],
    'blue' : [196, 77, 55],
    'purple' : [280, 50, 60],
  };

  setTimeout(this.updateCanvasDimensions, 30);
}

Bubblify.drawName = function() {};











window.reset = false;

$(window).mouseleave(function () {
    window.reset = true;
});

$(window).mouseenter(function () {
    window.reset = false;
});

document.rotationForce = 0.0;
document.Friction = 0.85;
