import React from 'react';

import Cv from '../Icon/cv.svg';
import EmptyTimezones from '../Icon/emptyTimezones.svg';
import Info from '../Icon/Info.svg';
import Instagram from '../Icon/instagram.svg';
import Linkedin from '../Icon/linkedin.svg';
import Timezones from '../Icon/Timezones.svg';
// import LinkComponent from '../LinkImage/LinkComponent';
import classNames from './GreetingsComponent.module.scss';

const GreetingsComponent = () => {
  return (
    <div className={classNames.root}>
      <h2 className={classNames.hello}>hello!</h2>
      <p className={classNames.greet}>
        i’m a digital designer experienced in creating visually strong interfaces, websites and design systems. i work
        with complex products, analytical system interfaces, mobile and desktop applications and digital services for
        the large businesses
      </p>
      <div className={classNames.svg}>
        <Cv />
        <div style={{ background: '#EBEBEB', width: '1px', height: '56px' }} />
        <Info />
        <EmptyTimezones />
        <EmptyTimezones />
        <div style={{ background: '#EBEBEB', width: '1px', height: '56px' }} />
        <Instagram />
        <Linkedin />
        <Timezones />
      </div>
    </div>
  );
};

export default GreetingsComponent;
