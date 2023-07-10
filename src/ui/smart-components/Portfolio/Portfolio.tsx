import React, { memo, useState, useEffect } from 'react'
import classNames from './Portfolio.module.scss'
import { portfolioMock } from '../../../data/portfolioMock'
import { type Portfolio as PortfolioData } from '../../../types/portfolio'
import PortfolioGrid from '../../components/PortfolioGrid'

export interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPortfolioData(portfolioMock)
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])

  const shouldShowGrid = isLoading && portfolioData

  return (
    <div className={classNames.root}>
      {isLoading && <div>Loading...</div>}
      {shouldShowGrid && <PortfolioGrid cases={portfolioData} />}
    </div>
  )
}

export default memo(Portfolio)
