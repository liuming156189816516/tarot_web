import * as feedback from '@/common/untils/yx-feedback.js';
import throttle from '@/common/untils/yx-throttle.js';
import debounce from '@/common/untils/yx-debounce.js';
import {
	route
} from '@/common/untils/yx-route.js';
import cacheIns from '@/common/untils/yx-cache.js';

// 调用：uni.$yxHf.feedback.showToast
export default {
	install(app, options) {
		// uni挂载全局变量
		uni.$yx = {
			feedback, // loading, toast, copy
			throttle, // 节流
			debounce, // 防抖
			route, // 路由跳转
			cacheIns, // storage
		};
		// Vue挂载全局变量
		app.config.globalProperties.$yx = {
			feedback,
			throttle,
			debounce,
			route,
		};
	}
}

