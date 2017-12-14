import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import self from '@/components/self'
import buy from '@/components/buy'
import orderConfirm from '@/components/orderConfirm'
import car from '@/components/car'

Vue.use(Router)

let router=new Router({
	routes: [{		//首页
		path: '/',	
		name: 'home',
		component: home,
		
	},{				//个人中心
		path: '/self',
		name: 'self',
		component: self,
		meta: {
			title: '个人中心'
		}
	},{				//立即购买
		path: '/buy/:id',
		name: 'buy',
		component: buy,
		meta: {
			title: '立即购买'
		}
	},{				//提交订单
		path: '/orderConfirm',
		name: 'orderConfirm',
		component: orderConfirm,
		meta: {
			title: '提交订单'
		}
	},{				//立即购买
		path: '/car',
		name: 'car',
		component: car,
		meta: {
			title: '购物车'
		}
	}],
	mode: 'hash'
})
//路由不匹配时会出现页面空白
//mode 为history时#没有但会找不到匹配路由
router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {                                        //如果未匹配到路由
    from.name ? next({ name:from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next();                                                                            //如果匹配到正确跳转
  }
});
export default router