<template>
	<div>
		<blur :blur-amount=40 :url="url" :height="150">
			<p class="center"><img :src="url"></p>
			<p class="tac c-fff">eilles</p>
		</blur>
		<group>
			<cell title="我的订单"  is-link link="/order">
				<x-icon type="clipboard" size="20" slot="icon"></x-icon>
			</cell>
			<cell title="购物车"  is-link link="/car">
				<x-icon type="ios-cart-outline" size="20"  slot="icon"></x-icon>
			</cell>
			<cell title="我的收藏"  is-link link="/">
				<x-icon type="ios-heart-outline" size="20" slot="icon"></x-icon>
			</cell>
			<cell title="收货地址"  is-link link="/address">
				<x-icon type="ios-location-outline" size="20" slot="icon"></x-icon>
			</cell>
			<cell title="售后服务"  is-link link="/server">
				<x-icon type="ios-personadd-outline" size="20" slot="icon"></x-icon>
			</cell>
		</group>
	</div>
</template>

<script>
	import axios from '../libs/axios.js'
	import { Blur, Group, Cell  } from 'vux'
	export default {
		name: 'self',
		components: {
			Blur,
			Group,
			Cell 
		},
		data() {
			return {
				name: 'kaker',
				url: 'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
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
		}
	}
</script>

<style scoped>
	.center {
		text-align: center;
		padding-top: 0.2rem;
		color: #fff;
	}
	
	.center img {
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 50%;
		border: 4px solid #ececec;
	}
	.vux-x-icon {
		fill: red;
		margin-right: 0.05rem;
		margin-top: 0.1rem;
	}
</style>