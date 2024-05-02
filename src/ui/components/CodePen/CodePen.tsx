import React, { useRef } from 'react';

import useHtmlElementRefSize from '../../../utils/hooks/useHtmlElementRefSize';
import classNames from './CodePen.module.scss';

const CodePenEmbed = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const { width: containerWidth } = useHtmlElementRefSize(rootRef);

  return (
    <div className={classNames.root} ref={rootRef}>
      <div className={classNames.textContainer}>
        <h2>Clip-path button</h2>
        <p className={classNames.text}>
          Key features include: <br />
          <br />✅ Interactivity: The button responds to user clicks, smoothly switching between sections. <br />
          <br />
          🎨 Stylish Design: Aesthetic design using clip-path technology for smooth and attractive transitions. <br />
          <br />
          🛠️ Flexible Configuration: Easily customizable component with the ability to add and modify sections. <br />
        </p>
      </div>
      <div className={classNames.pen}>
        <iframe
          height='100%'
          width='100%'
          scrolling='no'
          title='ButtonClipPath'
          // src='https://codepen.io/ayanamisoryu/embed/xxMMrZM?default-tab=js%2Cresult&editable=true'
          src={
            containerWidth > 940
              ? 'https://codepen.io/ayanamisoryu/embed/xxMMrZM?default-tab=js%2Cresult&editable=true'
              : 'https://codepen.io/ayanamisoryu/embed/xxMMrZM?default-tab=result&editable=true'
          }
          frameBorder='no'
          loading='lazy'
          // allowTransparency='true'
          // allowFullScreen='true'
        >
          See the Pen <a href='https://codepen.io/ayanamisoryu/pen/xxMMrZM'>ButtonClipPath</a> by AyanamiSoryu (
          <a href='https://codepen.io/ayanamisoryu'>@ayanamisoryu</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
      </div>
    </div>
  );
};

export default CodePenEmbed;
