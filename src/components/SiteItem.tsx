import React from 'react';
import { IonItem, IonInput, IonLabel } from '@ionic/react';
import { Site } from '../commons/constants'

interface ItemProps {
    pass: string
    site: Site
}
const SiteItem: React.FC<ItemProps> = ({ site, pass = '' }) => {
    return <IonItem>
        <IonLabel position="floating">{site.displayName}</IonLabel>
        <IonInput value={pass}></IonInput>
    </IonItem>;
};

export default SiteItem;