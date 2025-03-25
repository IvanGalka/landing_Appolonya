import styled from './mapsblock.module.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import staticData from '../../staticData/static-data-maps.json';
import { useState } from 'react';

function MapsBlock() {
  const adultClinics = staticData.filter((el) => el.typeHospital === 1);
  const childrensClinics = staticData.filter((el) => el.typeHospital === 2);

  const [stateMap, setStateMap] = useState({center: [55.75, 37.62], zoom: 11});

  const handleStateMap = (coordinates) => {
    setStateMap((currentState) => {
      return {center: coordinates, zoom: 18}
    });
  };
  return (
    <div className={styled.container}>
      <h2 className={styled.title}>Наши филиалы</h2>
      <div className={styled.wrapper}>
        <div className={styled.content}>
          <h3 className={styled.clinicsTitle}>Стоматология для взрослых</h3>
          
          <ul className={styled.listAddress}>
            {adultClinics.map((el, idx) => (
              <li className={styled.addressLink} key={idx} onClick={() => {handleStateMap(el.coordinates)}}>
                <span className={styled.lineMetroColor} style={{backgroundColor: `${el.color}`}}></span>
                <b className={styled.metroName}>{el.metro}</b>
                <span className={styled.addressClinic}>{el.address}</span>
              </li>
            ))}
          </ul>
          <h3 className={styled.clinicsTitle}>Детская стоматология</h3>
          <ul className={styled.listAddress}>
            {childrensClinics.map((el, idx) => (
              <li className={styled.addressLink} key={idx} onClick={() => {handleStateMap(el.coordinates)}}>
                <span className={styled.lineMetroColor} style={{backgroundColor: `${el.color}`}}></span>
                <b className={styled.metroName}>{el.metro}</b>
                <span className={styled.addressClinic}>{el.address}</span>
              </li>
            ))}
          </ul>
        </div>
        <YMaps>
          <div className={styled.mapBlock}>
            <Map 
              defaultState={{ center: [55.75, 37.62], zoom: 11, controls: ["zoomControl", "fullscreenControl"],}}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
              state={stateMap}
              width='100%'
              height='900px'>
              {adultClinics.map((el,idx) => (
                <Placemark key={idx} geometry={el.coordinates}></Placemark>
              ))}
            </Map>
          </div>
        </YMaps>
      </div>
    </div>
  );
}

export default MapsBlock;