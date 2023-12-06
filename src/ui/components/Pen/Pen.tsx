import React, { useEffect, useRef, useState } from 'react';

import point from '../../../data/newImageMock/block 17/interactiveElements/Frame 2085661848.png';
import pen from '../../../data/newImageMock/block 17/interactiveElements/ipad pro psd mockup 1.png';
import shadow from '../../../data/newImageMock/block 17/interactiveElements/Vector 4.png';
import scrollPosition from '../../../utils/scrollPosition/scrollPosition';
import useIsInViewport from '../../../utils/useIsInViewport/useIsInViewport';
import classNames from './Pen.module.scss';

const Pen = () => {
  const [isBlockInViewport, setIsBlockInViewport] = useState(false);
  const currentScrollPosition = scrollPosition();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const isRootInViewport = useIsInViewport(rootRef);
  const penMaxYTransformPercentage = 27;
  const shadowMaxXTransformPercentage = -31;

  useEffect(() => {
    // console.log('SCROLL', currentScrollPosition);
    if (isRootInViewport && rootRef.current) {
      const rootBounding = rootRef.current?.getBoundingClientRect();
      setIsBlockInViewport(rootBounding.top - window.innerHeight / 2.5 < 0);
    }
  }, [currentScrollPosition, isRootInViewport]);

  return (
    <div className={classNames.root} ref={rootRef}>
      <div className={classNames.scroll}>
        <img
          src={pen}
          alt={pen}
          className={classNames.pen}
          style={{
            transform: `translate(0, ${isBlockInViewport ? penMaxYTransformPercentage : 0}%)`,
            opacity: isBlockInViewport ? '1' : '0'
          }}
        />
      </div>
      <div className={classNames.scroll}>
        <img
          src={shadow}
          alt={shadow}
          className={classNames.shadow}
          style={{
            transform: `translate(${isBlockInViewport ? shadowMaxXTransformPercentage : 0}%)`,
            opacity: isBlockInViewport ? '1' : '0'
          }}
        />
      </div>
      <img src={point} alt={point} className={classNames.point} />
    </div>
  );
};

export default Pen;
