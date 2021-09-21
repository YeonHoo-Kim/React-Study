import React from 'react';
import { Link } from 'react-router-dom';

const PageList = (props) => {
  const { contents } = props;
  return (
    <>
      <ul>
        {contents.length !== 0 &&
          contents.map((content) => (
            <li key={`content-id-${content.id}`}>
              <Link to={content.link}>{content.name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PageList;
