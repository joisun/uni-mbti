<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
#app{
	background: linear-gradient(#4c50ae, #6569bd);
}
uni-page-body,page {
	height:100%
}

	
</style>
