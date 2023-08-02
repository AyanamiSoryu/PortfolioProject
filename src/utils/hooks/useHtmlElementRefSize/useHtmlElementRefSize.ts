import { RefObject, useCallback, useEffect, useState } from 'react';

const useHtmlElementRefSize = (htmlElementRef: RefObject<HTMLElement>): { width: number; height: number } => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const updateSize = useCallback(() => {
    const htmlElement = htmlElementRef.current;

    if (!htmlElement) {
      return;
    }

    const currentWidth = htmlElement.offsetWidth;
    const currentHeight = htmlElement.offsetHeight;

    setWidth(currentWidth);
    setHeight(currentHeight);
  }, [htmlElementRef]);

  useEffect(() => {
    const htmlElement = htmlElementRef.current;

    if (!htmlElement) {
      return () => {};
    }

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(htmlElement);

    updateSize();

    return () => resizeObserver.disconnect();
  }, [htmlElementRef, updateSize]);

  return { width, height };
};

export default useHtmlElementRefSize;
