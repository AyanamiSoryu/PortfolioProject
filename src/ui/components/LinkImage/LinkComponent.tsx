import React from 'react';

import DownloadIcon from '../Icon/downloadIcon.svg';
import classNames from './LinkComponent.modules.scss';

type ButtonLink = {
  href: string;
};
type ButtonDownloadLink = ButtonLink & {
  downloadName: string;
};

export type SquareButtonProps = {
  icon: React.ReactNode;
  tagClassName?: string;
  id?: string;
  selected: string;
  onHover: Function;
} & (ButtonLink | ButtonDownloadLink | {});

const SquareButton: React.FC<SquareButtonProps> = (props) => {
  const { icon: imgSvg, onHover: onMouse, id: buttonId, selected: requstedID } = props;
  const isLink = 'href' in props;
  const isDownload = 'downloadName' in props;

  const Tag = isLink ? 'a' : 'div';
  const linkProps = isLink ? { href: props.href, target: '_blank' } : {};
  const downloadProps = isDownload ? { download: props.downloadName } : {};
  const additionalProps = { ...linkProps, ...downloadProps };

  // console.log(props, 'WWOOOOOOOOOOOOOOOOOOWWWWWWWWWWWWW');

  const ifClassExist = requstedID === buttonId ? classNames.focused : classNames.root;

  return (
    <Tag className={ifClassExist} {...additionalProps} onMouseEnter={() => onMouse(`${buttonId}`)}>
      {isDownload && (
        <div className={classNames.downloadIcon}>
          <DownloadIcon />
        </div>
      )}
      {imgSvg}
    </Tag>
  );
};

export default SquareButton;

// <SquareButton icon={<ProfileIcon />} />;
// <SquareButton icon={<img />} />;
