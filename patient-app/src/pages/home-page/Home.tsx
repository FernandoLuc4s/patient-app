import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { ApolloProvider } from "@apollo/client";
import client from "../../services/listPatients";
import  AppHeader  from "../../components/app/app-header/app-header";
import PatientsList from '../../components/patient-list/patient-list';



const Home: React.FC = () => {
  return (
    <IonPage>
      <AppHeader/>
      <IonContent fullscreen>
        <ApolloProvider client={client}>
        <PatientsList />
        </ApolloProvider>
      </IonContent>
    </IonPage>
  );
};

export default Home;
