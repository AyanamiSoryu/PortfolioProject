import { useState } from 'react';

const OnLoadUtility = () => {
  const [picOrder, setPicOrder] = useState<number>(0);

  return { picOrder, setPicOrder };
};

export default OnLoadUtility;
