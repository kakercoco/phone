<template>
	<div>
		<group>
			<cell title="添加地址" is-link></cell>
		</group>
		<panel :list="list" header="唯美手机壳定制特效" type="1" style="margin-top: 10px;"></panel>
		<group>
			<cell title="支付方式" is-link></cell>
			<cell title="发票方式" is-link></cell>
			<cell title="支付方式" is-link></cell>
		</group>
	</div>
</template>

<script>
	import { Group, Cell, Panel } from 'vux'
	export default {
		name: 'orderConfirm',
		components: {
			Group,
			Cell,
			Panel
		},
		data() {
			return {
				name: "kaker",
				list: [{
					src: 'https://img.alicdn.com/imgextra/i3/2046800963/TB25QXihZ2vU1JjSZFwXXX2cpXa_!!2046800963.jpg_430x430q90.jpg',
					title: '精美手机可定制专属',
					desc: "￥38.88 <span class='fr'>x1</span>",
				}],
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
.weui-media-box__title{
	/*float: left;*/
	margin-bottom: 20px;
}
</style>