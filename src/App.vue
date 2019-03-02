<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Footer
  }
};
</script>

<style lang="scss">
body #app {
  font-family: "Open Sans";
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  .is-full-height {
    flex: 1;
  }
}
</style>