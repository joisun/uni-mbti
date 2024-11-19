<template>
	<Background>
		<view class="p-4 ">
			<view
				class="p-2 bg-no-repeat bg-center bg-cover gap-1 flex justify-center items-center bg-white/20 rounded-2xl"
				:style="{backgroundImage:`url(${banner3})`}">
				<!-- 角色图片 -->
				<view
					class="left rounded-full p-2 bg-gradient-to-br from-white to-transparent flex shrink-0 justify-center items-center">
					<img class="h-28" :src="targetType?.src" alt="" />
				</view>
				<!-- 描述名 charactor -->
				<view class="right flex flex-col items-start">
					<view class="font-semibold text-3xl text-white text-center">{{preferences?.MBTI_Type}} </view>
					<view class="text-lg font-thin text-white text-center">{{targetType?.charactor}} </view>
					<view class="text text-white font-thin">{{targetType?.summary}}</view>
				</view>
			</view>

			<view
				class="p-2 mt-2  rounded-2xl text-xs font-thin flex flex-col gap-1 bg-gradient-to-bl from-[#b553e8]/60  via-[#7366e5]/30  to-[#bf2df2]/80">
				<view class="font-semibold text-lg text-white relative flex items-center">
					<view class="w-[4px] h-[1em] rounded-2xl border bg-white mr-2 ml-1"></view>
					<text class="">维度说明</text>
				</view>
				<view
					class="underline decoration-dashed decoration-sky-300 underline-offset-4 rounded-lg px-2 py-1 whitespace-nowrap  text-white">
					外向(Extraversion, E) vs 内向(Introversion, I):<text class="font-medium ml-2">
						{{preferences?.E_I}}</text>
				</view>
				<view
					class="underline decoration-dashed decoration-sky-300 underline-offset-4 rounded-lg px-2 py-1 whitespace-nowrap  text-white">
					感知(Sensing, S) vs 直觉(Intuition, N):<text class="font-medium ml-2"> {{preferences?.S_N}}</text>
				</view>
				<view
					class="underline decoration-dashed decoration-sky-300 underline-offset-4 rounded-lg px-2 py-1 whitespace-nowrap  text-white">
					思考(Thinking, T)vs 情感(Feeling, F): <text class="font-medium ml-2"> {{preferences?.T_F}}</text>
				</view>
				<view
					class="underline decoration-dashed decoration-sky-300 underline-offset-4 rounded-lg px-2 py-1 whitespace-nowrap  text-white">
					判断(Judging, J) vs 感知(Perceiving, P): <text class="font-medium ml-2"> {{preferences?.J_P}}</text>
				</view>
				<!-- {{preferences?.A_T}} -->
			</view>


			<!-- 维度偏好分析 -->
			<!-- 代表人物 -->
			<view
				class="p-2 mt-2  rounded-2xl text-xs font-thin flex flex-col gap-1 bg-gradient-to-bl from-[#b553e8]/60  via-[#7366e5]/30  to-white/60">
				<view class="font-semibold text-lg text-white relative flex items-center">
					<view class="w-[4px] h-[1em] rounded-2xl border bg-white mr-2 ml-1"></view>
					<text class="">名人榜</text>
				</view>
				<view v-for="person in targetType?.famous_people"
					class="rounded-lg px-2 py-1 whitespace-nowrap bg-white/30 text-white flex items-center gap-2">
					<view class="w-2 h-2 rounded-full bg-white"></view>{{person}}
				</view>

				<!-- {{preferences?.A_T}} -->
			</view>

			<!-- details -->

			<view
				class="p-2 mt-2  rounded-2xl text-xs font-thin flex flex-col gap-1 bg-gradient-to-bl from-white/30  via-[#7366e5]/80  to-[#bf2df2]/60">
				<view class="font-semibold text-lg text-white relative flex items-center">
					<view class="w-[4px] h-[1em] rounded-2xl border bg-white mr-2 ml-1"></view>
					<text class="">性格分析</text>
				</view>
				<view v-for="{title, detail} in targetType?.details"
					class="rounded-lg px-2 py-1  bg-white/30 text-white border border-2 border-r-0 border-b-0 ">
					<text class="block font-semibold mb-2">{{title}}</text>
					{{detail}}
				</view>

				<!-- {{preferences?.A_T}} -->
			</view>





			<!-- 人机关系 -->
			<view
				class="p-2 mt-2  rounded-2xl text-xs font-thin flex flex-col gap-1 bg-gradient-to-bl to-white/80  via-[#7366e5]/80  from-[#bf2df2]/60">
				<view class="font-semibold text-lg text-white relative flex items-center">
					<view class="w-[4px] h-[1em] rounded-2xl border bg-white mr-2 ml-1"></view>
					<text class="">人际关系</text>
				</view>
				<view class="rounded-lg px-2 py-1  bg-white/30 text-white border border-2 border-r-0 border-b-0 ">
					{{targetType?.relationships}}
				</view>
			</view>
			<!-- 个人成长 -->
			<view
				class="p-2 mt-2  rounded-2xl text-xs font-thin flex flex-col gap-1 bg-gradient-to-bl from-white/80  via-[#7366e5]/80  to-[#bf2df2]/60">
				<view class="font-semibold text-lg text-white relative flex items-center">
					<view class="w-[4px] h-[1em] rounded-2xl border bg-white mr-2 ml-1 "></view>
					<text class="">个人成长</text>
				</view>
				<view class="rounded-lg px-2 py-1  bg-white/30 text-white border border-2 border-r-0 border-b-0 ">
					{{targetType?.personal_growth}}
				</view>
			</view>

			<!-- 优缺点 -->
			<view
				class="p-2 mt-2  rounded-2xl text-xs font-thin flex flex-col gap-1 bg-gradient-to-bl from-[#bf2df2]/80  via-[#7366e5]/90  to-white/30">
				<view class="font-semibold text-lg text-white relative flex items-center">
					<view class="w-[4px] h-[1em] rounded-2xl border bg-white mr-2 ml-1"></view>
					<text class="">可能的优缺点</text>
				</view>
				<view class="flex gap-1 flex-wrap ">
					<view
						class="text-white underline decoration-2 decoration-green-300 underline-offset-4 px-2 py-1 rounded-2xl inline-block"
						v-for="s in targetType?.strengths">
						{{s}}
					</view>
					<view
						class="text-white underline decoration-2 decoration-red-300 underline-offset-4 px-2 py-1 rounded-2xl inline-block"
						v-for="w in targetType?.weaknesses">
						{{w}}
					</view>
				</view>
			</view>
			<!-- 合适工作类型 -->
			<view
				class="p-2 mt-2  rounded-2xl text-xs font-thin flex flex-col gap-1 bg-gradient-to-bl from-white/20  via-[#7366e5]/80  to-[#bf2df2]/40">
				<view class="font-semibold text-lg text-white relative flex items-center">
					<view class="w-[4px] h-[1em] rounded-2xl border bg-white mr-2 ml-1"></view>
					<text class="">合适工作类型</text>
				</view>
				<view class="flex gap-1 flex-wrap">
					<view
						class="text-white underline decoration-2 decoration-yellow-300 underline-offset-4 px-2 py-1 rounded-2xl inline-block"
						v-for="j in targetType?.jobs">
						{{j}}
					</view>
				</view>
			</view>


			<view class="p-2 mt-2 flex justify-center gap-4 rounded-2xl bg-gradient-to-bl from-white/90  via-[#bf2df2]/60  to-[#6468bc]/40">
				<view class="flex flex-col justify-center items-center">
					<view class="border border-2 rounded-full w-12 h-12 flex justify-center items-center">
						<DownloadSvgIcon class="text-3xl text-white" />
					</view>
					<view class="inline-block text-white font-semibold text-sm mt-1">
						保存报告
					</view>
				</view>
				<view class="flex flex-col justify-center items-center">
					<view class="border border-2 rounded-full w-12 h-12 flex justify-center items-center">
						<ShareSvgIcon class="text-3xl text-white" />
					</view>
					<view class="inline-block text-white font-semibold text-sm mt-1">
						分享
					</view>
				</view>
			</view>
		</view>
	</Background>
