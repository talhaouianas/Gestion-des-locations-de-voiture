import React, { useState} from "react";

import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

function CarRentalForm() {
  const [Prenom_loueur, setPrenom_loueur] = useState('');
  const [email, setEmail] = useState('');
  const [designation_voiture, setdesignation_voiture] = useState('');
  const [ville, setville] = useState('');
  const [prix, setprix] = useState('');
  const [photo_voiture, setphoto_voiture] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!Prenom_loueur || !email || !designation_voiture || !ville || !prix || !photo_voiture) {
      setError('Tous les champs sont obligatoires');
      return;
    }

    // Envoyer la demande de location de voiture au serveur
    // ...

    setSuccess('Votre demande de location a été envoyée avec succès');
  };

  return (
    <form> 
      onSubmit={handleSubmit}
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      <label>
      Prénom_loueur:
        <input type="text" value={Prenom_loueur} onChange={(event) => setPrenom_loueur(event.target.value)} />
      </label>
      <br />
      <label>
      email:
        <input type="text" value={email} onChange={(event) => setemail(event.target.value)} />
      </label>
      <br />
      <label>
      designation_voiture(marque, modèle, année):
        <input type="text"  value={designation_voiture} onChange={(event) => setdesignation_voiture(event.target.value)}/>
      </label>
      <br />
      <label>
      ville:
        <input type="text" value={ville} onChange={(event) => setville(event.target.value)} />
      </label>
      <label>
      Prix:
        <input type="text" value={prix} onChange={(event) => setPrix(event.target.value)} />
      </label>
      <label>
      photo:
        <input type="text" value={photo_voiture} onChange={(event) => setphoto_voiture(event.target.value)} />
      </label>
      </form>
)}
export default Carform;
