<script>
	import siteInfo from '@/siteinfo.js'

	import {
		createJWTtoken
	} from '@/tool/jwt';
	import {
		reactive
	} from "vue";
	import components from '@/common/js/components.js';
	export default {
		globalData: {

			pre_url: '',
			baseurl: '',
			session_id: '',
			aid: 0,
			mid: 0,
			pid: 0,
			needAuth: 0,
			platform: 'wx',
			isdouyin: 0,
			sysset: [],

			menudata: [],
			menu2data: [],
			currentIndex: -1,
			initdata: {},
			textset: [],
			isinit: false,
			socketOpen: false,
			socket_token: '',
			socketMsgQueue: [],
			socketConnecttimes: 0,
			socketInterval: null,
			scene: 0,

		},
		onLaunch: function(options) {

			// uni.navigateTo({
			// 	url:"/pages/login/index"
			// })


			// #ifdef MP-WEIXIN
			if (wx.canIUse('getUpdateManager')) {
				const updateManager = wx.getUpdateManager();
				updateManager.onCheckForUpdate(function(res) {
					// 请求完新版本信息的回调
					if (res.hasUpdate) {
						updateManager.onUpdateReady(function() {
							that.tui.modal('更新提示', '新版本已经上线啦~，为了获得更好的体验，建议立即更新', false, res => {
								// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
								updateManager.applyUpdate();
							});
						});
						updateManager.onUpdateFailed(function() {
							// 新的版本下载失败
							that.tui.modal('更新失败', '新版本更新失败，为了获得更好的体验，请您删除当前小程序，重新搜索打开', false,
							res => {});
						});
					}
				});
			}
			// #endif


			this.globalData.aid = siteInfo.uniacid;




			this.globalData.baseurl = siteInfo.siteroot + '/';
			this.globalData.session_id = uni.getStorageSync('session_id');



			// #ifdef APP-PLUS
			this.globalData.platform = 'app';

			// #endif


			// #ifdef MP-WEIXIN
			this.globalData.platform = 'wx';
			// #endif
			// #ifdef MP-ALIPAY
			this.globalData.platform = 'alipay';
			// #endif

			// #ifdef MP-TOUTIAO
			this.globalData.platform = 'tiktok';
			// #endif

			// #ifdef APP-PLUS
			uni.setStorageSync('auth_param', 'ZqVCvFsx');
			// #endif


			// #ifdef APP-PLUS
			// if (uni.getStorageSync('diyici')) {
			// 	uni.reLaunch({
			// 		url: "/pages/index/index"
			// 	})
			// } else {
			// 	uni.reLaunch({
			// 		url: "/pages/login/logo"
			// 	})
			// 	uni.setStorageSync('diyici', "1")
			// }
			// #endif 

            //断网跳转
			if (!components.wanluo()) {
				uni.reLaunch({
					url: "/pages/index/network_outage"
				})
			}


		},
		onShow: function(options) {
			var that = this;


			var uid = uni.getStorageSync('uidi');
			if (!uid) {
				this.shuijis();
			}


		},
		methods: {
			//获取密钥
			shuijis() {
				var seed = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijkmnpQrstuvwxyz23456789"; //数组

				var seedlength = seed.length; //数组长度
				var createPassword = '';
				for (let i = 0; i < 11; i++) {
					var j = Math.floor(Math.random() * seedlength);
					createPassword += seed[j];
				}
				uni.setStorageSync('uidi', createPassword);
			},




			getopts: function(opt) {
				if (opt && opt.scene) {
					var scene = opt.scene;
					var scenes = scene.split('-');
					var opts = {};
					for (var i in scenes) {
						var thisscenes = scenes[i].split('_');
						opts[thisscenes[0]] = thisscenes[1];
					}
					return opts;
				} else {
					return opt;
				}
			},
			alert: function(content, confirmfun) {
				uni.showModal({
					title: '提示信息',
					showCancel: false,
					content: content.toString(),
					success: function(res) {
						if (res.confirm) {
							typeof confirmfun == 'function' && confirmfun();
						}
					}
				});
			},
			confirm: function(content, confirmfun, cancelfun) {
				uni.showModal({
					title: '操作确认',
					content: content.toString(),
					showCancel: true,
					success: function(res) {
						if (res.confirm) {
							typeof confirmfun == 'function' && confirmfun();
						} else {
							typeof cancelfun == 'function' && cancelfun();
						}
					}
				});
			},
			success: function(title, successfun) {
				if (undefined == title) title = '操作成功';
				var title = title.toString();
				uni.showToast({
					title: title,
					icon: title.length > 8 ? 'none' : 'success',
					success: function(res) {
						typeof successfun == 'function' && successfun();
					}
				});
			},
			error: function(title, duration) {
				if (title === false) {
					uni.hideToast();
				} else {
					if (this.isNull(duration)) duration = 2500;
					if (undefined == title) title = '操作失败';
					uni.showToast({
						title: title.toString(),
						icon: 'none',
						duration: duration
					});
				}
			},
			showLoading: function(title) {
				if (title === false) {
					uni.hideLoading();
				} else {
					if (undefined == title) title = '加载中';
					uni.showLoading({
						title: title.toString(),
						mask: true
					});
				}
			},


			parseJSON: function(e) {
				try {
					return JSON.parse(e);
				} catch (t) {
					return undefined;
				}
			},
			getparams: function(url) {
				if (url.indexOf('?') === -1) return {};
				var query = url.split('?')[1];
				var vars = query.split('&');
				var params = {};
				for (var i = 0; i < vars.length; i++) {
					var pair = vars[i].split('=');
					params[pair[0]] = pair[1];
				}
				return params;
			},

			goback: function(isreload) {
				var app = this;
				var pages = getCurrentPages();
				if (isreload && pages.length > 1) {
					var prePage = pages[pages.length - 2];
					prePage.$vm.getdata();
				}

			},
			post: function(url, param, callback) {
				this.request('POST', url, param, callback);
			},
			get: function(url, param, callback) {
				this.request('GET', url, param, callback);
			},




			setCache: function(key, value) {
				return uni.setStorageSync(key, value);
			},
			getCache: function(key) {
				return uni.getStorageSync(key);
			},
			removeCache: function(key) {
				var $ = this;
				if ($.isNull(key)) {
					uni.clearStorageSync();
				} else {
					uni.removeStorageSync(key);
				}
			},



			request: function(method, url, param, callback) {
				var oldurl = url;
				var app = this;

				if (url.substring(0, 8) != 'https://') {
					url = app.globalData.baseurl + url;

					url += (url.indexOf('?') > 0 ? '&' : '?') + 'aid=' + app.globalData.aid +
						'&auth=' + uni.getStorageSync('auth_param') +
						'&session_id=' + uni.getStorageSync('session_id') +
						'&token=' + uni.getStorageSync('uidi') +
						'&platform=' + app.globalData.platform +
						'&app_program=yx';
				}
				if (!components.wanluo()) {
					uni.reLaunch({
						url: "/pages/index/network_outage"
					})
				}

				uni.request({
					url: url,
					//仅为示例，并非真实的接口地址
					data: param,
					method: method,
					header: {
						'Content-Type': 'application/json',
					},
					success: function(res) {
						typeof callback == 'function' && callback(res.data);
					},
					fail: function(res) {
						try {
							if (oldurl != 'ApiIndex/linked') {
								if (res.errMsg != 'request:fail timeout') {

									app.error('请求失败');
								}
							}
						} catch (e) {}
					}
				});
			}
		}
	};
