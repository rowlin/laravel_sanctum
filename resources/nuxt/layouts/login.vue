<template>
  <div>
    <TopBar/>
    <Nuxt />
    <Footer/>
  </div>
</template>

<style>

</style>
<script>
  import TopBar from "../components/common/TopBar";
  import Footer from "../components/common/Footer";
  export default {
    components: {Footer, TopBar},
    middleware: ['auth']
  }
</script>
