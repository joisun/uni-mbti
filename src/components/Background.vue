<template>
	<view class="h-full  w-full relative">
		<img :src="bgimgtop" alt="" srcset="" class="w-full absolute h-3/4 top-0" />
		<img :src="bgimg" alt="" srcset="" class="w-full absolute bottom-0" />
		<view class="absolute inset-0 overflow-y-auto">
			<slot />
		</view>
	</view>
</template>

<script setup lang="ts">
	import bgimg from "@/assets/bg-img.png"
	import bgimgtop from "@/assets/bg-img-top.svg"
</script>