</script>



<style lang="scss">
	@import '@/static/css/css.css';

	@import '@/common/styles/index.scss';

	/* #ifdef H5 */
	body::-webkit-scrollbar,
	div::-webkit-scrollbar,
	*::-webkit-scrollbar {
		display: none;
	}

	body.pages-index-index uni-page-body,
	body {
		max-width: 818rpx;
		margin: 0 auto;
		padding-bottom: 0 !important;
	}

	text {
		font-family: 'sans-serif';
	}

	/* #endif */
	image,
	img {
		width: 100%;
		height: 100%;

	}

	.gaodu {
		width: 100%;
		height: 200rpx;

	}

	/* //省略号 */
	.wot {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}


	.userinfo {
		position: fixed;
		top: 80rpx;
		right: 50rpx;
		width: 48rpx;
		height: 48rpx;
		z-index: 99999;

		>image {
			width: 100%;
			height: 100%;
		}
	}

	.meiyou {
		display: inline-block;
		width: 100%;
		height: 500rpx;
		line-height: 500rpx;
		text-align: center;
		font-size: 30rpx;
		color: #666;
	}

	.login_douyin {
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 80rpx;
		background-color: #000;
		border-radius: 10rpx;
		color: #fff;
		font-size: 30rpx;
		margin-top: 100rpx;

		.login_douyin_icon {
			width: 40rpx;
			height: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 10rpx;

			>image {
				width: 100%;
				height: 100%;
			}
		}
	}


	/* 两边对齐 */
	.ffbb {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	/*多个垂直上下左右居中 */
	.ffcc {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}


	/*多个垂直左右居中 */
	.ffjj {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/*一行 */
	.ffqq {
		display: flex;
	}

	/*靠右垂直居中 */
	.ffff {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	/* 均匀对齐 */
	.ffdd {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	/* 一个垂直居中 */
	.ffaa {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.fftt {
		display: flex;
		align-items: center;
	}
</style>