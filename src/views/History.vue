<template>
	<div>
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
			this.$router.push({name: "Home"});
		}
	}
}
</script>