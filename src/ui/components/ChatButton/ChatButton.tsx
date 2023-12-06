import React, { useState } from 'react';

// import ChatComponent, { ChatComponentProps } from '../ChatComponent/ChatComponent';
import PlusIcon from '../Icon/plus.svg';
import classNames from './ChatButton.module.scss';

type ChatButtonProps = {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

// type NewChatButtonProps = ChatComponentProps & ChatButtonProps;

const ChatButton: React.FC<ChatButtonProps> = (props) => {
  const { setState } = props;
  const [isActive, setActive] = useState(false);

  return (
    <div className={classNames.root}>
      {/* {isActive ? <ChatComponent spec={spec} onSubmit={onSubmit} title={title} /> : null} */}
      <div
        className={classNames.pic}
        style={{ transform: `rotate(${isActive ? 0.375 : 0}turn)` }}
        onClick={() => {
          setActive(!isActive);
          setState(!isActive);
        }}>
        <PlusIcon />
      </div>
    </div>
  );
};

export default ChatButton;

// код должен имплементироваться в
