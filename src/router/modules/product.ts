import { RouteRecordRaw, RouterView } from 'vue-router'

const route: RouteRecordRaw = {
  path: 'product',
  name: 'product',
  component: RouterView,
  meta: {
    title: '商品'
  },
  children: [
    {
      path: 'product_list',
      name: 'product_list',
      component: () => import('@/views/product/listPage/index.vue'),
      meta: {
        title: '商品列表'
      }
    },
    {
      path: 'product_itemize',
      name: 'product_itemize',
      component: () => import('@/views/product/itemize/index.vue'),
      meta: {
        title: '商品分类'
      }
    },
    {
      path: 'product_specs',
      name: 'product-specs',
      component: () => import('@/views/product/specs/index.vue'),
      meta: {
        title: '商品规格'
      }
    },
    {
      path: 'product_commint',
      name: 'product-commint',
      component: () => import('@/views/product/commint/index.vue'),
      meta: {
        title: '商品评论'
      }
    }
  ]
}

export default route

// import { RouteRecordRaw, RouterView } from 'vue-router'

// const route: RouteRecordRaw = {
//   path: 'product',
//   name: 'product',
//   component: RouterView,
//   children: [
//     {
//       path: 'product_list',
//       name: 'product-list',
//       component: () => import('../../views/product/list/index.vue')
//     },
//     {
//       path: 'product_classify',
//       name: 'product-classify',
//       component: () => import('@/views/product/classify/index.vue')
//     },
//     {
//       path: 'product_attr',
//       name: 'product-attr',
//       component: () => import('@/views/product/attr/index.vue')
//     },
//     {
//       path: 'product_reply',
//       name: 'product-reply',
//       component: () => import('@/views/product/reply/index.vue')
//     },
//     {
//       path: 'add_product',
//       name: 'add-product',
//       component: () => import('@/views/product/add/index.vue')
//     }
//   ]
// }

// export default route
