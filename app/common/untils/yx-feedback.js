import {
	ref
} from 'vue'

/**
 * 显示loading弹框
 * 
 * @param {string} title loading文字
 * @return undefined
 * */
export const showLoading = (title = '加载中') => {
	// #ifdef APP-PLUS
	plus.nativeUI.showWaiting(title, {
		width: '100px'
	}); // loading宽度100px
	// #endif
	// #ifndef APP-PLUS
	uni.showLoading({
		title: title,
		mask: true
	})
	// #endif
}
/**
 * 隐藏loading弹框
 * 
 * @return undefined
 * */
export const hideLoading = () => {
	// #ifdef APP-PLUS
	plus.nativeUI.closeWaiting();
	// #endif
	// #ifndef APP-PLUS
	uni.hideLoading()
	// #endif
}

/**
 * toast弹框
 * 
 * @param {string} title 提示文字
 * @return undefined
 */
export const showToast = (title) => {
	// #ifdef APP-PLUS
	plus.nativeUI.closeToast();
	plus.nativeUI.toast(title);
	// #endif
	// #ifndef APP-PLUS
	uni.showToast({
		title,
		icon: 'none'
	});
	// #endif
}
/**
 * 复制文本
 * 
 * @param {string} text 提示文字
 * @return undefined
 */
export const copy = text => {
	uni.setClipboardData({
		data: text,
		showToast: false,
		success() {
			showToast('复制成功')
		},
		fail() {
			showToast('复制失败')
		}
	});
}


export const onReachBottomFn = (addList, allList, page, psize) => {
	const nodata_status = ref(false)
	const finished_status = ref(false)
	const resultList = ref([])

	// 首页直接为空
	if (page == 1 && (addList === [] || addList.length == 0)) {
		nodata_status.value = true
		finished_status.value = true
		resultList.value = []
	}
	// 第一页时,数据不为空
	if (page == 1 && addList != false) {
		resultList.value = addList
	}
	// 第二页开始,获取到的数据不等于空
	if (page > 1 && addList != false && addList.length > 0) {
		resultList.value = [...allList, ...addList]
	}
	// 第二页开始,获取到的数据为空
	if (page > 1 && addList == false) {
		resultList.value = allList
	}
	// 任何时候,获取的列表数小于获取数
	if (addList.length < psize) {
		finished_status.value = true
	}
	return {
		nodata: nodata_status.value,
		finished: finished_status.value,
		resultList: resultList.value
	}
}