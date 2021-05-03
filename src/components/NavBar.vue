<template>
  <header class="navbar">
    <div class="container">
      <img :src="require('@/assets/logo.svg')" alt="Logo" width="140" />
      <p class="title">Recruitment task</p>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 8px 0;
  background-color: #20242e;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      color: #ffffff;
      font-size: 18px;
      font-weight: 700;
    }
  }
}
</style>