<template>
  <div class="top-bar">
    <div class="mobile-menu" @click="toggleMobileMenu" title="Menu">
      <i class="fas fa-bars fa-2x text-warning"></i>
      <span>M</span>
    </div>
    <nav class="top-bar__left" ref="menu">
      <div class="mobile-menu__close" @click="toggleMobileMenu" title="Close"><i class="fas fa-times"></i></div>
      <n-link :to="localePath('/today')">{{ $t('menu.Today') }}</n-link>
      <n-link :to="localePath('/tomorrow')">{{ $t('menu.Tomorrow') }}</n-link>
      <n-link :to="localePath('/later')">{{ $t('menu.Later') }}</n-link>

      <div class="mobile-actions">
        <n-link :to="localePath('/add_proposal')">+ {{ $t("menu.add_proposal")}}</n-link>
        <n-link :to="localePath('/add_event')">+ {{ $t("menu.add_event")}}</n-link>
        <n-link :to="localePath('/login')">{{ $t('menu.login')}}</n-link>
      </div>
    </nav>
        <img src="/img/svg/tift.svg" alt="Tift" >
    <div class="top-bar__right">
      <n-link :to="localePath('/add_proposal')" class="btn btn-outline-success m-hide">+ {{ $t('menu.add_event')}}</n-link>
      <n-link :to="localePath('/add_offer')" class="btn btn-outline-success m-hide">+ {{ $t('menu.add_offer')}}</n-link>
      <n-link :to="localePath('/login')" class="btn btn-outline-black m-hide">{{ $t('menu.login')}}</n-link>
      <i class="fas fa-search search-mobile"></i>
      <div class="top-bar__right__lang dropdown-block lang">{{locale.name}}<i class="fas fa-chevron-down"></i>
        <div class="dropdown-lang">
          <a v-for="locale in availableLocales" @click="switchLocalePathFallback(locale.code)" :key="locale.code" >{{ locale.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopBar",

    computed: {
      locale(){
        return this.$i18n.locales.filter(i => i.code === this.$i18n.locale)[0]
      },

      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }

    },
    methods: {
      toggleMobileMenu() {
        this.$refs.menu.classList.toggle('show')
      },
      switchLocalePathFallback(code) {
        this.$i18n.setLocaleCookie(code)
        this.$router.replace(this.switchLocalePath(code));
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/_var";

  .top-bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding: 0px 10px 0px 10px;
  }

  .top-bar__left, .top-bar__right {
    display: flex;
    align-items: center;
  }

  .top-bar__left a {
    text-decoration: none;
    color: #000000;
    margin-right: 15px;
  }

  .top-bar__left a:hover {
    text-decoration: underline;
  }

  .mobile-actions {
    display: none;
  }


  .top-bar__logo, .top-bar__logo-horizontal {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 50%;
    margin-left: -85px;
    z-index: 9;
    width: 170px;
    height: 137px;
  }

  .top-bar__logo-horizontal {
    width: 170px;
    height: 56px;
  }

  .top-bar__logo img {
    width: 100%;
    height: auto;
  }

  .top-bar__right a {
    margin-left: 15px;
  }

  .top-bar__right__lang {
    margin-left: 15px;
  }

  .dropdown-block {
    position: relative;
    cursor: pointer;
  }

  .dropdown-block:hover .dropdown-links, .dropdown-block:hover .dropdown-lang {
    display: block;
  }

  .dropdown-links {
    display: none;
    position: absolute;
    right: -5px;
    text-align: right;
    background-color: #ffffff;
    width: 200px;
    box-shadow: 0 7px 22px -5px rgba(0, 0, 0, .2);
    z-index: 20;
  }

  .dropdown-lang {
    display: none;
    position: absolute;
    right: -6px;
    text-align: center;
    background-color: #ffffff;
    width: 66px;
    box-shadow: 0 7px 22px -5px rgba(0, 0, 0, .2);
  }

  .dropdown-lang a {
    margin-left: 0;
    padding: 4px 10px;
  }

  .mobile-menu {
    display: none;
    position: relative;
    top: 0px;
    left: 2px;
    cursor: pointer;
  }

  .mobile-menu span {
    color: #000000;
    font-size: 9px;
  }

  .mobile-menu__close {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    color: red;
    display: none;
  }

  @media (max-width: 1200px) {
    .mobile-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .mobile-menu__close, .mobile-actions, .dropdown-block.lang {
      display: block;
    }
    .dropdown-block, {
      display: none;
    }

    .top-bar__left {
      position: absolute;
      display: flex;
      flex-direction: column;
      text-align: right;
      top: 0px;
      left: -320px;
      width: 320px;
      height: 100vh;
      z-index: 10;
      text-align: left;
      border-right: 1px solid $secondary-color;
      opacity: 0.9;
      background-color: #f2f2f2;
      padding-top: 20px;
      transform: translateX(0px);
      transition: all .3s;
    }

    .top-bar__left.show {
      z-index: 15;
      transform: translateX(320px);
    }
  }

  .search-mobile {
    font-size: 20px;
    cursor: pointer;
    transition: font-size 0.3s;
    display: none;
    &:hover {
      font-size: 25px;
    }
  }

  @media (max-width: 960px) {
    .search-mobile {
      display: block;
    }
  }

</style>
