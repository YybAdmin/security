<template>
    <div class="backsty">
      <table style="width: 100%;">
        <tr>
          <td colspan="3" style="text-align: left">
            <span class="fenesp">{{this.pageVal.target == 1?(this.pageVal.TRADETYPE==1?'流入金额':'流出金额'):
          (this.pageVal.target == 2?(this.pageVal.TRADETYPE==1?'流入份额':'流出份额'):(this.pageVal.TRADETYPE==1?'流入笔数':'流出笔数'))}}</span>
            <span class="personsp">{{this.pageVal.nowCard['cust']==0?'老客':'新客'}}/{{this.pageVal.nowCard['grorjg']==0?'个人':'机构'}}</span>
          </td>
        </tr>
        <tr>
          <td style="text-align: center;width: 50%;padding-top: 6px;">
            <table style="width: 100%;border-right: 1px solid #FFFFFF;line-height: 20px;">
              <tr>
                <td>
                  <span class="bignumsp">{{(parseFloat(headitem.VALUE1)).toFixed(2)}}</span>
                  <span style="color: #f6f6f6">万</span><br/>
                  <span class="dryd">当日异动</span>
                </td>
              </tr>
            </table>
          </td>
          <td style="text-align: left">
            <span style="font-size: 13px;color: #FFFFFF;padding-left: 10px;">近7天均值</span><br/>
            <span style="font-size: 13px;color: #FFFFFF;padding-left: 10px;">近30天均值</span>
          </td>
          <td style="text-align: right">
            <span style="font-size: 15px;color: #FFFFFF;padding-right: 15px;">{{headitem.VALUE2}}万</span><br/>
            <span style="font-size: 15px;color: #FFFFFF;padding-right: 15px;">{{headitem.VALUE3}}万</span>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <table class="tabsty">
              <tr>
                <td style="font-size: 13px;font-weight: bold;color: #FFFFFF">上界:{{headitem.VALUE4}}万</td>
                <td style="font-size: 13px;font-weight: bold;color: #FFFFFF">下界:{{headitem.VALUE5}}万</td>
                <td style="font-size: 13px;font-weight: bold;color: #FFFFFF">波动率:{{headitem.VALUE6}}%</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

    </div>
</template>

<script>
    export default {
      name: "ydhead",
      props:{
        itemList:{
          default:{NAME1:'-',KKEY1:'-',NAME2:'-',KKEY2:'-',VALUE1:'-',VALUE2:'-',VALUE3:'-',VALUE4:'-',VALUE5:'-',VALUE6:'-'}
        }
      },
      data(){
        return{
          headitem:this.itemList,
          pageVal:this.$parent.pageVal
        }
      }
    }
</script>

<style scoped lang="less">
  .backsty{
    height: 144px;
    background: url("../../assets/img/yd/ydbackground.png") no-repeat center;
    background-size: 100% 100%;
    filter:alpha(Opacity=80);-moz-opacity:1;opacity: 1;
  }
  .fenesp{
    width: 73px;
    font-size: 13px;
    color: #DB902F;
    line-height: 17px;
    font-weight: bold;
    display: inline-block;
    border: 1px solid white;
    background-color: #FFFFFF;
    border-radius: 12px;
    padding: 4px 8px 3px 10px;
    margin-left: 15px;
    margin-top: 10px;
  }
  .personsp{
    width: 79px;
    font-size: 13px;
    color: #FFFFFF;
    line-height: 17px;
    display: inline-block;
    border: 1px solid white;
    border-radius: 12px;
    padding: 4px 8px 3px 10px;
    margin-left: 10px;
    margin-top: 10px;
  }
  .bignumsp{
    font-size: 34px;
    font-weight: bold;
    color: #FFFFFF;
  }
  .dryd{
    color: #FFFFFF;
    font-size: 12px;
    display: inline-block;
    margin-top: -6px;
  }
  .tabsty{
    width: 98%;
    margin-top: 7px;
    text-align: center;
    table-layout: fixed;
    border-top: 1px solid #FFFFFF;
  }
</style>
