import '../../../assets/fonts/fonts.css';

import React, { memo } from 'react';

import portfolioMock from '../../../data/portfolioMock';
import truePortfolioMock from '../../../data/truePortfolioMock';
import ButtonWorkFile from '../../components/ButtonWorkFile/ButtonWorkFile';
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
      <ButtonWorkFile sections={[{ id: 'Work' }, { id: 'Files' }]} />
      <PortfolioGrid cases={truePortfolioMock} />
    </div>
  </div>
);

export default memo(App);
