<template>
  <div id="app">
    <template v-if="$route.path === '/'">
      <landing />
      <author />
      <intro />
      <Childrens />
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
  }
};
</script>
