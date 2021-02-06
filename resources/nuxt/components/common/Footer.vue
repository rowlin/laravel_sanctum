<template>
  <footer>
  <div class="container social-buttons mb-5 mt-5">
      <div>LEIA MEID CA SIN:</div>
      <div class="social-buttons__items mt-2">
      </div>
    </div>
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-4 col-sm-6 col-12 footer-col">
          <div class="footer__logo"></div>
              <n-link to="#">MEIST</n-link>
              <n-link to="#">KOIK KONTAKTID / NOUSTAJAD</n-link>
              <n-link to="#">REKLAM</n-link>
              <n-link to="#">HINNAKIRI</n-link>
        </div>
        <div class="col-md-4 col-sm-6 col-12 footer-col">
          <n-link to="#">ANALUUS</n-link>
          <n-link to="#">TERMS OF USE</n-link>
          <n-link to="#">OTHER COUNTRIES</n-link>
          <n-link to="#">LIITU UUDISKIRJAGA</n-link>
        </div>
        <div class="col-md-4 col-sm-6 col-12 footer-col">
          <n-link to="#">PRIVAATSUSPOLIITIKA</n-link>
        </div>
      </div>
    </div>
    <div class="copyright"></div>
  </footer>
</template>

<script>

  export default {
    name: "Footer",
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/_var";

  .like {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .like img {
    width: 89px;
    position: relative;
    top: 20px;
  }

  .like hr {
    border-top: 2px solid $logo-orange;
    width: 100%;
  }

  .social-buttons {
    display: block;
    text-align: center;
  }

  .social-buttons__items {
    display: flex;
    justify-content: center;
  }
  .social-buttons__items a {
    margin: 5px;
    padding-left: 0;
  }

  .footer-col {
    display: flex;
    flex-direction: column;
    font-size: 13px;
  }
  @media (max-width: 576px) {
    .footer-col {
      text-align: center;
    }
    .footer__logo {
      left: 37%;
    }
  }

  .footer-col a {
    text-decoration: none;
    color: #9b9b9b;
    margin: 15px;
  }

  .footer__logo {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 0;
    background: url("/img/svg/logo.svg") no-repeat;
    background-size: contain;
  }
</style>
