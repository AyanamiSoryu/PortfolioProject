import React, { useRef } from 'react';

import TrueChatMock from '../../../data/trueChatMock';
import useHtmlElementRefSize from '../../../utils/hooks/useHtmlElementRefSize';
import ChatComponent from '../ChatComponent/ChatComponent';
import GreetingsComponent from '../GreetingsComponent/GreetingsComponent';
import classNames from './FirstPage.module.scss';

const FirstPage: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const rootWidth = useHtmlElementRefSize(rootRef).width;

  return (
    <div className={classNames.root} ref={rootRef}>
      <GreetingsComponent />
      {rootWidth > 948 && (
        <ChatComponent spec={TrueChatMock.spec} onSubmit={TrueChatMock.onSubmit} title={TrueChatMock.title} />
      )}
    </div>
  );
};

export default FirstPage;
