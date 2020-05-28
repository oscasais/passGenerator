import React from "react";
import { IonIcon } from "@ionic/react";

interface FixIconProps {
    icon: string,
    color?: string,
    size?: string
}

// https://github.com/ionic-team/ionic/issues/18847 buggy behaviour fixes

const FixIcon: React.FC<FixIconProps> = ({ color, size, icon }) => {
    return <IonIcon icon={icon.replace('<svg', `<svg fill=${color}`)} size={size}></IonIcon>;
}

export default FixIcon;