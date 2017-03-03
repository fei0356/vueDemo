<template>
	<div>
		<h1>{{message}}</h1>
		<h1>{{messageA}}</h1>
	</div>
	
	
</template>


<script>
	export default{
		data:function(){
			return {
				message:"this is index_A components"
			}
		},

		mounted: function(){
			console.log(this.message)
		},
		computed:{
			messageA: function(){
				return this.message + "123"
			}
		}
	}
</script>