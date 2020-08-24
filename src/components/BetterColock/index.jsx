import React from 'react';
import useClock from '../Custom-Hook/useClock'
import './BetterColock.scss'
const BetterClock = () => {
  const {timeString} = useClock()
  return (
    <div className="better-clock">
      <p className="better-clock__time">{timeString}</p>
    </div>
  );
};

export default BetterClock;