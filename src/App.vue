<template>
  <div class="container">
    <div class="page" id="page1">
      <h1 class="centered-text">Corentin Marlier & Audric FULLHARDT présentent les invisibles</h1>
    </div>

    <div class="page" id="page2">
      <p class="centered-text">
        "Est invisible celui qui n'est pas visible. Pas visible au cœur même de la société. 
        Est invisible celui que l'on ne voit pas ou que l'on ne veut pas voir. 
        Celui qui n'est pas, ou peu, ou mal représenté. 
        Que ce soit dans les médias, dans la politique ou sur le devant de la scène."
      </p>
      <p class="author">Clarence Massiani</p>
    </div>

    <div class="page" id="page3">
      <p class="centered-text">
        En France, 42 000 enfants sont Sans Abris...<br>
        Vous pouvez aujourd'hui découvrir l'histoire de certains d'entre-eux ainsi que leur quotidien...
      </p>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  min-height: 100vh;
  scroll-snap-type: y mandatory;
}

.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  background-color: #444444
}

.centered-text {
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
}

.author {
  margin-top: 2rem;
  font-style: italic;
}
</style>
