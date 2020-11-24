import { MutationTree } from 'vuex';
import { TryDataStateInterface } from './state';

const mutation: MutationTree<TryDataStateInterface> = {
  dirs_create(state,payload){
    state.dirs.push(payload.data)
  },
  dirs_update(state,payload){
    state.dirs.splice(payload.index,1,payload.data)
  },
  dirs_delete(state,payload){
    state.dirs.splice(payload.index,1)
  },
  dirs_select(state,payload){
    return state.dirs[payload.index]
  },

  questions_create(state,payload){
    state.questions.push(payload.data)
  },
  questions_update(state,payload){
    state.questions.splice(payload.index,1,payload.data)
  },
  questions_delete(state,payload){
    state.questions.splice(payload.index,1)
  },
  questions_select(state,payload){
    return state.questions[payload.index]
  },
  
  dirMenu_create(state,payload){
    state.dirMenu.push(payload.data)
  },
  dirMenu_update(state,payload){
    state.dirMenu.splice(payload.index,1,payload.data)
  },
  dirMenu_delete(state,payload){
    state.dirMenu.splice(payload.index,1)
  },
  dirMenu_select(state,payload){
    return state.dirMenu[payload.index]
  },
};

export default mutation;
