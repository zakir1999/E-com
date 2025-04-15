// src/Components/Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counters = useSelector(state => state.counter.counters);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Multiple Counters</h1>

      {counters.map((counter) => (
        <div key={counter.id} className="mb-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Counter {counter.id}: {counter.value}</h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => dispatch(increment(counter.id))}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch(decrement(counter.id))}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded"
            >
              Decrement
            </button>
          </div>
        </div>
      ))}

      <div className="mt-6 text-lg font-bold">
        Total: {counters.reduce((sum, c) => sum + c.value, 0)}
      </div>
    </div>
  );
};

export default Counter;
