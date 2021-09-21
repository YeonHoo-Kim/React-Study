import React, { useState } from 'react';
import MemberList from './MemberList';
import Register from './Register';
import './index.css';

const Work20210830 = () => {
  const [members, setMembers] = useState([]);
  return (
    <>
      <div className="register-area">
        <Register members={members} setMembers={setMembers} />
      </div>
      <div className="memberlist-area">
        <MemberList members={members} />
      </div>
    </>
  );
};

export default Work20210830;
