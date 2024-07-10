<template>
	<view class="index_contain">
		<view class="index_contain_title">
			<image :src="`/static/image/${langIdx}_h.png`" mode=""></image>
		</view>
		<div class="l_value" @click="showChangeBtn" @click.stop>
			<span>{{ viewLang() }}</span>
			<img class="down_icon" src="/static/image/xiala.png">
			<uni-transition mode-class="fade" :show="isIndex">
				<div class="down_list" :class="isIndex?'active_open':'active_close'">
					<p v-for="item in langOptions" :key="item.lang" :style="langIdx==item.lang?'color:#07c160;':''" @click="onChangeType(item)">{{item.name}}</p>
				</div>
			</uni-transition>
		</div>
		
		<view class="index_kapai_list">
			<view class="index_kapai_list_type" :class="[`index_kapai_list_type_${item}`, animateStart ? `index_kapai_left_animate_${item}`:'']" v-for="(item,idx) in 4" :key="idx">
				<image src="/static/image/kapai.png" mode="scaleToFill"></image>
			</view>
			<view class="index_kapai_list_type" :class="`index_kapai_list_type_5`">
				<image src="/static/image/kapai.png" mode="scaleToFill"></image>
			</view>
			<view class="index_kapai_list_type"
				:class="[`index_kapai_list_type_${item+5}`, animateStart ? `index_kapai_left_animate_${item+5}`:'']" v-for="item in 4">
				<image src="/static/image/kapai.png" mode="scaleToFill"></image>
			</view>
		</view>

		<view class="yx-flex-col-center-center yx-fsize-28" style="color: #C2926F">
			<view class="">
				{{$tm('h_001')}}
			</view>
			<view class="yx-mt-6">
				{{$tm('h_002')}}
			</view>
			<view class="yx-mt-6">
				{{$tm('h_003')}}
			</view>
			<view class="yx-mt-6">
				{{$tm('h_004')}}
			</view>
		</view>

		<view class="index_contain_btn yx-mt-40" @tap="$yx.route({url: '/pages/index/guodu'})">
			<image :src="`/static/image/${langIdx}_btn1.png`" mode=""></image>
		</view>

		<!-- <view class="yx-flex-row-center-center yx-fsize-28 yx-mt-20" style="color:#F19E79">
			<text>View historical orders</text>
			<image class="yx-w-23 yx-h-18 yx-ml-4" src="/static/image/you.png" mode=""></image>
		</view> -->
	</view>
</template>

<script setup>
	import { ref,onMounted } from 'vue'
	import { useI18n } from 'vue-i18n';
	import { onLoad } from '@dcloudio/uni-app';
	let isIndex = ref(false)
	let langIdx = ref('en')
	const { locale } = useI18n()
	const animateStart = ref(false)
	const langOptions = ref([
		{lang:"en",name:"en-US"},
		{lang:"th",name:"Thai"},
		{lang:"vn",name:"Việt Nam"}
	])
	onLoad((options) => {
		uni.removeStorageSync("couuent_code")
		langIdx.value = uni.getStorageSync("language")||'en';
		locale.value = langIdx.value;
	})
	onMounted(() => {
		initCity();
	})
	const showChangeBtn = ()=>{
		isIndex.value = !isIndex.value;
	}
	const onChangeType = (row)=>{
		locale.value = row.lang;
		langIdx.value = row.lang;
		uni.setStorageSync("language",row.lang);
	}
	const viewLang = ()=>{
		let lang = langOptions.value.find(item=>item.lang == langIdx.value);
		return lang.name
	}
	const initCity = ()=>{
		uni.request({
		    url: 'https://api.ip.sb/geoip', //仅为示例，并非真实接口地址。
		    success: (res) => {
				const {data:{continent_code}} = res;
				uni.setStorageSync('couuent_code',continent_code)
		    }
		});
	}
</script>

