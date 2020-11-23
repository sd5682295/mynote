import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { TryDataStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const tryModule: Module<TryDataStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default tryModule;
