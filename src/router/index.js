import Vue from 'vue'
import Router from 'vue-router'
import CharityMaster from '@/components/CharityMaster'
import Test from '@/components/Test'
import WhyDonate from '@/components/WhyDonate'
import CharityDetail from '@/components/CharityDetail'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CharityMaster',
      component: CharityMaster
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/whyDonate',
      name: 'WhyDonate',
      component: WhyDonate
    },
    {
      path: '/:ein/charitydetail',
      name: 'CharityDetail',
      component: CharityDetail
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
  ]
})
