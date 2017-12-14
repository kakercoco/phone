import axios from 'axios'
let instance = axios.create({
	baseURL: 'http://api.hqwell.cn/',
	timeout: 10000,
	
})

export default instance