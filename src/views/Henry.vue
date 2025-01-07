<template>
  <div class="child-page">
      <router-link to="/" class="back-button">Retour</router-link>
    <h1>Histoire de Henry</h1>
    <!-- Contenu spécifique à Henry -->
    <div class="child-content">
      <!-- Ajoutez ici le contenu spécifique à Henry -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Henry'
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