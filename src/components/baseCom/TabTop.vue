<template>
  <div class="tabgroup" :class="{themeGold:this.$myUtil.theme,themeCoffee:!this.$myUtil.theme}">
    <table><tr>
        <td v-for="(item,i) in itemList"
            :key="i"
            :class="[tabIndex == i ? 'selected':'']"
            @click="changeTheme(i)">
          {{item.name}}</td>
    </tr></table>
    <DivSplit/>
  </div>
</template>

<script>
import DivSplit from '@/components/baseCom/DivSplit'

export default {
  name: 'normal',
  components: {DivSplit},
  props: {
    itemList: {
      type: Array
    }
  },
  data () {
    return {
      tabIndex: 0
    }
  },
  methods: {
    changeTheme (i) {
      if(this.itemList[i].ifUsed != false){
        this.tabIndex = i
        this.$emit('comChanged', i + 1)
      }
    }
  }
}
</script>

<style scoped lang="less">
  @gold : #ddaf59;
  @coffee : #483c39;
  @coffeeFont: #666;
  @coffeeBack: #e9e2e0;
  @font : #333;
  @white : white;
  .themeGold{
    border-bottom: 1px solid  @gold;
    table{
      td{
        color: @font;
      }
      .selected {
        color: @gold;
        &:after{
          background-color: @gold;
        }
      }
    }
  }
  .themeCoffee{
    border-bottom: 1px solid  @coffee;
    table{
      td{
        color: @coffeeFont;
      }
      .selected {
        color: @coffee;
        &:after{
          background-color: @coffee;
        }
      }
    }
  }
  .tabgroup {
    text-align: center;
    table {
      width: 100%;
      table-layout: fixed;
      td {
        font-size: 14px;
        font-weight: 400;
        line-height: 38px;
        text-align: center;
        margin-right:10px;
      }
      .selected {
        position: relative;
        &:after{
          content: '';
          position: absolute;
          width: 20px;
          height: 3px;
          left: calc(50% - 10px);
          bottom: 3px;
          border-radius:2px;
        }
      }
    }
  }
</style>
