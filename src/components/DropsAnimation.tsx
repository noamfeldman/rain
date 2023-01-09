import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IDropsProps } from '../model/interfaces';

const Lines = styled.div<IDropsProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 100vw;
  z-index: 1;
  & > div {
    ${({ numOfDrops }) => createDropsDelay(numOfDrops)}
  }
`;

const createDropsDelay = (numOfDrops: number) => {
  const dropsArray = Array.from(Array(numOfDrops).keys());
  const dropDuration = 3 - 2 * (numOfDrops / 100);
  let styles = `position: absolute;  
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;

  &::after{
    content: '';
    display: block;
    position: absolute;
    height: 5vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #1976d2 75%, #1976d2 100%);
    animation: drop ${dropDuration}s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }
  `;
  dropsArray.forEach((drop) => {
    const delay = `${Math.random() * 4 + 1}s`;
    const marginLeft = `${100 * (drop / numOfDrops) - 50}%`;
    const dropSize = Math.random() * 2 + 1;
    styles += ` 
    &:nth-of-type(${drop}){
      width: ${dropSize}px;
      margin-left: ${marginLeft};
      &::after {
        animation-delay: ${delay};
      }
    }
    `;
  });
  styles += ` 
  @keyframes drop {
  0%{
    top: -50%;
  }
  100% {
    top: 110%;
  }
  }`;
  return css`
    ${styles}
  `;
};

const DropDiv = styled.div``;

export default function DropsAnimation(props: IDropsProps) {
  const { numOfDrops } = props;
  const dropsArray = Array.from(Array(numOfDrops).keys());
  return (
    <Lines numOfDrops={numOfDrops}>
      {dropsArray.map((key) => (
        <DropDiv key={key} />
      ))}
    </Lines>
  );
}
