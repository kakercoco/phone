<template>
	<div>
		<swiper>
			<swiper-item  v-for="(item, index) in list" :key="index">
				<img :src="item.img" class="swiper-img">
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import { Swiper ,SwiperItem } from 'vux'
	export default {
		name: 'home',
		components:{
			Swiper,SwiperItem
		},
		data() {
			return {
				name: 'kaker',
				list: [{
					url: 'javascript:',
					img: 'https://hqwell.net/images/banner3.jpg',
					title: '送你一朵fua'
				}, {
					url: 'javascript:',
					img: 'https://hqwell.net/images/banner.png',
					title: '送你一次旅行',
				}]
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {

		}
	}
</script>

<style>
.swiper-img{
	width: 100%;
}
</style>