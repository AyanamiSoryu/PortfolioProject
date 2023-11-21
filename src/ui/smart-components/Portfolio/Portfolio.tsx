import React, { memo, useEffect, useState } from 'react';

import { type Portfolio as PortfolioData } from '../../../@types/portfolio';
import truePortfolioMock01 from '../../../data/truePortfolioMock01';
import { PortfolioGrid } from '../../components/PortfolioGrid';
import classNames from './Portfolio.module.scss';

export interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPortfolioData(truePortfolioMock01);
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const shouldShowGrid = isLoading && portfolioData;

  return (
    <div className={classNames.root}>
      {/* {isLoading && <div>Loading...</div>} */}
      {shouldShowGrid && <PortfolioGrid cases={portfolioData} />}
    </div>
  );
};

export default memo(Portfolio);
