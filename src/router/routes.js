
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/:catchAll(.*)*', component: () => import('pages/IndexPage.vue') },
      { path: '', component: () => import('pages/PostsList.vue') },
      { path: 'posts', component: () => import('pages/PostsList.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'wallet', component: () => import('pages/UserWallet.vue') },
      { path: 'login2', component: () => import('pages/LoginPage2.vue') }
    ]
  }

  // Always leave this as last one,
  // but you can also remove it
//  {
//    path: '/:catchAll(.*)*',
//    component: () => import('pages/IndexPage.vue')
//  }
]

export default routes
