import { useState, useEffect, useRef } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Интервал каждые 1000мс', +Date.now());
      setTime(new Date());
    }, 1000);
    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className="boxClock">
      <p className="dateClock">Current time: {time.toLocaleString()}</p>
      <button className="btnStop" onClick={stop}>
        Stop
      </button>
    </div>
  );
};

export default Clock;
