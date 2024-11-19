<template>
	<view class=" flex justify-center">
		<radio-group @change="radioChange">
			<view class="flex gap-1">
				<label
					class=" w-24 p-1 block rounded-2xl relative bg-gradient-to-bottpm from-[#c1ced6] to-[#57576e]">
					<view v-show="model === testType.BASE"
						class="h-4 w-4 rounded-full bg-yellow-400 absolute right-2 bottom-2">
						<CheckSvgIcon class="font-sm text-white" />
					</view>
					<view class="w-full h-full p-1 rounded-xl border bg-white flex flex-col items-center"
						:class="model === testType.BASE ? 'shadow-[0_0_0_6px_rgba(255,207,85,0.9)]' : ''">
						<BaseSvgIcon class="text-3xl" />
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
						class="h-4 w-4 rounded-full bg-yellow-400 absolute right-2 bottom-2">
						<CheckSvgIcon class="font-sm text-white" />
					</view>
					<view class="w-full h-full p-1  rounded-2xl bg-white flex flex-col items-center"
						:class="model === testType.STANDARD ? 'shadow-[0_0_0_6px_rgba(255,207,85,0.9)]' : ''">
						<StandardSvgIcon class="text-3xl" />
						<view class="font-semibold text-cyan-400">标准版</view>
						<view class="text-black/50">80题</view>
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
						class="h-4 w-4 rounded-full bg-yellow-400 absolute right-2 bottom-2">
						<CheckSvgIcon class="font-sm text-white" />
					</view>
					<view class="w-full h-full p-1 rounded-xl  bg-white flex flex-col items-center relative overflow-hidden"
						:class="model === testType.PRO ? 'shadow-[0_0_0_6px_rgba(255,207,85,0.9)]' : ''">
						<ProSvgIcon class="text-3xl" />
						<view class="font-semibold inline-flex items-center gap-1 text-[#ffa708]">专业版
							<StarSvgIcon class="text-yellow-300" />
						</view>
						<view class="text-black/50">200题</view>
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
	import CheckSvgIcon from "@/components/Icons/CheckSvgIcon.vue"
	import StarSvgIcon from "@/components/Icons/StarSvgIcon.vue"
	import BaseSvgIcon from "@/components/Icons/BaseSvgIcon.vue"
	import StandardSvgIcon from "@/components/Icons/StandardSvgIcon.vue"
	import ProSvgIcon from "@/components/Icons/ProSvgIcon.vue"


	const model = defineModel()
	const radioChange = (evt : any) => {
		model.value = evt.detail.value
	}
</script>