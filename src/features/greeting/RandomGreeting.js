import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from './greetingSlice';

const RandomGreeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.randomGreeting);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      {randomGreeting.map((greeting) => (
        <div key={greeting.id}>
          <h1>Refresh the page to get a random greeting !</h1>
          <h2>{greeting.data}</h2>
        </div>
      ))}
    </div>
  );
};

export default RandomGreeting;
