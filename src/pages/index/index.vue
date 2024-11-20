<template>
	<Background>
		<view class="content p-4">
			<HeaderBannder />
			<SelectRadioCard v-model="selected" />
			<ButtonComponent type="purple" class="my-2 text-lg font-semibold relative" @tap.native="handleStart">立即开始测试
				<img :src="ArrowRightSvgIcon" class="h-6 w-6 ml-2">
				<img class="absolute bottom-0 right-6 h-[20px] w-[20px] animate-bounce [animation-delay:-1s]"
					:src="frog" alt="" srcset="" />
			</ButtonComponent>
			<MBTIAbout />
		</view>
	</Background>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import SelectRadioCard from "@/components/SelectRadioCard.vue"
	import HeaderBannder from "@/components/HeaderBannder.vue"
	import Background from "@/components/Background.vue"
	import ButtonComponent from "@/components/ButtonComponent.vue"
	import MBTIAbout from "@/components/MBTIAbout.vue"
	import ArrowRightSvgIcon from "@/assets/Icons/ArrowRightSvgIcon.svg"
	import frog from "@/assets/frog.svg"
	import { testType } from '@/consts';
	const selected = ref(testType.BASE)
	const handleStart = () => {
		console.log("click")
		uni.navigateTo({
			url: `/pages/measurement/index?type=${selected.value}`
		});
	}
</script>

<style>

</style>