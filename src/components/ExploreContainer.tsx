import React, { useState } from 'react';
import './ExploreContainer.css';
import { IonButton, IonGrid, IonRow, IonCol, IonCard, IonLabel, IonInput, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonIcon } from '@ionic/react';
import { lockClosed, lockOpen } from 'ionicons/icons';
import passHash from 'pass-hash-generator';

import { hashMode, sites } from '../commons/constants';
import SiteItem from './SiteItem'
import SS64Explanation from './SS64Explanation'

interface ContainerProps {
  currentMode: hashMode
}
interface passMap {
  [hashMode.char10]: [],
  [hashMode.char15]: [],
  [hashMode.char20]: []
}

const ExploreContainer: React.FC<ContainerProps> = ({ currentMode }) => {
  const [masterPass, setMasterPass] = useState<string>('');
  const [passList, setPassList] = useState<passMap>({
    [hashMode.char10]: [],
    [hashMode.char15]: [],
    [hashMode.char20]: []
  });
  const [customSeed, setCustomSeed] = useState<string>('');
  const [customPass, setCustomPass] = useState<string>('');
  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);

  const getHash = (seed: string): string => {
    const hash = passHash(`${masterPass}:${seed}`, currentSha)
    return currentMode === hashMode.char10
      ? hash.substring(0, 10)
      : currentMode === hashMode.char15
        ? hash.substring(0, 15)
        : hash.substring(0, 20)
  };
  const getPasswords = () => {
    changeCustomPass()
    setPassList({
      ...passList,
      [currentMode]: sites.map(site => getHash(site.seed))
    })
  };
  const changeCustomPass = () => {
    setCustomPass(getHash(customSeed))
  };

  const currentSha = currentMode === hashMode.char10 ? 'sha1' : 'sha256'
  return <IonGrid fixed={true}>
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Master password</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonInput autocomplete="off" autofocus={true} type={isPassVisible ? 'text' : 'password'} placeholder="Insert a text that you like to use to calculate the passwords" value={masterPass} onIonChange={e => setMasterPass(e.detail.value!)}></IonInput>
              <IonButton shape="round" fill="outline" color={isPassVisible ? 'danger' : 'medium'} onClick={e => { setIsPassVisible(!isPassVisible) }}>
                <IonIcon slot="icon-only" icon={isPassVisible ? lockOpen : lockClosed} />
              </IonButton>
            </IonItem>
            <IonButton expand="full" disabled={!masterPass} onClick={getPasswords}>Get passwords</IonButton>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
    <IonRow className="ion-padding">
      <IonCol>
        <IonItem>
          <IonLabel position="stacked">Custom seed</IonLabel>
          <IonInput value={customSeed} onIonChange={e => { setCustomSeed(e.detail.value!) }}></IonInput>
        </IonItem>
      </IonCol>
      <IonCol>
        <IonItem>
          <IonLabel position="stacked">Custom password</IonLabel>
          <IonInput value={customPass}></IonInput>
        </IonItem>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol>
        {
          sites.map((site, index) =>
            <SiteItem site={site} pass={passList[currentMode][index]} key={site.seed}></SiteItem>
          )
        }
      </IonCol>
    </IonRow>
    <IonRow><SS64Explanation /></IonRow>
  </IonGrid >;
};

export default ExploreContainer;
