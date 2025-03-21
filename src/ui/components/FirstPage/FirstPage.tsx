import React, { useRef, useState } from 'react';

import useHtmlElementRefSize from '../../../utils/hooks/useHtmlElementRefSize';
import ChatButton from '../ChatButton/ChatButton';
import GreetingsComponent from '../GreetingsComponent/GreetingsComponent';
import ArrowDown from '../Icon/Drop_down_phone.svg';
import Terminal from '../Terminal/Terminal';
import classNames from './FirstPage.module.scss';

const FirstPage: React.FC = () => {
  const [isActive, setActive] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const rootWidth = useHtmlElementRefSize(rootRef).width;
  const isMobile = rootWidth < 948;

  return (
    <>
      <div className={classNames.root} ref={rootRef}>
        <GreetingsComponent />
        {isMobile ? (
          <div className={classNames.mobileChat} style={{ transform: `translate(${!isActive ? 1000 : 0}px)` }}>
            <Terminal />
          </div>
        ) : (
          <Terminal />
        )}

        {isMobile && (
          <ChatButton
            setState={setActive}
            // styles={isActive ? buttonStyles.button : originButtonStyles.pic}
          />
        )}
      </div>
      {isMobile && (
        <div style={{ width: '40px', height: '40px', marginRight: 'auto', marginLeft: 'auto' }}>
          <ArrowDown />
        </div>
      )}
    </>
  );
};

export default FirstPage;
