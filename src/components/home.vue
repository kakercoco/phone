<template>
	<div style="padding-bottom: 0.5rem;">
		<swiper dots-position="center">
			<swiper-item v-for="(item, index) in banner_list" :key="index">
				<img :src="item.img" class="swiper-img">
			</swiper-item>
		</swiper>
		<div class="find-heart bg-fff">
			<h4 class="tac">找到属于自己的手机壳</h4>
			<ul class="like-img">
				<li v-for="item in like_list">
					<img :src="item.url" />
					<ul class="like-chilren-img">
						<li v-for="items in item.chilren" @click="item.url=items">
							<img :src="items" />
						</li>
					</ul>
					<p>{{item.detail}}</p>
					<p><span>￥{{item.price}}</span></p>
				</li>
			</ul>
		</div>
		<div class="hot">
			<h4>近期热门</h4>
			<ul>
				<router-link tag="li" v-for="(item,index) in hot_list" :key="index" :to="{path:'/buy/2'}">
					<img :src="item.url" />
					<p>{{item.detail}}</p>
					<p><span>￥{{item.price}}</span></p>
				</router-link>
			</ul>
		</div>
		<div class="like-store bg-fff">
			<group>
				<cell value="更多" is-link></cell>
			</group>
			<tab active-color="red" custom-bar-width="0.8rem">
				<tab-item @on-item-click="tabClick" selected>自然风景</tab-item>
				<tab-item @on-item-click="tabClick">卡通动漫</tab-item>
				<tab-item @on-item-click="tabClick">动物精选</tab-item>
			</tab>
			<div class="tab-list">
				<ul v-for="(list,index) in tab_list" v-show="tabShow==index">
					<li v-for="item in list">
						<img :src="item" :alt="index"/>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer">
			<span><img src="https://hqwell.net/images/home.png"/></span>
			<ul>
				<router-link :to="{path:'/self'}" tag="li">快速定制</router-link>
				<router-link :to="{path:'/self'}" tag="li">我的订单</router-link>
				<router-link :to="{path:'/self'}" tag="li" >个人中心</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	import { Swiper, SwiperItem } from 'vux'
	import { Group, Cell } from 'vux'
	import { Tab, TabItem } from 'vux'
	export default {
		name: 'home',
		components: {
			Swiper,
			SwiperItem,
			Group,
			Cell,
			Tab,
			TabItem
		},
		data() {
			return {
				name: 'kaker',
				tabShow:0,
				banner_list: [{
					url: 'javascript:',
					img: 'https://hqwell.net/images/banner3.jpg',
					title: '送你一朵fua'
				}, {
					url: 'javascript:',
					img: 'https://hqwell.net/images/banner.png',
					title: '送你一次旅行',
				}],
				like_list: [{
					url: "http://g.search2.alicdn.com/img/i2/12715340/TB2D5QZcHYI8KJjy0FaXXbAiVXa_!!0-saturn_solar.jpg_220x220.jpg",
					detail: '可爱手机壳定制',
					price: 39.99,
					chilren: [
						"https://gd1.alicdn.com/imgextra/i1/0/TB1nTYKmPihSKJjy0FlXXadEXXa_!!0-item_pic.jpg_50x50.jpg_.webp",
						"https://gd1.alicdn.com/imgextra/i1/33690283/TB2FpEzqHsTMeJjSsziXXcdwXXa_!!33690283.jpg_50x50.jpg_.webp",
						"https://gd2.alicdn.com/imgextra/i2/33690283/TB2lSjGmPqhSKJjSspnXXc79XXa_!!33690283.jpg_50x50.jpg_.webp"
					]
				}, {
					url: "http://g.search.alicdn.com/img/i4/1767006070475163973/TB20LUNyiRnpuFjSZFCXXX2DXXa_!!0-saturn_solar.jpg_220x220.jpg",
					detail: '英雄联盟皮肤定制',
					price: 49.99,
					chilren: [
						"https://gd1.alicdn.com/imgextra/i1/0/TB1nTYKmPihSKJjy0FlXXadEXXa_!!0-item_pic.jpg_50x50.jpg_.webp",
						"https://gd1.alicdn.com/imgextra/i1/33690283/TB2FpEzqHsTMeJjSsziXXcdwXXa_!!33690283.jpg_50x50.jpg_.webp",
						"https://gd2.alicdn.com/imgextra/i2/33690283/TB2lSjGmPqhSKJjSspnXXc79XXa_!!33690283.jpg_50x50.jpg_.webp"
					]
				}, {
					url: "http://g.search3.alicdn.com/img/i3/54928423/TB29FuMhZ2vU1JjSZFwXXX2cpXa_!!0-saturn_solar.jpg_220x220.jpg",
					detail: '酷炫十足的背景图片',
					price: 99.99,
					chilren: [
						"https://gd1.alicdn.com/imgextra/i1/0/TB1nTYKmPihSKJjy0FlXXadEXXa_!!0-item_pic.jpg_50x50.jpg_.webp",
						"https://gd1.alicdn.com/imgextra/i1/33690283/TB2FpEzqHsTMeJjSsziXXcdwXXa_!!33690283.jpg_50x50.jpg_.webp",
						"https://gd2.alicdn.com/imgextra/i2/33690283/TB2lSjGmPqhSKJjSspnXXc79XXa_!!33690283.jpg_50x50.jpg_.webp"
					]
				}],
				hot_list: [{
					url: "http://g.search.alicdn.com/img/i4/114902628/TB260nBcGLN8KJjSZFmXXcQ6XXa_!!0-saturn_solar.jpg_220x220.jpg_.webp",
					detail: "唯美手机壳定制",
					price: 39.99

				}, {
					url: "http://g.search.alicdn.com/img/i4/114902628/TB260nBcGLN8KJjSZFmXXcQ6XXa_!!0-saturn_solar.jpg_220x220.jpg_.webp",
					detail: "唯美手机壳定制",
					price: 39.99

				}, {
					url: "http://g.search.alicdn.com/img/i4/114902628/TB260nBcGLN8KJjSZFmXXcQ6XXa_!!0-saturn_solar.jpg_220x220.jpg_.webp",
					detail: "唯美手机壳定制",
					price: 39.99

				}, {
					url: "http://g.search.alicdn.com/img/i4/114902628/TB260nBcGLN8KJjSZFmXXcQ6XXa_!!0-saturn_solar.jpg_220x220.jpg_.webp",
					detail: "唯美手机壳定制",
					price: 39.99

				}],
				tab_list: [
					['https://gd3.alicdn.com/imgextra/i2/1709244725/TB2nV7OeInI8KJjSspeXXcwIpXa_!!1709244725.jpg_400x400.jpg_.webp', 'https://gd2.alicdn.com/imgextra/i2/1709244725/TB2tisOeS_I8KJjy0FoXXaFnVXa_!!1709244725.jpg_400x400.jpg_.webp'],
					['https://gd1.alicdn.com/imgextra/i1/33690283/TB2FpEzqHsTMeJjSsziXXcdwXXa_!!33690283.jpg_400x400.jpg_.webp', 'https://gd2.alicdn.com/imgextra/i2/1709244725/TB2tisOeS_I8KJjy0FoXXaFnVXa_!!1709244725.jpg_400x400.jpg_.webp'],
					['https://gd2.alicdn.com/imgextra/i2/33690283/TB2lSjGmPqhSKJjSspnXXc79XXa_!!33690283.jpg', 'https://gd2.alicdn.com/imgextra/i2/1709244725/TB2tisOeS_I8KJjy0FoXXaFnVXa_!!1709244725.jpg_400x400.jpg_.webp'],
				]
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			tabClick(index) {
				this.tabShow=index
			}
		}
	}
</script>

<style>
	.swiper-img {
		width: 100%;
	}
	
	.find-heart {
		overflow: hidden;
	}
	
	.find-heart h4 {
		height: 0.4rem;
		line-height: 0.4rem;
	}
	
	.like-img>li {
		width: 33.33%;
		text-align: center;
		float: left;
		position: relative;
	}
	
	.like-img>li>img {
		width: 0.5rem;
		height: 1rem;
		display: block;
		margin: 0 auto;
	}
	
	.like-img>li p {
		font-size: 0.12rem;
	}
	
	.like-img>li p span {
		color: red;
	}
	
	.like-chilren-img {
		position: absolute;
		right: 0.1rem;
		top: 0;
	}
	
	.like-chilren-img img {
		width: 0.2rem;
		height: 0.2rem;
	}
	
	.hot {
		overflow: hidden;
		padding: 0.1rem;
	}
	
	.hot li {
		width: 49%;
		height: 2.2rem;
		float: left;
		background-color: #fff;
		padding: 0.1rem;
		margin-top: 0.2rem;
	}
	
	.hot li:nth-of-type(even) {
		float: right;
	}
	
	.hot li img {
		width: 100%;
	}
	
	.hot li p span {
		color: red;
	}
	.tab-list li img{
		width: 100%;
		height: 1.7rem;
		display: block;
		margin-top: 0.05rem;
	}
	.footer{
		height: 0.5rem;
		background: #fff;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	.footer span{
		width: 15%;
		float: left;
		height: 100%;
		padding: 0.1rem 0.15rem;
	}
	.footer span img{
		width: 100%;
	}
	.footer ul{
		width: 85%;
		height: 100%;
		float: right;
	}
	.footer ul li{
		width: 33.33%;
		height: 100%;
		float: left;	
		text-align: center;
		line-height: 0.5rem;
		border-left: 1px solid #eee;
	}
</style>