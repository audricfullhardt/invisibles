<template>
    <div class="page" id="page3">
      <p class="centered-text">
        En France, 42 000 enfants sont Sans Abris...<br>
        Vous pouvez aujourd'hui découvrir l'histoire de certains d'entre-eux<br> ainsi que leur quotidien...
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Intro",
  };
  </script>
  <style scoped>
  .centered-text {
    text-align: center;
    font-size: 2.5rem;
    line-height: 1.6;
    font-weight: 400;
    font-family: 'Lora', serif;
  }

  /* Ajout des media queries pour tablette */
  @media screen and (max-width: 768px) {
    .centered-text {
        font-size: 2rem;
        line-height: 1.5;
        padding: 0 20px;
    }
  }

  /* Ajout des media queries pour mobile */
  @media screen and (max-width: 480px) {
    .centered-text {
        font-size: 1.5rem;
        line-height: 1.4;
        padding: 0 15px;
    }
  }
  </style>  
