let routes = [
  {
    path: '/yanjiuyuan',
    name: '研究员',
    component: resolve => require(['@/report/yanjiuyuan'], resolve)
  },
  {
    path: '/rankAlllist',
    name: '所有研究员排序',
    component: resolve => require(['@/components/baseCom/rankAllList'], resolve)
  }]

export default routes;
