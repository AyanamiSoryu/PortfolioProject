import React from 'react';

const bigShrek = {
  width: 100,
  height: 100,
  src: 'https://wallpapers.com/images/featured/shrek-funny-pictures-73z98a447jsj4j4u.jpg'
};

const smallShrek = {
  width: 100,
  height: 100,
  src: 'https://i0.wp.com/cambridge105.co.uk/wp-content/uploads/2022/07/Shrek-the-Musical.jpg?fit=1200%2C675&ssl=1\n'
};

interface ImageAlias {
  width: number | string;
  height: number | string;
  src: string;
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

type Portfolio = Case[];

const shrekImage: ImageAlias = {
  width: 100,
  height: 100,
  src: 'https://wallpapers.com/images/featured/shrek-funny-pictures-73z98a447jsj4j4u.jpg'
};

const shrekCase1: Case = {
  id: '0',
  title: 'shrek',
  description: 'Shrek is Love',
  originWidth: 1253,
  originHeight: 698,
  source: [bigShrek]
};

const shrekCase2: Case = {
  id: '0',
  title: 'shrek',
  description: 'Shrek is Love',
  originWidth: 200,
  originHeight: 100,
  source: [smallShrek]
};

const Image = (props: ImageAlias) => (
  <img
    src={props.src}
    width={`${props.width}`}
    height={`${props.height}`}
    style={{ borderRadius: '24px' }}
    alt='something'
  />
);

export default Image;
