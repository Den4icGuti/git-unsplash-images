import { useState, useEffect } from 'react';
import styles from '../Counter/Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count + 'Hello it useEffect' + Date.now());
  }, [count]);

  return (
    <div className={styles.counterBox}>
      <h2>Counter</h2>
      <div className={styles.btnBox}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <span>{count}</span>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
