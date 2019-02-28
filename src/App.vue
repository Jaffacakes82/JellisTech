<template>
  <div id="app">
    <router-view/>
    <Footer />
  </div>
</template>

<style lang="scss">
@import 'src/assets/css/app.scss';
</style>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: "app",
  components: {
    Footer
  }
};
</script>