<template>
	<div class="box" @click = "clickFn">
		<i>{{message}}</i>
		<i>{{msg}}</i>
		<index-a></index-a>
		<index-b></index-b>
	</div>		
</template>

<script>
	import indexA from './index_a.vue';
	import indexB from './index_b.vue';
	
	export default {
		props:['msg'],
		components: {
			indexA,
			indexB
		},
		data: function(){
			return {
				message: 'this page is index.vue components'
		
			}
		},
		methods: {
			clickFn () {
				alert(1)
			}
		},
		mounted: function(){
			console.log(this.msg)
		}
		
	}
</script>
