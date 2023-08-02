import React from 'react';

import classNames from './LinkComponent.modules.scss';

type ButtonLink = {
  href: string;
};
type ButtonDownloadLink = ButtonLink & {
  downloadName: boolean;
};

export type SquareButtonProps = {
  icon: React.ReactNode;
} & (ButtonLink | ButtonDownloadLink | {});

const SquareButton: React.FC<SquareButtonProps> = (props) => {
  const { icon: imgSvg } = props;
  const isLink = 'href' in props;
  const isDownload = 'downloadName' in props;

  const Tag = isLink ? 'a' : 'div';
  const linkProps = isLink ? { href: props.href, target: '_blank' } : {};
  const downloadProps = isDownload ? { download: props.downloadName } : {};
  const additionalProps = { ...linkProps, ...downloadProps };
  return (
    <Tag className={classNames.root} {...additionalProps}>
      {isDownload && <div className={classNames.downloadIcon} />}
      {imgSvg}
    </Tag>
  );
};

export default SquareButton;

// <SquareButton icon={<ProfileIcon />} />;
// <SquareButton icon={<img />} />;
