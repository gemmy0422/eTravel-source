<template>
	<div class="">
		<history_header></history_header>
		<history_content></history_content>
	</div>
</template>

<script>
import history_header from '../components/history_header'
import history_content from '../components/history_content'

export default {
	components:{
		history_header,
		history_content
	},
	methods:{
		goToHome(){
			// this.$router.push({path:`/update/${target.id}`});
			// 上面是路徑表現形式，維護較麻煩 下面是資料表現形式 兩者都可以
			this.$router.push({name: "Home"});
		}
	}
}
</script>