import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { TryDataStateInterface } from './state';

const getters: GetterTree<TryDataStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
