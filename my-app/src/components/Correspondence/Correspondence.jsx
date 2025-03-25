import { useEffect, useState } from 'react';
import styled from './correspondence.module.css';
import staticData from '../../staticData/static-data-correspondence.json';

// const get_text_file = async (filepath) => {
//   const res = await fetch(filepath);
//   if (!res.ok) {
//     throw res;
//   }
//   return res.text();
// };

function Correspondence() {
  
  // let fileName;
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   get_text_file(`/news/birthday.txt`).then(setText).catch(console.error);
  // }, [fileName]);
  return (
    <div className={styled.container}>
      <h2 className={styled.title}>Пресс-центр</h2>
      <div className={styled.tabsBlock}>
        <button className={styled.buttonTab}>Новости</button>
        <button className={styled.buttonTab}>Статьи</button>
      </div>
      <ul className={styled.list}>
        {staticData.map(el => (
          <li key={el.id} className={styled.newCard}>
            <a className={styled.cardLink} href="/">
              <div className={styled.newHero}>
                <img className={styled.newImage} src={el.urlImage} alt={el.title} />
                <span className={styled.newDate}>{el.date}</span>
              </div>
              <h4 className={styled.newTitle}>{el.title}</h4>
              <p className={styled.newPreview}>
                {el.preview}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Correspondence;