<template>
	<view class="index_contain">
		<view class="custom_head">
			<image class="bank_icon" src="/static/image/you1.png" @tap="$yx.route({url:`/pages/index/choupai`})"></image>
			<text class="title_desc">{{$tm('h_012')}}</text>
		</view>
		<view class="index_contain_title">
			<image :src="`/static/image/${langIdx}_draw.png`" mode=""></image>
		</view>

		<view class="index_kapai_choose">
			<view class="" :class="`index_kapai_choose_type${index}`" v-for="(item,index) in kapaiList" :key="`kapai_${index}`">
				<view class="index_kapai_choose_type_image">
					<image :src="item.picture" mode=""></image>
				</view>
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


		<view class="index_choose_gender yx-bg-white yx-m-x-60">
			<view class="yx-flex-row-spaceB-center">
				<view class="yx-fsize-30">{{$tm('h_013')}}</view>
				<view class="yx-flex-row-start-center yx-ml-60">
					<view class="yx-flex-row-start-center" v-for="(item,idx) in ganderOption" :key="idx" @tap="changeGander(idx)" v-show="idx!=0">
						<view class="index_choose_btn yx-w-30 yx-h-30 yx-rounded-c" :class="genderVal == idx ? 'index_choose_active_btn':''" />
						<text class="yx-text-666 yx-ml-10">{{item}}</text>
					</view>
					<!-- <view class="yx-flex-row-start-center yx-ml-60">
						<view class="index_choose_btn  yx-w-30 yx-h-30 yx-rounded-c" :class="genderVal == 'mate' ? 'index_choose_active_btn':''" @tap="genderVal = 'mate'" />
						<text class="yx-text-666 yx-ml-10">mate</text>
					</view> -->
				</view>
			</view>
			
			<view class="index_choose_gender_btn" @tap="startDecryptClickFn">
				<image :src="`/static/image/${langIdx}_dec.png`" mode=""></image>
			</view>
		</view>

	</view>
</template>

<script setup>
	import { onMounted, ref, computed } from 'vue'
	import { useI18n } from 'vue-i18n';
	const { tm } = useI18n();
	const app = getApp()
	const genderVal = ref(1)
	const kapaiList = ref([])
	let langIdx = ref('en')
	const animateStart = ref(false)
	const ganderOption = computed(() => {
	    return ["",tm('h_014'),tm('h_015')];
	});
	onMounted(() => {
		kapaiList.value = uni.getStorageSync('kapai_list');
		langIdx.value = uni.getStorageSync("language")||'en';
	})
	const changeGander = (val) => {
		genderVal.value = val;
	}
	const startDecryptClickFn = () => {
		uni.navigateTo({url: `/pages/index/details?gender=${genderVal.value}`})
	}
</script>

<style lang="scss" scoped>
	image {
		width: 100%;
		height: 100%;
	}

	.index_contain {
		min-height: 100vh;
		background: #FBE1D8 url(/static/image/bg.png) no-repeat top left / contain;
	}

	.index_contain_title {
		margin: 0 auto;
		width: 628rpx;
		height: 44rpx;
		margin-top: 30rpx;
	}

	.index_kapai_choose {
		position: relative;
		width: 700rpx;
		height: 716rpx;
		margin: 60rpx auto 0;
		background: url(/static/image/diwen.png) no-repeat;
		background-size: 100% 100%;

		.index_kapai_choose_type_image {
			width: 150rpx;
			height: 260rpx;
			background: #F8D1B8;
			border: 1rpx solid #EDC7A9;
			border-radius: 10rpx;
		}

		.index_kapai_choose_type0 {
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

	.index_choose_btn {
		border: 1rpx solid #D66567;
	}

	.index_choose_active_btn {
		background: #D66567;
	}

	.index_choose_gender {
		position: relative;
		padding: 30rpx 30rpx 90rpx;
		border-radius: 20rpx;

		.index_choose_gender_btn {
			width: 535rpx;
			height: 103rpx;
			position: absolute;
			left: 50%;
			bottom: -40rpx;
			transform: translateX(-50%);
		}
	}
	.yx-flex-row-start-center:nth-child(3){
		margin-left: 60rpx;
	}
</style>