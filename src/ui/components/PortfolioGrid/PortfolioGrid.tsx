import React, { useMemo, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Case, Portfolio } from '../../../@types/portfolio';
import useHtmlElementRefSize from '../../../utils/hooks/useHtmlElementRefSize';
import onLoadUtility from '../../../utils/OnLoadUtilit/OnLoadUtility';
import Image from '../imageComponent/image';
import classNames from './PortfolioGrid.module.scss';

const GRID_ELEMENTS_MARGIN = 20;
const getCasesSizesForSameHeight = (arrayOfPic: Case[]): Array<{ width: number; height: number }> => {
  const firstPicHeight = arrayOfPic[0].originHeight;
  return arrayOfPic.map((picCase) => {
    const coefficientOfHeight = firstPicHeight / picCase.originHeight;
    return {
      width: picCase.originWidth * coefficientOfHeight,
      height: picCase.originHeight * coefficientOfHeight
    };
  });
};

export type PortfolioGridProps = {
  cases: Case[];
};

type SizeMap = Record<string, { width: number; height: number }>;

export const PortfolioGrid: React.FC<PortfolioGridProps> = (props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const { width: containerWidth } = useHtmlElementRefSize(rootRef);
  const { cases } = props;
  const groupedCases = useMemo(() => {
    return cases.reduce<Array<Case[]>>((acc: any, currentCase): Array<Portfolio> => {
      if (acc.length === 0) {
        acc.push([currentCase]);
        return acc;
      }
      const currentCaseSize = currentCase.size;
      acc.findLast((group: Array<Case>) => {
        let someMath = 0;
        group.forEach((currentCaseInGroup) => {
          someMath += 1 / currentCaseInGroup.size;
        });
        if (someMath + 1 / currentCaseSize <= 1) {
          group.push(currentCase);
          return acc;
        }
        acc.push([currentCase]);
        return acc;
      });
      return acc;
    }, []);
  }, [cases]);

  const caseSizeByIdMap: SizeMap = useMemo(() => {
    const result: SizeMap = {};
    groupedCases.forEach((casesGroup) => {
      const normalizedSizes = getCasesSizesForSameHeight(casesGroup);
      const groupWidth = normalizedSizes.reduce((sum, size) => sum + size.width, 0);
      const marginBetweenElements = (casesGroup.length - 1) * GRID_ELEMENTS_MARGIN;

      casesGroup.forEach((groupCase, index) => {
        const caseNormalizedSize = normalizedSizes[index];
        const scaleK = (containerWidth - marginBetweenElements) / groupWidth;
        result[groupCase.id] = {
          width: caseNormalizedSize.width * scaleK,
          height: caseNormalizedSize.height * scaleK
        };
      });
    });
    return result;
  }, [groupedCases, containerWidth]);

  // const containerWidth = 1000;
  // const availableWidth = containerWidth - (elementsInGroup - 1) * offset;
  // const elementsHeight = groupedCases.reduce(
  //   (acc, group) => {
  //     const groupCaseId = group[0].id;
  //     return acc + caseSizeByIdMap[groupCaseId].height;
  //   },
  //   (groupedCases.length - 1) * GRID_ELEMENTS_MARGIN
  // );

  return (
    <div ref={rootRef} className={classNames.root}>
      {groupedCases.map((group) => {
        return (
          <div key={uuidv4()} className={classNames.item}>
            {group.map((currentCase) => {
              const { interactive: InteractElem } = currentCase;
              const currentSource = currentCase.source;
              const currentCaseId = currentCase.id;
              const trueCaseWidth = caseSizeByIdMap[currentCaseId].width;
              const trueCaseHeight = caseSizeByIdMap[currentCaseId].height;

              if (InteractElem) {
                return (
                  <div
                    className={classNames.item}
                    key={currentCase.id}
                    style={{ width: Math.floor(trueCaseWidth), height: trueCaseHeight }}>
                    <Image
                      width='100%'
                      height='100%'
                      src={currentSource[0].src}
                      // loadingStatusCheck={setLoadingStatus(loadingStatus + 1)}
                    />
                    <InteractElem />
                  </div>
                );
              }

              const { picOrder, setPicOrder } = onLoadUtility();
              const isCanLoadNextImage =
                picOrder !== currentSource.length - 1 && containerWidth > 940 ? picOrder + 1 : picOrder;

              return (
                <div
                  className={classNames.item}
                  key={currentCase.id}
                  style={{ width: Math.floor(trueCaseWidth), height: trueCaseHeight }}>
                  <Image
                    width='100%'
                    height='100%'
                    src={currentSource[picOrder].src}
                    loadingStatusCheck={() => setPicOrder(isCanLoadNextImage)}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
