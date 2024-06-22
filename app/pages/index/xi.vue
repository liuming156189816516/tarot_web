<template>
	<view class="guodu_contain">
		<view class="guodu_contain_title">
			<image class="" src="/static/image/title.png" mode=""></image>
		</view>

		<view class="index_kapai_list">
			<view class="index_kapai_list_type"
				:class="[`index_kapai_list_type_${item}`, `index_kapai_left_animate_${item}`]" v-for="item in 4">
				<image src="/static/image/kapai.png" mode="scaleToFill"></image>
			</view>
			<view class="index_kapai_list_type" :class="`index_kapai_left_animate_${item+9}`" v-for="item in 40" v-show="moreAnimate">
				<image src="/static/image/kapai.png" mode="scaleToFill"></image>
			</view>
			<view class="index_kapai_list_type" :class="[`index_kapai_list_type_5`]">
				<image src="/static/image/kapai.png" mode="scaleToFill"></image>
			</view>
			<view class="index_kapai_list_type"
				:class="[`index_kapai_list_type_${item+5}`, `index_kapai_left_animate_${item+5}`]" v-for="item in 4">
				<image src="/static/image/kapai.png" mode="scaleToFill"></image>
			</view>
		</view>
	</view>
	<!-- <view class="" style="height: 500rpx;">
		
	</view> -->

</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'

	const moreAnimate = ref(false)
	const animate1 = ref(false)
	onMounted(() => {
		setTimeout(() => {
			moreAnimate.value = true
		}, 1500)
		setTimeout(()=>{
			uni.redirectTo({
				url:'/pages/index/choupai'
			})
		},7000)
	})
</script>

