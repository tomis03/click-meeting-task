<template>
  <div
    class="messages-modal"
    @click.self="$store.commit('showModal', { show: false, index: null })"
  >
    <div class="modal-content-wrapper">
      <div class="modal-actions">
        <p>Treść wiadomości</p>
        <button
          type="button"
          class="close-btn"
          aria-label="Zamknij wiadomość"
          @click="$store.commit('showModal', { show: false, index: null })"
        >
          <svg
            height="14"
            width="14"
            fill="#ffffff"
            viewBox="0 0 311 311.07733"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"
            />
            <path
              d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"
            />
          </svg>
        </button>
      </div>
      <div class="modal-content">
        <p
          class="message-text"
          v-if="
            $store.state.openedMessageIndex != null &&
            $store.state.messagesToShow[$store.state.openedMessageIndex]['text']
          "
          v-text="
            $store.state.messagesToShow[$store.state.openedMessageIndex]['text']
          "
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.messages-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(39, 40, 42, 0.9);
  z-index: 10;

  .modal-content-wrapper {
    width: 100%;
    max-height: 90vh;
    max-width: 700px;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 3px 13px rgba(0, 0, 0, 0.3);

    .modal-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 15px;
      background-color: #20242e;
      height: 50px;

      p {
        color: #ffffff;
        font-size: 16px;
        font-weight: 700;
      }

      button {
        width: 32px;
        height: 32px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;

        svg {
          fill: #dadada;
          transition: fill 0.2s;
        }

        &:hover {
          svg {
            fill: #ffffff;
          }
        }
      }
    }

    .modal-content {
      max-height: calc(90vh - 50px);
      padding: 28px;
      overflow-y: auto;
      background-color: #ffffff;

      .message-text {
        font-size: 14px;
        white-space: pre-wrap;
      }
    }
  }
}
</style>