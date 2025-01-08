<template>
    <div class="child-page">
        <a @click="goBackToChildrens" class="back-button">Retour</a>
      <div class="child-content">
        <div class="info-section">
          <div class="picture"></div>
            <h1>Mawara, Katia et Marniya</h1>
            <p>Mawara, 10 ans, entre en CM1 cette année, tandis que ses sœurs, Katia et Marniya, 7 et 6 ans, font leur rentrée en CP. Malgré la joie de retrouver l'école, elles ont passé leurs nuits dans la rue avec leur mère, faute de place en hébergement d'urgence. Leur situation difficile n'empêche pas Mawara de continuer à se battre pour ses études, tandis que ses sœurs, malgré leur jeune âge, affrontent elles aussi cette dure réalité.</p>
            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/B4TXDxiHjB0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Rania',
    methods: {
      goBackToChildrens() {
        this.$router.push('/');
        setTimeout(() => {
          const element = document.getElementById('childrens');
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

h1 {
    color: #ffffff;
    font-family: 'Lora', serif;
    font-size: 2rem;
    font-weight: 600;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    grid-column: 2 / 4;
}

p {
    grid-column: 1;
    grid-row: 2;
    color: #ffffff;
    margin: 0;
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

.child-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.header-section {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 20px;
}

.content-section {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.picture {
    width: 300px;
    height: 300px;
    background-color: #ffffff;
    background-image: url('../assets/childrens/rania.png');
    background-size: cover;
    background-position: center;
}

.video-container {
    position: relative;
    grid-column: 2 / 4;
    width: 100%;
    height: 400px;
}

.video-container iframe {
    position: absolute;
    width: 100%;
    height: 100%;
}

.info-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

/* Ajout des media queries pour tablette */
@media screen and (max-width: 768px) {
    .info-section {
        grid-template-columns: repeat(2, 1fr);
    }

    .picture {
        width: 250px;
        height: 250px;
    }

    .video-container {
        height: 300px;
        grid-column: 1 / 3;
    }

    h1 {
        font-size: 1.8rem;
        grid-column: 1 / 3;
    }

    p {
        grid-column: 1 / 3;
    }
}

/* Ajout des media queries pour mobile */
@media screen and (max-width: 480px) {
    .info-section {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .picture {
        width: 100%;
        height: 250px;
    }

    .video-container {
        grid-column: 1;
        height: 250px;
    }

    h1 {
        font-size: 1.5rem;
        grid-column: 1;
    }

    p {
        grid-column: 1;
    }

    .child-content {
        padding: 10px;
    }

    .back-button {
        font-size: 1.2rem;
        padding: 8px 16px;
    }
}
</style>