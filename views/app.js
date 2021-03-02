const Vue = require('vue')

const app = new Vue({
	data: {
		msg:'hello express SSR'
	},
	computed:{
		msg2:function(){
			return this.msg +'home'
		}
	},
	template: `
			<div>
				<h1>home页</h1>
				<h1 v-text='msg'></h1>
				<h1 v-text='msg2'></h1>
			</div>
		`
})

module.exports = app
