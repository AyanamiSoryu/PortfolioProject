import '../../../assets/fonts/fonts.css';

import React, { memo } from 'react';

import truePortfolioMock01 from '../../../data/truePortfolioMock01';
import FirstPage from '../../components/FirstPage/FirstPage';
import { PortfolioGrid } from '../../components/PortfolioGrid';
import Portfolio from '../../smart-components/Portfolio';
import classNames from './App.module.scss';

export interface AppProps {}

const App: React.FC<AppProps> = () => (
  <div className={classNames.root}>
    <div className={classNames.body}>
      <Portfolio />
      <FirstPage />
      <PortfolioGrid cases={truePortfolioMock01} />
    </div>
  </div>
);

export default memo(App);
