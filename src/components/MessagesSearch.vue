<template>
  <div class="messages-search">
    <input
      type="text"
      class="search-input"
      placeholder="Przeszukaj wiadomości"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.messages-search {
  width: 100%;
  max-width: 400px;

  .search-input {
    font-size: 14px;
    padding: 12px 18px;
    outline: none;
    width: 100%;
    height: 46px;
    border-radius: 3px;
    border: 1px solid #cccccc;
    transition: border-color 0.2s;

    &:active,
    &:focus {
      border-color: #6ebe3b;
    }
  }
}
</style>