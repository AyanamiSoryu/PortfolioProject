import React, { useState } from 'react';

type ProgressiveImageProps = {
  srcLow: string;
  srcHigh: string;
  alt: string;
  className?: string;
};

const ProgressiveImage: React.FC<ProgressiveImageProps> = (props) => {
  const { srcLow, srcHigh, alt, className } = props;
  const [highResImageLoaded, setHighResImageLoaded] = useState<boolean>(false);

  return (
    <img
      className={className}
      src={highResImageLoaded ? srcHigh : srcLow}
      onLoad={() => setHighResImageLoaded(true)}
      alt={alt}
    />
  );
};

export default ProgressiveImage;
