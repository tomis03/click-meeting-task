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
      <template v-if="messagesToShow.length > 0">
        <tr
          v-for="(message, index) in messagesToShow"
          :key="`message${index}`"
          @click="
            $store.commit('showModal', { show: true, index: message.index })
          "
        >
          <td class="sender">
            <p class="table-element-title">Nadawca:</p>
            <p>{{ message.sender }}</p>
          </td>
          <td class="title">
            <p class="table-element-title">Tytuł:</p>
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
      </template>
      <template v-else>
        <tr class="no-messages">
          <td colspan="3">
            <p>Brak wiadomości</p>
          </td>
        </tr>
      </template>
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

      &.no-messages {
        p {
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          padding: 15px 0;
        }
      }

      td {
        padding: 15px 8px;
        border: none;

        p {
          font-size: 14px;
        }
      }
    }
  }

  @media (min-width: 800px) {
    tbody {
      tr {
        transition: box-shadow 0.2s;

        &:not(.no-messages) {
          cursor: pointer;

          &:hover {
            box-shadow: 0 0 5px #20242e;
          }
        }

        td {
          .table-element-title {
            display: none;
          }

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
        border-top: 4px solid #20242e;
        margin-bottom: 8px;
        cursor: pointer;

        td {
          padding: 10px 8px;

          .table-element-title {
            font-weight: 700;
            margin-bottom: 4px;
          }

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
}
</style>