import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { TryDataStateInterface } from './state';

const actions: ActionTree<TryDataStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
