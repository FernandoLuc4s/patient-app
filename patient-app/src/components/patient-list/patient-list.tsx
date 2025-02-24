import React from "react";
import { listPatient } from "../../services/listPatients";
import { IonList, IonItem, IonLabel, IonSpinner } from "@ionic/react";

const UsersList: React.FC = () => {
  const { data, loading, error } = listPatient();

  if (loading) return <IonSpinner />;
  if (error) return <p>Erro ao carregar os usuários.</p>;

  return (

      <IonList>
        {data?.users.map((user: any) => (
          <IonItem key={user.id}>
            <IonLabel>
              <h2>{user.name.firstname} {user.name.lastname}</h2>
              <p>{user.email}</p>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>

  );
};

export default UsersList;