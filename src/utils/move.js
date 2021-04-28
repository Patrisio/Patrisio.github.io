import { TweenMax } from 'gsap';

export default function move(e, el) {
  const cursorX = e.pageX;
  const cursorY = e.pageY;
  const halfWindowWidth = window.innerWidth / 2;
  const halfWindowHeight = window.innerHeight / 2;
  const moveX = (cursorX - (halfWindowWidth)) * -0.02;
  const moveY = (cursorY - (halfWindowHeight)) * -0.02;

  const bg = [
    {
      el,
      xspeed: 1,
      yspeed: 1.5,
    },
  ];

  bg.forEach(function({ el, xspeed, yspeed }) {
    TweenMax.to(el, 1.5, {
        x: moveX * xspeed,
        y: moveY * yspeed
    });
  });
};