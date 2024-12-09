import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { mainStore } from './redux'; // Assurez-vous que ce chemin est correct

// Création de l'élément racine
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application avec le Provider
root.render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Si vous voulez commencer à mesurer les performances de votre application, vous pouvez passer une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log)) ou envoyer les résultats à un endpoint d'analytics.
reportWebVitals();
