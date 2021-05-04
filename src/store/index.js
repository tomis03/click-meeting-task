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
    messagesPerPage: 20
  },

  mutations: {
    allMessages: (state, data) => state.allMessages = data,
    messagesToShow: (state, data) => state.messagesToShow = data,
    currentPage: (state, data) => state.currentPage = data,
    pages: (state, data) => state.pages = data
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
      commit('currentPage', 1);
      commit('pages', Math.ceil(messages.length / 20));
    },

    searchMessages({ state, commit }, searchedText) {
      const pattern = new RegExp(searchedText, 'i');
      const searchedMessages = state.allMessages.filter(el => {
        if (pattern.test(el.title)) {
          return true;
        }
      });

      commit('messagesToShow', searchedMessages);
      commit('currentPage', 1);
      commit('pages', Math.ceil(searchedMessages.length / 20));
    }

  },

})
