import React, { useEffect, useState } from "react";

const Counter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(endValue, 10);
    const incrementTime = duration / end; // Calculate increment time based on duration and end value

    const incrementCounter = () => {
      start += 1;
      setCount(start);
      if (start < end) {
        setTimeout(incrementCounter, incrementTime);
      }
    };

    incrementCounter(); // Start the counter

    // Cleanup function to clear timeout if component unmounts
    return () => clearTimeout(incrementCounter);
  }, [endValue, duration]);

  return <span className="counter-value">{count}</span>;
};

export default Counter;
