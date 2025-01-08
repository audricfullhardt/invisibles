<template>
    <div class="child-page">
        <a @click="goBackToChildrens" class="back-button">Retour</a>
      <div class="child-content">
        <div class="info-section">
          <div class="picture"></div>
            <h1>Mohamed</h1>
            <p>Mohamed, 10 ans, est un jeune garçon brillant, curieux et passionné par l’aéronautique. Depuis son plus jeune âge, il rêve de devenir pilote de ligne et passe de nombreuses heures à étudier les avions et à s'informer sur l'aviation. Son intelligence et sa détermination sont remarquables, mais son quotidien est bien loin de l’avenir qu’il espère. Mohamed vit avec sa mère, qui est handicapée, dans des logements insalubres. Leur situation précaire les oblige à faire face à de nombreux défis : des conditions de vie difficiles, un manque de ressources et une grande précarité. Pourtant, Mohamed n'abandonne jamais son rêve et continue de nourrir sa passion pour l'aviation, croyant fermement qu'un jour, il pourra surmonter ces obstacles. Sa mère, malgré son handicap, est une source de soutien inébranlable pour lui. Leur relation est empreinte d'une profonde complicité et d'une détermination commune à lutter pour un avenir meilleur.</p>
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
    </div>
  </template>
  
  <script>
  export default {
    name: 'Mohamed',
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
    background-image: url('../assets/childrens/mohamed.png');
    background-size: cover;
    background-position: center;
}

.video-container {
    position: relative;
    grid-column: 2 / 4;
    width: 100%;
    height: 400px;
}

.info-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
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

    .watch-button {
        padding: 12px 24px;
        font-size: 0.9rem;
    }
}
</style>