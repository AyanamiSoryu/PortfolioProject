declare module '*.svg' {
  import { ReactComponentElement } from 'react';

  const SvgIcon: ReactComponentElement;
  export default SvgIcon;
}
// declare module '*.svg' {
//   const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//   const content: string;
//
//   export { ReactComponent };
//   export default content;
// }

declare module '*.module.less' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.scss' {
  const classNames: Record<string, string>;
  export default classNames;
}

declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
