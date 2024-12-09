import { configureStore, createSlice } from "@reduxjs/toolkit";

// Création du slice pour la gestion de l'état
const comSlice = createSlice({
  name: "com", // Le nom du slice (représente la clé dans l'état global)
  initialState: {
    question: "", // Question initiale vide
    reponse: "", // Réponse initiale vide
  },
  reducers: {
    // Action pour envoyer la question
    sendQuestion: (state, action) => {
      state.question = action.payload;
    },
    // Action pour envoyer la réponse
    sendReponse: (state, action) => {
      state.reponse = action.payload;
    },
  },
});

// Export des actions générées automatiquement par createSlice
export const { sendQuestion, sendReponse } = comSlice.actions;

// Création du store Redux
export const mainStore = configureStore({
  reducer: {
    communicate: comSlice.reducer, // Le reducer pour "communicate"
  },
});
