import styled from './footer.module.css'
import staticData from '../../staticData/footer-static-data.json';
import SvgSprite from '../SvgSprite';

const socialLink = [
  {
    name: "VK",
    link: "/",
    svgType: "VKIcon"
  },
  {
    name: "Telegram",
    link: "/",
    svgType: "telegramIcon"
  },
  {
    name: "OK",
    link: "/",
    svgType: "OKIcon"
  }
]

function Footer() {
  return (
    <footer className={styled.container}>
      <div className={styled.topFooter}>
        {staticData.map((el, idx) => (
          <div key={idx} className={styled.listWrapper}>
            <h4 className={styled.listTitle}>{el.name}</h4>
            <ul className={styled.list}>
              {el.links.map(item => (
                <li key={item.name} className={styled.listItem}>
                  <a className={styled.listItemLink} href={item.link}>
                    <span className={styled.linkName}>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styled.footerBot}>
        <div className={styled.logoWrapper}>
          <a className={styled.logoLink} href="/">
            <img className={styled.logo} src="/image/logo.gif" alt="" />
          </a>
          <h1 className={styled.mainTitle}>Аполлония</h1>
        </div>
        <div className={styled.socialBlock}>
          {socialLink.map(el => (
            <a className={styled.socialLink} key={el.name} href={el.link}>
              <SvgSprite spriteName={el.svgType}/>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;