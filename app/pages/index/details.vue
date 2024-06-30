<template>
	<view class="game_main">
		<view class="custom_head">
			<image class="bank_icon" src="/static/image/you1.png" @tap="$yx.route({url:`/pages/index/choupai`})"></image>
			<text class="title_desc">Pay to see results</text>
		</view>
		<view class="detail_border">
			<image src="/static/image/border.png" mode=""></image>
		</view>
		<view class="detail_warp">
			<view class="detail_contain yx-rounded-20">
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
				<view class="yx-text-white yx-fsize-34 yx-fw-bold yx-flex-row-center-center">
					<text>Love index:</text>
					<view class="yx-flex-row-start-center">
						<image class="yx-w-41 yx-h-37 yx-ml-12" src="/static/image/shi.png" mode="" v-for="item in loveIndex"></image>
						<image class="yx-w-41 yx-h-37 yx-ml-12" src="/static/image/kon.png" mode="" v-for="item in (5-loveIndex)">
						</image>
					</view>
				</view>
				<div class="predict_result_list">
					<view class="yx-rounded-20 result_item" v-for="item in kapaiList" :key="item.card_id">
						<view class="yx-fw-bold yx-fsize-32">
							State of luck of love affair?
						</view>
						<view class="detail_kapai yx-mt-40 yx-mb-20">
							<image :src="item.picture" mode=""></image>
						</view>
						<view class="yx-fw-bold yx-fsize-28">
							The Wheel of Fortune (upright)
						</view>
						<view class="predict_buttom" >
							<view class="predict_desc" :class="item.isPay ? '':'mask unlock_desc'">{{item.comtent|| tipsText}}</view>
							<view class="detail_need_buy yx-text-white yx-fsize-34 yx-flex-row-center-center" v-if="!item.isPay">
								Unlock all content
							</view>
						</view>
					</view>
				</div>
			</view>
		</view>
		<template v-if="!is_lock">
			<view class="yx-bg-white yx-m-x-20 yx-p-x-30 yx-pt-40 yx-mt-20 yx-rounded-20 yx-fsize-30 yx-pb-20">
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
					<input type="text" v-model="user_email" placeholder-class="yx-text-999" placeholder="Your mail" />
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

			<view class="yx-mt-30 chaeck_pay_btn">
				<!-- <view class="detail_pay_btn yx-flex-row-center-center yx-fsize-32 yx-text-white yx-fw-bold" @tap="handleCheckPay">
					${{amount}}Unlock all contentimmediately
				</view> -->
				<button class="pay_btn" :loading="isLoading" :disabled="!agreeVal" @tap="handleCheckPay">
					<!-- $2.5Unlock all contentimmediately -->
					{{isLoading?' loading...':`$${pay_amount} Unlock all contentimmediately`}}
				</button>
			</view>
		</template>
	</view>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { onShow,onLoad } from '@dcloudio/uni-app';
	const app = getApp()
	const agreeVal = ref(true)
	const kapaiList = ref([])
	const isLoading = ref(false)
	const is_lock = ref(false)
	const gender = ref(null)
	const pay_amount = ref(4)
	const order_id = ref(null)
	const user_email = ref("")
	const isPay = ref(false)
	const loveIndex = ref(3)
	const orderDetail = ref({})
	const amount = ref(null)
	const tipsText = ref('Only after unlocking can you view the current results.')
	onMounted(() => {})
	onLoad((options) => {
		if(options.gender){
			gender.value = options.genderr;
		}
		if(options.order_id){
			order_id.value = options.order_id;
			check_pay_status();
		}
		let changeList = uni.getStorageSync('kapai_list').map(item=>{
			return {...item,isPay:false,comtent:""}
		})
		kapaiList.value = changeList
	})
	const check_pay_status = ()=>{
		app.get('to/checkTarotOrderByOrderID', {ID:order_id.value}, function(res){
			if(res.code != 0) return;
			let {data:{is_pay}} = res;
			is_lock.value = is_pay;
			if(is_pay){
				let {data:{cars}} = res;
				for (let k = 0; k < cars.length; k++) {
					kapaiList.value[k].isPay = is_pay;
					kapaiList.value[k].picture ='/static/kapai/'+cars[k].picture;
					kapaiList.value[k].card_id = cars[k].card_id;
					kapaiList.value[k].comtent = cars[k].condition;
				}
				// return uni.showToast({ icon: 'none', title:"you have paid"});
			}else{
				let {data:{email}} = res;
				user_email.value = email
			}
		})
	}
	
	const handleCheckPay = () => {
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if(!user_email.value){
			return uni.showToast({ icon: 'none', title:"please input your email"});
		}else if(!emailRegex.test(user_email.value)){
			return uni.showToast({ icon: 'none', title:"Please check the email format"});
		}
		let data = {
			cards:[],
			currency:"usd",
			source:"",
			ws_account:"",
			email:user_email.value,
			amount:pay_amount.value*100,
			gender:Number(gender.value)
		}
		data.cards = kapaiList.value.map(item=>{return item.card_id})
		isLoading.value =true;
		app.post('to/createCheckoutSession', data, function(res){
			console.log(res);
			setTimeout(()=>{isLoading.value =true;},5000)
			if(res.code != 0) return;
			uni.showLoading({title: "loading...",mask: true});
			window.location.href = res.data.url;
			setTimeout(()=>{uni.hideLoading()},1000);
			// uni.navigateTo({url: `/pages/index/payment`,params:{amount:2.5,cards:[],gender:gender.value,email:email.value}})
		})
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
				font-size: 36rpx;
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
		margin: 0 auto;
		background: url(/static/image/border.png) no-repeat;
		background-size: 100% 100%;
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
		width: 535rpx;
		height: 103rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
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
	.detail_warp{
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
		.detail_contain{
			width: 100%;
			padding: 20px 0;
			background: #F7C3AA;
			box-sizing: border-box;
			.yx-text-white{
				margin-bottom: 20px;
			}
			.predict_result_list{
				width: 100%;
				padding: 0 20rpx;
				box-sizing: border-box;
				.result_item{
					display: flex;
					width: 100%;
					padding: 20px;
					flex-direction: column;
					align-items: center;
					box-sizing: border-box;
					margin-bottom: 20px;
					background: #FAF1E0;color: #B47D52;
					.predict_buttom{
						width: 100%;
						position: relative;
						display: flex;
						margin-top: 20px;	
						.predict_desc, .unlock_desc{
							width: 100%;
						}
						.unlock_desc{
							display: -webkit-box;
							-webkit-line-clamp: 2;
							overflow-wrap: break-word;
							-webkit-box-orient: vertical;
							overflow: hidden;
							text-overflow: ellipsis;
							line-height: 1.2;
						}
					}
				}
			}
		}
	}
</style>