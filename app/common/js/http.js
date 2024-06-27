

import siteinfo from '../../siteinfo.js'



// 添加拦截器
const httpInterceptor = {
	invoke(options) {
		if (options.url.includes('aip.baidubce.com')) {
			options.header = {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
			return
		}
		
		if(options.url.indexOf('https://') != -1){
			return
		}
		// request 触发前拼接 url 
		options.url = siteinfo.siteroot +'/'+ options.url
		// 2. 请求超时, 默认 60s
		options.timeout = 10000
		// 3. 添加小程序端请求头标识
		options.header = {
			...options.header,
		}
		// 4. 添加 token 请求头标识
		
		console.log(options,123);
		 if(!options.data){
			 options.data={}
		 }
		
		options.data.aid=1
		options.data.session_id=uni.getStorageSync('session_id');
	
			options.header = {
				...options.header,

			}

	}
}

uni.addInterceptor('request', httpInterceptor)

export const https = (options, successback, failback) => {
	return new Promise((resolve, reject) => {
		uni.request({
			...options,
			success: (res) => {
				const NO_LOGIN = -1 // 去登录
				const FAIL_CODE = 0 // 接口未通过
				const SUCCESS_CODE = 1 // 接口通过
				const code = res.data.status
				if (code == NO_LOGIN) {
					// #ifdef MP-WEIXIN
					    uni.reLaunch({
					    	url: '/pagesA/login/wx-login'
					    })
					// #endif
					
					// #ifndef MP-WEIXIN
					   uni.reLaunch({
					   	url: '/pagesA/login/login'
					   })
					// #endif
					
					
				
					return
				}
				if (code == FAIL_CODE) {
					uni.showToast({
						title: res.data.msg,
						icon: 'none'
					})
					return
				}
				if (code == SUCCESS_CODE) {
					resolve(res.data)
				}
				if (res.statusCode == 200) {
					resolve(res)
				}

			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}