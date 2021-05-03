import Vue from 'vue'
import Vuex from 'vuex'
import messagesObject from '@/assets/messages'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [],
    currentPage: null,
    pages: null,
    messagesPerPage: 30
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
      commit('messages', messages);
      commit('currentPage', 1);
      commit('pages', Math.ceil(messages.length / 20));
    }
  },
  modules: {}
})
