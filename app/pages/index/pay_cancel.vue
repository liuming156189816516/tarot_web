<template>
	<view class="success_main">
		<view class="head_title">payment result</view>
		<view>
			<img class="success_img" src="/static/image/fail_icon.png" alt="" srcset="" />
		</view>
		<view class="desc_tips">Payment failed！</view>
		<view class="order_warp">
			<!-- <view class="order_top"></view>
			<div class="order_detail">
				<h3 class="order_title">订单详情</h3>
				<view class="order_item">订单编号：1472583695555</view>
				<view class="order_item">下单时间：2024-06-25 14:45:26</view>
				<view class="order_item">支付方式：银行卡(0325)</view>
			</div> -->
			<button type="primary" plain="true" class="go_bank" @tap="$yx.route({url: '/pages/index/details?orderId=1'})">Re-order</button>
		</view>
	</view>
</template>

<script>
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
			width: 60px;
		}
		.desc_tips{
			font-size: 16px;
			font-weight: bold;
			margin-top: 20px;
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