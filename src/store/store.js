import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		bookInput:[]
	},
	mutations: {
		setContents(state, data){
			state.bookInput = data;
			// console.log(this.state.bookInput);
		},
		addContent(state, data){
			if(!data) console('data');
			state.bookInput.push(data);
		}
	},
	actions: {
		DATA_READ: ((context) => {
			// console.log('READ',context);
			return axios.get('https://etravel-f011c.firebaseio.com/data.json').then((res) => {
				// console.log(res.data);
				context.commit('setContents', res.data)
				// if(!res.data) console.log("目前還沒有預約紀錄")
			})
		}),
	},
	// strict: true
})