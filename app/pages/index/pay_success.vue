<template>
	<view class="success_main">
		<view class="head_title">{{$tm('h_029')}}</view>
		<view>
			<img class="success_img" src="/static/image/success_icon.png" alt="" srcset="" />
		</view>
		<view class="desc_tips">{{$tm('h_030')}}</view>
		<view class="order_warp">
			<!-- <view class="order_top"></view> -->
			<!-- <div class="order_detail">
				<h3 class="order_title">order details</h3>
				<view class="order_item">order number：1472583695555</view>
				<view class="order_item">order time：2024-06-25 14:45:26</view>
				<view class="order_item">payment method：银行卡(0325)</view>
			</div> -->
			<button class="go_bank" type="primary" plain="true" @click="back_page">{{$tm('h_031')}}</button>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	import { onLoad } from '@dcloudio/uni-app';
	let pay_id = ref("");
	onLoad((options) => {
		if(options.ID){
			pay_id.value = options.ID;
		}
	})
	const back_page = ()=>{
		uni.navigateTo({url:`/pages/index/details?order_id=${pay_id.value}`})
	}
</script>

<style lang="scss" scoped>
	.success_main{
		display: flex;
		align-items: center;
		flex-direction: column;
		.head_title{
			display: flex;
			height: 44px;
			font-size: 16px;
			font-weight: bold;
			align-items: center;
			margin-bottom: 10%;
		}
		.success_img{
			width: 100px;
		}
		.desc_tips{
			width: 100%;
			display: flex;
			font-size: 16px;
			font-weight: bold;
			align-items: center;
			justify-content: center;
		}
		.order_warp{
			width: 100%;
			padding: 0 30px;
			box-sizing: border-box;
			.order_top{
				width: 100%;
				height: 8px;
				margin-top: 30px;
				// border-radius: 8px;
				background: #d3d4d6;
				border-top-left-radius: 4px;
				border-top-right-radius: 4px;
			}
			.order_detail{
				width: 100%;
				padding: 10px 20px;
				box-sizing: border-box;
				box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
				border-bottom-left-radius: 8px;
				border-bottom-right-radius: 8px;
				.order_title{
					line-height: 2.5;
					border-bottom: 1px dotted #d3d4d6;
				}
				.order_item{
					line-height: 2.5;
				}
			}
		}
		.go_bank{
			display: flex;
			width: max-content;
			height: 44px;
			padding-top: 0;
			padding-bottom: 0;
			align-items: center;
			font-size: 14px;
			margin-top: 30px;
		}
		uni-button:after{
			border: none !important;
		}
	}
</style>