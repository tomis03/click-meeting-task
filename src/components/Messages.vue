<template>
  <table class="messages-table">
    <tbody>
      <tr v-for="(message, index) in messagesToShow" :key="`message${index}`">
        <td>Sender</td>
        <td>Title</td>
        <td>Date</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  computed: {
    messagesToShow() {
      let messages = [];
      let firstMessageIndex =
        this.$store.state.currentPage * this.$store.state.messagesPerPage -
        this.$store.state.messagesPerPage;
      console.log(firstMessageIndex);
      // for(let i = firstMessageIndex; i < )
      return [];
    },
  },
};
</script>

<style lang="scss" scoped>
.messages-table {
}
</style>