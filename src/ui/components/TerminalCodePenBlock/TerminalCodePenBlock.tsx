import React from 'react';

import CodePen from '../CodePen/CodePen';
import Terminal from '../Terminal/Terminal';
import classNames from './TerminalCodePenBlock.module.scss';

const TerminalCodePenBlock = () => {
  return (
    <div className={classNames.root}>
      <CodePen />
      <Terminal />
    </div>
  );
};

export default TerminalCodePenBlock;
