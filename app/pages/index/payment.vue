<template>
	<view></view>
</template>

<script setup>
	let app = getApp()
	import { ref,onMounted } from 'vue'
	onMounted(()=>{
		initialize();
	})
	const initialize = async() => {
		uni.showLoading({title: "loading...",mask: true});
		app.get('to/createCheckoutSession', {}, function(res){
			console.log(res.data.url);
			window.location.href = res.data.url;
			setTimeout(()=>{uni.hideLoading()},1000);
		})
	}
</script>