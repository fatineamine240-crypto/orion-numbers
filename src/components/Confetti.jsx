import PropTypes from 'prop-types';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const confettiAnimation = () => {
  const duration = 1000;
  const end = Date.now() + duration;

  (function frame() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });

    // keep going until we are out of time
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export default function Confetti({ percentage }) {
  useEffect(() => {
    if (percentage === 100) {
      confettiAnimation();
    } else {
      confetti({
        particleCount: 2 * percentage,
        ticks: 400,
        spread: percentage,
        origin: {
          y: 0.65,
        },
      });
    }
  }, [percentage]);

  return <></>;
}

Confetti.propTypes = {
  percentage: PropTypes.number,
};
