<template>
	<view class="game_main">
		<view class="detail_border">
			<image src="/static/image/border.png" mode=""></image>
		</view>
		<view class="detail_contain yx-m-x-20 yx-pt-40 yx-pb-30 yx-rounded-20">
			<view class="index_contain_title">
				<image src="/static/image/title.png" mode=""></image>
			</view>
			<view class="yx-flex-col-center-center yx-text-white yx-fsize-34 yx-fw-bold yx-mt-40">
				<view class="">
					The compllete analysis conttalns
				</view>
				<view class="">
					the following
				</view>
			</view>
			<view class="yx-text-white yx-fsize-34 yx-fw-bold yx-flex-row-center-center yx-mt-40">
				<text>Love index:</text>
				<view class="yx-flex-row-start-center">
					<image class="yx-w-41 yx-h-37 yx-ml-12" src="/static/image/shi.png" mode="" v-for="item in loveIndex"></image>
					<image class="yx-w-41 yx-h-37 yx-ml-12" src="/static/image/kon.png" mode="" v-for="item in (5-loveIndex)">
					</image>
				</view>
			</view>
			<view class="yx-p-x-30 yx-pt-50 yx-pb-30 yx-mt-30 yx-m-x-20 yx-flex-col-center-center yx-rounded-20"
				style="background: #FAF1E0;color: #B47D52;">
				<view class="yx-fw-bold yx-fsize-32">
					State of luck of love affair?
				</view>
				<view class="detail_kapai yx-mt-40 yx-mb-20">
					<image :src="kapaiList[0].path" mode=""></image>
				</view>
				<view class="yx-fw-bold yx-fsize-28">
					The Wheel of Fortune (upright)
				</view>
				<view class="yx-fsize-28 yx-mt-10">
					element: {{orderDetail[0].element}}
				</view>
				<view class="yx-pos-relative">
					<view class="yx-mt-20 yx-p-y-20" :class="isPay ? '':'mask'">
						{{orderDetail[0].content}}
					</view>
					<view class="detail_need_buy yx-text-white yx-fsize-34 yx-flex-row-center-center" v-if="!isPay">
						Unlock all content
					</view>
				</view>
			</view>
			<view class="yx-p-x-30 yx-pt-50 yx-pb-30 yx-mt-30 yx-m-x-20 yx-flex-col-center-center yx-rounded-20"
				style="background: #FAF1E0;color: #B47D52;">
				<view class="yx-fw-bold yx-fsize-32">
					Subject of luck of love affair?
				</view>
				<view class="detail_kapai yx-mt-40 yx-mb-20">
					<image :src="kapaiList[1].path" mode=""></image>
				</view>
				<view class="yx-fw-bold yx-fsize-28">
					The Wheel of Fortune (upright)
				</view>
				<view class="yx-fsize-28 yx-mt-10">
					element: {{orderDetail[1].element}}
				</view>
				<view class="yx-pos-relative">
					<view class="yx-mt-20 yx-p-y-20" :class="isPay ? '':'mask'">
						{{orderDetail[0].content}}
					</view>
					<view class="detail_need_buy yx-text-white yx-fsize-34 yx-flex-row-center-center" v-if="!isPay">
						Unlock all content
					</view>
				</view>
			</view>
			<view class="yx-p-x-30 yx-pt-50 yx-pb-30 yx-mt-30 yx-m-x-20 yx-flex-col-center-center yx-rounded-20"
				style="background: #FAF1E0;color: #B47D52;">
				<view class="yx-fw-bold yx-fsize-32">
					Suggestion love affairs?
				</view>
				<view class="detail_kapai yx-mt-40 yx-mb-20">
					<image :src="kapaiList[2].path" mode=""></image>
				</view>
				<view class="yx-fw-bold yx-fsize-28">
					The Wheel of Fortune (upright)
				</view>
				<view class="yx-fsize-28 yx-mt-10">
					element: {{orderDetail[2].element}}
				</view>
				<view class="yx-pos-relative">
					<view class="yx-mt-20 yx-p-y-20" :class="isPay ? '':'mask'">
						{{orderDetail[2].content}}
					</view>
					<view class="detail_need_buy yx-text-white yx-fsize-34 yx-flex-row-center-center" v-if="!isPay">
						Unlock all content
					</view>
				</view>
			</view>
		</view>
		<view class="yx-bg-white yx-m-x-20 yx-p-x-30 yx-pt-40 yx-mt-20 yx-rounded-20 yx-fsize-30 yx-pb-20" v-if="!isPay">
			<view class="yx-fw-bold">
				Are you he/she's favorite person?
			</view>
			<view class="yx-mt-20 yx-fw-500">
				<text>Original price </text>
			</view>
			<view class="yx-mt-20 yx-fw-500">
				<text>Limited time offe </text>
			</view>
			<view class="yx-p-20 yx-m-y-20 yx-rounded-20" style="border: 1rpx solid #B3B3B3;">
				<input type="text" v-model="email" placeholder-class="yx-text-999" placeholder="Your mail" :value="inputClearValue" />
			</view>
			<view class="yx-flex-row-start-center">
				<view class="agreebtn yx-rounded-c" :class="agreeVal ? 'agreeVal_active': ''" @tap="agreeVal = !agreeVal"></view>
				<text class="yx-ml-20 yx-text-666">l agree to receive emails from Astrohealer</text>
			</view>
			<view class="yx-h-1 yx-m-y-20" style="background: #F7F7F7;"></view>
			<!-- <view class="yx-flex-row-spaceB-center">
				<view class="detail_pay">
					<image src="/static/image/paypal.png" mode=""></image>
				</view>
				<view class="detail_pay_you">
					<image src="/static/image/you1.png" mode=""></image>
				</view>
			</view> -->
		</view>

		<view class="yx-mt-30 chaeck_pay_btn" v-if="!isPay">
			<!-- <view class="detail_pay_btn yx-flex-row-center-center yx-fsize-32 yx-text-white yx-fw-bold" @tap="handleCheckPay">
				${{amount}}Unlock all contentimmediately
			</view> -->
			<button class="pay_btn" :loading="isLoading" :disabled="!agreeVal" @tap="handleCheckPay">
				<!-- $2.5Unlock all contentimmediately -->
				{{isLoading?' loading...':`$${pay_amount} Unlock all contentimmediately`}}
			</button>
		</view>
	</view>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { onShow } from '@dcloudio/uni-app';
	const app = getApp()
	const agreeVal = ref(true)
	const kapaiList = ref([])
	const isLoading = ref(false)
	const gender = ref(null)
	const pay_amount = ref(4)
	const order_id = ref(null)
	const pages = getCurrentPages()
	const {options} = pages[pages.length-1];
	if(options.gender){
		gender.value = options.genderr;
	}
	if(options.order_id){
		order_id.value = options.order_id;
		check_pay_status();
	}
	onMounted((e) => {
		kapaiList.value = uni.getStorageSync('kapai_list')
	})
	onShow(() => {
		// requestPostDetailFn()
	})
	const email = ref("")
	const isPay = ref(false)
	const loveIndex = ref(3)
	const orderDetail = ref({})
	const amount = ref(null)
	const requestPostDetailFn = () => {
		const data = {
			oid: oid.value
		}
		app.post('', data, function(res) {
			// 接口返回数据格式
			const data = {
				data: {
					list: [{
						content: 'xxxxxx',
						element: 'wind'
					}],
					indexLove: 2, // 爱心数量，最多5个
					pay_status: 1, // 1:已支付  0:未支付,
					amount: '9.9', // 金额
				}
			}

			// 处理已支付情况
			if (res.data.pay_status == 1) {
				isPay.value = true
				loveIndex.value = res.indexLove
				orderDetail.value = res.list
				amount.value = res.amount
			}
		})
	}
	
	const check_pay_status = ()=>{
		app.post('to/checkTarotOrderByID', {ID:order_id.value}, function(res){
			if(res.code != 0) return;
			if(res.data){
				return uni.showToast({ icon: 'none', title:"you have paid"});
			}
		})
	}
	
	const handleCheckPay = () => {
		 var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if(!email.value){
			return uni.showToast({ icon: 'none', title:"please input your email"});
		}else if(!emailRegex.test(email.value)){
			return uni.showToast({ icon: 'none', title:"Please check the email format"});
		}
		isLoading.value =true;
		let data = {
			amount:pay_amount.value,
			cards:[],
			currency:"usd",
			gender:Number(gender.value),
			source:"",
			ws_account:"",
			email:email.value
		}
		app.post('to/createCheckoutSession', data, function(res){
			console.log(res);
			setTimeout(()=>{isLoading.value =true;},5000)
			if(res.code != 0) return;
			uni.showLoading({title: "loading...",mask: true});
			window.location.href = res.data.url;
			setTimeout(()=>{uni.hideLoading()},1000);
			// uni.navigateTo({url: `/pages/index/payment`,params:{amount:2.5,cards:[],gender:gender.value,email:email.value}})
		})
		document.addEventListener('DOMContentLoaded', function() {
		    console.log('DOM树构建完成，不等待样式和图片等');
		});
	}
