<template>
  <div CLASS="group">
    <table>
      <thead>
      <tr>
        <td>{{title[0]}}</td>
        <td>
          <BtnOrder :item="c2Title" @comChanged="dataSort($event,'f_order')"></BtnOrder>
        </td>
        <td>
          <BtnOrder :item="c3Title" @comChanged="dataSort($event,'f_order')"></BtnOrder>
        </td>
        <td>
          <BtnOrder :item="c4Title" @comChanged="dataSort($event,'f_order')"></BtnOrder>
        </td>
        <td>
          <BtnOrder :item="c5Title" @comChanged="dataSort($event,'f_order')"></BtnOrder>
        </td>
      </tr>
      </thead>
      <tbody id="mygrid" style="font-size: 13px;color: #666666;border: none">
      <tr v-for="(row,index) in gridData" :class="[index%2===1?'bk':'']">
        <td>{{row.NAME}}</td>
        <td>{{row.VALUE1}}</td>
        <td>{{row.VALUE1}}</td>
        <td>{{row.VALUE1}}</td>
        <td>{{row.VALUE1}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import BtnOrder from '@/components/baseCom/BtnOrder1'

  export default {
    name: "yjyGrid",
    components: {BtnOrder},
    data() {
      return {
        title: ['研究员姓名', '行业', '指标总数', '未确认指标数', '未更新指标数'],
        c2Title: {name: '行业', value: 1},
        c3Title: {name: '指标总数', value: 1},
        c4Title: {name: '未确认指标数', value: 1},
        c5Title: {name: '未更新指标数', value: 1},
        gridData: []
      }
    },
    methods: {
      setData: function (data) {
        this.gridData = data
      },
      dataSort: function (val, flag) {
        if (val === 'desc') {
          this.gridData.sort(function (a, b) {
            return parseFloat(b.VALUE1) - parseFloat(a.VALUE1)
          })
        } else if (val === 'asc') {
          this.gridData.sort(function (a, b) {
            return parseFloat(a.VALUE1) - parseFloat(b.VALUE1)
          })
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .group {
    table {
      width: 100%;
      margin: 0px 0px;
      border-collapse: collapse;
      table-layout: fixed;
      thead {
        font-size: 13px;
        line-height: 16px;
        background: #F8F7F4;
      }

      tbody {
        font-size: 12px;
        line-height: 40px;

        .bk {
          background: #F8F7F4;
        }
      }

      td {
        border: 1px solid #e5e5e5;
        padding-right: 10px;
      }
    }
  }
</style>
