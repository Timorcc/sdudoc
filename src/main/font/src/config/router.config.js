// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/new',
    children: [
      // new
      {
        path: '/new',
        name: 'new',
        component: () => import('@/views/index/new'),
        meta: { title: '首页',keepAlive: true, icon: bxAnaalyse}
      },
      // 书籍管理
      {
        path: '/bookMgt',
        name: 'bookMgt',
        component: PageView,
        redirect: '/bookMgt/allBook',
        meta: { title: '书籍管理',keepAlive: true, icon: bxAnaalyse},
        children:[
          {
            path: '/bookMgt/allBook',
            name: 'allBook',
            component: () => import('@/views/bookMgt/allBook'),
            meta: { title: '全部书籍', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] }
          },
          {
            path: '/bookMgt/newBook',
            name: 'newBook',
            component: () => import('@/views/bookMgt/newBook'),
            meta: { title: '新增书籍', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] }
          }
        ]
      },
      // 文章管理
      {
        path: '/articleMgt',
        name: 'articleMgt',
        component: PageView,
        redirect: '/articleMgt/allArticle',
        meta: { title: '文章管理',keepAlive: true, icon: bxAnaalyse},
        children:[
          {
            path: '/articleMgt/allArticle',
            name: 'allArticle',
            component: () => import('@/views/articleMgt/allArticle'),
            meta: { title: '全部文章', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] }
        },
        {
          path: '/articleMgt/publishEditTask',
          name: 'publishEditTask',
          component: () => import('@/views/articleMgt/publishEditTask'),
          meta: { title: '发布编辑任务', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] }
        },
        {
          path: '/articleMgt/articleReview',
          name: 'articleReview',
          component: () => import('@/views/articleMgt/articleReview'),
          meta: { title: '文章审核', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] }
        },
        {
          path: '/articleMgt/searchList',
          name: 'searchList',
          component: PageView,
          meta: { title: '搜索列表', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] },
          children:[
            {
              path: '/articleMgt/searchList/article',
              name: 'article',
              component: () => import('@/views/articleMgt/searchList/article'),
              meta: { title: '搜索列表（文章）', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] }
            },
            {
              path: '/articleMgt/searchList/project',
                name: 'project',
              component: () => import('@/views/articleMgt/searchList/project'),
              meta: { title: '搜索列表（项目）', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] }
            },
            {
              path: '/articleMgt/searchList/application',
                name: 'application',
              component: () => import('@/views/articleMgt/searchList/application'),
              meta: { title: '搜索列表（应用）', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] }
            }
          ]
        }
      ]
      },
      // 文章编辑
      {
        path: '/articleEdit',
        name: 'articleEdit',
        component: PageView,
        redirect: '/articleEdit/allArticleE',
        meta: { title: '文章编辑',keepAlive: true, icon: bxAnaalyse},
        children:[
          {
            path: '/articleEdit/allArticleE',
            name: 'allArticleE',
            component: () => import('@/views/articleEdit/allArticle'),
             meta: { title: '全部文章', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] }
          },
          {
            path: '/articleEdit/unDoArticle',
            name: 'unDoArticle',
            component: () => import('@/views/articleEdit/unDoArticle'),
            meta: { title: '未完成文章', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] }
          }
       ]
      },
      // 权限管理
      {
        path: '/roleMgt',
        name: 'roleMgt',
        component: PageView,
        redirect: '/roleMgt/userMgt',
        meta: { title: '权限管理',keepAlive: true, icon: bxAnaalyse},
        children:[
        {
          path: '/roleMgt/userMgt',
          name: 'userMgt',
          component: () => import('@/views/roleMgt/userMgt'),
          meta: { title: '用户管理', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] }
        },
        {
          path: '/roleMgt/upgradeApplication',
          name: 'upgradeApplication',
          component: () => import('@/views/roleMgt/upgradeApplication'),
          meta: { title: '待处理升级申请', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] }
        },
        {
          path: '/roleMgt/permissionAssignment',
          name: 'permissionAssignment',
          component: () => import('@/views/roleMgt/permissionAssignment'),
          meta: { title: '角色权限分配', keepAlive: false,hiddenHeaderContent: true, permission: [ 'result' ] }
         }
      ]
      },
      // account
      {
        path: '/account',
          component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: '个人信息管理', icon: 'user', keepAlive: true, permission: [ 'user' ] },
        children: [
          {
            path: '/account/center',
            name: 'center',
            component: () => import('@/views/account/center/Index'),
            meta: { title: '个人中心', keepAlive: true, permission: [ 'user' ] }
        },
        {
          path: '/account/settings',
            name: 'settings',
          component: () => import('@/views/account/settings/Index'),
          meta: { title: '个人设置', hideHeader: true, permission: [ 'user' ] },
          redirect: '/account/settings/base',
            hideChildrenInMenu: true,
          children: [
          {
            path: '/account/settings/base',
            name: 'BaseSettings',
            component: () => import('@/views/account/settings/BaseSetting'),
          meta: { title: '基本设置', permission: [ 'user' ] }
        },
          {
            path: '/account/settings/security',
              name: 'SecuritySettings',
            component: () => import('@/views/account/settings/Security'),
            meta: { title: '安全设置', keepAlive: true, permission: [ 'user' ] }
          },
          {
            path: '/account/settings/custom',
              name: 'CustomSettings',
            component: () => import('@/views/account/settings/Custom'),
            meta: { title: '个性化设置', keepAlive: true, permission: [ 'user' ] }
          },
          {
            path: '/account/settings/binding',
              name: 'BindingSettings',
            component: () => import('@/views/account/settings/Binding'),
            meta: { title: '账户绑定', keepAlive: true, permission: [ 'user' ] }
          },
          {
            path: '/account/settings/notification',
              name: 'NotificationSettings',
            component: () => import('@/views/account/settings/Notification'),
            meta: { title: '新消息通知', keepAlive: true, permission: [ 'user' ] }
          }
        ]
        },
        {
          path: '/account/upgradeApply/upgradeApply',
          name: 'upgradeApply',
          component: () => import('@/views/account/upgradeApply/upgradeApply'),
          meta: { title: '申请升级', keepAlive: true, permission: [ 'user' ] }
        },
      ]
      }
      ]
      },
      {
        path: '*', redirect: '/404', hidden: true
      }
      ]

      /**
       * 基础路由
       * @type { *[] }
       */
      export const constantRouterMap = [
        {
          path: '/user',
          component: UserLayout,
          redirect: '/user/login',
          hidden: true,
          children: [
            {
              path: 'login',
              name: 'login',
              component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
          name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
          name: 'recover',
        component: undefined
      }
      ]
      },

      {
        path: '/test',
          component: BlankLayout,
        redirect: '/test/home',
        children: [
        {
          path: 'home',
          name: 'TestHome',
          component: () => import('@/views/Home')
      }
      ]
      },

      {
        path: '/404',
          component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
      }

      ]