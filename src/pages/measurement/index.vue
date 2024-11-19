<template>
	<Background>
		<!-- <view class="bg-purple-50/40 text-white text-center text-sm">按照你的第一直觉回答问题，会让结果更加准确哦</view> -->
		<view class="content p-4 ">
			<view v-if="!isFinished" class="que bg-white/40 rounded-2xl p-4 text-white text-xl relative h-28">
				{{currentQuestion}}
				<img class="absolute bottom-6 right-2 h-6 animate-bounce [animation-delay:-0.5s]" :src="frog" alt="" srcset="" />
				<view class="absolute text-sm right-2 bottom-2">
					{{totalQuestionCount}}/{{perCategoryQuestionMaxNumb*4 + 10}}
				</view>
			</view>
			<ScoreMarker v-if="!isFinished" @selected="handleSelected" />
			<view v-if="isFinished" class="font-bold text-xl text-center text-white">辛苦啦！终于完成啦！🎉</view>
			<img :src="finishSvg" alt="" v-if="isFinished"/>
			<Button type="red" v-if="totalQuestionCount !== 1"  class="my-2 text-lg font-semibold relative" @click="handleLastQuestion">上一题
				<ArrowReturnSvgIcon class="text-xl ml-2" />
			</Button>
			
			
			<Button v-if="isFinished" type="green" @click="handleSubmit"
				class="my-2 text-lg font-semibold bg-green-500 active:bg-green-600 relative">生成报告
				<img class="absolute -top-6 right-6 h-6 animate-bounce [animation-delay:-1s]" :src="frog" alt="" srcset="" />
			</Button>
			
		</view>
	</Background>
</template>

<script setup lang="ts">
	import { ref, watch, computed } from 'vue'
	import { onLoad } from "@dcloudio/uni-app"
	import Background from "@/components/Background.vue"
	import ArrowReturnSvgIcon from "@/components/Icons/ArrowReturnSvgIcon.vue"
	import Button from "@/components/Button.vue"
	import ScoreMarker from "@/components/ScoreMarker.vue"
	import { testType } from '@/consts';
	import { data } from "@/data"
	import mbtiAnalysis from './mbtiAnalysis'
	import finishSvg from "@/assets/finish.svg"
	import frog from "@/assets/frog.svg"
	type RouterParams = {
		type : testType
	}
	type DataKeys = keyof typeof data
	const t = ref()
	onLoad((option) => {
		const type = (option as RouterParams).type
		t.value = type
		switch (type) {
			case testType.BASE:
				perCategoryQuestionMaxNumb.value = 10
				break;
			case testType.STANDARD:
				perCategoryQuestionMaxNumb.value = 20
				break;
			case testType.PRO:
				perCategoryQuestionMaxNumb.value = 50
				break;
			default:
				perCategoryQuestionMaxNumb.value = 10
				break;
		}
	})

	console.log(data)
	const scoreRecord = {
		E_I: 0,
		S_N: 0,
		T_F: 0,
		J_P: 0,
		A_T: 0
	}
	const questionIndexs : DataKeys[] = ['E_I', 'S_N', 'T_F', 'J_P', 'A_T']
	const history : { type : DataKeys, score : number }[] = [];
	let currentQuestionIndex = 0
	const perCategoryQuestionMaxNumb = ref(10);// 每个类型的题目数量，通过路由参数type确定
	const totalQuestionCount = ref(1) // 总的答题数基数
	const perCount = ref(0);// 当前类型答题计数
	const currentQuestion = ref('')
	const isFinished = computed(() => {
		return totalQuestionCount.value > perCategoryQuestionMaxNumb.value * 4 + 10
	})

	const init = () => {
		currentQuestion.value = data[questionIndexs[currentQuestionIndex]][0];
	}
	init()

	const recordScore = (type : keyof typeof scoreRecord, score : number) => {
		scoreRecord[type] += score
		console.log(type, ":", score)
		history.push({ type, score })
	}
	const nextQuestion = () => {
		if (perCount.value === perCategoryQuestionMaxNumb.value - 1 && currentQuestionIndex <= questionIndexs.length - 1) {
			currentQuestionIndex++
			perCount.value = 0
		} else {
			perCount.value++
		}

		totalQuestionCount.value++
		// 如果 currentQuestionIndex  超出 questionIndexs 长度就终止下面逻辑执行
		if (currentQuestionIndex > questionIndexs.length - 1) return
		currentQuestion.value = data[questionIndexs[currentQuestionIndex]][perCount.value];

	}
	const handleSelected = (selectedVal : string) => {
		recordScore(questionIndexs[currentQuestionIndex], +selectedVal)
		nextQuestion()
		console.log(scoreRecord)
		console.log(history)

	}
	const handleLastQuestion = () => {
		const lastHistoryRecord = history.pop();
		if (!lastHistoryRecord) return;
		scoreRecord[lastHistoryRecord?.type] -= lastHistoryRecord.score;
		totalQuestionCount.value--
		perCount.value--
		if (perCount.value < 0) {
			currentQuestionIndex--
			perCount.value = perCategoryQuestionMaxNumb.value - 1
		}
		currentQuestion.value = data[questionIndexs[currentQuestionIndex]][perCount.value];
		console.log(scoreRecord)
		console.log(history)

	}

	const handleSubmit = () => {
		if(!t.value) return;
		const result = mbtiAnalysis(scoreRecord, t.value)
		uni.redirectTo({
			url: `/pages/resultAnalyse/index?result=${JSON.stringify(result)}`
		});
	}
</script>

<style>

</style>