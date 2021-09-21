import React from 'react';
import { Route } from 'react-router-dom';
import PageList from '../components/PageList';
import Work20210826 from '../works/20210826/index';
import Work20210830 from '../works/20210830/index';
import Work20210902 from '../works/20210902/index';
import Work20210906 from '../works/20210906/index';

import './Works.css';
const Works = () => {
  const works = [
    {
      id: 1,
      link: '/works/20210826',
      name: '20210826',
    },
    {
      id: 2,
      link: '/works/20210830',
      name: '20210830',
    },
    {
      id: 3,
      link: '/works/20210902',
      name: '20210902',
    },
    {
      id: 4,
      link: '/works/20210906',
      name: '20210906',
    },
  ];
  return (
    <div className="work">
      <div className="work-list">
        <PageList works={works} />
      </div>
      <div className="work-content">
        <Route path="/works/20210826" component={Work20210826} />
        <Route path="/works/20210830" component={Work20210830} />
        <Route path="/works/20210902" component={Work20210902} />
        <Route path="/works/20210906" component={Work20210906} />
      </div>
    </div>
  );
};

export default Works;
