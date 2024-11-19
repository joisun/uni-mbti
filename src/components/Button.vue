<template>
	<view
		class="flex justify-center items-center text-center rounded-2xl  px-4 py-3 text-renter font-medium text-white"
		:class="buttonStyles[props.type]"
		>
		<slot />
	</view>
</template>

<script setup lang='ts'>
const props = defineProps(['type'])
const buttonStyles = {
	red:'bg-red-400/90',
	green:'bg-green-400/90',
	purple:'bg-gradient-to-bl from-[#c65bff]  via-[#7366e5]  to-[#e062ff]'
}

</script>

<style>
</style>