<style lang="scss" scoped>
	image {
		width: 100%;
		height: 100%;
	}

	.guodu_contain {
		padding-top: 80rpx;
		min-height: 100vh;
		background: #FBE1D8 url(/static/image/bg.png) no-repeat top left / contain;
	}

	.guodu_contain_title {
		margin: 0 auto;
		width: 668rpx;
		height: 86rpx;
	}

	.index_kapai_list {
		position: relative;
		height: 500rpx;
		animation: xiayi_animate 1s 1.5s forwards;

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
			animation: xipai_5 2s 2.5s forwards, xipai_5 2s 4.5s forwards;

			@keyframes xipai_5 {
				0% {
					transform: translate(0, 0) rotate(0deg);
				}

				50% {
					transform-origin: center center;
					transform: translate(-100rpx, 100rpx) rotate(-30deg);
				}

				100% {
					transform: translate(0, 0) rotate(0deg);
				}
			}
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

	@keyframes xiayi_animate {
		0% {
			transform: translateY(0rpx) scale(1);
		}

		100% {
			transform: translateY(300rpx) scale(0.8);
		}
	}
	
	@for $i from 10 through 30 {
		@keyframes xipai_#{$i} {
			0% {
				transform: translate(0, 0)
			}
		
			50% {
				@if $i ==10 {
					transform-origin: bottom left;
					transform: translate(140rpx, 150rpx) rotate(40deg);
				}
				@if $i ==11 {
					transform-origin: bottom left;
					transform: translate(200rpx, 200rpx) rotate(-20deg);
				}
				@if $i ==12 {
					transform-origin: top left;
					transform: translate(-300rpx,-300rpx) rotate(60deg);
				}
				@if $i ==13 {
					transform-origin: top left;
					transform: translate(-200rpx,-300rpx) rotate(10deg);
				}
				@if $i ==14 {
					transform-origin: top left;
					transform: translate(-300rpx,-100rpx) rotate(30deg);
				}
				@if $i ==15 {
					transform-origin: top left;
					transform: translate(-200rpx,100rpx) rotate(20deg);
				}
				@if $i ==16 {
					transform-origin: top left;
					transform: translate(-100rpx,-350rpx) rotate(50deg);
				}
				@if $i ==17 {
					transform-origin: top left;
					transform: translate(-60rpx,350rpx) rotate(50deg);
				}
				@if $i ==18 {
					transform-origin: bottom right;
					transform: translate(300rpx,350rpx) rotate(-10deg);
				}
				@if $i ==19 {
					transform-origin: bottom right;
					transform: translate(200rpx,-250rpx) rotate(30deg);
				}
				@if $i ==20 {
					transform-origin: bottom right;
					transform: translate(-150rpx,-450rpx) rotate(120deg);
				}
				@if $i ==21 {
					transform-origin: bottom right;
					transform: translate(-150rpx,300rpx) rotate(120deg);
				}
				@if $i ==22 {
					transform-origin: bottom left;
					transform: translate(-250rpx,200rpx) rotate(-20deg);
				}
				@if $i ==25 {
					transform-origin: bottom left;
					transform: translate(250rpx,-20rpx) rotate(-20deg);
				}
				@if $i ==23 {
					transform-origin: top left;
					transform: translate(0rpx,200rpx) rotate(20deg);
				}
				@if $i ==24 {
					transform-origin: top left;
					transform: translate(500rpx,300rpx) rotate(45deg);
				}
			}
			100% {
				transform: translate(0, 0) rotate(0deg)
			}
		}
		
		.index_kapai_left_animate_#{$i} {
			animation: xipai_#{$i} 2s 1s forwards, xipai_#{$i} 2s 3s forwards,;
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

		@keyframes xipai_#{$i} {
			0% {
				transform: translate(0, 0)
			}

			50% {
				// @if $i ==1 {
				// 	transform-origin: bottom left;
				// 	transform: translate(40rpx, 50rpx) rotate(20deg);
				// }

				// @if $i ==2 {
				// 	transform-origin: bottom left;
				// 	transform: translate(-180rpx, -180rpx) rotate(30deg);
				// }

				// @if $i ==3 {
				// 	transform-origin: bottom right;
				// 	transform: translate(150rpx, -300rpx) rotate(-60deg);
				// }

				// @if $i ==4 {
				// 	transform-origin: 120rpx 300rpx;
				// 	transform: translate(0rpx, 20rpx) rotate(-40deg);
				// }
				
				@if $i ==1 {
					transform-origin: bottom left;
					transform: translate(140rpx, 150rpx) rotate(20deg);
				}
				
				@if $i ==2 {
					transform-origin: bottom left;
					transform: translate(280rpx, -200rpx) rotate(-30deg);
				}
				
				@if $i ==3 {
					transform-origin: bottom right;
					transform: translate(450rpx, -100rpx) rotate(-60deg);
				}
				@if $i ==4 {
					transform-origin: 120rpx 300rpx;
					transform: translate(-200rpx, 20rpx) rotate(-40deg);
				}
			}

			100% {
				transform: translate(0, 0) rotate(0deg)
			}
		}

		.index_kapai_left_animate_#{$i} {
			animation: kapaiLeft_#{$i} 1.5s forwards, xipai_#{$i} 2s 2.5s forwards, xipai_#{$i} 2s 4.5s forwards;
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

		@keyframes xipai_#{$i} {
			0% {
				transform: translate(0, 0)
			}

			50% {
				
				@if $i ==6 {
					transform-origin: bottom left;
					transform: translate(250rpx, -90rpx) rotate(30deg);
				}
				
				@if $i ==7 {
					transform-origin: bottom left;
					transform: translate(-100rpx, -140rpx) rotate(10deg);
				}
				
				@if $i ==8 {
					transform-origin: 120rpx 300rpx;
					transform: translate(-200rpx, 200rpx) rotate(-60deg);
				}
				
				@if $i ==9 {
					transform-origin: 120rpx 300rpx;
					transform: translate(-30rpx, 20rpx) rotate(-20deg);
				}
			}

			100% {
				transform: translate(0, 0) rotate(0deg)
			}
		}

		.index_kapai_left_animate_#{$i} {
			animation: kapaiLeft_#{$i} 1.5s forwards,
			xipai_#{$i} 2s 2.5s forwards, xipai_#{$i} 2s 4.5s forwards;
		}
	}




	.index_start-btn {
		width: 500rpx;
		height: 80rpx;
		background: #F09B76;
		margin: 0 auto;

	}
</style>