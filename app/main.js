import App from './App'
import yxHfPlugin from '@/common/yx-plugin.js';

// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
App.mpType = 'app'


const app = new Vue({
	...App
})
app.$mount()
// #endif




// #ifdef VUE3
import {
	createSSRApp
} from 'vue'


export function createApp() {

	const app = createSSRApp(App)

	app.use(yxHfPlugin); // 鎴戠殑鎻掍欢



	return {
		app
	}
}
// #endif