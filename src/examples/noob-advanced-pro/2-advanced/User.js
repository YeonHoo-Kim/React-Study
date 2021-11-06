import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

const User = ({ age }) => {
  const [name, setName] = useState();
  const [dark, setDark] = useState(false);
  const user = { age, name };

  const buttonStyle = {
    backgroundColor: dark ? '#000000' : 'initial',
    color: dark ? '#ffffff' : 'initial',
  };

  useEffect(() => {
    console.log(user);
  });

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        style={buttonStyle}
        onClick={() => setDark((curDark) => !curDark)}
      >
        Toggle Theme
      </button>
    </div>
  );
};

User.propTypes = {
  age: PropTypes.number,
};

export default User;
