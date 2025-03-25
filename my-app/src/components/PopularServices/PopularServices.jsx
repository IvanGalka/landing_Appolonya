import styled from './popularservices.module.css';
import staticData from '../../staticData/static-data-popular-services.json';

function PopularServices() {
  return (
    <div className={styled.container}>
      <div className={styled.titleParth}>
        <h2 className={styled.title}>Популярные услуги «Аполлонии»</h2>
        <a href='/' className={styled.linkAll}>Все услуги</a>
      </div>
      <div className={styled.servicesPath}>
        <ul className={styled.list}>
          {staticData.map((el,idx) => (
            <li key={idx} className={styled.item}>
              <a className={styled.itemLink} href="/">
                <span className={styled.itemTitle}>{el.name}</span>
                <span className={styled.itemPrice}>{el.price} руб.</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PopularServices;