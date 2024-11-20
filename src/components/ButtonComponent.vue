<template>
	<view
		class="my-2 flex justify-center items-center text-center rounded-2xl  px-4 py-3 text-renter font-medium text-white active:text-white relative"
		:class="{
			'bg-red-400/90': props.type === 'red',
			'bg-green-400/90': props.type === 'green',
			'bg-gradient-to-bl from-[#c65bff]  via-[#7366e5]  to-[#e062ff]' :props.type === 'purple',
		}">
		<slot />
	</view>
	<!-- 编译结果异常 -->
	<!-- <view class="flex justify-center items-center text-center rounded-2xl  px-4 py-3 text-renter font-medium text-white active:text-white"
		:class="buttonStyles[props.type]">
		<slot />
	</view> -->
</template>

<script setup lang='ts'>
	const props = defineProps(['type'])
	const buttonStyles = {
		red: 'bg-red-400/90',
		green: 'bg-green-400/90',
		purple: 'bg-gradient-to-bl from-[#c65bff]  via-[#7366e5]  to-[#e062ff]'
	}
</script>

<style>
</style>