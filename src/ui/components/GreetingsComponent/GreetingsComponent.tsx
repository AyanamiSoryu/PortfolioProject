import React from 'react';

import Cv from '../Icon/CVIcnon.svg';
import EmptyTimezones from '../Icon/emptyTimezones.svg';
import Info from '../Icon/infoIcon.svg';
import Linkedin from '../Icon/linkedInIcon.svg';
import Instagram from '../Icon/telegramIcon.svg';
import Timezones from '../Icon/timeZonesIcon.svg';
import LinkComponent from '../LinkImage/LinkComponent';
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
        <LinkComponent icon={<Info />} href='https://google.com' />
        <div style={{ background: '#EBEBEB', width: '1px', height: '56px' }} />
        <LinkComponent icon={<Timezones />} href='https://google.com' />
        <LinkComponent icon={<EmptyTimezones />} />
        <LinkComponent icon={<EmptyTimezones />} />
        <div style={{ background: '#EBEBEB', width: '1px', height: '56px' }} />
        <LinkComponent icon={<Cv />} href='https://google.com' downloadName='Resume' />
        <LinkComponent icon={<Instagram />} href='https://google.com' />
        <LinkComponent icon={<Linkedin />} href='https://google.com' />
      </div>
    </div>
  );
};

export default GreetingsComponent;
