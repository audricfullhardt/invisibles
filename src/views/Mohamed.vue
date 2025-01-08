<template>
    <div class="child-page">
        <a @click="goBackToChildrens" class="back-button">Retour</a>
      <div class="child-content">
        <div class="info-section">
            <h1>Mohamed</h1>
            <div class="picture"></div>
            <p>Mohamed, 10 ans, vit dans un logement insalubre avec sa maman handicapée</p>
        </div>
        <div class="video-container">
            <div class="video-placeholder">
                <p>Cette vidéo est disponible sur Arte TV</p>
                <a href="https://www.arte.tv/fr/videos/111938-000-A/france-la-sante-mentale-des-enfants-sdf-inquiete/" 
                    target="_blank" 
                    class="watch-button">
                    Regarder la vidéo sur Arte
                </a>
            </div>
        </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Mohamed',
    methods: {
      goBackToChildrens() {
        this.$router.push('/');
        setTimeout(() => {
          const element = document.getElementById('page4');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }
  </script>
  
  <style scoped>
.child-page {
  min-height: 100vh;
  padding: 20px;
  background-color: #444444;
}

.child-content {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.info-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.video-container {
    width: 100%;
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

h1 {
    color: #ffffff;
    font-family: 'Lora', serif;
    font-size: 2rem;
    font-weight: 600;
    width: 300px;
    text-align: center;
    margin-bottom: 20px;
}

.back-button {
    margin-top: 20px;
    padding: 10px 20px;
    color: #ffffff;
    font-family: 'Lora', serif;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
}

.picture {
    width: 300px;
    height: 300px;
    background-color: #ffffff;
    background-image: url('../assets/childrens/mohamed.png');
    background-size: cover;
    background-position: center;
}

.video-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #666666;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
}

.watch-button {
    margin-top: 20px;
    padding: 15px 30px;
    background-color: #FF4E45;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-family: 'Lora', serif;
}

.watch-button:hover {
    background-color: #E54540;
}
</style>