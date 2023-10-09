/**
 * demo.js
 *
 * Licensed under the MIT license.
 * https://opensource.org/license/mit/
 * 
 * Copyright 2023, WANNABEDEV
 * https://wannabedev.io
 */

const flickerFire = 1;

const flicker = () => {
  if (!flickerFire) return false;

  gsap.to(".filtered, .error-demo", {
    duration: 2,
    className: "+=glowing",
    opacity: 1,
    ease: RoughEase.ease.config({
      template: Power0.easeNone, // You can adjust the easing template as needed
      strength: 100,
      points: 20,
      taper: 'none',
      randomize: true,
      clamp: true
    }),
    repeat: 1,
    yoyo: true,
    onComplete: flicker
  });
};

flicker();