import Vue from 'vue';
import Vuex from 'vuex';
// 单个模块
import LoginRegistration from './modules/LoginRegistration';
import NavHeader from './modules/NavHeader';
import Message from './modules/Message';
import Ui from './modules/Ui';
import Article from './modules/Article';

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
		modules: {
			LoginRegistration: LoginRegistration,
			NavHeader: NavHeader,
			Message: Message,
			Article: Article,
			Ui: Ui
		}
  })
}
