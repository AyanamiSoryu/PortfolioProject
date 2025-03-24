import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import commands from '../../../data/terminalResponseMock/terminalResponseMock';
import handlePrompt from '../../../networking/handlePrompt';
import classNames from './Terminal.module.scss';

type MessageType = {
  type: 'command' | 'response';
  text: string;
};

const Terminal: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLDivElement | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<Array<MessageType>>([]);

  const scrollToBottom = () => {
    if (rootRef.current) {
      rootRef.current.scrollTop = rootRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleEnterDown = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newMessage: MessageType = { type: 'command', text: inputValue.trim() };
      const commandItem = (commands as { [key: string]: string[] })[inputValue.toLowerCase()];
      const newResponse: MessageType = {
        type: 'response',
        text: commandItem ? commandItem[Math.floor(Math.random() * commandItem.length)] : await handlePrompt(inputValue)
      };

      setMessages((prevMessages) => [...prevMessages, newMessage, newResponse]);
      setInputValue('');
      if (inputRef.current) {
        inputRef.current.innerText = '';
        inputRef.current.querySelectorAll('br, span').forEach((el) => el.remove());
      }

      // Фокус на поле ввода
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  };

  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    setInputValue(event.currentTarget.textContent || '');
  };

  return (
    <div className={classNames.root}>
      <div className={classNames.terminalHeader} />
      <div className={classNames.terminal} ref={rootRef} onClick={() => inputRef.current?.focus()}>
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
                {item.text.split('\n').map((line, index) => (
                  <span key={uuidv4()} className={classNames.input}>
                    {line}
                    {index !== item.text.split('\n').length - 1 && <br />}
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
        <div
          ref={inputRef}
          contentEditable
          suppressContentEditableWarning
          spellCheck={false}
          className={classNames.input}
          onInput={handleInput}
          onKeyDown={handleEnterDown}
        />
        <span className={classNames.blinkingCaret}>█</span>
      </div>
    </div>
  );
};

export default Terminal;
