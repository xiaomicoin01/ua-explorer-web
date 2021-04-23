<template>
  <el-container class="header">
      <ul ref="ul">
        <li class="nav_back1" @click="change('transactions')">
          <a href="javascript:void(0);">
            <img src="@/assets/images/explorer.png" alt="" />
            <span>{{$t('lang.nva.explorer')}}</span></a
          >
        </li>
        <li class="" @click="change('top100')">
          <a href="javascript:void(0);">
            <img src="@/assets/images/rank.png" alt="" />
            <span>{{$t('lang.nva.top100')}}</span>
          </a>
        </li>
        <li class="" @click="change('node')">
          <a href="javascript:void(0);">
            <img src="@/assets/images/node.png" alt="" />
            <span>{{$t('lang.nva.node')}}</span></a
          >
        </li>
      </ul>
      <div class="border_box_content_select lang">
         <lang :list="lang"></lang>
      </div>
  </el-container>
</template>
<script>
import lang from '@/components/lang'
export default {
  name: 'nva',
  data() {
    return {
      lang: [{
        code: 'en-US',
        name: '英文',
        icon: require('@/assets/images/lang/en.png'),
        default: false
      }, {
        code: 'zh-CN',
        name: '中文',
        icon: require('@/assets/images/lang/zh.png'),
        default: true
      }]
    }
  },
  components: {
    lang
  },
  methods: {
    change(url) {
      this.changeView(url)
      var children = this.$refs.ul.children
      for (var i = 0; i < children.length; i++) {
        children[i].setAttribute('class', '')
      }
      event.currentTarget.setAttribute('class', 'nav_back1')
    }
  }
}
</script>
<style scoped>

.header {
  width: 100%;
  height: 60px;
  text-align: center;
}
.header a {
  display: block;
  border: none;
  text-decoration: none;
  color: #ffffff;
}
.header a:hover {
  color: #ffffff;
  text-decoration: none;
}
.header ul {
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: auto;
}
.header ul li {
  display: inline-block;
  width: 108px;
  height: 30px;
  line-height: 28px;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #ffffff;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 15px;
  font-size: 16px;
}
.header ul .nav_back1 {
  border-color: transparent;
  background: linear-gradient(90deg, #f14b97 0%, #3c3cec 100%);
  border: none;
}
.lang {
  position: absolute;
  right: 1%;
}
</style>
