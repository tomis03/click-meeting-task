<template>
  <div class="app">
    <NavBar></NavBar>
    <PageContent></PageContent>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  components: {
    NavBar: () => import("@/components/NavBar.vue"),
    PageContent: () => import("@/components/PageContent.vue"),
    Footer: () => import("@/components/Footer.vue"),
  },
  created() {
    this.$store.dispatch("getMessages");
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
  color: #363a3d;

  p,
  h1,
  h2 {
    margin: 0;
  }

  .container {
    width: 100%;
    max-width: 1140px;
    padding: 0 15px;
    margin: 0 auto;
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    main {
      flex: 1 1 auto;
    }
  }
}
</style>