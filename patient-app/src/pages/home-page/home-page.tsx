import { IonContent,  IonPage } from '@ionic/react';
import './home-page.css';
import { ApolloProvider } from "@apollo/client";
import { useState, useEffect } from 'react';
import client from "../../services/listPatients";
import  AppHeader  from "../../components/app/app-header/app-header";
import PatientsList from '../../components/patient-list/patient-list';
import PatientFilter from "../../components/patient-filter/patient-filter";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  useEffect(() => {
    if (!isLoading) {
      setBackgroundColor("#000");
    }
  }, [isLoading]);

  return (
    <IonPage>
      {!isLoading && <AppHeader />}
      <IonContent fullscreen style={{ backgroundColor }}>
        <div id='searchbar'>
          {!isLoading && <PatientFilter onSearch={setSearchQuery} />}
        </div>
        <ApolloProvider client={client}>
          <PatientsList setIsLoading={setIsLoading} searchQuery={searchQuery} />
        </ApolloProvider>
      </IonContent>
    </IonPage>
  );
};

export default Home;