import styled from './heroblock.module.css';
import slidesData from "../../staticData/static-data-hero-slider.json";
import Slider from '../Slider/Slider';

function HeroBlock() {
  return (
    <div className={styled.container}>
      <Slider 
        data={slidesData}
        childrenOnPage={1}
      >
        {slidesData.map((item,idx) => (
          <div key={idx} className={styled.slide}>
            <div className={styled.info}>
              <div className={styled.infoText}>
                <h2 className={styled.title}>{item.title}</h2>
                <p className={styled.descript}>{item.descript}</p>
              </div>
              <a href='/' className={styled.link}>Подробнее</a>
            </div>
            <div className={styled.picture}>
              <img src={item.imageUrl} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroBlock;