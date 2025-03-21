import '../../../assets/fonts/fonts.css';

import React, { memo } from 'react';

import FirstPage from '../../components/FirstPage/FirstPage';
import InfoTabs from '../../components/InfoTabs/InfoTabs';
import Portfolio from '../../smart-components/Portfolio';
import classNames from './App.module.scss';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className={classNames.root}>
      <div className={classNames.body}>
        <Portfolio />
        <FirstPage />
        <InfoTabs />
        {/* <SeeMoreButton /> */}
        {/* <Terminal /> */}
        {/* <CodePenEmbed /> */}
        {/* <TerminalCodePenBlock/> */}
        {/* <PortfolioGrid cases={truePortfolioMock01} /> */}
      </div>
    </div>
  );
};

export default memo(App);
