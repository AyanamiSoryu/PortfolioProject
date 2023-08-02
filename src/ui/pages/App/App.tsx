import './App.css';

import React, { memo } from 'react';

import portfolioMock from '../../../data/portfolioMock';
import TimeZonesIcon from '../../components/Icon/timeZonesIcon.svg';
import LinkComponent from '../../components/LinkImage/LinkComponent';
import { PortfolioGrid } from '../../components/PortfolioGrid';
import Portfolio from '../../smart-components/Portfolio';

export interface AppProps {}

const App: React.FC<AppProps> = () => (
  <div className='it should be router or so on'>
    <Portfolio />
    <PortfolioGrid cases={portfolioMock} />
    <LinkComponent icon={<TimeZonesIcon />} downloadName={false} href='https://pornhub.com' />
  </div>
);

export default memo(App);
