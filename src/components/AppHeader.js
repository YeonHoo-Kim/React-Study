import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <>
      <div className="app-header-btn-list">
        <ul>
          <li>
            <Link className="button" to="/works">
              Works
            </Link>
          </li>
          <li>
            <Link className="button" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="button" to="/data">
              Data
            </Link>
          </li>
          <li>
            <Link className="button" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AppHeader;
