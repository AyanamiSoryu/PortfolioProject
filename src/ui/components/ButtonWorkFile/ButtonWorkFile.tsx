import React, { useLayoutEffect, useRef, useState } from 'react';

import useMapRef from '../../../utils/hooks/useMapRef/useMapRef';
import classNames from './ButtonWorkFile.module.scss';

export type ButtonSections = {
  sections: Array<Record<'id', string>>;
};

type Bounds = {
  left: number;
  right: number;
};

const Button: React.FC<ButtonSections> = (props) => {
  const { sections } = props;
  const mapRef = useMapRef<HTMLDivElement>();
  const [currentId, setCurrentId] = useState<string>(sections[0].id);
  const [currentItemBounds, setCurrentItemBounds] = useState<Bounds>({ left: 100, right: 100 });

  const refContainer = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   sections.forEach((item) => {
  //     const itemDiv = mapRef.get(item.id);
  //     if (itemDiv) {
  //       console.log('itemDiv height:', itemDiv.current?.offsetHeight);
  //     }
  //   });
  // }, [mapRef, sections]);

  // const refElement = useMapRef().get(currentId);
  // console.log(refElement, 'refElement');
  // const rect = refElement ? refElement.getBoundingClientRect() : null;

  const handleClick = (itemId: string) => {
    setCurrentId(itemId);
  };

  useLayoutEffect(() => {
    const element = mapRef.get(currentId);
    const container = refContainer.current;
    if (!element || !container) {
      return;
    }

    const containerBBox = container.getBoundingClientRect();
    const elementBBox = element.getBoundingClientRect();
    const { left: containerLeft, right: containerRight } = containerBBox;
    const { left: elementLeft, right: elementRight } = elementBBox;

    const distanceBetweenElements = {
      left: elementLeft - containerLeft - 1,
      right: containerRight - elementRight - 1
    };

    setCurrentItemBounds(distanceBetweenElements);
  }, [currentId, mapRef]);

  return (
    <div className={classNames.root}>
      <div className={classNames.container}>
        {sections.map((item) => {
          return (
            <div className={classNames.grey} onClick={() => handleClick(item.id)}>
              {item.id}
            </div>
          );
        })}
      </div>
      <div
        className={classNames.clipContainer}
        style={{
          clipPath: `inset(0 ${currentItemBounds.right}px 0 ${currentItemBounds.left}px round 100px)`
        }}
        ref={refContainer}>
        {sections.map((item) => {
          return (
            <div className={classNames.white} key={item.id} ref={mapRef.use(item.id)}>
              {item.id}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Button;

// const buttonReturner = () => {
//   return useToggleButton === 0 ? (
//     <div className={classNames.root}>
//       <div className={classNames.active} onClick={handleClick}>
//         Work
//       </div>
//       <div className={classNames.disable} onClick={handleClick}>
//         Files
//       </div>
//     </div>
//   ) : (
//     <div className={classNames.root}>
//       <div className={classNames.disable} onClick={handleClick}>
//         Work
//       </div>
//       <div className={classNames.active} onClick={handleClick}>
//         Files
//       </div>
//     </div>
//   );
// };

// const handleClick = () => {
//   console.log('Button clicked');
//   return useToggleButton === 1 ? setToogleButton(0) : setToogleButton(1);
// };
