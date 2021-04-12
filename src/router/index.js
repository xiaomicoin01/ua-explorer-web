import Vue from 'vue'
import Router from 'vue-router'
import transactions from '@/view/transactions'
import top100 from '@/view/top100'
import node from '@/view/node'
import tx from '@/view/tx'
import block from '@/view/block'
import address from '@/view/address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/transactions'
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: transactions
    },
    {
      path: '/top100',
      name: 'top100',
      component: top100
    },
    {
      path: '/node',
      name: 'node',
      component: node
    },
    {
      path: '/tx/:txid',
      name: 'tx',
      component: tx
    },
    {
      path: '/block/:hash',
      name: 'block',
      component: block
    },
    {
      path: '/address/:addr',
      name: 'address',
      component: address
    }
  ]
})
