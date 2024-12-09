import './App.css';
import Parent from './components/Parent';
import { useSelector, useDispatch } from "react-redux";
import { sendQuestion } from './redux'; // Importez l'action générée automatiquement

function App() {
  const com = useSelector(state => state.communicate); // Récupère l'état de Redux
  const dispatch = useDispatch(); // Initialisation de dispatch

  const handleClick = () => {
    dispatch(sendQuestion("est ce que ça va ?")); // Envoie de la question avec l'action
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>App</h2>
        <button onClick={handleClick}>Message à l'enfant</button>
        <p>L'enfant a répondu : {com.reponse}</p>
        <Parent />
      </header>
    </div>
  );
}

export default App;
