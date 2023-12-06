import { RefObject, useEffect, useMemo, useState } from 'react';

const UseIsInViewport = (ref: RefObject<HTMLDivElement>): boolean => {
  const [isInViewport, setIsInViewport] = useState(false);

  const observer = useMemo(() => new IntersectionObserver(([entry]) => setIsInViewport(entry.isIntersecting)), []);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isInViewport;
};

export default UseIsInViewport;
