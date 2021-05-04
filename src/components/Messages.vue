<template>
  <table class="messages-table">
    <colgroup>
      <col width="20%" />
      <col width="65%" />
      <col width="15%" />
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
          <p>{{ message.sender }}</p>
        </td>
        <td class="title">
          <p>{{ message.title }}</p>
        </td>
        <td class="date">
          <p>
            {{ leadingZero(date(message.date).getDate()) }}-{{
              leadingZero(date(message.date).getMonth() + 1)
            }}-{{ leadingZero(date(message.date).getFullYear()) }}
          </p>
          <p>
            {{ leadingZero(date(message.date).getHours()) }}:{{
              leadingZero(date(message.date).getMinutes())
            }}:{{ leadingZero(date(message.date).getSeconds()) }}
          </p>
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
        if (this.$store.state.messagesToShow[i]) {
          messages.push({ ...this.$store.state.messagesToShow[i], index: i });
        }
      }
      return messages;
    },
  },
  methods: {
    leadingZero(number) {
      if (number < 10) {
        return `0${number}`;
      } else {
        return number;
      }
    },
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

      td {
        padding: 15px 8px;
        border: none;

        p {
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 799px) {
    thead {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1000;
      opacity: 0;
      visibility: hidden;
    }

    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    tbody {
      tr {
        td {
          padding: 10px 8px;

          &.sender,
          &.date,
          &.title {
            max-width: 100%;
          }

          &.date {
            p {
              text-align: right;
              font-size: 13px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 800px) {
    tbody {
      tr {
        transition: box-shadow 0.2s;

        &:hover {
          box-shadow: 0 0 5px #20242e;
        }

        td {
          p {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            user-select: none;
          }

          &.sender,
          &.date,
          &.title {
            max-width: 1px;
          }
        }
      }
    }
  }
}
</style>