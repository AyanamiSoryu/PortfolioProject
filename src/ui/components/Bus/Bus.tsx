import React, { useEffect, useRef, useState } from 'react';

import Arrow from '../../../data/newImageMock/block 2/InterfaceElem/Frame 2085661081.png';
import Ok from '../../../data/newImageMock/block 2/InterfaceElem/Frame 2085661082.png';
import Van from '../../../data/newImageMock/block 2/InterfaceElem/van.png';
import scrollPosition from '../../../utils/scrollPosition/scrollPosition';
import classNames from './Bus.module.scss';

const Bus: React.FC = () => {
  const [isBlockInViewport, setIsBlockInViewport] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const currentScroll = scrollPosition();

  useEffect(() => {
    if (rootRef.current) {
      const rootBounding = rootRef.current?.getBoundingClientRect();
      setIsBlockInViewport(rootBounding.top - window.innerHeight / 1.3 < 0);
    }
  }, [currentScroll]);

  return (
    <div ref={rootRef} className={classNames.root}>
      <div className={classNames.scroll}>
        <img
          alt='van'
          src={Van}
          className={classNames.pic}
          style={{ transform: `translate(${isBlockInViewport ? 337 : 0}%)` }}
        />
        <img
          alt='arrow'
          src={isBlockInViewport ? Ok : Arrow}
          className={classNames.arrow}
          style={{ transform: `translate(${isBlockInViewport ? 660 : -173}%)` }}
          draggable='false'
        />
      </div>
    </div>
  );
};

export default Bus;
