import React, { useRef, useState } from 'react';

import useHtmlElementRefSize from '../../../utils/hooks/useHtmlElementRefSize';
import CodePen from '../CodePen/CodePen';
import Terminal from '../Terminal/Terminal';
import classNames from './SeeMoreButton.module.scss';

const SeeMoreButton = () => {
  const [isButtonOn, toggleButton] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const rootWidth = useHtmlElementRefSize(rootRef).width;
  const isMobile = rootWidth < 970;

  return (
    <div className={classNames.root} ref={rootRef}>
      {isMobile ? (
        <>
          <Terminal />
          <CodePen />
        </>
      ) : (
        <>
          <div className={classNames.button} onClick={() => toggleButton(!isButtonOn)}>
            <text className={classNames.text}>Read More</text>
          </div>
          {isButtonOn ? (
            <div>
              <Terminal />
              <CodePen />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default SeeMoreButton;
