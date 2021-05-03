<template>
  <div class="pagination">
    <button
      type="button"
      :class="[
        'pagination-btn prev',
        $store.state.currentPage == 1 ? 'disabled' : '',
      ]"
      @click="prevPage"
    >
      <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <polygon
          points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128"
        />
      </svg>
    </button>
    <p class="current-page">
      Strona {{ $store.state.currentPage }} z {{ $store.state.pages }}
    </p>
    <button
      type="button"
      :class="[
        'pagination-btn next',
        $store.state.currentPage == $store.state.pages ? 'disabled' : '',
      ]"
      @click="nextPage"
    >
      <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <polygon
          points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    prevPage() {
      if (this.$store.state.currentPage > 1) {
        this.$store.commit("currentPage", this.$store.state.currentPage - 1);
      }
    },
    nextPage() {
      if (this.$store.state.currentPage < this.$store.state.pages) {
        this.$store.commit("currentPage", this.$store.state.currentPage + 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;

  .current-page {
    font-size: 18px;
    font-weight: 400;
    padding: 0 15px;
  }

  .pagination-btn {
    width: 36px;
    height: 36px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: transparent;
    border-radius: 50%;
    transition: background-color 0.2s;

    svg {
      fill: #b5b5b5;
    }

    &:not(.disabled) {
      cursor: pointer;

      svg {
        fill: #6ebe3b;
      }

      &:hover {
        background-color: rgba(54, 58, 61, 0.2);
      }
    }
  }
}
</style>