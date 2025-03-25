import styled from './advantages.module.css';
import staticData from '../../staticData/static-data-advantages.json';
import SvgSprite from '../SvgSprite'

function Advantages() {
  return (
    <div className={styled.container}>
      <h2 className={styled.title}>Сеть стоматологических клиник «Аполлония»</h2>
      <div className={styled.contentBlock}>
        <ul className={styled.list}>
          {staticData.map((el,idx) => (
            <li key={idx} className={styled.item}>
              <span className={styled.iconWrapper}>
                <SvgSprite spriteName={el.urlSvg}/>
              </span>
              <div className={styled.textBlock}>
                <h3 className={styled.itemTitle}>{el.title}</h3>
                <p className={styled.itemDescript}>{el.descript}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Advantages;