import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //       .then((response) => response.json())
  //       .then((json) => setItems(json));
  //   }, [resourceType]);

  useEffect(() => {
    console.log('resource changed');

    return () => {
      console.log('return from resource change');
    };
  });

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>posts</button>
        <button onClick={() => setResourceType('users')}>users</button>
        <button onClick={() => setResourceType('comments')}>comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default UseEffect;
