import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendReponse } from "../redux";
const Enfant = () => {
  // Accéder à l'état correct : state.communicate
  const com = useSelector(state => state.communicate);
 const dispatch=useDispatch();

const handleClick=()=>{
    dispatch(sendReponse("oui je vais bien merci"))
}


  return (
    <div>
      <h1>Enfant</h1>
      <div>
        <p>Question reçue : {com.question}</p>
      </div>
      <button onClick={handleClick} >send</button> {/* Le bouton pour envoyer une réponse */}
    </div>
  );
};

export default Enfant;
