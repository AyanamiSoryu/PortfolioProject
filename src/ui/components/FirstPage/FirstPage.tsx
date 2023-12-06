import React, { useRef, useState } from 'react';

import TrueChatMock from '../../../data/trueChatMock';
import useHtmlElementRefSize from '../../../utils/hooks/useHtmlElementRefSize';
import ChatButton from '../ChatButton/ChatButton';
import ChatComponent from '../ChatComponent/ChatComponent';
import GreetingsComponent from '../GreetingsComponent/GreetingsComponent';
import classNames from './FirstPage.module.scss';

const FirstPage: React.FC = () => {
  const [isActive, setActive] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const rootWidth = useHtmlElementRefSize(rootRef).width;
  const isMobile = rootWidth < 948;

  if (isMobile) {
    return (
      <div className={classNames.root} ref={rootRef}>
        <GreetingsComponent />
        <div className={classNames.mobileChat} style={{ transform: `translate(${isActive ? 0 : 1000}px)` }}>
          <ChatComponent spec={TrueChatMock.spec} onSubmit={TrueChatMock.onSubmit} title={TrueChatMock.title} />
        </div>
        {/* <ChatButton spec={TrueChatMock.spec} onSubmit={TrueChatMock.onSubmit} title={TrueChatMock.title} /> */}
        <ChatButton setState={setActive} />
      </div>
    );
  }
  return (
    <div className={classNames.root} ref={rootRef}>
      <GreetingsComponent />
      <ChatComponent spec={TrueChatMock.spec} onSubmit={TrueChatMock.onSubmit} title={TrueChatMock.title} />
    </div>
  );
};

export default FirstPage;
