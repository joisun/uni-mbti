<template>
	<view class="my-2 flex justify-center">
		<radio-group @change="radioChange">
			<view class="flex gap-1">
				<label class=" w-24 p-1 block rounded-2xl relative bg-gradient-to-bottpm from-[#c1ced6] to-[#57576e]">
					<view v-show="model === testType.BASE"
						class="h-4 w-4 flex justify-center items-center rounded-full bg-yellow-400 absolute right-2 bottom-2">
						<img :src="CheckSvgIcon " alt="" class="w-10 h-10"/>
					</view>
					<view class="w-full h-full p-1 rounded-xl border bg-white flex flex-col items-center"
						:class="model === testType.BASE ? 'shadow-outline' : ''">
						<!-- <BaseSvgIcon class="text-3xl" /> -->
						<img :src="BaseSvgIcon" alt="" class="w-10 h-10"/>
						<view class="font-semibold text-black/70">基础版</view>
						<view class="text-black/50">50题</view>
						<view class="text-xs text-black/80 mt-2 text-center font-thin">
							快速了解MBTI类型，适合想要快速自测的用户
						</view>
					</view>
					<radio class="hidden" :value="testType.BASE" :checked="model === testType.BASE" />
				</label>
				<label class=" w-28 p-1  block rounded-2xl relative">
					<view v-show="model === testType.STANDARD"
						class="h-4 w-4 flex justify-center items-center rounded-full bg-yellow-400 absolute right-2 bottom-2">
						<img :src="CheckSvgIcon " alt="" class="w-10 h-10"/>
					</view>
					<view class="w-full h-full p-1  rounded-2xl bg-white flex flex-col items-center"
						:class="model === testType.STANDARD ? 'shadow-outline' : ''">
						<img :src="StandardSvgIcon" alt="" class="w-10 h-10" />
						<!-- <StandardSvgIcon class="text-3xl" /> -->
						<view class="font-semibold text-cyan-400">标准版</view>
						<view class="text-black/50">90题</view>
						<view class="text-xs text-black/80 mt-2 text-center font-thin">
							提供更细致的性格分析，适合希望更深入了解自己的人
						</view>
					</view>
					<radio class="hidden" :value="testType.STANDARD" :checked="model===testType.STANDARD" />
				</label>
				<!-- </view> -->
				<!-- <view class="right"> -->
				<label class=" w-32 p-1  block rounded-2xl relative">
					<view v-show="model === testType.PRO"
						class="h-4 w-4 flex justify-center items-center rounded-full bg-yellow-400 absolute right-2 bottom-2">
						<img :src="CheckSvgIcon " alt="" class="w-10 h-10"/>
					</view>
					<view
						class="w-full h-full p-1 rounded-xl  bg-white flex flex-col items-center  overflow-hidden"
						:class="model === testType.PRO ? 'shadow-outline' : ''">
						<img :src="ProSvgIcon" alt="" class="w-10 h-10"/>
						<view class="font-semibold inline-flex items-center gap-1 text-[#ffa708]">专业版
							<img :src="StarSvgIcon" alt="" class="w-4 h-4"/>
						</view>
						<view class="text-black/50">210题</view>
						<view class="text-xs text-black/80 mt-2 text-center font-thin">
							深入全面的性格评估，适合个人发展、职业规划和心理研究等领域
						</view>
					</view>
					<radio class="hidden" :value="testType.PRO" :checked="model===testType.PRO" />
				</label>
			</view>
		</radio-group>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { testType } from '@/consts';

	import BaseSvgIcon from "@/assets/Icons/base.svg"
	import StandardSvgIcon from "@/assets/Icons/standard.svg"
	import ProSvgIcon from "@/assets/Icons/pro.svg"
	import CheckSvgIcon from "@/assets/Icons/CheckSvgIcon.svg"
	import StarSvgIcon from "@/assets/Icons/StarSvgIcon.svg"
	
	// import BaseSvgIcon from "@/components/Icons/BaseSvgIcon.vue"



	const model = defineModel()
	const radioChange = (evt : any) => {
		model.value = evt.detail.value
	}
</script>
<style>
	/* 小程序不编译内联tailwind写法 */
	.shadow-outline {
		--tw-shadow: 0 0 0 6px rgba(255, 207, 85, 0.9);
		--tw-shadow-colored: 0 0 0 6px var(--tw-shadow-color);
		box-shadow: 0 0 #0000, 0 0 #0000, 0 0 0 6px rgb(255 207 85 / 90%);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
	}
</style>