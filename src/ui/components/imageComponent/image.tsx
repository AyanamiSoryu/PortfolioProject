import React from 'react';

interface ImageAlias {
  width: number | string;
  height: number | string;
  src: string;
  loadingStatusCheck?: () => void;
}

interface Case {
  id: string;
  title: string;
  description: string;
  link?: string;
  originWidth: number;
  originHeight: number;
  source: ImageAlias[];
}

const Image = (props: ImageAlias) => (
  <img
    src={props.src}
    width={`${props.width}`}
    height={`${props.height}`}
    style={{ borderRadius: '24px' }}
    alt='something'
    onLoad={props.loadingStatusCheck}
  />
);

export default Image;
