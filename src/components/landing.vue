<template>
    <div class="page" id="page1">
      <h1 class="centered-text">Corentin Marlier</h1>
      <h1 class="centered-text">&</h1>
      <h1 class="centered-text">Audric FULLHARDT</h1>
      <h1 class="centered-text">présentent</h1>
      <h1 class="centered-text-bigger">Les invisibles</h1>
      <div class="scroll-indicator">
        <div class="scroll-indicator-text">scroller pour voir la suite</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Landing",
  };
  </script>

  <style scoped>
  
  .scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.scroll-indicator-text {
  margin-top: 10px;
  font-size: 1rem;
  color: #ffffff;
  font-style: italic;
}
.centered-text {
      text-align: center;
      font-size: 2.5rem;
      line-height: 1.6;
      font-weight: 400;
      font-family: 'Lora', serif;
}
.centered-text-bigger {
      margin-top: 2rem;
      text-align: center;
      font-size: 7rem;
      line-height: 1.6;
      font-family: 'Lora', serif;
}
  </style>