import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ButtonIcon from '../Icon/sendButtonIcon.svg';
import TailBlack from '../Icon/TailBlack.svg';
import TailWhite from '../Icon/TailWhite.svg';
import classNames from './ChatComponent.module.scss';

type ChatSpec = Array<{
  fieldName?: string;
  message: string;
  fallBackMessage: string | null;
  validation: RegExp | null;
}>;

type FormData = Record<string, string>;

export type ChatComponentProps = {
  spec: ChatSpec;
  onSubmit: (formData: FormData) => void;
  title: string;
};

type Message = {
  id: string;
  text: string;
  isIncome: boolean;
};
const ChatComponent: React.FC<ChatComponentProps> = (props: ChatComponentProps) => {
  const { spec: arrayOfSpec, onSubmit: onSubmitFunc, title: chatTitle } = props;
  const [inputValue, setInputValue] = useState('');
  const [numberOfSpec, setNumberOfSpec] = useState(1);
  const startingSpecMessages = arrayOfSpec.slice(0, 2).reduce((acc: Array<Message>, spec) => {
    const { message } = spec;
    const newMessage: Message = {
      id: uuidv4(),
      text: message,
      isIncome: false
    };
    acc.push(newMessage);
    return acc;
  }, []);
  const [renderMessages, setRenderMessages] = useState<Array<Message>>(startingSpecMessages);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => scrollToBottom);

  const handleClick = () => {
    const { fieldName, validation, fallBackMessage } = arrayOfSpec[numberOfSpec];
    if (
      validation !== null &&
      validation.test(inputValue) &&
      fieldName !== undefined &&
      arrayOfSpec[numberOfSpec + 1]
    ) {
      const nextMessage = arrayOfSpec[numberOfSpec + 1].message;
      const result = { [fieldName]: inputValue };
      onSubmitFunc(result);
      setInputValue('');
      setNumberOfSpec(numberOfSpec + 1);
      const newMessages = renderMessages;
      newMessages.push({
        id: uuidv4(),
        text: inputValue,
        isIncome: true
      });
      newMessages.push({
        id: uuidv4(),
        text: nextMessage,
        isIncome: false
      });
      setRenderMessages(newMessages);
    } else if (fallBackMessage && inputValue.length !== 0) {
      const result = renderMessages;
      result.push({
        id: uuidv4(),
        text: inputValue,
        isIncome: true
      });
      result.push({
        id: uuidv4(),
        text: fallBackMessage,
        isIncome: false
      });
      setRenderMessages(result);
      setInputValue('');
    }
  };

  const groupRenderMessages = () => {
    const groupedMessages: Array<Array<Message>> = [];
    let group: Array<Message> = [];
    renderMessages.forEach((message, index) => {
      group.push(message);
      if (renderMessages[index + 1] === undefined || renderMessages[index + 1].isIncome !== message.isIncome) {
        groupedMessages.push(group);
        group = [];
      }
    });
    return groupedMessages;
  };

  return (
    <div className={classNames.root}>
      <div className={classNames.title}>{chatTitle}</div>
      <div className={classNames.scroll} ref={chatContainerRef}>
        <div className={classNames.flex}>
          {groupRenderMessages().map((group) => {
            const firstMessage = group[0];
            const groupType = firstMessage.isIncome ? classNames.userGroup : classNames.serverGroup;
            return (
              <div className={groupType}>
                {group.map((current) => {
                  const { id, text, isIncome } = current;
                  const Tail = isIncome ? TailBlack : TailWhite;
                  const tailClass = isIncome ? classNames.tailBlack : classNames.tailWhite;
                  return (
                    <div key={id} className={isIncome ? classNames.userMessage : classNames.serverMessage}>
                      {text}
                      <div className={tailClass}>
                        <Tail />
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className={classNames.inputAndButton}>
        <div className={classNames.inputContainer}>
          <input
            placeholder='Say something...'
            className={classNames.input}
            type='text'
            value={inputValue}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleClick();
              }
            }}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>
        <div className={classNames.button} onClick={handleClick}>
          <ButtonIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
