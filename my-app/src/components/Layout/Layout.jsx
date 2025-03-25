import Advantages from '../Advantages/Advantages';
import BackCallBlock from '../BackCallBlock/BackCallBlock';
import Correspondence from '../Correspondence/Correspondence';
import DoctorsBlock from '../DoctorsBlock/DoctorsBlock';
import HeroBlock from '../HeroBlock/HeroBlock';
import ListServicesBlock from '../ListServicesBlock/ListServicesBlock';
import MainInfoBlock from '../MainInfoBlock/MainInfoBlock';
import MapsBlock from '../MapsBlock/MapsBlock';
import PopularServices from '../PopularServices/PopularServices';
import styled from './layout.module.css';

function Layout() {
  return (
    <div className={styled.container}>
      <HeroBlock />
      <ListServicesBlock />
      <PopularServices />
      <Advantages />
      <DoctorsBlock />
      <BackCallBlock />
      <MapsBlock />
      <MainInfoBlock />
      <Correspondence />
    </div>
  );
}

export default Layout;