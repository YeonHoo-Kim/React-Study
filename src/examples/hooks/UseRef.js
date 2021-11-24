import React, { useEffect, useState, useRef } from 'react';

const UseRef = () => {
  const [name, setName] = useState('');
  //   const inputRef = useRef();

  //   const focus = () => {
  //     inputRef.current.focus();
  //     inputRef.current.value = 'Some value';
  //   };

  const prevName = useRef('');

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        // ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      {/* <button onClick={focus}>Focus</button> */}
    </>
  );
};

export default UseRef;
