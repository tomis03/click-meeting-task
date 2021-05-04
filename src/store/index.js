import Vue from 'vue'
import Vuex from 'vuex'
import messagesObject from '@/assets/messages'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    allMessages: [],
    messagesToShow: [],
    currentPage: null,
    pages: null,
    messagesPerPage: 20,
    showModal: false,
    openedMessageIndex: null
  },

  mutations: {
    allMessages: (state, data) => state.allMessages = data,
    messagesToShow: (state, data) => state.messagesToShow = data,
    currentPage: (state, data) => state.currentPage = data,
    pages: (state, data) => state.pages = data,
    showModal: (state, data) => {
      state.showModal = data.show;
      state.openedMessageIndex = data.index;
      if (data.show) {
        document.querySelector('body').style.overflow = 'hidden';
      } else {
        document.querySelector('body').style.overflow = '';
      }
    }
  },

  actions: {

    getMessages({ commit }) {
      let messages = messagesObject;
      for (let i = 0; i <= 141; i++) {
        for (let j = 0; j <= 6; j++) {
          messages.push(messages[j]);
        }
      }

      // Use it for sorting by date
      // messages.sort((a, b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));

      commit('allMessages', messages);
      commit('messagesToShow', messages);
      commit('currentPage', messages.length == 0 ? 0 : 1);
      commit('pages', messages.length == 0 ? 0 : Math.ceil(messages.length / 20));
    },

    searchMessages({ state, commit }, searchedText) {
      const pattern = new RegExp(searchedText, 'i');
      const searchedMessages = state.allMessages.filter(el => {
        if (pattern.test(el.title)) {
          return true;
        }
      });

      commit('messagesToShow', searchedMessages);
      commit('currentPage', searchedMessages.length == 0 ? 0 : 1);
      commit('pages', searchedMessages.length == 0 ? 0 : Math.ceil(searchedMessages.length / 20));
    }

  },

})
