import './app-header.css';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import logo from '../../../assets/imgs/logo.png'; 

import React from "react";

interface AppHeaderProps {
  
}

const AppHeader: React.FC<AppHeaderProps> = ({ }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          <img src={logo} alt="Logo" className="logo" />
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

  export default AppHeader;