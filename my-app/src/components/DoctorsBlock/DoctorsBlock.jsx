import styled from './doctorsBlock.module.css';
import Slider from '../Slider/Slider';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';

function DoctorsBlock() {
  const [data, setData] = useState([]);
  let slidesArr;
  let childrenInSlide = 3;
  let arrForEverSlide = [];
  useEffect(() => {
    fetch('https://65a6de4774cf4207b4f0f746.mockapi.io/doctors')
    .then(response => response.json())
    .then(data => {
      slidesArr = Array(Math.ceil(data.length/childrenInSlide)).fill().map((e, i) => (i + 1)*3);
      for (let itr of slidesArr) {
        let arrOfSlide = [];
        for (let j = itr - childrenInSlide; j <= (itr - 1); j++) {
          if (j <= data.length - 1) {
            arrOfSlide.push(data[j]);
          };
        };
        arrForEverSlide.push(arrOfSlide);
      };
      setData(arrForEverSlide);
    });
  }, []);

  return (
    <div className={styled.container}>
      <h2 className={styled.title}>Наши врачи</h2>
      <Slider
        data={data}
        childrenOnPage={childrenInSlide}
      >
        {data.map((el,idx) => (
          <div key={idx} className={styled.slide}>
            {el.map((item,index) => (
              <div key={index} className={styled.card}>
                <div className={styled.presentBlock}>
                  <img className={styled.docPhoto} src={item.imageUrl} alt={item.name} />
                  <h4 className={styled.docName}>{item.name}</h4>
                  <span className={styled.docStatus}>{item.status}</span>
                </div>
                <a className={styled.docLink} href="/">
                  <Button text='Записаться на прием' classButton='greenButton' />
                </a>
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DoctorsBlock;