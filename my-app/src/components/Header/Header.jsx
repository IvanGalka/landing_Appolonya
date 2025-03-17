import Button from '../Button/Button';
import SvgSprite from '../SvgSprite';
import styled from './header.module.css';

const navMenuItems = ['О нас','Услуги и цены','Наши врачи','Акции','Отзывы','Лаборатория','Пациентам','Контакты']

function Header() {
  return (
    <header className={styled.header}>
      <div className={styled.headerTop}>
        <div className={styled.logoWrapper}>
          <a className={styled.logoLink} href="/">
            <img className={styled.logo} src="/image/logo.gif" alt="" />
          </a>
          <h1 className={styled.mainTitle}>Аполлония</h1>
        </div>
        <div className={styled.funcBlock}>
          <span className={styled.userIconWrapper}>
            <SvgSprite spriteName='userIcon' />
          </span>
          <div className={styled.blockWithButtons}>
            <Button text='Записаться на приём' classButton='greenButton' />
            <Button text='Обратный звонок' classButton='lavandaButton' />
          </div>
          <span className={styled.telButton}>
            <a className={styled.telLink} href="tel:+79013540618">+7 901 354-06-18</a>
          </span>
        </div>
      </div>
      <div className={styled.headerBot}>
        <nav className={styled.headerNav}>
          <ul className={styled.navList}>
            {navMenuItems.map(item => (
              <li key={item} className={styled.navItem}>{item}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;