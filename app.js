(function(Vue){

var loadTemplate = function(name){
	return document.getElementById(name+'_tmpl').innerHTML
}
var Home = Vue.extend({
	template:loadTemplate('home')
})
var List = Vue.extend({
	template:loadTemplate('list')
})
var Item = Vue.extend({
	template:loadTemplate('item')
})
var App = Vue.extend({})
var  router = new VueRouter()
router.map({
	'/home':{
		name:'home',
		component:Home
	},
	'/list':{
		name:'list',
		component:List
	},
	'/songs/:id':{
		name:'item',
		component:Item
	},
})

router.redirect({"*":'/home'})
router.start(App,'#app')

})(Vue)