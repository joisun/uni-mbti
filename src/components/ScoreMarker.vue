<template>
	<view class="flex justify-between text-xs text-white font-semibold px-4  mt-6">
		<view class="">
			<img class="h-6 w-6 animate-bounce" :src="frog" alt="" srcset="" />
		</view>
		<view class="flex gap-4">
			<view class="text-red-400 flex items-center gap-1">
				<view class="w-2 h-2 rounded-full bg-red-400">
				</view>非常不符合
			</view>
			<view class="text-green-400 flex items-center gap-1">
				<view class="w-2 h-2 rounded-full bg-green-400">
				</view>非常符合
			</view>
		</view>
	</view>

	<radio-group @change="radioChange" class="mt-2 bg-white/40 rounded-2xl p-4 ">
		<view class="flex justify-around items-center gap-4 ">

			<label class="h-8 w-8 block rounded-full border border-red-400 border-4"
				:class="{'bg-red-400':model === '1'}">
				<radio class="hidden" value="1" :checked="model === '1'" />
			</label>
			<label class="h-10 w-10 block rounded-full border border-red-300 border-4"
				:class="{'bg-red-300':model === '2'}">
				<radio class="hidden" value="2" :checked="model === '2'" />
			</label>
			<label class="h-12 w-12 block rounded-full border border-gray-200 border-4"
				:class="{'bg-gray-200':model === '3'}">
				<radio class="hidden" value="3" :checked="model === '3'" />
			</label>
			<label class="h-14 w-14 block rounded-full border border-green-300 border-4"
				:class="{'bg-green-300':model === '4'}">
				<radio class="hidden" value="4" :checked="model === '4'" />
			</label>
			<label class="h-16 w-16 block rounded-full border border-green-400 border-4"
				:class="{'bg-green-400':model === '5'}">
				<radio class="hidden" value="5" :checked="model === '5'" />
			</label>
		</view>



	</radio-group>


</template>

<script setup lang="ts">
	import frog from "@/assets/frog.svg"
	const model = defineModel()
	const emit = defineEmits(['selected'])
	const radioChange = (evt : any) => {
		model.value = evt.detail.value
		emit('selected', evt.detail.value)
		setTimeout(() => {
			model.value = undefined
		}, 100)
	}
</script>