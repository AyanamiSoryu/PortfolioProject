import React from 'react';

import ArrowButton from '../ui/components/ArrowButton/ArrowButton';

export interface ImageAlias {
  width: number;
  height: number;
  src: string;
}

export interface Case {
  id: string;
  title: string;
  description: string;
  link?: string;
  size: number;
  originWidth: number;
  originHeight: number;
  source: ImageAlias[];
  interactive?: typeof ArrowButton;
  onLoad?: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export type Portfolio = Case[];
