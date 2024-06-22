<template>
	<view class="index_contain">
		<view class="index_contain_title">
			<image class="" src="/static/image/title.png" mode=""></image>
		</view>

		<view class="index_kapai_list">
			<view class="index_kapai_list_type"
				:class="[`index_kapai_list_type_${item}`, animateStart ? `index_kapai_left_animate_${item}`:'']"
				v-for="item in 4">
				<image src="/static/image/kapai.png" mode="scaleToFill"></image>
			</view>
			<view class="index_kapai_list_type" :class="`index_kapai_list_type_5`">
				<image src="/static/image/kapai.png" mode="scaleToFill"></image>
			</view>
			<view class="index_kapai_list_type"
				:class="[`index_kapai_list_type_${item+5}`, animateStart ? `index_kapai_left_animate_${item+5}`:'']"
				v-for="item in 4">
				<image src="/static/image/kapai.png" mode="scaleToFill"></image>
			</view>
		</view>

		<view class="yx-flex-col-center-center yx-fsize-28" style="color: #C2926F">
			<view class="">
				Don't think about anything. Then, start
			</view>
			<view class="yx-mt-6">
				toobey your own will, listen to your inner voice.
			</view>
			<view class="yx-mt-6">
				At the same time, meditate on your ownproblems,
			</view>
			<view class="yx-mt-6">
				and pass it to each cardthrough your spirit.
			</view>
		</view>

		<view class="index_contain_btn yx-mt-40" @tap="$yx.route({url: '/pages/index/guodu'})">
			<image src="/static/image/btn.png" mode=""></image>
		</view>

		<!-- <view class="yx-flex-row-center-center yx-fsize-28 yx-mt-20" style="color:#F19E79">
			<text>View historical orders</text>
			<image class="yx-w-23 yx-h-18 yx-ml-4" src="/static/image/you.png" mode=""></image>
		</view> -->
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const animateStart = ref(false)
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
</style>