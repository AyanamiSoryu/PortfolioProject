import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import gemini from '../../../agents/llm-model/gemini';
import commands from '../../../data/terminalResponseMock/terminalResponseMock';
import useHtmlElementRefSize from '../../../utils/hooks/useHtmlElementRefSize';
import classNames from './Terminal.module.scss';

type MessageType = {
  type: 'command' | 'response';
  text: string;
};

const Terminal: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { width: containerWidth } = useHtmlElementRefSize(rootRef);
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<Array<MessageType>>([]);

  const scrollToBottom = () => {
    if (rootRef.current) {
      rootRef.current.scrollTop = rootRef.current.scrollHeight;
    }
  };

  useEffect(() => scrollToBottom);

  const handleEnterDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newMessage: MessageType = { type: 'command', text: inputValue };
      const commandItem = (commands as { [key: string]: string[] })[inputValue.toLowerCase()];
      const newResponse: MessageType = {
        type: 'response',
        text: commandItem ? commandItem[Math.floor(Math.random() * commandItem.length)] : await gemini(inputValue)
      };

      setMessages((prevMessages) => [...prevMessages, newMessage, newResponse]);
      setInputValue('');
    }
  };

  return (
    <div className={classNames.root}>
      <div className={classNames.terminalHeader} />
      <div className={classNames.terminal} ref={rootRef} onClick={() => inputRef.current && inputRef.current.focus()}>
        {messages.map((item) => (
          <div key={uuidv4()}>
            {item.type === 'command' ? (
              <div>
                <span className={classNames.user}>
                  user@Portfolio-Project
                  <span className={classNames.userWhite}>
                    :<span className={classNames.userBlue}>~</span>$
                  </span>
                </span>
                <span className={classNames.input}>{item.text}</span>
              </div>
            ) : (
              <div className={classNames.input} style={{ paddingLeft: 0 }}>
                {item.text.split('\n').map((line) => (
                  <span key={uuidv4()} className={classNames.input}>
                    {line}
                    {item.text.split('\n').length > 1 && <br />}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
        <span className={classNames.user}>
          user@Portfolio-Project
          <span className={classNames.userWhite}>
            :<span className={classNames.userBlue}>~</span>$
          </span>
        </span>
        <input
          ref={inputRef}
          type='text'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className={classNames.input}
          style={{
            width: containerWidth < 576 ? inputValue.length * 5 : inputValue.length * 9,
            maxWidth: containerWidth < 576 ? containerWidth - 225 : containerWidth - 350
          }}
          onKeyDown={handleEnterDown}
        />
        <span className={classNames.blinkingCaret}>█</span>
      </div>
    </div>
  );
};

export default Terminal;
