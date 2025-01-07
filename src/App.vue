<template>
  <div class="container">
    <Landing />
    <Author />
    <Intro />
    <Childrens />
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
    Childrens,
  },
};
</script>
