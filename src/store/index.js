import Vue from 'vue'
import Vuex from 'vuex'
import messagesObject from '@/assets/messages'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    currentPage: null,
    pages: null,
    messagesPerPage: 20
  },
  mutations: {
    messages: (state, data) => state.messages = data,
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

      commit('messages', messages);
      commit('currentPage', 51);
      commit('pages', Math.ceil(messages.length / 20));
    }
  },
  modules: {}
})
