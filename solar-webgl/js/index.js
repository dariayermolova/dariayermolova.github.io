"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var settings = {
  startDelay: 10,
  duration: 150,
  text: "Solar system",
  textSize: 180,
  //easeInOutCubic, easeOutCubic, easeOutBack or easeOutBounce
  easing: "easeInOutCubic"
};

var Particle = function () {
  function Particle(destX, destY, x, y, color) {
    _classCallCheck(this, Particle);

    this.destX = destX;
    this.destY = destY;
    this.x = x;
    this.y = y;
    this.startX = x;
    this.startY = y;
    this.color = color;
  }

  // Based on Robert Penner's easing functions

  Particle.prototype.easeInOutCubic = function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  };

  Particle.prototype.easeOutCubic = function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  };

  Particle.prototype.easeOutBack = function easeOutBack(t, b, c, d) {
    var s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  };

  Particle.prototype.easeOutBounce = function easeOutBounce(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
    }
  };

  Particle.prototype.move = function move(tick) {
    if (this.x !== this.destX) {
      this.x = this[settings.easing](tick, this.startX, this.destX - this.startX, settings.duration);
    }
    if (this.y !== this.destY) {
      this.y = this[settings.easing](tick, this.startY, this.destY - this.startY, settings.duration);
    }
  };

  return Particle;
}();

var Writer = function () {
  function Writer(canvasId) {
    _classCallCheck(this, Writer);

    var canvas = document.getElementById(canvasId);
    this.ctx = canvas.getContext("2d");
    this.w = canvas.width = window.innerWidth;
    this.h = canvas.height = window.innerHeight;
    // A list of all the particles that forms the text
    this.particles = [];
    this.tick = 0;
  }

  Writer.prototype.init = function init(text, size) {
    // My hope is that this will force the font to
    // be loaded before we try to draw text.
    // Should be synchronous fetch but sometimes
    // the default font is used instead! W00t?!

    this.ctx.fillStyle = "#DCDCDC";
    this.ctx.shadowColor = "#808080";
    this.ctx.shadowOffsetX = 3;
    this.ctx.shadowOffsetY = 5;
    this.ctx.shadowBlur = 5;
    this.ctx.font =  "100px Guardians";
    // Draw text on the canvas temporarily
    var textWidth = this.ctx.measureText(text).width;
    var startX = (this.w - textWidth) * 0.5;
    var startY = (this.h - size) * 0.25;
    this.ctx.fillText(text, 0, size);

    var image = this.ctx.getImageData(0, 0, this.w, this.h);
    var buffer32 = new Uint32Array(image.data.buffer);
    for (var x = 0; x < this.w; x++) {
      for (var y = 0; y < this.h; y++) {
        // The buffer is linear, y*w+x is a trick
        // to calculate the linear index.
        var color = buffer32[y * this.w + x];
        if (color) {
          // There is a pixel here, add a particle
          this.particles.push(new Particle(startX + x, startY + y, Math.round(Math.random() * this.w), Math.round(Math.random() * this.h), color));
        }
      }
    }
    this.ctx.clearRect(0, 0, this.w, this.h);
  };

  Writer.prototype.draw = function draw() {
    var _this = this;

    // Start every frame with an empty image
    var imageData = this.ctx.createImageData(this.w, this.h);
    var pixels = new Uint32Array(imageData.data.buffer);

    this.particles.forEach(function (p) {
      var x = Math.round(p.x);
      var y = Math.round(p.y);
      if (x >= 0 && x < _this.w && y >= 0 && y < _this.h) {
        pixels[x + _this.w * y] = p.color;
      }
      if (_this.tick > settings.startDelay) {
        p.move(_this.tick - settings.startDelay);
      }
    });

    this.ctx.putImageData(imageData, 0, 0);
    this.tick++;
    requestAnimationFrame(function () {
      return _this.draw();
    });
  };

  return Writer;
}();

window.onload = function () {
  var writer = new Writer("canvas");
  writer.init(settings.text, settings.textSize);
  writer.draw();
};

