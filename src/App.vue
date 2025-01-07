<template>
  <div class="container">
    <Landing />
    <Author />
    <Intro />
  </div>
</template>

<script>
import Landing from "./components/landing.vue";
import Author from "./components/author.vue";
import Intro from "./components/intro.vue";

export default {
  components: {
    Landing,
    Author,
    Intro,
  },
};
</script>