<template>
  <table class="messages-table">
    <colgroup>
      <col width="20%" />
      <col width="60%" />
      <col width="20%" />
    </colgroup>
    <thead>
      <tr>
        <td>
          <p>Nadawca</p>
        </td>
        <td>
          <p>Tytuł</p>
        </td>
        <td>
          <p>Data</p>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(message, index) in messagesToShow" :key="`message${index}`">
        <td class="sender">
          <div>
            <p>{{ message.sender }}</p>
          </div>
        </td>
        <td class="title">
          <div>
            <p>{{ message.title }}</p>
          </div>
        </td>
        <td class="date">
          <div>
            <p>
              {{ date(message.date).getDate() }}
            </p>
          </div>
        </td>
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
      for (
        let i = firstMessageIndex;
        i <= firstMessageIndex + (this.$store.state.messagesPerPage - 1);
        i++
      ) {
        messages.push({ ...this.$store.state.messages[i], index: i });
      }
      return messages;
    },
  },
  methods: {
    date(timestamp) {
      return new Date(parseInt(timestamp));
    },
  },
};
</script>

<style lang="scss" scoped>
.messages-table {
  border: none;
  border-collapse: collapse;
  width: 100%;

  thead {
    background-color: #20242e;

    td {
      padding: 15px 8px;

      p {
        color: #ffffff;
        font-size: 18px;
        font-weight: 400;
      }
    }
  }

  tbody {
    tr {
      border: 1px solid #e6e6e6;
      cursor: pointer;
      transition: box-shadow 0.2s;

      &:hover {
        box-shadow: 1px 1px 5px #20242e;
      }

      td {
        padding: 15px 8px;
        border: none;

        div {
          width: 100%;
          p {
            font-size: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }

        // &.sender,
        // &.date {
        //   width: 20%;
        // }

        // &.title {
        //   width: 60%;
        // }

        &.sender,
        &.date,
        &.title {
          max-width: 1px;
        }
      }
    }
  }
}
</style>