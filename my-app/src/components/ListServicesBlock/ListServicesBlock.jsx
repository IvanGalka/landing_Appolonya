import styled from './listServicesBlock.module.css';
import listData from "../../staticData/static-data-list-of-services.json";
import SvgSprite from '../SvgSprite';
import { useState } from 'react';

function ListServicesBlock() {
  const [listHeight, setListHeight] = useState({height: 378, listCollection: 4});
  const plusHeightConst = 328;
  const handlePlusHeightList = () => {
    setListHeight(() => {
      return {
        height: listHeight.height + plusHeightConst,
        listCollection: listHeight.listCollection + 4
      }
    });
  }
  return (
    <div className={styled.container}>
      <h2 className={styled.title}>Основные услуги стоматологических клиник</h2>
      <div className={styled.listContainer}>
        <ul className={styled.list} style={{height: `${listHeight.height}px`}}>
          {listData.map((el,idx) => (
            <li key={idx} className={styled.card}>
              <span className={styled.iconWrapper}>
                <SvgSprite spriteName={el.svgUrl} />
              </span>
              <h4 className={styled.cardTitle}>{el.title}</h4>
              <a className={styled.cardLink} href="/">Подробнее</a>
            </li>
          ))}
        </ul>
        <button className={styled.buttonVision} onClick={handlePlusHeightList} style={listHeight.listCollection <= listData.length ? {display: 'block'} : {display: 'none'}}>Показать больше</button>
      </div>
    </div>
  );
}

export default ListServicesBlock;