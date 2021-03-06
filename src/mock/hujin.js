import Mock from 'mockjs'
import API_LIST from  '../apiList'
Mock.mock(API_LIST.huijin.hujinDataDate, /post/i, function () {
  return {
    'code': '200',
    'msg': 'success',
    'BATCHDate': '20190101'
  }
})
Mock.mock(API_LIST.huijin.hujinHeadData, /post/i, function () {
  return {
    'code': '200',
    'msg': 'success',
    'list': [{ 'VALUE1': '111,11', 'VALUE2': '111,22', 'VALUE3': '111,33', 'VALUE4': '111,44', 'VALUE5': '111,55', 'VALUE6': '111,66' },
      { 'VALUE1': '211,11', 'VALUE2': '111,22', 'VALUE3': '111,33', 'VALUE4': '111,44', 'VALUE5': '111,55', 'VALUE6': '111,66' },
      { 'VALUE1': '311,11', 'VALUE2': '111,22', 'VALUE3': '111,33', 'VALUE4': '111,44', 'VALUE5': '111,55', 'VALUE6': '111,66' }]
  }
})
// 上图 分布
Mock.mock(API_LIST.huijin.hujinChartUp, /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  if (pageVal.fbOrQs1 === 1) {
    if (pageVal.tabletr === 1) {
      if (pageVal.proType === 1) {
        return {
          'code': '200',
          'msg': 'success',
          'list': [{'KKEY': '2', 'NAME': '公募', 'VALUE1': '700.25', 'VALUE2': '670'},
            {'KKEY': '3', 'NAME': '专户', 'VALUE1': '300.65', 'VALUE2': '400'},
            {'KKEY': '4', 'NAME': '资管', 'VALUE1': '500.54', 'VALUE2': '600'}]
        }
      } else if (pageVal.proType === 2) { // 公募
        return {
          'code': '200',
          'msg': 'success',
          'list': [{'KKEY': '2', 'NAME': '货币', 'VALUE1': '100.25', 'VALUE2': '200'},
            {'KKEY': '3', 'NAME': '权益', 'VALUE1': '300.65', 'VALUE2': '400'},
            {'KKEY': '4', 'NAME': '债券', 'VALUE1': '500.54', 'VALUE2': '600'},
            {'KKEY': '5', 'NAME': '理财', 'VALUE1': '500.54', 'VALUE2': '600'}]
        }
      } else if (pageVal.proType === 3) { // 专户
        return {
          'code': '200',
          'msg': 'success',
          'list': [{'KKEY': '2', 'NAME': '货币', 'VALUE1': '100.25', 'VALUE2': '200'},
            {'KKEY': '3', 'NAME': '权益', 'VALUE1': '300.65', 'VALUE2': '400'}]
        }
      }
    } else if (pageVal.tabletr === 2) {
      if (pageVal.proType === 1) {
        return {
          'code': '200',
          'msg': 'success',
          'list': [{'KKEY': '2', 'NAME': '公募', 'VALUE1': '100.25', 'VALUE2': '-50', 'VALUE3': '60.25', 'VALUE4': '100'},
            {'KKEY': '3', 'NAME': '专户', 'VALUE1': '300.65', 'VALUE2': '-100', 'VALUE3': '230.25', 'VALUE4': '200'},
            {'KKEY': '4', 'NAME': '资管', 'VALUE1': '500.54', 'VALUE2': '-300', 'VALUE3': '200.25', 'VALUE4': '150'}]
        }
      } else if (pageVal.proType === 2) { // 公募
        return {
          'code': '200',
          'msg': 'success',
          'list': [{'KKEY': '2', 'NAME': '货币', 'VALUE1': '180.25', 'VALUE2': '-70', 'VALUE3': '110.25', 'VALUE4': '100'},
            {'KKEY': '3', 'NAME': '权益', 'VALUE1': '300.65', 'VALUE2': '-100', 'VALUE3': '230.25', 'VALUE4': '200'},
            {'KKEY': '4', 'NAME': '债券', 'VALUE1': '500.54', 'VALUE2': '-300', 'VALUE3': '200.25', 'VALUE4': '150'},
            {'KKEY': '5', 'NAME': '理财', 'VALUE1': '500.54', 'VALUE2': '-300', 'VALUE3': '200.25', 'VALUE4': '150'}]
        }
      } else if (pageVal.proType === 3) { // 专户
        return {
          'code': '200',
          'msg': 'success',
          'list': [{'KKEY': '2', 'NAME': '货币', 'VALUE1': '100.25', 'VALUE2': '-50', 'VALUE3': '60.25', 'VALUE4': '100'},
            {'KKEY': '3', 'NAME': '权益', 'VALUE1': '500.54', 'VALUE2': '-300', 'VALUE3': '200.25', 'VALUE4': '150'}]
        }
      }
    } else if (pageVal.tabletr === 3) {
      return {
        'code': '200',
        'msg': 'success',
        'list': [{'KKEY': '1', 'NAME': '公募', 'VALUE1': '100.25', 'VALUE2': '200'},
          {'KKEY': '2', 'NAME': '资管', 'VALUE1': '300.65', 'VALUE2': '400'},
          {'KKEY': '3', 'NAME': '专户', 'VALUE1': '500.54', 'VALUE2': '600'}]
      }
    }
  } else {
    return {
      'code': '200',
      'msg': 'success',
      'list': [{'NAME': '20180101', 'VALUE1': '2321.54', 'RATE1': '5.6', 'VALUE2': '2000', 'RATE2': '5.5'},
        {'NAME': '20180102', 'VALUE1': '2541.25', 'RATE1': '-1.2', 'VALUE2': '2001', 'RATE2': '5.5'},
        {'NAME': '20180103', 'VALUE1': '2541', 'RATE1': '2.3', 'VALUE2': '2050', 'RATE2': '5.5'},
        {'NAME': '20180104', 'VALUE1': '2501', 'RATE1': '5.2', 'VALUE2': '2021', 'RATE2': '5.5'},
        {'NAME': '20180105', 'VALUE1': '2532', 'RATE1': '1.3', 'VALUE2': '2030', 'RATE2': '5.5'},
        {'NAME': '20180106', 'VALUE1': '2544', 'RATE1': '1', 'VALUE2': '2023.23', 'RATE2': '5.5'},
        {'NAME': '20180107', 'VALUE1': '2547', 'RATE1': '-1', 'VALUE2': '2053.32', 'RATE2': '5.5'},
        {'NAME': '20180108', 'VALUE1': '2455', 'RATE1': '2.5', 'VALUE2': '2040', 'RATE2': '5.5'},
        {'NAME': '20180109', 'VALUE1': '2541', 'RATE1': '0.1', 'VALUE2': '2014', 'RATE2': '5.5'}]
    }
  }
})
// 中图 分布
Mock.mock(API_LIST.huijin.hujinChartMid, /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  if (pageVal.fbOrQs2 === 1) {
    if (pageVal.tabletr === 1) {
      return {
        'code': '200',
        'msg': 'success',
        'list': [{'KKEY': '1', 'NAME': '高净值', 'VALUE1': '100.25', 'VALUE2': '200', 'RATE1': '2.3', 'RATE2': '1.5'},
          {'KKEY': '2', 'NAME': '大众', 'VALUE1': '300.65', 'VALUE2': '400', 'RATE1': '2.3', 'RATE2': '-0.5'},
          {'KKEY': '3', 'NAME': '企业', 'VALUE1': '500.54', 'VALUE2': '600', 'RATE1': '-1.3', 'RATE2': '0.5'},
          {'KKEY': '4', 'NAME': '自有', 'VALUE1': '500.54', 'VALUE2': '600', 'RATE1': '2.3', 'RATE2': '1.5'},
          {'KKEY': '5', 'NAME': '三方', 'VALUE1': '500.54', 'VALUE2': '600', 'RATE1': '-0.3', 'RATE2': '1.5'}]
      }
    } else if (pageVal.tabletr === 2) {
      return {
        'code': '200',
        'msg': 'success',
        'list': [{'KKEY': '1', 'NAME': '高净值', 'VALUE1': '100.25', 'VALUE2': '-50', 'VALUE3': '60.25', 'VALUE4': '100'},
          {'KKEY': '2', 'NAME': '大众', 'VALUE1': '300.65', 'VALUE2': '-100', 'VALUE3': '230.25', 'VALUE4': '200'},
          {'KKEY': '3', 'NAME': '企业', 'VALUE1': '500.54', 'VALUE2': '-300', 'VALUE3': '200.25', 'VALUE4': '150'},
          {'KKEY': '4', 'NAME': '自有', 'VALUE1': '500.54', 'VALUE2': '-300', 'VALUE3': '200.25', 'VALUE4': '150'},
          {'KKEY': '5', 'NAME': '三方', 'VALUE1': '500.54', 'VALUE2': '-300', 'VALUE3': '200.25', 'VALUE4': '150'}]
      }
    } else if (pageVal.tabletr === 3) {
      return {
        'code': '200',
        'msg': 'success',
        'list': [{'KKEY': '1', 'NAME': '高净值', 'VALUE1': '100.25', 'VALUE2': '200', 'RATE1': '2.3', 'RATE2': '1.5'},
          {'KKEY': '2', 'NAME': '大众', 'VALUE1': '300.65', 'VALUE2': '400', 'RATE1': '2.3', 'RATE2': '-0.5'},
          {'KKEY': '3', 'NAME': '企业', 'VALUE1': '500.54', 'VALUE2': '600', 'RATE1': '-1.3', 'RATE2': '0.5'},
          {'KKEY': '4', 'NAME': '自有', 'VALUE1': '500.54', 'VALUE2': '600', 'RATE1': '2.3', 'RATE2': '1.5'},
          {'KKEY': '5', 'NAME': '三方', 'VALUE1': '500.54', 'VALUE2': '600', 'RATE1': '-0.3', 'RATE2': '1.5'}]
      }
    }
  } else {
    return {
      'code': '200',
      'msg': 'success',
      'list': [{'NAME': '20180101', 'VALUE1': '2321.54', 'RATE1': '5.6', 'VALUE2': '2000', 'RATE2': '5.5'},
        {'NAME': '20180102', 'VALUE1': '2541.25', 'RATE1': '-1.2', 'VALUE2': '2001', 'RATE2': '5.5'},
        {'NAME': '20180103', 'VALUE1': '2541', 'RATE1': '2.3', 'VALUE2': '2050', 'RATE2': '5.5'},
        {'NAME': '20180104', 'VALUE1': '2501', 'RATE1': '5.2', 'VALUE2': '2021', 'RATE2': '5.5'},
        {'NAME': '20180105', 'VALUE1': '2532', 'RATE1': '1.3', 'VALUE2': '2030', 'RATE2': '5.5'},
        {'NAME': '20180106', 'VALUE1': '2544', 'RATE1': '1', 'VALUE2': '2023.23', 'RATE2': '5.5'},
        {'NAME': '20180107', 'VALUE1': '2547', 'RATE1': '-1', 'VALUE2': '2053.32', 'RATE2': '5.5'},
        {'NAME': '20180108', 'VALUE1': '2455', 'RATE1': '2.5', 'VALUE2': '2040', 'RATE2': '5.5'},
        {'NAME': '20180109', 'VALUE1': '2541', 'RATE1': '0.1', 'VALUE2': '2014', 'RATE2': '5.5'}]
    }
  }
})
// 下图 分布req
Mock.mock(API_LIST.huijin.hujinChartDwn, /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  if (pageVal.fbOrQs3 === 1) {
    return {
      'code': '200',
      'msg': 'success',
      'list': [{'KKEY': '1', 'NAME': '李卓寻', 'VALUE1': '1100.25', 'VALUE2': '1000', 'RATE1': '2.3', 'RATE2': '1.5'},
        {'KKEY': '2', 'NAME': '邓俊才', 'VALUE1': '700.65', 'VALUE2': '620', 'RATE1': '2.3', 'RATE2': '-0.5'},
        {'KKEY': '3', 'NAME': '刘斌', 'VALUE1': '700.54', 'VALUE2': '600', 'RATE1': '-1.3', 'RATE2': '0.5'},
        {'KKEY': '4', 'NAME': '孙成林', 'VALUE1': '500.54', 'VALUE2': '400', 'RATE1': '2.3', 'RATE2': '1.5'},
        {'KKEY': '5', 'NAME': '尹童', 'VALUE1': '200.54', 'VALUE2': '200', 'RATE1': '-0.3', 'RATE2': '1.5'},
        {'KKEY': '6', 'NAME': '易华华', 'VALUE1': '200.54', 'VALUE2': '100', 'RATE1': '2.3', 'RATE2': '1.5'},
        {'KKEY': '7', 'NAME': '老杜', 'VALUE1': '100.54', 'VALUE2': '100', 'RATE1': '-0.3', 'RATE2': '1.5'}]
    }
  } else {
    return {
      'code': '200',
      'msg': 'success',
      'list': [{'NAME': '20180101', 'VALUE1': '2321.54', 'RATE1': '5.6', 'VALUE2': '2000', 'RATE2': '5.5'},
        {'NAME': '20180102', 'VALUE1': '2541.25', 'RATE1': '-1.2', 'VALUE2': '2001', 'RATE2': '5.5'},
        {'NAME': '20180103', 'VALUE1': '2541', 'RATE1': '2.3', 'VALUE2': '2050', 'RATE2': '5.5'},
        {'NAME': '20180104', 'VALUE1': '2501', 'RATE1': '5.2', 'VALUE2': '2021', 'RATE2': '5.5'},
        {'NAME': '20180105', 'VALUE1': '2532', 'RATE1': '1.3', 'VALUE2': '2030', 'RATE2': '5.5'},
        {'NAME': '20180106', 'VALUE1': '2544', 'RATE1': '1', 'VALUE2': '2023.23', 'RATE2': '5.5'},
        {'NAME': '20180107', 'VALUE1': '2547', 'RATE1': '-1', 'VALUE2': '2053.32', 'RATE2': '5.5'},
        {'NAME': '20180108', 'VALUE1': '2455', 'RATE1': '2.5', 'VALUE2': '2040', 'RATE2': '5.5'},
        {'NAME': '20180109', 'VALUE1': '2541', 'RATE1': '0.1', 'VALUE2': '2014', 'RATE2': '5.5'}]
    }
  }
})
// pdf base64
Mock.mock(API_LIST.huijin.hujinPdf, /post/i, function (req) {
  return {
    'code': '200',
    'msg': 'success',
    'list': [{'VALUE1': '23,123', 'VALUE2': '222.54', 'VALUE3': '2000'}]
  }
})
// 客户 头部数据
Mock.mock(API_LIST.huijin.hujinKehuHeadData, /post/i, function (req) {
  return {
    'code': '200',
    'msg': 'success',
    'list': [{'VALUE1': '23,123', 'VALUE2': '222.54', 'VALUE3': '2000'}]
  }
})
// 客户 折线图
Mock.mock(API_LIST.huijin.hujinKehuChart, /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  console.log(pageVal)
  return {
    'code': '200',
    'msg': 'success',
    'list': [{'NAME': '20180101', 'VALUE1': '2541.25', 'VALUE2': '1.2', 'VALUE3': '2001', 'VALUE4': '5.5', 'VALUE5': '2541.25', 'VALUE6': '1.2', 'VALUE7': '2001', 'VALUE8': '5.5'},
      {'NAME': '20180102', 'VALUE1': '2541.25', 'VALUE2': '1.2', 'VALUE3': '2001', 'VALUE4': '5.5', 'VALUE5': '2541.25', 'VALUE6': '1.2', 'VALUE7': '2001', 'VALUE8': '5.5'},
      {'NAME': '20180103', 'VALUE1': '2541', 'VALUE2': '2.3', 'VALUE3': '2050', 'VALUE4': '5.5', 'VALUE5': '2541.25', 'VALUE6': '1.2', 'VALUE7': '2001', 'VALUE8': '5.5'},
      {'NAME': '20180104', 'VALUE1': '2501', 'VALUE2': '5.2', 'VALUE3': '2021', 'VALUE4': '5.5', 'VALUE5': '2541.25', 'VALUE6': '1.2', 'VALUE7': '2001', 'VALUE8': '5.5'},
      {'NAME': '20180105', 'VALUE1': '2532', 'VALUE2': '1.3', 'VALUE3': '2030', 'VALUE4': '5.5', 'VALUE5': '2541.25', 'VALUE6': '1.2', 'VALUE7': '2001', 'VALUE8': '5.5'},
      {'NAME': '20180106', 'VALUE1': '2544', 'VALUE2': '1', 'VALUE3': '2023.23', 'VALUE4': '5.5', 'VALUE5': '2541.25', 'VALUE6': '1.2', 'VALUE7': '2001', 'VALUE8': '5.5'},
      {'NAME': '20180107', 'VALUE1': '2547', 'VALUE2': '1', 'VALUE3': '2053.32', 'VALUE4': '5.5', 'VALUE5': '2541.25', 'VALUE6': '1.2', 'VALUE7': '2001', 'VALUE8': '5.5'},
      {'NAME': '20180108', 'VALUE1': '2455', 'VALUE2': '2.5', 'VALUE3': '2040', 'VALUE4': '5.5', 'VALUE5': '2541.25', 'VALUE6': '1.2', 'VALUE7': '2001', 'VALUE8': '5.5'},
      {'NAME': '20180109', 'VALUE1': '2541', 'VALUE2': '0.1', 'VALUE3': '2014', 'VALUE4': '5.5', 'VALUE5': '2541.25', 'VALUE6': '1.2', 'VALUE7': '2001', 'VALUE8': '5.5'}]
  }
})
