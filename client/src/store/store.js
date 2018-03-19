import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        accountID: null
    },
    mutations: {
        setToken (state, token) {
            state.token = token;
        },
        setAccountID (state, accountID) {
            state.accountID = accountID;
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token);
        },
        setAccountID ({commit}, accountID) {
            commit("setAccountID", accountID);
        }
        
    }
})