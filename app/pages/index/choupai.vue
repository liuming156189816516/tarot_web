<template>
	<view class="index_contain yx-pb-60">
		<view class="index_contain_title">
			<image src="/static/image/title.png" mode=""></image>
		</view>

		<view class="index_kapai_list">
			<view :class="['index_kapai_list_type',`index_kapai_list_type-${item}`, chooseIndex.indexOf(item)!= -1 ?`index_kapai_sheng`:'']"
				:style="`left: ${(item * 4) - 2}%`" v-for="item in 20" v-show="timeNumber" @tap="yxClickNumberFn(item)">
				<image src="/static/image/kapai.png" mode="scaleToFill"></image>
			</view>
		</view>
		
		<view class="index_kapai_choose">
			<view class="index_kapai_choosed_type"
				:class="[clickNumber > index ? `index_kapai_choosed_active${index+1}` : '']" v-for="(item,index) in chooseList"
				:key="`kapai-${index}`">
				<image :src="item.path" mode=""></image>
			</view>
			<!-- 			<view class="index_kapai_choosed_type" :class="[clickNumber > 1 ? 'index_kapai_choosed_active2' : '']">
				<image src="https://1113.yx89.top/static/img/taluo/yunshi/images/5_1.jpg" mode=""></image>
			</view>
			<view class="index_kapai_choosed_type" :class="[clickNumber > 2 ? 'index_kapai_choosed_active3' : '']">
				<image src="https://1113.yx89.top/static/img/taluo/yunshi/images/2_0.jpg" mode=""></image>
			</view> -->

			<view class="index_kapai_choose_type">
				<view class="index_kapai_choose_type_image"></view>
			</view>
			<view class="index_kapai_choose_type1">
				<view class="index_kapai_choose_type_image"></view>
			</view>


			<view class="index_kapai_choose_type2">
				<view class="index_kapai_choose_type_image"></view>
			</view>
			<view class="index_kapai_test yx-flex-col-center-center yx-fw-bold yx-fsize-22" style="color: #B17F54;">
				<view class="">
					Is he/she the right
				</view>
				<view class="">
					person for me
				</view>
			</view>
			<view class="index_kapai_test1 yx-flex-col-center-center yx-fw-bold yx-fsize-22" style="color: #B17F54;">
				<view class="">
					Is it possible for us
				</view>
				<view class="">
					to get back together
				</view>
			</view>
			<view class="index_kapai_test2  yx-flex-col-center-center yx-fw-bold yx-fsize-22" style="color: #B17F54;">
				<view class="">
					What will happen when
				</view>
				<view class="">
					we get back together
				</view>
			</view>
			<!-- <image src="/static/" mode=""></image> -->
			<!-- <view class="index_kapai_choose_type yx-flex-col-center-center ">
				<view class="index_kapai_choose_type_image kapai_1">

				</view>
				<view class="index_kapai_choose_type_text yx-flex-col-center-center yx-fw-bold yx-fsize-22 yx-mt-20"
					style="color: #B17F54;">
					<view class="">
						Is he/she the right
					</view>
					<view class="">
						person for me
					</view>
				</view>
			</view> -->
			<!-- <view class="index_kapai_choose_type1 yx-flex-col-center-center kapai_2">
				<view class="index_kapai_choose_type_image">

				</view>
				<view class="index_kapai_choose_type_text yx-flex-col-center-center yx-fw-bold yx-fsize-22 yx-mt-20"
					style="color: #B17F54;">
					<view class="">
						Is it possible for us
					</view>
					<view class="">
						to get back together
					</view>
				</view>
			</view> -->
			<!-- <view class="index_kapai_choose_type2 yx-flex-col-center-center">
				<view class="index_kapai_choose_type_image">

				</view>
				<view class="index_kapai_choose_type_text yx-flex-col-center-center yx-fw-bold yx-fsize-22 yx-mt-20"
					style="color: #B17F54;">
					<view class="">
						What will happen when
					</view>
					<view class="">
						we get back together
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script setup>
	import { ref, onMounted, Transition } from 'vue'
	import { kapaiData } from '../js/data.js'
	
	const app = getApp()
	const animateStart = ref(false)
	const chooseList = ref([])
	const timeNumber = ref(0)
	const timer = ref(null)
	onMounted(() => {
		// getTarotList();
		timer.value = setInterval(() => {
			timeNumber.value += 1
			if (timeNumber.value > 20) {
				clearInterval(timer.value)
				timer.value = null
				isLoading.value = false
			}
		}, 80)

		for (let i = 0; i < 3; i++) {
			const randomInteger = Math.floor(Math.random() * 10)
			chooseList.value = [...chooseList.value,kapaiData[randomInteger]]
		}
		uni.setStorageSync('kapai_list', chooseList.value)
	})

	const clickNumber = ref(0)
	const isLoading = ref(true)
	const chooseIndex = ref([])
	const getTarotList = (index) => {
		app.get('tc/getTarotCardList', {}, function(res){
			console.log(res);
			// 处理支付
		})
	}
	const yxClickNumberFn = (index) => {
		if (isLoading.value) return
		chooseIndex.value.push(index)
		isLoading.value = true
		clickNumber.value += 1
		setTimeout(() => {
			isLoading.value = false
			if (clickNumber.value == 3) {
				uni.redirectTo({
					url: '/pages/index/start_watch'
				})
			}
		}, 3000)
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

	.index_kapai_choosed_type {
		width: 150rpx;
		height: 260rpx;
		opacity: 0;

		>image {
			width: 100%;
			height: 100%;
		}
	}

	.index_kapai_choosed_active1 {
		position: absolute;
		width: 150rpx;
		height: 260rpx;
		z-index: 9;
		opacity: 0;
		@keyframes choosed_active1 {
			0% {
				left: 50%;
				top: 50rpx;
				opacity: 1;
				transform: translate(-50%, -1000rpx) scale(0.1);
			}

			75% {
				left: 50%;
				top: 50rpx;
				opacity: 1;
				transform: translate(-50%, -50%) scale(1.8);
			}

			100% {
				left: 275rpx;
				top: 50rpx;
				transform: translate(0, 0) scale(1);
				opacity: 1;
			}
		}

		animation:choosed_active1 2s 0.5s forwards;
	}

	.index_kapai_choosed_active2 {
		position: absolute;
		width: 150rpx;
		height: 260rpx;
		z-index: 9;
		opacity: 0;


		@keyframes choosed_active2 {
			0% {
				left: 50%;
				top: 50rpx;
				opacity: 1;
				transform: translate(-50%, -1000rpx) scale(0.1);
			}

			75% {
				left: 50%;
				top: 50rpx;
				opacity: 1;
				transform: translate(-50%, -50%) scale(1.8);
			}

			100% {
				left: 70rpx;
				top: 320rpx;
				transform: translate(0, 0) scale(1);
				opacity: 1;
			}
		}

		animation:choosed_active2 2s 0.5s forwards;
	}

	.index_kapai_choosed_active3 {
		position: absolute;
		width: 150rpx;
		height: 260rpx;
		z-index: 9;
		opacity: 0;
		@keyframes choosed_active3 {
			0% {
				left: 50%;
				top: 50rpx;
				opacity: 1;
				transform: translate(-50%, -1000rpx) scale(0.1);
			}
			75% {
				left: 50%;
				top: 50rpx;
				opacity: 1;
				transform: translate(-50%, -50%) scale(1.8);
			}
			100% {
				left: 490rpx;
				top: 320rpx;
				transform: translate(0, 0) scale(1);
				opacity: 1;
			}
		}
		animation:choosed_active3 2s 0.5s forwards;
	}

	.index_kapai_sheng {
		@keyframes kapai_shangshen {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(-500rpx)
			}
		}
		animation: kapai_shangshen 0.7s forwards;
	}

	.index_kapai_list {
		position: relative;
		height: 360rpx;

		.index_kapai_list_type {
			position: absolute;
			top: 60rpx;
			width: 150rpx;
			height: 260rpx;
			opacity: 1;

			@keyframes jianbian {
				0% {
					opacity: 0;
				}

				100% {
					opacity: 1;
				}
			}

			>image {
				width: 100%;
				height: 100%;
			}
		}
	}




	.index_start-btn {
		width: 500rpx;
		height: 80rpx;
		background: #F09B76;
		margin: 0 auto;

	}

	.index_kapai_choose {
		position: relative;
		width: 700rpx;
		height: 716rpx;
		margin: 0 auto;
		background: url(/static/image/diwen.png) no-repeat;
		background-size: 100% 100%;

		.index_kapai_choose_type_image {
			width: 150rpx;
			height: 260rpx;
			background: #F8D1B8;
			border: 1rpx solid #EDC7A9;
			border-radius: 10rpx;
		}

		.index_kapai_choose_type {
			position: absolute;
			left: 275rpx;
			top: 50rpx;
			// width: 230rpx;
			// transform: translateX(-50%);
		}

		.index_kapai_choose_type1 {
			position: absolute;
			left: 70rpx;
			top: 320rpx;
			// width: 260rpx;
		}

		.index_kapai_choose_type2 {
			position: absolute;
			left: 490rpx;
			top: 320rpx;
		}

		.index_kapai_test {
			position: absolute;
			left: 220rpx;
			top: 320rpx;
			width: 260rpx;
		}

		.index_kapai_test1 {
			position: absolute;
			left: 20rpx;
			top: 590rpx;
			width: 260rpx;
		}

		.index_kapai_test2 {
			position: absolute;
			left: 410rpx;
			top: 590rpx;
			width: 300rpx;
		}
	}
</style>