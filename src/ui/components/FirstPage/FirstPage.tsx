import React from 'react';

import ChatMock from '../../../data/chatMock';
import TrueChatMock from '../../../data/trueChatMock';
import ChatComponent from '../ChatComponent/ChatComponent';
import GreetingsComponent from '../GreetingsComponent/GreetingsComponent';
import classNames from './FirstPage.module.scss';

const FirstPage: React.FC = () => {
  return (
    <div className={classNames.root}>
      <GreetingsComponent />
      <ChatComponent spec={TrueChatMock.spec} onSubmit={TrueChatMock.onSubmit} title={TrueChatMock.title} />
    </div>
  );
};

export default FirstPage;