<style lang="scss" scoped>
	image {
		width: 100%;
		height: 100%;
	}

	.index_contain {
		padding-top: 80rpx;
		min-height: 100vh;
		background: #FBE1D8 url(/static/image/bg.png) no-repeat top left / contain;
	}

	.index_contain_title {
		margin: 0 auto;
		width: 668rpx;
		height: 86rpx;
	}

	.index_contain_btn {
		width: 535rpx;
		height: 103rpx;
		margin: 0 auto;
	}

	.index_kapai_list {
		position: relative;
		height: 500rpx;

		.index_kapai_list_type {
			position: absolute;
			top: 100rpx;
			left: 50%;
			margin-left: -75rpx;
			width: 150rpx;
			height: 260rpx;
			transform-origin: 120rpx 600rpx;

			>image {
				width: 100%;
				height: 100%;
			}
		}

		.index_kapai_list_type_5 {
			transform: rotate(0deg);
			z-index: 9;
		}

		@for $i from 1 through 4 {
			.index_kapai_list_type_#{$i} {
				transform: rotate((7deg * $i) - 33deg) translateY((6rpx * $i) - 30rpx);
			}
		}

		@for $i from 6 through 9 {
			.index_kapai_list_type_#{$i} {
				transform: rotate((7deg * ($i - 5)) - 2deg) translateY(6rpx * ($i - 5));
				z-index: -$i + 9;
			}
		}
	}



	@for $i from 1 through 4 {
		@keyframes kapaiLeft_#{$i} {
			0% {
				transform: rotate((7deg * $i) - 33deg) translateY((6rpx * $i) - 30rpx);
			}

			100% {
				transform: rotate(0deg) translateY(0rpx);
			}
		}

		.index_kapai_left_animate_#{$i} {
			animation: kapaiLeft_#{$i} 1s;
		}
	}

	@for $i from 6 through 9 {
		@keyframes kapaiLeft_#{$i} {
			0% {
				transform: rotate((7deg * ($i - 5)) - 2deg) translateY(6rpx * ($i - 5));
			}

			100% {
				transform: rotate(0deg) translateY(0rpx);
			}
		}

		.index_kapai_left_animate_#{$i} {
			animation: kapaiLeft_#{$i} 1s;
		}
	}



	.index_start-btn {
		width: 500rpx;
		height: 80rpx;
		background: #F09B76;
		margin: 0 auto;

	}
	.l_value{
		display: flex;
		padding: 0 35rpx;
		position: relative;
		align-items: center;
		position: absolute;
		top: 20px;
		right: 30rpx;
		z-index: 99;
		// background-color: darkblue;
		span{
			width: 100%;
			flex-grow: 1;
			color: #000;
			font-size: 16px;
			border-radius: 8px;
		}
		.down_icon{
			display: flex;
			width: 16px;
			margin-left: 20rpx;
		}
		.down_list{
			width: max-content;
			height: max-content;
			position: absolute;
			left: 0;
			top: 30px;
			z-index: 10;
			font-size: 14px;
			padding: 16rpx 40rpx;
			border-radius: 8px;
			box-sizing: border-box;
			color: #000;
			background-color: #fff;
			p{
				padding: 10rpx 0;
				border-bottom: 1px solid #ebedf0;
			}
			p:last-child{
				border: none;
			}
		}
		.down_list:before {
			content: "";
			display: block;
			position: absolute;
			width:0;
			height: 0;
			border: 10px solid transparent;
			border-bottom-color: #fff;
			left: 50px;
			top: -20px;
		}
		.active_open{
			display: block;
			transition: all .2s;
			// animation: slide-down .2s ease-in;
			transition: .2s ease-in;
			transform-origin: 50% 0;
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		}
		.active_close{
			display: none;
			transition: all .5s;
			animation: select-close .5s ease-in;
			transition: .3s ease-in;
			transform-origin: 50% 0;
		}
		@keyframes slide-down{
			0%{transform: scale(1,.5)}
			100%{transform: scale(1,1)}
		}
	}
</style>