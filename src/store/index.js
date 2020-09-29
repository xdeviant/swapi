import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pagination: {
      count: null,
      next: null,
      previous: null,
    },
    people: [],
  },
  mutations: {
    setPeople(state, payload) {
      const modifiedPeople = payload.map(function(el) {
        return {
          ...el,
          height: +el.height,
          mass: +el.mass,
        };
      });
      state.people = modifiedPeople;
    },
    setPagination(state, payload) {
      state.pagination = payload;
    },
  },
  actions: {
    async getPeople({ commit }, payload) {
      let response;

      if (payload) {
        response = await fetch(`https://swapi.dev/api/people/?page=${payload}`);
      } else {
        response = await fetch("https://swapi.dev/api/people/");
      }

      const json = await response.json();
      commit("setPeople", json.results);
      commit("setPagination", {
        count: json.count,
        next: json.next,
        previous: json.previous,
      });
    },
    async searchPeople({ commit }, payload) {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${payload}`
      );
      const json = await response.json();
      commit("setPeople", json.results);
    },
  },
  modules: {},
});
