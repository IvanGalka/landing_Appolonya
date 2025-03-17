import { useEffect, useState, createContext } from 'react';
import styled from './slider.module.css';
import SvgSprite from '../SvgSprite';

export const SliderContext = createContext();

function Slider({data, children}) {
  const SliderStopValueMax = children.length - 1;
  const [offset, setOffset] = useState([0]);
  const handleClickRight = () => {
    setOffset((currentOffset) => {
      let newOffset;
      if (currentOffset <= -SliderStopValueMax) {
        newOffset = 0;
      } else {
        newOffset = --currentOffset;
      };
      return newOffset;
    });
  };
  const handleClickLeft = () => {
    setOffset((currentOffset) => {
      let newOffset;
      if (currentOffset >= 0) {
        newOffset = -SliderStopValueMax;
      } else {
        newOffset = ++currentOffset;
      };
      return newOffset;
    });
  };

  const handleClickPaggination = (idx) => {
    setOffset((currentOffset) => {
      if (currentOffset === idx) {
        return currentOffset;
      } else {
        const newOffset = -idx;
        return newOffset;
      };
    });
  };
  
  setTimeout (() => {
    setOffset((currentOffset) => {
      let newOffset;
      if (currentOffset <= -SliderStopValueMax) {
        newOffset = 0;
      } else {
        newOffset = --currentOffset;
      };
      return newOffset;
    });
  },5000)
  return (
    <div className={styled.slider}>
      <span className={styled.arrowLeft} onClick={handleClickLeft}>
        <SvgSprite spriteName='arrowLeft' />
      </span>
      <div 
        className={styled.allItemsContainer}
        style={{
          transform: `translateX(${offset}00%)`
        }}
      >
        {children}
      </div>
      <span className={styled.arrowRight} onClick={handleClickRight}>
        <SvgSprite spriteName='arrowRight' />
      </span>
      <div className={styled.pagginationContainer}>
        {children.map((el,idx) => (
          <span 
            key={idx}
            className={`${styled.pagginCircle} ` + `${-offset === idx ? `${styled.activePagginCircle}` : ''}`}
            onClick={() => {handleClickPaggination(idx)}}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;