import './app-header.css';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import logo from '../../../assets/imgs/logo.png'; 


const AppHeader: React.FC = () => {
    return (
         <IonHeader>
                <IonToolbar>
                  <IonTitle><img src={logo} alt="" /></IonTitle>
                </IonToolbar>
        </IonHeader>
    );
  };

  export default AppHeader;