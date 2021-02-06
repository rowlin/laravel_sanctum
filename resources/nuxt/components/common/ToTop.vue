<template>
    <div class="to-top"
    @click="scrollToTop"><i class="fas fa-angle-up"></i></div>
</template>

<script>
    export default {
        name: "ToTop",
      methods: {
        scrollToTop() {
          scroll(0, 0)
        }
      }
    }
</script>

<style scoped lang="scss">
  @import "./assets/scss/var";
  .to-top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    background: rgba(31, 166, 221, 0.5);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 27px;
    transition: .3s;
  }
  .to-top:hover {
    background: rgba(31, 166, 221, 0.8);
  }

</style>
