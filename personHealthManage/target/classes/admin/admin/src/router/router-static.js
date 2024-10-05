import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import gerentizheng from '@/views/modules/gerentizheng/list'
    import jiankangtieshi from '@/views/modules/jiankangtieshi/list'
    import meirijihua from '@/views/modules/meirijihua/list'
    import meishi from '@/views/modules/meishi/list'
    import meishiCollection from '@/views/modules/meishiCollection/list'
    import meishiLiuyan from '@/views/modules/meishiLiuyan/list'
    import news from '@/views/modules/news/list'
    import yaopin from '@/views/modules/yaopin/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yundong from '@/views/modules/yundong/list'
    import yundongCollection from '@/views/modules/yundongCollection/list'
    import yundongLiuyan from '@/views/modules/yundongLiuyan/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryJiankangtieshi from '@/views/modules/dictionaryJiankangtieshi/list'
    import dictionaryMeishi from '@/views/modules/dictionaryMeishi/list'
    import dictionaryMeishiCollection from '@/views/modules/dictionaryMeishiCollection/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShenti from '@/views/modules/dictionaryShenti/list'
    import dictionaryYaopin from '@/views/modules/dictionaryYaopin/list'
    import dictionaryYundong from '@/views/modules/dictionaryYundong/list'
    import dictionaryYundongCollection from '@/views/modules/dictionaryYundongCollection/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryJiankangtieshi',
        name: '贴士类型',
        component: dictionaryJiankangtieshi
    }
    ,{
        path: '/dictionaryMeishi',
        name: '饮食类型',
        component: dictionaryMeishi
    }
    ,{
        path: '/dictionaryMeishiCollection',
        name: '收藏表类型',
        component: dictionaryMeishiCollection
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShenti',
        name: '身体状况',
        component: dictionaryShenti
    }
    ,{
        path: '/dictionaryYaopin',
        name: '药品类型',
        component: dictionaryYaopin
    }
    ,{
        path: '/dictionaryYundong',
        name: '运动类型',
        component: dictionaryYundong
    }
    ,{
        path: '/dictionaryYundongCollection',
        name: '收藏表类型',
        component: dictionaryYundongCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gerentizheng',
        name: '体检记录',
        component: gerentizheng
      }
    ,{
        path: '/jiankangtieshi',
        name: '健康贴士',
        component: jiankangtieshi
      }
    ,{
        path: '/meirijihua',
        name: '每日计划',
        component: meirijihua
      }
    ,{
        path: '/meishi',
        name: '健康食谱',
        component: meishi
      }
    ,{
        path: '/meishiCollection',
        name: '健康食谱收藏',
        component: meishiCollection
      }
    ,{
        path: '/meishiLiuyan',
        name: '健康食谱留言',
        component: meishiLiuyan
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/yaopin',
        name: '药品信息',
        component: yaopin
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yundong',
        name: '运动教程',
        component: yundong
      }
    ,{
        path: '/yundongCollection',
        name: '运动教程收藏',
        component: yundongCollection
      }
    ,{
        path: '/yundongLiuyan',
        name: '运动教程留言',
        component: yundongLiuyan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
