import React, { useState } from 'react';
import { IonButtons, IonButton, IonContent, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar, IonText, IonRow } from '@ionic/react';
import { heart, logoReact, logoIonic } from 'ionicons/icons';
import { hashMode } from '../commons/constants'
import ExploreContainer from '../components/ExploreContainer';
import FixIcon from '../components/FixIcon';
import './Home.css';

const Home: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<hashMode>(hashMode.char20);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Password Generator |&nbsp;
            <IonRouterLink color="medium" href="https://ss64.com/pass" rel="external" target="_blank">SS64.com</IonRouterLink>
          </IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton expand="block" fill="solid" color={currentMode === hashMode.char10 ? 'primary' : 'light'} size="large" onIonFocus={() => setCurrentMode(hashMode.char10)}>10 Char</IonButton>
            <IonButton expand="block" fill="solid" color={currentMode === hashMode.char15 ? 'primary' : 'light'} size="large" onIonFocus={() => setCurrentMode(hashMode.char15)}>15 Char</IonButton>
            <IonButton expand="block" fill="solid" color={currentMode === hashMode.char20 ? 'primary' : 'light'} size="large" onIonFocus={() => setCurrentMode(hashMode.char20)}>20 Char</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer currentMode={currentMode} />
        <IonRow className="ion-justify-content-center ion-padding ion-align-items-center">
          <span>Made with</span>
          <FixIcon color="rgb(219,68,55)" size="large" icon={heart}></FixIcon>
          <span>&nbsp;&&&nbsp;</span>
          <FixIcon color="rgb(97,219,251)" size="large" icon={logoReact}></FixIcon>
          <span>&nbsp;+&nbsp;</span>
          <FixIcon color="rgb(73,138,255)" size="large" icon={logoIonic}></FixIcon>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Home;
