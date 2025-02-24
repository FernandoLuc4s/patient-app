import React, { useEffect, useState } from "react";
import { listPatient } from "../../services/listPatients";
import { IonList, IonItem, IonLabel, IonButton } from "@ionic/react";
import { Link } from 'react-router-dom';
import "./patient-list.css";
import loadingGif from "../../assets/imgs/loader.gif";

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

interface PatientsListProps {
  setIsLoading: (loading: boolean) => void;
  searchQuery: string;
}

const PatientsList: React.FC<PatientsListProps> = ({ setIsLoading, searchQuery }) => {
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
        <img src={loadingGif} alt="Carregando..." />
        <p>Carregando...</p>
      </div>
    );
  }

  if (error) return <p>Erro ao carregar os pacientes.</p>;

  const search = searchQuery?.toLowerCase() || "";

  const filteredUsers = (data?.users || []).filter((user: Patient) => {
    const firstName = user?.name?.firstname || "";
    const lastName = user?.name?.lastname || "";
    const fullName = `${firstName} ${lastName}`.toLowerCase();

    return fullName.includes(search);
  });

  return (
    <IonList>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user: Patient) => (
          <IonItem key={user.id}>
            <IonLabel>
              <h2>
                {user.name?.firstname} {user.name?.lastname}
              </h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </IonLabel>
            <Link to={{ pathname: `/patient-detail/${user.id}`, state: { patient: user } }}>
              <IonButton className="seeDetails">Ver Detalhes</IonButton>
            </Link>
          </IonItem>
        ))
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>Nenhum paciente encontrado.</p>
      )}
    </IonList>
  );
};

export default PatientsList;