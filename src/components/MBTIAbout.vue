<template>
	<view class="text-white">

		<view class="rounded-2xl mt-4 p-4 bg-gradient-to-bl from-[#b553e8]/80  via-[#7366e5]/80  to-[#bf2df2]/80">
			<view class="text-xl block mb-2 text-center font-semibold">MBTI 背景介绍</view>
			<text>
				&nbsp;&nbsp;&nbsp;&nbsp;MBTI（Myers-Briggs Type Indicator）是基于心理学家卡尔·荣格（Carl
				Jung）提出的心理类型理论发展而来的性格评估工具。该理论由凯瑟琳·布里格斯（Katharine Cook
				Briggs）和她的女儿伊莎贝尔·布里格斯·迈尔斯（Isabel Briggs Myers）进一步发展，旨在帮助人们了解自己和他人行为背后的心理偏好。
			</text>
			<view class="text-lg block mt-2 font-semibold">1. 荣格的心理类型理论</view>
			<text class="block">
				&nbsp;&nbsp;&nbsp;&nbsp;卡尔·荣格认为，人的行为是基于心理功能和态度的组合，这些功能和态度决定了人们如何感知世界和做出决策。他提出了两种主要态度和四种
				<ol class="bg-white/40 rounded-lg p-2 space-y-4 my-2">
					<view class="font-semibold flex  items-center gap-2"><view class="w-[4px] h-[1em] bg-white rounded-2xl"></view>态度</view>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">1.</span>
						<span><strong>外向（Extraversion, E）</strong>：倾向于从外部世界汲取能量。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">2.</span>
						<span><strong>内向（Introversion, I）</strong>：倾向于从内心世界获得能量。</span>
					</li>

				</ol>
				<ol class="bg-white/40 rounded-lg p-2 space-y-4 my-2">
					<view class="font-semibold  flex  items-center gap-2"><view class="w-[4px] h-[1em] bg-white rounded-2xl"></view>心理功能</view>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">1.</span>
						<span><strong>感知（Sensing, S）</strong>：通过五官和实际经验来获取信息。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">2.</span>
						<span><strong>直觉（Intuition, N）</strong>：通过模式和抽象概念来处理信息。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">3.</span>
						<span><strong>思考（Thinking, T）</strong>：通过客观和逻辑来进行决策。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">4.</span>
						<span><strong>情感（Feeling, F）</strong>：通过主观和价值观进行判断。</span>
					</li>
				</ol>
			</text>
			<view class="text-lg block mt-2 font-semibold">2. MBTI的结构</view>
			<text class="block">
				&nbsp;&nbsp;&nbsp;&nbsp;MBTI 在荣格理论的基础上，增加了第四对偏好——判断（Judging, J）和知觉（Perceiving,
				P），形成了16种独特的性格类型组合。每种类型由四个字母表示，例如，INTJ（内向、直觉、思考、判断）和ESFP（外向、感知、情感、知觉）。
			</text>
			<view class="text-lg block mt-2 font-semibold">3. MBTI的应用</view>
			<text class="block">
				&nbsp;&nbsp;&nbsp;&nbsp;MBTI
				主要用于个人发展、职业规划、团队建设和人际关系中。通过了解个人的性格类型，人们可以更好地理解自身的行为模式、优势和劣势，并与他人建立更有效的沟通和合作。
			</text>

		</view>


		<view class="bg-gradient-to-bl to-[#b553e8]/80  via-[#7366e5]/80  from-[#bf2df2]/80  rounded-2xl mt-4 p-2">
			<view class="text-xl block mb-2 text-center font-semibold">MBTI 性格分类</view>
			<view class="bg-no-repeat bg-contain bg-center" :style="{backgroundImage:`url(${entj})`}">
				<ol class="bg-white/40 rounded-lg  space-y-4 my-2 p-4">
					<view class="font-semibold flex  items-center gap-2"><view class="w-[4px] h-[1em] bg-white rounded-2xl"></view>分析家</view>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">1.</span>
						<span><strong>建筑师（INTJ-A / INTJ-T）</strong>：富有想象力和战略性思维，一切皆在计划之中。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">2.</span>
						<span><strong>逻辑学家（INTP-A / INTP-T）</strong>：具有创造力的发明家，对知识有着不可抑制的渴望。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">3.</span>
						<span><strong>指挥官（ENTJ-A / ENTJ-T）</strong>：大胆、富有想象力且意志强大的领导者，总能找到或创造解决方法。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">4.</span>
						<span><strong>辩论家（ENTP-A / ENTP-T）</strong>：聪明好奇的思考者，无法抵挡智力挑战的诱惑。</span>
					</li>
				</ol>
			</view>

			<view class="bg-no-repeat bg-contain bg-center" :style="{backgroundImage:`url(${advocate})`}">
				<ol class="bg-white/40 rounded-lg  space-y-4 my-2 p-4">
					<view class="font-semibold flex  items-center gap-2"><view class="w-[4px] h-[1em] bg-white rounded-2xl"></view>外交家</view>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">1.</span>
						<span><strong>提倡者（INFJ-A / INFJ-T）</strong>：安静神秘，但非常鼓舞人心且不知疲倦的理想主义者。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">2.</span>
						<span><strong>调停者（INFP-A / INFP-T）</strong>：富有诗意、善良且无私的人，总是热衷于帮助正义事业。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">3.</span>
						<span><strong>主人公（ENFJ-A / ENFJ-T）</strong>：具有魅力并能激励人心的领导者，能够让听众为之着迷。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">4.</span>
						<span><strong>竞选者（ENFP-A / ENFP-T）</strong>：充满活力，富有创意，善于交际的自由之人，总能找到微笑的理由。</span>
					</li>
				</ol>
			</view>
			
			<view class="bg-no-repeat bg-contain bg-center" :style="{backgroundImage:`url(${logistician})`}">
				<ol class="bg-white/40 rounded-lg  space-y-4 my-2 p-4">
					<view class="font-semibold flex  items-center gap-2"><view class="w-[4px] h-[1em] bg-white rounded-2xl"></view>守护者</view>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">1.</span>
						<span><strong>物流师（ISTJ-A / ISTJ-T）</strong>：务实且注重事实的人，可靠性不容怀疑。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">2.</span>
						<span><strong>守卫者（ISFJ-A / ISFJ-T）</strong>：非常专注和热情的保护者，总是随时准备保护他们所爱的人。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">3.</span>
						<span><strong>总经理（ESTJ-A / ESTJ-T）</strong>：出色的管理者，在管理事物或人的方面无与伦比。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">4.</span>
						<span><strong>执政官（ESFJ-A / ESFJ-T）</strong>：非常关心他人，善于社交，受人欢迎，总是乐于助人。</span>
					</li>
				</ol>
			</view>
			
			<view class="bg-no-repeat bg-contain bg-center" :style="{backgroundImage:`url(${virtuoso})`}">
				<ol class="bg-white/40 rounded-lg  space-y-4 my-2 p-4">
					<view class="font-semibold flex  items-center gap-2"><view class="w-[4px] h-[1em] bg-white rounded-2xl"></view>探险家</view>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">1.</span>
						<span><strong>鉴赏家（ISTP-A / ISTP-T）</strong>：大胆而实际的实验家，擅长使用各种形式的工具。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">2.</span>
						<span><strong>探险家（ISFP-A / ISFP-T）</strong>：灵活有魅力的艺术家，时刻准备着探索和体验新鲜事物。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">3.</span>
						<span><strong>企业家（ESTP-A / ESTP-T）</strong>：聪明、充满活力且洞察力极强的人，真正喜欢充满刺激和危险的生活。</span>
					</li>
					<li class="flex items-start space-x-2">
						<span class="text-indigo-500 font-medium">4.</span>
						<span><strong>表演者（ESFP-A / ESFP-T）</strong>：精力充沛、热情，总是心血来潮--有他们在身边，生活永远不会无聊。</span>
					</li>
				</ol>
			</view>



		</view>
	</view>
</template>

<script setup lang="ts">
	import entj from "@/assets/charactors/analysts/entj.svg"
	import advocate from "@/assets/charactors/diplomats/advocate.svg"
	import logistician from "@/assets/charactors/sentinels/logistician.svg"
	import virtuoso from "@/assets/charactors/explorers/virtuoso.svg"

</script>