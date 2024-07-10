<template>
	<view class="custom_head">
		<image class="bank_icon" src="/static/image/you1.png" @tap="$yx.route({url:`/`})"></image>
		<text class="title_desc">{{$tm('h_006')}}</text>
	</view>
	<view class="index_contain yx-pb-60">
		<view class="index_contain_title">
			<image :src="`/static/image/${langIdx}_h.png`" mode=""></image>
		</view>
		<view class="index_kapai_list">
			<view :class="['index_kapai_list_type', chooseIndex.indexOf(item.card_id)!= -1 ?`index_kapai_sheng`:'']" :style="`left: ${((idx+1) * 4) - 2}%`" v-for="(item,idx) in allCardList" @click="yxClickNumberFn(item)">
				<image src="/static/image/kapai.png" mode="scaleToFill"></image>
			</view>
		</view>
		
		<view class="index_kapai_choose">
			<view class="index_kapai_choosed_type" :class="[clickNumber > index ? `index_kapai_choosed_active${index+1}` : '']" v-for="(item,index) in chooseList" :key="`kapai-${index}`">
				<image :src="item.picture" mode=""></image>
			</view>
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
					{{$tm('h_007')}}
				</view>
				<view class="">
					{{$tm('h_008')}}
				</view>
			</view>
			<view class="index_kapai_test1 yx-flex-col-center-center yx-fw-bold yx-fsize-22" style="color: #B17F54;">
				<view class="">
					{{$tm('h_009')}}
				</view>
				<view class="">
					{{$tm('h_010')}}
				</view>
			</view>
			<view class="index_kapai_test2  yx-flex-col-center-center yx-fw-bold yx-fsize-22" style="color: #B17F54;">
				<view class="">
					{{$tm('h_011')}}
				</view>
				<view class="">
					{{$tm('h_012')}}
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref, onMounted, Transition } from 'vue'
	import { onLoad } from '@dcloudio/uni-app';
	
	const app = getApp()
	let langIdx = ref('en')
	const animateStart = ref(false)
	const chooseList = ref([])
	const timeNumber = ref(0)
	const timer = ref(null)
	const allCardList = ref([])
	const clickNumber = ref(0)
	const isLoading = ref(false)
	const chooseIndex = ref([])
	onLoad(async () => {
		getTarotList();
		langIdx.value = uni.getStorageSync("language")||'en';
	})
	const getTarotList = () => {
		app.get('tc/getTarotCardList', {}, function(res){
			allCardList.value = res.data||[];
		})
	}
	
	const yxClickNumberFn = (row) => {
		if (isLoading.value) return;
		isLoading.value = true;
		clickNumber.value += 1;
		chooseIndex.value.push(row.card_id);
		let obj = {...row,picture:'/static/kapai/'+row.picture}
		chooseList.value = [...chooseList.value,obj];
		setTimeout(() => {
			isLoading.value = false;
			if (clickNumber.value == 3) {
				isLoading.value = true;
				uni.setStorageSync('kapai_list',chooseList.value)
				uni.redirectTo({url: `/pages/index/start_watch?id=${String(chooseIndex.value)}`})
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
				transform: translateY(-600rpx)
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