</template>

<script setup lang="ts">
	import { onLoad } from "@dcloudio/uni-app"
	import banner3 from "@/assets/banner3.svg"
	import Background from "@/components/Background.vue"
	import DownloadSvgIcon from "@/components/Icons/DownloadSvgIcon.vue"
	import ShareSvgIcon from "@/components/Icons/ShareSvgIcon.vue"
	import type { AnalysisResult } from "../measurement/mbtiAnalysis"
	import { MBTI_REPORT_DATA, type MBTI_KEYS, type MBTI_RECORD } from "./report"
	import { ref } from "vue";


	const targetType = ref<MBTI_RECORD>()
	const preferences = ref<AnalysisResult>()


	onLoad((option : any) => {
		const _result = option.result
		const result = JSON.parse(_result) as AnalysisResult
		const targetKey = result.MBTI_Type.split('-')[0] as MBTI_KEYS
		targetType.value = MBTI_REPORT_DATA[targetKey]
		preferences.value = result
		// {
		// 	"E_I": "偏向 E",
		// 	"S_N": "偏向 S",
		// 	"T_F": "偏向 T",
		// 	"J_P": "偏向 J",
		// 	"A_T": "偏向 A",
		// 	"MBTI_Type": "ESTJ-A"
		// }
		// http://localhost:5173/#/pages/resultAnalyse/index?result={%22E_I%22:%22%E5%81%8F%E5%90%91+E%22,%22S_N%22:%22%E5%81%8F%E5%90%91+S%22,%22T_F%22:%22%E5%81%8F%E5%90%91+T%22,%22J_P%22:%22%E5%81%8F%E5%90%91+J%22,%22A_T%22:%22%E5%81%8F%E5%90%91+A%22,%22MBTI_Type%22:%22ESTJ-A%22}

	})
</script>

<style>
</style>