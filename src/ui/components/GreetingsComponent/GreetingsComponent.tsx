import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Cv from '../Icon/CVIcnon.svg';
import Info from '../Icon/infoIcon.svg';
import Linkedin from '../Icon/linkedInIcon.svg';
import Instagram from '../Icon/telegramIcon.svg';
import Timezones from '../Icon/timeZonesIcon.svg';
import LinkComponent from '../LinkImage/LinkComponent';
import classNames from './GreetingsComponent.module.scss';

const links = [
  { id: 'Info', icon: <Info /> },
  { id: 'Timezones', icon: <Timezones /> },
  { id: 'Cv', icon: <Cv />, downloadName: 'google.com' },
  { id: 'Instagram', icon: <Instagram /> },
  { id: 'Linkedin', icon: <Linkedin /> }
];

const GreetingsComponent = (props: { children?: JSX.Element }) => {
  const { children } = props;
  const [selectedId, setSelectedId] = useState<string>('Info');

  return (
    <div className={classNames.root}>
      <div className={classNames.children}>{children}</div>
      <h2 className={classNames.hello}>hello!</h2>
      <p className={classNames.greet}>
        i’m a digital designer experienced in creating visually strong interfaces, websites and design systems. i work
        with complex products, analytical system interfaces, mobile and desktop applications and digital services for
        the large businesses
      </p>
      <div className={classNames.svg}>
        {links.map((link) => {
          if (link.downloadName) {
            return (
              <LinkComponent
                key={uuidv4()}
                id={link.id}
                icon={link.icon}
                selected={selectedId}
                onHover={setSelectedId}
                downloadName={link.downloadName}
              />
            );
          }
          return (
            <LinkComponent key={uuidv4()} id={link.id} icon={link.icon} selected={selectedId} onHover={setSelectedId} />
          );
        })}
      </div>
    </div>
  );
};

export default GreetingsComponent;
