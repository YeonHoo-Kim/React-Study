import React from 'react';
import { Link } from 'react-router-dom';

const PageList = (props) => {
  const { works } = props;
  return (
    <>
      <ul>
        {works.length !== 0 &&
          works.map((work) => (
            <li key={`work-id-${work.id}`}>
              <Link to={work.link}>{work.name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PageList;
