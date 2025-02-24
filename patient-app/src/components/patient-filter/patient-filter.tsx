import React, { useState } from "react";
import { IonSearchbar } from "@ionic/react";
import "./patient-filter.css"

interface PatientFilterProps {
  onSearch: (query: string) => void;
}

const PatientFilter: React.FC<PatientFilterProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: CustomEvent) => {
    const query = event.detail.value || "";
    setSearchQuery(query);
    onSearch(query); 
  };

  return (
    <IonSearchbar
      value={searchQuery}
      placeholder="Buscar paciente..."
      debounce={500}
      onIonInput={handleSearch}
      className="custom-searchbar"
    />
  );
};

export default PatientFilter;