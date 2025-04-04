import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Cv from '../Icon/CVIcnon.svg';
import GitHub from '../Icon/gitHub.svg';
import Linkedin from '../Icon/linkedInIcon.svg';
import Telegram from '../Icon/telegramIcon.svg';
import Timezones from '../Icon/timeZonesIcon.svg';
import LinkComponent from '../LinkImage/LinkComponent';
import classNames from './GreetingsComponent.module.scss';

const links = [
  { id: 'GitHub', icon: <GitHub />, buttonLink: 'https://github.com/AyanamiSoryu' },
  { id: 'Timezones', icon: <Timezones />, buttonLink: 'https://www.timezones.digital/' },
  {
    id: 'Cv',
    icon: <Cv />,
    downloadName: 'CV',
    buttonLink: 'https://drive.google.com/uc?export=download&id=1afXfpcpnXLJE65KlOxrtiLMAuO9ASCQt\n'
  },
  { id: 'Telegram', icon: <Telegram />, buttonLink: 'https://t.me/ayanamisoryu' },
  { id: 'Linkedin', icon: <Linkedin />, buttonLink: 'https://www.linkedin.com/in/ilya-nikolskiy-4a2818257/' }
];

const GreetingsComponent = (props: { children?: JSX.Element }) => {
  const { children } = props;
  const [selectedId, setSelectedId] = useState<string>('GitHub');

  return (
    <div className={classNames.root}>
      <div className={classNames.children}>{children}</div>
      <h2 className={classNames.hello}>hello!</h2>
      <p className={classNames.greet}>
        my name is Ilia, i’m a digital developer experienced in creating visually strong interfaces, websites and
        complex systems. i work with modern instruments, analytical system interfaces, mobile and web applications and
        digital services for the large businesses
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
                href={link.buttonLink || 'google.com'}
              />
            );
          }
          return (
            <LinkComponent
              key={uuidv4()}
              id={link.id}
              icon={link.icon}
              selected={selectedId}
              onHover={setSelectedId}
              href={link.buttonLink || 'google.com'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GreetingsComponent;
