import React, { useState } from 'react'
import { Image } from '../imageComponent/image'
import { type Portfolio } from '../../../types/portfolio'
import classNames from './PortfolioGrid.module.scss'

export interface PortfolioGridProps {
  cases: Portfolio
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = (props) => {
  const { cases } = props
  const [caseParacasesms, setCaseParams] = useState<any>()
  if (Array.isArray(cases)) {
    cases.forEach((current) => {
      const currentWidth = current.originWidth
      const currentHeight = current.originHeight
      const currentCaseId = current.id
      const currentSource = current.source
      setCaseParams({
        [currentCaseId]: {
          width: currentWidth,
          height: currentHeight,
          source: currentSource
        }
      })
    })
  }
  return (
    <div className={classNames.root}>
      {cases.map((current, index) => {
        const currentPicWidth = current.originWidth
        const currentPicHeight = current.originHeight
        const nextPicWidth = cases[index + 1]
        const currentSource = current.source
        if (currentPicWidth / currentPicHeight > 1.5) {
          return (
            <div className={classNames.item} key={index}>
              <Image width={1200} height={720} src={currentSource[0].src} />
            </div>
          )
        }

        return (
          <div className={classNames.item} key={`${index}`}>
            <Image width={1200} height={720} src={currentSource[0].src} />
          </div>
        )
      })}
    </div>
  )
}

export default PortfolioGrid
