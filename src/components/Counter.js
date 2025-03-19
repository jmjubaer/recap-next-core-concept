"use client"
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
          >
            Decrease
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
          >
            Increase
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
