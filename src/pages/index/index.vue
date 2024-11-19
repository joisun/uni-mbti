<template>
	<Background>
		<view class="content p-4">
			<HeaderBannder />
			<SelectRadioCard v-model="selected" />
			<Button type="purple" class="my-2 text-lg font-semibold relative" @click="handleStart">立即开始测试 <ArrowRightSvgIcon class="text-2xl ml-2"/>
			<img class="absolute bottom-0 right-6 h-6 animate-bounce [animation-delay:-1s]" :src="frog" alt="" srcset="" />
			</Button>
			<MBTIAbout/>
		</view>
	</Background>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import SelectRadioCard from "@/components/SelectRadioCard.vue"
	import HeaderBannder from "@/components/HeaderBannder.vue"
	import Background from "@/components/Background.vue"
	import Button from "@/components/Button.vue"
	import MBTIAbout from "@/components/MBTIAbout.vue"
	import ArrowRightSvgIcon from "@/components/Icons/ArrowRightSvgIcon.vue"
	import frog from "@/assets/frog.svg"
	import { testType } from '@/consts';
	const selected = ref(testType.BASE)
	const handleStart = ()=>{
		console.log("click")
		uni.navigateTo({
			url: `/pages/measurement/index?type=${selected.value}`
		});
	}
</script>

<style>

</style>