import React, { useEffect, useState } from "react";
import { listPatient } from "../../services/listPatients";
import { IonList, IonItem, IonLabel, IonSpinner } from "@ionic/react";
import './patient-list.css'
import loadingGif from "../../assets/imgs/loader.gif";

interface PatientsListProps {
  setIsLoading: (loading: boolean) => void; 
}

const PatientsList: React.FC<PatientsListProps> = ({ setIsLoading }) => {
  const { data, loading, error } = listPatient();
  const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLoader(false); 
        setIsLoading(false); 
      }, 2000);
  
      return () => clearTimeout(timer);
    }, [setIsLoading]);
  
    if (loading || showLoader) {
      return (
      <div id="loader">
          <img src={loadingGif} alt=""  />
          <p> Carregando... </p>
      </div>
    ); 
    }

  if (loading) return <IonSpinner />;
  if (error) return <p>Erro ao carregar os pacientes.</p>;

  return (

      <IonList>
        {data?.users.map((user: any) => (
          <IonItem key={user.id}>
            <IonLabel>
              <h2>{user.name.firstname} {user.name.lastname}</h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>

  );
};

export default PatientsList;