import React, { useState } from 'react';

import greetingsClassNames from '../GreetingsComponent/GreetingsComponent.module.scss';
import CSSSvg from '../Icon/css-svgrepo-com.svg';
import HTMLSvg from '../Icon/html-svgrepo-com.svg';
import JavaScriptSvg from '../Icon/java-script-svgrepo-com.svg';
import ReactSVG from '../Icon/react-svgrepo-com.svg';
import ReduxSvg from '../Icon/redux-svgrepo-com.svg';
import TypeScriptSvg from '../Icon/typescript-16-svgrepo-com.svg';
import classNames from './InfoTabs.module.scss';

const InfoTabs = () => {
  const [selectedIcon, setIconSelected] = useState<string>('');

  return (
    <div className={classNames.root}>
      <div className={classNames.firstTab}>
        <h2 className={greetingsClassNames.hello} style={{ paddingTop: '20px' }}>
          stack
        </h2>
        <div className={classNames.stackNames}>
          <h3
            className={classNames.h3}
            style={{
              color: selectedIcon === 'js' ? '#feb04a' : 'grey'
            }}>
            JavaScript
          </h3>
          <h3
            className={classNames.h3}
            style={{
              color: selectedIcon === 'react' ? '#18bcee' : 'grey'
            }}>
            React JS/Native
          </h3>
          <h3
            className={classNames.h3}
            style={{
              color: selectedIcon === 'redux' ? '#794cc0' : 'grey'
            }}>
            Redux
          </h3>
          <h3
            className={classNames.h3}
            style={{
              color: selectedIcon === 'type' ? '#0076c6' : 'grey'
            }}>
            TypeScript
          </h3>
          <h3
            className={classNames.h3}
            style={{
              color: selectedIcon === 'html' ? '#e44d26' : 'grey'
            }}>
            HTML5
          </h3>
          <h3
            className={classNames.h3}
            style={{
              color: selectedIcon === 'css' ? '#214ce5' : 'grey'
            }}>
            CSS
          </h3>
        </div>
        <p className={classNames.text}>i’m a using well balanced scope of modern code writing technologies</p>
      </div>
      <div className={classNames.secondTab} onMouseLeave={() => setIconSelected('')}>
        <div className={classNames.iconsJS} onMouseEnter={() => setIconSelected('js')}>
          <div className={classNames.svg}>
            <JavaScriptSvg />
          </div>
        </div>
        <div className={classNames.iconsReact} onMouseEnter={() => setIconSelected('react')}>
          <div className={classNames.svg}>
            <ReactSVG fill={selectedIcon === 'react' ? '#7ddfff' : 'null'} />
          </div>
        </div>
        <div className={classNames.iconsRedux} onMouseEnter={() => setIconSelected('redux')}>
          <div className={classNames.svg}>
            <ReduxSvg fill={selectedIcon === 'redux' ? '#764abc' : 'null'} />
          </div>
        </div>
        <div
          className={classNames.iconsType}
          onMouseEnter={() => setIconSelected('type')}
          onMouseLeave={() => setIconSelected('')}>
          <div className={classNames.svg}>
            <TypeScriptSvg fill={selectedIcon === 'type' ? '#ffffff' : 'null'} />
          </div>
        </div>
        <div
          className={classNames.iconsHTML}
          onMouseEnter={() => setIconSelected('html')}
          onMouseLeave={() => setIconSelected('')}>
          <div className={classNames.svg}>
            <HTMLSvg fill={selectedIcon === 'html' ? '#ffffff' : 'null'} />
          </div>
        </div>
        <div className={classNames.iconsCSS} onMouseEnter={() => setIconSelected('css')}>
          <div className={classNames.svg}>
            <CSSSvg fill={selectedIcon === 'css' ? '#ffffff' : 'null'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTabs;