</script>

<style lang="scss" scoped>
	.game_main{
		width: 100%;
		// height: 100%;
		overflow-y: auto;
		padding-bottom: 20px;
		.chaeck_pay_btn{
			padding: 0 10px;
			box-sizing: border-box;
			.pay_btn{
				display: flex;
				height: 102rpx;
				color: #fff;
				align-items: center;
				justify-content: center;
				background: #F7C3AA;
				box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
			}
			.button-hover{
				opacity: .8;
				// background: rgba(255, 255, 255, .5);
			}
		}
	}
	page {
		background: #FEE9E0;
	}

	image {
		width: 100%;
		height: 100%;
	}

	.detail_border {
		width: 679rpx;
		height: 104rpx;
		margin: 60rpx auto 0;
		background: url(/static/image/border.png) no-repeat;
		background-size: 100% 100%;
	}

	.detail_contain {
		background: #F7C3AA;
		margin-top: -4rpx;
		// border
	}

	.index_contain_title {
		margin: 0 auto;
		width: 668rpx;
		height: 86rpx;
	}

	.detail_kapai {
		width: 150rpx;
		height: 260rpx;
	}

	.mask {
		position: relative;
		filter: blur(2px);
		user-select: none;
	}

	.detail_need_buy {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 535rpx;
		height: 103rpx;
		background: url(/static/image/btnbg.png) no-repeat;
		background-size: 100% 100%;
		z-index: 9;
	}

	.mask::after {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		content: '';
		display: block;
		background: rgba(255, 253, 253, 0.2);
	}

	.agreeBtn {}

	.agreebtn {
		width: 30rpx;
		height: 30rpx;
		border: 1rpx solid #DA7779;
	}

	.agreeVal_active {
		background: #D66567;
	}

	.detail_pay {
		width: 215rpx;
		height: 52rpx;
	}

	.detail_pay_you {
		width: 19rpx;
		height: 35rpx;
	}

	.detail_pay_btn {
		height: 122rpx;
		background: url(/static/image/btnbg.png) no-repeat;
		background-size: 100% 100%;
	}
</style>