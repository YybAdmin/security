import Mock from 'mockjs'

Mock.mock('/report/dataGrid/getData', /post/i, function () {
  return {
    'code': '200',
    'msg': 'success',
    'list':[
      {
        NUM:'1',
        NAME: "现金宝货币",
        VALUE1: "900.32",
        VALUE2: 1300.32,
        VALUE3: "230.23"
      },
      {
        NUM:'2',
        NAME: "全额宝货币",
        VALUE1: "800.32",
        VALUE2: 2200.32,
        VALUE3: "230.23"
      },
      {
        NUM:'3',
        NAME: "汇添富行业混合",
        VALUE1: "600.32",
        VALUE2: 1800.32,
        VALUE3: "230.23"
      },
      {
        NUM:'4',
        NAME: "添富美丽100",
        VALUE1: "500.32",
        VALUE2: "800.32",
        VALUE3: "3230.23"
      }
    ]
  }
})
