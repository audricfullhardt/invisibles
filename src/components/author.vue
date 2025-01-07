<template>
    <div class="page" id="page2">
      <p class="p-centered-text">
        "Est invisible celui qui n'est pas visible. Pas visible au cœur même de la société. 
        Est invisible celui que l'on ne voit pas ou que l'on ne veut pas voir. 
        Celui qui n'est pas, ou peu, ou mal représenté. 
        Que ce soit dans les médias, dans la politique ou sur le devant de la scène."
      </p>
      <p class="author">Clarence Massiani</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Author",
  };
  </script>
  <style scoped>
  .author {
    font-size: 1.5rem;
    margin-top: 2.5rem;
    font-style: italic;
    font-family: 'Lora', serif;
  }
  .p-centered-text {
      text-align: center;
      font-size: 2.5rem;
      line-height: 1.6;
      font-weight: 400;
      font-family: 'Lora', serif;
      max-width: 80%;
}
  </style>  