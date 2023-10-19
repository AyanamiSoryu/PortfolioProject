import React from 'react';

import ArrowGroup from '../Icon/arrowGroup.svg';
import classNames from './ArrowButton.modules.scss';

type ArrowButtonLink = {
  href: string;
};

export type RoundButtonProps = {
  id?: string;
} & (ArrowButtonLink | {});

const ArrowButton: React.FC<RoundButtonProps> = (props) => {
  const isLink = 'href' in props;
  const isDownload = 'downloadName' in props;

  const Tag = isLink ? 'a' : 'div';
  const linkProps = isLink ? { href: props.href, target: '_blank' } : {};
  const downloadProps = isDownload ? { download: props.downloadName } : {};
  const additionalProps = { ...linkProps, ...downloadProps };

  return (
    <Tag className={classNames.root} {...additionalProps}>
      <ArrowGroup />
    </Tag>
  );
};

export default ArrowButton;
