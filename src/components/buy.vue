<template>
	<div style="padding-bottom: 50px;">
		<swiper :list="list" :aspect-ratio="1" loop auto dots-position="center"></swiper>
		<group>
			<cell title="手机类型"  is-link link="/order" value="5s"></cell>
			<cell title="趣味图形"  is-link link="/order" value="可爱"></cell>
			<cell title="精美相册"  is-link link="/order" value="我的"></cell>
			<cell title="个性装扮"  is-link link="/order" value="logo"></cell>
			<cell title="背景图案"  is-link link="/order" value="唯美"></cell>
		</group>
		<group>
			<cell title="已选" is-link link="/order" value="黑色 5s">
			</cell>
		</group>
		<group>
			<cell title="黄雀商场" >
				<img src="http://hqwell.cn/images/logo2.png" alt="" slot="icon" style="width: 20px;margin-right: 5px;margin-top: 5px;" />
			</cell>
		</group>
		<group>
			<cell title="评价" is-link link="/order" ></cell>
		</group>
		<div class="bg-fff footer">
			<ul>
				<li>
					<x-icon type="ios-heart-outline" size="20"></x-icon>
					<span>收藏</span>
				</li>
				<router-link :to="{path:'/car'}" tag="li">
					<x-icon type="ios-cart-outline" size="20"></x-icon>
					<span>购物车</span>
				</router-link>
				<li>
					<span>加入购物车</span>
				</li>
				<router-link :to="{path:'/orderConfirm'}" tag="li">
					<span>立即购买</span>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from '../libs/axios.js'
	import { Swiper, Group, Cell, XNumber } from 'vux'
	export default {
		name: 'self',
		components: {
			Swiper,
			Group,
			Cell,
			XNumber
		},
		data() {
			return {
				name: 'kaker',
				url: 'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg',
				value:0,
				list: [{
					url: 'javascript:',
					img: 'https://img.alicdn.com/imgextra/i3/2046800963/TB25QXihZ2vU1JjSZFwXXX2cpXa_!!2046800963.jpg_430x430q90.jpg'
				}, {
					url: 'javascript:',
					img: 'https://img.alicdn.com/imgextra/i3/2046800963/TB2FFsjdTJ_SKJjSZPiXXb3LpXa_!!2046800963.jpg_430x430q90.jpg'
				}, {
					url: 'javascript:',
					img: 'https://img.alicdn.com/imgextra/i3/2046800963/TB25QXihZ2vU1JjSZFwXXX2cpXa_!!2046800963.jpg_430x430q90.jpg'
				}]
			}
		},
		created() {
			axios.post('shop/v2/passport/phone', {
					mobile: '18790671040',
					agree: '1'
				})
				.then(function(response) {
					console.log(response);
				})
				.catch(function(err) {
					//console.log(err);
				});
			console.log(this.$route.params)
		}

	}
</script>

<style scoped>
	
	.vux-x-icon {
		/*fill: red;*/
	}
	.footer{
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0;
	}
	.footer li{
		width: 20%;
		float: left;
		height: 100%;
		text-align: center;
	}
	.footer li svg{
		display: block;
		margin: 5px auto 0;
	}
	.footer li span{
		display: block;
		clear: both;
	}
	.footer li:nth-of-type(2){
		border-left: 1px solid #eee;
	}
	.footer li:nth-of-type(3),.footer li:nth-of-type(4){
		width: 30%;
		line-height: 50px;
		color: #fff;
	}
	.footer li:nth-of-type(3){
		background-color: #464644;
	}
	.footer li:nth-of-type(4){
		background-color: #f01c42;
	}
</style>