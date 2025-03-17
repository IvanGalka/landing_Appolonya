import HeroBlock from '../HeroBlock/HeroBlock';
import styled from './layout.module.css';

function Layout() {
  return (
    <div className={styled.container}>
      <HeroBlock/>
    </div>
  );
}

export default Layout;