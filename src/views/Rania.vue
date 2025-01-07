<template>
    <div class="child-page">
      <h1>Histoire de Rania</h1>
      <router-link to="/" class="back-button">Retour</router-link>
      <!-- Contenu spécifique à Rania -->
      <div class="child-content">
        <!-- Ajoutez ici le contenu spécifique à Rania -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Rania'
  }
  </script>
  
  <style scoped>
  .child-page {
    min-height: 100vh; /* Pour occuper toute la hauteur de l'écran */
    padding: 20px;
    background-color: #444444;
  }
  
  .back-button {
    /* Styliser votre bouton de retour */
    color: #ffffff;
    font-family: 'Lora', serif;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    text-decoration: none;
  }
  </style>