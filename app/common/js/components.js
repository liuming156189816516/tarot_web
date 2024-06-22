import siteInfo from '../../siteinfo.js'

var text = {
	urls:siteInfo.siteroot,
	shebei:function(){
		// #ifdef APP-PLUS
		this.globalData.platform = 'app';
		var app = this;
		uni.getSystemInfo({
			success: function(res) {
				app.globalData.platform2 = res.platform;
			}
		});
		// #endif
		// #ifdef H5
		this.globalData.platform = 'h5';
		if (navigator.userAgent.indexOf('MicroMessenger') > -1) {
			this.globalData.platform = 'mp';
		}
		
		if (navigator.userAgent.indexOf('Mobile') === -1) {
		  this.globalData.platform = 'pc'; 
		}  
			
		// #endif
			
		// #ifdef MP-WEIXIN
		this.globalData.platform = 'wx';
			
		// #endif
		// #ifdef MP-ALIPAY
		this.globalData.platform = 'alipay';
		// #endif
		// #ifdef MP-BAIDU
		this.globalData.platform = 'baidu';
		// #endif
		// #ifdef MP-TOUTIAO
		this.globalData.platform = 'toutiao';
		var sysinfo = tt.getSystemInfoSync();
		if (sysinfo.appName == 'Douyin') {
			this.globalData.isdouyin = 1;
		}
		// #endif
		// #ifdef MP-QQ
		this.globalData.platform = 'qq';
		// #endif
		
		
	},
	
	
	
	post: function(url, param, callback) {
		return getApp().post(url, param, callback);
	},
	get: function(url, param, callback) {
		return getApp().get(url, param, callback);
	},
	
	tiem:function(){
		   let tiems=1711001378000+10000000;//3
		console.log(tiems);
		   let tiemdq=Date.now();
		   if(tiems>tiemdq){
			   return  true;
		   }else{
			     return false;	 
		   }
	},
	

	//数字转大写
	aNumber: function(num) {

		var numArray = new Array();

		var unit = "亿万元$";

		for (var i = 0; i < unit.length; i++) {

			var re = eval("/" + (numArray[i - 1] ? unit.charAt(i - 1) : "") + "(.*)" + unit.charAt(i) +
				"/");

			if (num.match(re)) {

				numArray[i] = num.match(re)[1].replace(/^拾/, "壹拾");

				numArray[i] = numArray[i].replace(/[零壹贰叁肆伍陆柒捌玖]/g, function($1) {

					return "零壹贰叁肆伍陆柒捌玖".indexOf($1);

				});

				numArray[i] = numArray[i].replace(/[分角拾佰仟]/g, function($1) {

					return "*" + Math.pow(10, "分角 拾佰仟 ".indexOf($1) - 2) + "+"

				}).replace(/^\\*|\\+$/g, "").replace(/整/, "0");

				numArray[i] = "(" + numArray[i] + ")*" + Math.ceil(Math.pow(10, (2 - i) * 4));

			} else

				numArray[i] = 0;

		}

		return eval(numArray.join("+"));
	},
	
	
	wanluo:function(){
		let op=true
		uni.getNetworkType({
			success: function (res) {
				
				if (res.networkType === "none") {
					console.log("当前无网络");
					op=false
				} else {
					op=true
				}
			}
		});
		return op
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
	inArray: function(search, array) {
		for (var i in array) {
			if (array[i] == search) {
				return true;
			}
		}
		return false;
	},
	isNull: function(e) {
		return e == undefined || e == 'undefined' || e == null || e == '';
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

	//倒计时
	showtime(endtime) {
		var nowtime = new Date().getTime(); //获取当前时间

		var lefttime = endtime - nowtime; //距离结束时间的毫秒数

		var leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)); //计算天数
		var lefth =
			Math.floor(((lefttime / (1000 * 60 * 60)) % 24) + leftd * 24) < 10 ?
			'0' + Math.floor(((lefttime / (1000 * 60 * 60)) % 24) + leftd * 24) :
			Math.floor(((lefttime / (1000 * 60 * 60)) % 24) + leftd * 24); //计算小时数
		var leftm = Math.floor((lefttime / (1000 * 60)) % 60) < 10 ? '0' + Math.floor((lefttime / (1000 *
			60)) % 60) : Math.floor((lefttime / (1000 * 60)) % 60); //计算分钟数
		var lefts = Math.floor((lefttime / 1000) % 60) < 10 ? '0' + Math.floor((lefttime / 1000) % 60) :
			Math.floor((lefttime / 1000) % 60); //计算秒数


		var tiemd = `${lefth}:${leftm}:${lefts}`
		// 倒计时结束时，显示00:00:00
		if (lefttime < 0) {
			tiemd = `00:00:00`
		}
		return tiemd
	},

	url: function() {
		return getApp().globalData.baseurl;
	},
	goto: function(e) {
		getApp().goto(e.currentTarget.dataset.url, e.currentTarget.dataset.opentype)
	},
	goback: function() {
		getApp().goback();
	},
	getmenuindex: function(menuindex) {
		this.menuindex = menuindex
	},
	loaded: function(obj) {
		if (obj && obj.title && !obj.desc) obj.desc = obj.title
		var that = this;
		uni.stopPullDownRefresh();
		var app=getApp()
		if (app.globalData.isinit == false) {

		} else {
			this.isload = true;
			this._sharemp(obj);
		}
	},
	getdata: function() {

	},
	getplatform: function() {
		return getApp().globalData.platform;
	},
	_sharemp: function(obj) {
		//#ifdef H5
		var app=getApp()
		if (app.globalData.platform != 'mp') return;
		if (!obj) obj = {};
		if (!obj.link) obj.link = app.globalData.pre_url + '/h5/' + app.globalData.aid + '.html#' + this
			.sharepath();
		var currenturl = '/' + (this.route ? this.route : this.__route__); //当前页面url
		if (this.opt && this.opt.id) {
			currenturl += '?id=' + this.opt.id
		} else if (this.opt && this.opt.cid) {
			currenturl += '?cid=' + this.opt.cid
		} else if (this.opt && this.opt.gid) {
			currenturl += '?gid=' + this.opt.gid
		} else if (this.opt && this.opt.bid) {
			currenturl += '?bid=' + this.opt.bid
		}
		var sharelist = app.globalData.initdata.sharelist;
		if (sharelist) {
			for (var i = 0; i < sharelist.length; i++) {
				if (sharelist[i]['indexurl'] == currenturl) {
					obj.title = sharelist[i].title;
					obj.desc = sharelist[i].desc;
					obj.pic = sharelist[i].pic;
					if (sharelist[i].url) {
						var sharelink = sharelist[i].url;
						if (sharelink.indexOf('/') === 0) {
							sharelink = app.globalData.pre_url + '/h5/' + app.globalData.aid +
								'.html#' + sharelink;
						}
						if (app.globalData.mid > 0) {
							sharelink += (sharelink.indexOf('?') === -1 ? '?' : '&') + 'pid=' + app
								.globalData.mid;
						}
						obj.link = sharelink;
					}
				}
			}
		}
		
		//#endif
	},
	_sharewx: function(obj) {
		if (!obj) obj = {};
var app=getApp()
		var pages = getCurrentPages(); //获取加载的页面
		var currentPage = pages[pages.length - 1]; //获取当前页面的对象
		var currenturl = '/' + (currentPage.route ? currentPage.route : currentPage
			.__route__); //当前页面url 

		var opt = this.opt;
		if (this.opt && this.opt.id) {
			currenturl += '?id=' + this.opt.id
		} else if (this.opt && this.opt.cid) {
			currenturl += '?cid=' + this.opt.cid
		} else if (this.opt && this.opt.gid) {
			currenturl += '?gid=' + this.opt.gid
		} else if (this.opt && this.opt.bid) {
			currenturl += '?bid=' + this.opt.bid
		}
		var sharelist = app.globalData.initdata.sharelist;
		if (sharelist) {
			for (var i = 0; i < sharelist.length; i++) {
				if (sharelist[i]['indexurl'] == currenturl) {
					obj.title = sharelist[i].title;
					obj.desc = sharelist[i].desc;
					obj.pic = sharelist[i].pic;
					obj.link = sharelist[i].url;
				}
			}
		}
		var sharepath = this.sharepath();
		if (obj.title) {
			var title = obj.title
		} else {
			var title = app.globalData.initdata.name;
		}
		if (obj.pic) {
			var imgUrl = obj.pic
		} else {
			var imgUrl = '';
		}
		//console.log(sharepath);
		typeof obj.callback == 'function' && obj.callback();
		return {
			title: title,
			path: sharepath,
			imageUrl: imgUrl
		}
	},
	sharepath: function() {
		var app=getApp()
		var opt = this.opt;
		var currentpath = '/' + (this.route ? this.route : this.__route__); //当前页面url
		var scene = [];
		for (var i in opt) {
			if (i != 'pid') {
				scene.push(i + '_' + opt[i]);
			}
		}
		//console.log(app.globalData.mid);
		if (app.globalData.mid) {
			scene.push('pid_' + app.globalData.mid);
		}
		var scenes = scene.join('-');
		if (scenes) {
			currentpath = currentpath + "?scene=" + scenes + '&t=' + parseInt((new Date().getTime()) /
				1000);
		}
		return currentpath;
	},
	t: function(text) {
		if (text == 'color1') {
			return getApp().globalData.initdata.color1;
		} else if (text == 'color2') {
			return getApp().globalData.initdata.color2;
		} else if (text == 'color1rgb') {
			var color1rgb = getApp().globalData.initdata.color1rgb;
			return color1rgb['red'] + ',' + color1rgb['green'] + ',' + color1rgb['blue'];
		} else if (text == 'color2rgb') {
			var color2rgb = getApp().globalData.initdata.color2rgb;
			return color2rgb['red'] + ',' + color2rgb['green'] + ',' + color2rgb['blue'];
		} else {
			return getApp().globalData.initdata.textset[text] || text;
		}
	},
	inArray: function(search, array) {
		for (var i in array) {
			if (array[i] == search) {
				return true;
			}
		}
		return false;
	},
	isNull: function(num) {
		return (num == undefined || num == "undefined" || num == null || num == "");
	},
	isEmpty: function(list) {
		return (!list || list.length === 0 || (list.length === 1 && (!list[(0)] || list[(0)].length ===
			0)))
	},
	date: function(time, format) {
		if (format == undefined || format == "undefined" || format == null || format == "") format =
			'Y-m-d H:i:s';
		var date = new Date();
		if (time != '' || time > 0) {
			date = new Date(time * 1000);
		}

		var Y = date.getFullYear();
		var m = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
		var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
		var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
		var i = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
		var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
		format = format.replace('Y', Y);
		format = format.replace('m', m);
		format = format.replace('d', d);
		format = format.replace('H', H);
		format = format.replace('i', i);
		format = format.replace('s', s);
		return format;
	},
	getDistance: function(lat1, lng1, lat2, lng2) {
		if (!lat1 || !lng1 || !lat2 || !lng2) return '';
		var rad1 = lat1 * Math.PI / 180.0;
		var rad2 = lat2 * Math.PI / 180.0;
		var a = rad1 - rad2;
		var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
		var r = 6378137;
		var juli = r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(
			rad2) * Math.pow(Math.sin(b / 2), 2)));
		juli = juli / 1000
		juli = juli.toFixed(2);
		return juli;
	},
	// previewImage: function (e) {
	// 	var imgurl = e.currentTarget.dataset.url
	// 	var imgurls = e.currentTarget.dataset.urls
	// 	if (!imgurls) imgurls = imgurl;
	// 	if (typeof (imgurls) == 'string') imgurls = imgurls.split(',');
	// 	uni.previewImage({
	// 		current: imgurl, 
	// 		urls: imgurls 
	// 	})
	// },

	subscribeMessage: function(callback) {
	var app=getApp()
		// #ifdef MP-WEIXIN
		var that = this;
		var tmplids = that.tmplids;
		if (tmplids && tmplids.length > 0) {
			uni.requestSubscribeMessage({
				tmplIds: tmplids,
				success: function(res) {
					for (var i in tmplids) {
						if (res[tmplids[i]] == 'accept') {
							app.post('ApiIndex/subscribemessage', {
								tmplid: tmplids[i]
							}, function() {})
						}
					}
					//console.log(res)
					typeof callback == "function" && callback();
				},
				fail: function(res) {
					//console.log(res)
					typeof callback == "function" && callback();
				}
			})
		} else {
			typeof callback == "function" && callback();
		}
		// #endif
		// #ifndef MP-WEIXIN
		typeof callback == "function" && callback();
		// #endif
	},

}



export default text;