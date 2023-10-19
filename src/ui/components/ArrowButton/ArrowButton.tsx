import React from 'react';

import classNames from './ArrowButton.modules.scss';

type ArrowButtonLink = {
  href: string;
};

export type SquareButtonProps = {
  icon: React.ReactNode;
  id?: string;
} & (ArrowButtonLink | {});

const ArrowButton: React.FC<SquareButtonProps> = (props) => {
  const { icon: imgSvg } = props;
  const isLink = 'href' in props;
  const isDownload = 'downloadName' in props;

  const Tag = isLink ? 'a' : 'div';
  const linkProps = isLink ? { href: props.href, target: '_blank' } : {};
  const downloadProps = isDownload ? { download: props.downloadName } : {};
  const additionalProps = { ...linkProps, ...downloadProps };

  return (
    <Tag className={classNames.root} {...additionalProps}>
      {imgSvg}
    </Tag>
  );
};

export default ArrowButton;
