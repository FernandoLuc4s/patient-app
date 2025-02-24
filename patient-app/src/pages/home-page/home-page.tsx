import { IonContent,  IonPage } from '@ionic/react';
import './home-page.css';
import { ApolloProvider } from "@apollo/client";
import { useState } from 'react';
import client from "../../services/listPatients";
import  AppHeader  from "../../components/app/app-header/app-header";
import PatientsList from '../../components/patient-list/patient-list';



const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <IonPage>
       {!isLoading && <AppHeader />}
      <IonContent fullscreen>
        <ApolloProvider client={client}>
        <PatientsList setIsLoading={setIsLoading} />
        </ApolloProvider>
      </IonContent>
    </IonPage>
  );
};

export default Home;
