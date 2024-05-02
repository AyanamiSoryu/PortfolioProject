import '../../../assets/fonts/fonts.css';

import React, { memo } from 'react';

// import truePortfolioMock01 from '../../../data/truePortfolioMock01';
import CodePenEmbed from '../../components/CodePen/CodePen';
import FirstPage from '../../components/FirstPage/FirstPage';
import InfoTabs from '../../components/InfoTabs/InfoTabs';
// import { PortfolioGrid } from '../../components/PortfolioGrid';
// import SeeMoreButton from '../../components/SeeMoreButton/SeeMoreButton';
import Terminal from '../../components/Terminal/Terminal';
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
        <Terminal />
        <CodePenEmbed />
        {/* <PortfolioGrid cases={truePortfolioMock01} /> */}
      </div>
    </div>
  );
};

export default memo(App);
