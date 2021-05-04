<template>
  <div class="messages-search">
    <input
      type="text"
      class="search-input"
      placeholder="Przeszukaj wiadomości"
      v-model="searchedText"
      @input="searchMessages"
    />
  </div>
</template>

<script>
import { debounce as _debounce } from "lodash";

export default {
  data() {
    return {
      searchedText: "",
    };
  },
  methods: {
    searchMessages: _debounce(function (e) {
      this.$store.dispatch("searchMessages", this.searchedText);
    }, 500),
  },
};
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

  @media (max-width: 799px) {
    align-self: flex-start;
    margin-bottom: 30px;
  }
}
</style>