import React from 'react';
import { IonContent, IonPage, IonLabel, IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import './pacient-detail-page.css'

interface Patient {
    id: string;
    name: {
      firstname: string;
      lastname: string;
    };
    email: string;
    phone: string;
    address?: {
      zipcode: string;
      street: string;
      city: string;
      number: number;  
    };
  }

interface LocationState {
  patient: Patient;
}

const PatientDetail: React.FC = () => {
  const location = useLocation<LocationState>();  
  const { patient } = location.state || {};  

  if (!patient) {
    return <p>Paciente não encontrado</p>;
  }
  // Não está sendo possivel trazer o endereço pelo fato de que o payload retornado tem o endereço apartado do campo "id"
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Detalhes do Paciente</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class='details'>
        <div style={{ padding: "20px" }}>
        <IonLabel>
            <p className='detailsDescription'>Nome: {patient.name.firstname} {patient.name.lastname}</p>
            <p className='detailsDescription'>Email: {patient.email}</p>
            <p className='detailsDescription'>Telefone: {patient.phone}</p>
            {patient.address ? (
                <p className='detailsDescription'>
                Endereço: {patient.address.street}, {patient.address.number}, {patient.address.city}, {patient.address.zipcode}
                </p>
            ) : (
                <p className='detailsDescription'>Endereço não disponível.</p>
            )}
        </IonLabel>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PatientDetail;
