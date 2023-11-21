import React, { useState, useEffect } from "react";
import { CustomButtonA } from "@/components/customButton/customButtonA";
import Link from "next/link";
const Counter = () => {
  // @ts-ignore
  const initialCount = parseInt(localStorage.getItem("count")) || 0;
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // Store the count value in localStorage
    localStorage.setItem("count", count.toString());
    // Set a timeout to clear the 'count' item from localStorage after 5 seconds (5000 milliseconds)
    const timeoutId = setTimeout(() => {
      localStorage.removeItem("count");
    }, 5000);

    // Clean up the timeout when the component unmounts or when 'count' changes
    return () => clearTimeout(timeoutId);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
    setTimeout(() => {
      // Access the current value of countRef even after the component re-renders
    }, 1000);
  };

  return (
    <div>
      <p>Count: {count}</p>
      {/* <button onClick={handleIncrement}>Increment</button> */}
      <CustomButtonA name="Login" onClick={handleIncrement} href={"/"} />
    </div>
  );
};

export default Counter;
