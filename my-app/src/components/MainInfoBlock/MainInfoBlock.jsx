import styled from './maininfoblock.module.css';
import ratingData from '../../staticData/static-data-rating.json';
import SvgSprite from '../SvgSprite';

function MainInfoBlock() {
  let arrStarGradient = [];
  ratingData.forEach(el => {
    let rating = +el.rating.replace(',', '.');
    let ratingCeil = Math.round((rating - Math.floor(rating))*10)*10;
    let arrGradientBlock = [];
    for (let j = 1; j <= Math.floor(rating); j++) {
      console.log(j)
      arrGradientBlock.push((j-j+1)*100);
    }
    if (ratingCeil !== 0) {
      arrGradientBlock.push(ratingCeil)
    }
    arrStarGradient.push(arrGradientBlock)
    console.log(arrStarGradient)
  })
  return (
    <div className={styled.container}>
      <div className={styled.content}>
        <div className={styled.textContent}>
          <h2 className={styled.title}>«Аполлония» – сеть взрослых и детских стоматологических отделений</h2>
          <hr className={styled.border} />
          <p className={styled.description}>
            «Аполлония» – это сеть стоматологических клиник в Москве, которые оказывают широкий спектр услуг по диагностике и лечению заболеваний зубов, десен и ротовой полости. Мы являемся частью крупнейшего медицинского холдинга «СМ-Клиника» и начиная с 2002 года успешно избавляем пациентов от зубной боли.<br/><br/>
            В наших отделениях можно получить консультацию специалистов как самых востребованных, так и достаточно редких стоматологических направлений, что позволяет решить большинство стоматологических вопросов за одно посещение. Кроме того, мы заботимся о квалификации врачей «Аполлония» – предоставляем возможность перенимать опыт у ведущих экспертов в своей области, осваивать передовые методы и технологии, проходить стажировки и обучение за рубежом.
          </p>
          <a className={styled.link} href="/">Подробнее</a>
        </div>
        <img src="/image/main_info_img.png" alt="main-info" />
      </div>
      <div className={styled.ratingBlock}>
        {ratingData.map((el,idx) => (
          <div key={idx} className={styled.ratingItem}>
            <div className={styled.wrapperItem}>
              <img className={styled.itemLogo} src={el.imgUrl} alt={el.name} />
              <div className={styled.nameBlock}>
                <span className={styled.itemName}>{el.name}</span>
                <div className={styled.starblock}>
                  {arrStarGradient[idx].map((star, index) => (
                    <SvgSprite key={index} spriteName='starRating' linearGradientFon={star} indexGradient={`${idx}${index}`}/>
                  ))}
                </div>
              </div>
            </div>
            <span className={styled.ratingText}>{el.rating} / 5 по мнению пациентов</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainInfoBlock;