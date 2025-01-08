<template>
  <div id="app">
    <template v-if="$route.path === '/'">
      <div class="container">
        <Landing class="page" />
        <Author class="page" />
        <Intro class="page" />
        <Childrens class="page" id="childrens"/>
      </div>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import Landing from "./components/landing.vue";
import Author from "./components/author.vue";
import Intro from "./components/intro.vue";
import Childrens from "./components/childrens.vue";

export default {
  components: {
    Landing,
    Author,
    Intro,
    Childrens
  },
  mounted() {
    const pages = document.querySelectorAll('.page');
    let isScrolling = false;

    window.addEventListener('wheel', (e) => {
      if (isScrolling) return;
      
      isScrolling = true;
      const direction = e.deltaY > 0 ? 1 : -1;
      
      const currentPage = Array.from(pages).findIndex(page => {
        const rect = page.getBoundingClientRect();
        return rect.top >= -10 && rect.top <= 10;
      });
      
      if (currentPage !== -1) {
        const nextPage = pages[currentPage + direction];
        if (nextPage) {
          nextPage.scrollIntoView({ behavior: 'smooth' });
        }
      }

      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    });
  }
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.container {
  height: 100vh;
  overflow-y: scroll;
}

.page {
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
}

#app {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
</style>