import { createRef, RefObject, useCallback, useEffect, useMemo, useRef } from 'react';

type MapRef<RefType> = {
  use(id: string): RefObject<RefType>;
  get(id: string): RefType | null;
};

const useMapRef = <RefType>(): MapRef<RefType> => {
  const mapOfRefs = useRef<Record<string, RefObject<RefType>>>({});
  const usedIdsSetRef = useRef(new Set<string>());

  const use = useCallback((id: string) => {
    usedIdsSetRef.current.add(id);
    if (!mapOfRefs.current[id]) {
      mapOfRefs.current[id] = createRef();
    }
    return mapOfRefs.current[id];
  }, []);

  const get = useCallback((id: string) => {
    return mapOfRefs.current[id]?.current ?? null;
  }, []);

  useEffect(() => {
    const usedIdsSet = usedIdsSetRef.current;
    const map = mapOfRefs.current;

    Object.keys(map).forEach((key) => {
      if (usedIdsSet.has(key)) {
        return;
      }

      delete map[key];
    });

    usedIdsSet.clear();
  });

  return useMemo(() => ({ use, get }), [use, get]);
};

export default useMapRef;
