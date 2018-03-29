import Main from '@/views/Main'
import Login from '@/views/Login'
import News from '@/views/news'
import AboutUs from '@/views/aboutUs'
import Store from '@/views/store'

export default [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    component: Main
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/aboutUs',
    component: AboutUs
  }, {
    path: '/store',
    component: Store
  }
]
