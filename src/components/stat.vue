<template>
  <el-container class="con_item1">
    <ul>
      <li
        class="top_back1"
        :style="{
          backgroundImage:
            'url(' + require('@/assets/images/wangge_back.png') + ')',
          backgroundRepeat: repeat,
        }"
      >
        <div class="textBox li_item">
          <div>{{$t('lang.stat.network')}}</div>
          <div>{{ info.netHash }}</div>
        </div>
      </li>
      <li
        class="top_back2"
        :style="{
          backgroundImage:
            'url(' + require('@/assets/images/star_back.png') + ')',
          backgroundRepeat: repeat,
        }"
      >
        <div class="textBox li_item">
          <div>{{$t('lang.stat.difficulty')}}</div>
          <div>{{ info.difficulty }}</div>
        </div>
      </li>
      <li class="li_logo">
        <img src="@/assets/images/logo.png" alt="" />
      </li>
      <li
        class="top_back3"
        :style="{
          backgroundImage:
            'url(' + require('@/assets/images/all_back.png') + ')',
          backgroundRepeat: repeat,
        }"
      >
        <div class="textBox li_item">
          <div>{{$t('lang.stat.supply')}}</div>
          <div>{{ info.supply }}</div>
        </div>
      </li>
      <li
        class="top_back4"
        :style="{
          backgroundImage:
            'url(' + require('@/assets/images/jiedian_back.png') + ')',
          backgroundRepeat: repeat,
        }"
      >
        <div class="textBox li_item">
          <div>{{$t('lang.stat.tickey')}}</div>
          <div>{{ info.nodeCount }}</div>
        </div>
      </li>
    </ul>
  </el-container>
</template>
<script>
export default {
  name: 'stat',
  data() {
    return {
      loading: false,
      repeat: 'no-repeat',
      info: {
        netHash: '',
        difficulty: 0,
        nodeCount: '',
        supply: ''
      }
    }
  },
  methods: {
    getInfo() {
      this.loading = true;
      this.$ajax({
        method: 'get',
        url: '/api/v1/stat/info'
      }).then((response) => {
        this.loading = false
        this.info = response.data
      }).catch(e => {
        this.loading = false
        this.$message({
          type: 'warning',
          message: '获取统计信息失败，请联系管理员'
        })
      })
    },
  },
  created() {
    this.getInfo()
  }
}
</script>
<style>
.con_item1 {
  width: 80%;
  margin: 0 auto;
  /* background-color: #fff; */
  padding-top: 20px;
}
.con_item1 ul {
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px;
}
.con_item1 ul li {
  width: 321px;
  height: 120px;
  border-radius: 10px;
  line-height: 120px;
  padding: 10px 18px;
  background-size: 100% 100%;
}
.con_item1 ul li .li_item {
  float: left;
  height: 100%;
  text-align: center;
}
.con_item1 ul li .imgBox {
  width: 40%;
  line-height: 100px;
}
.con_item1 ul li .textBox {
  width: 100%;
  padding-top: 50px;
  text-align: right;
  line-height: 20px;
  color: #fff;
}
.con_item1 ul li .textBox div {
  width: 100%;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  white-space: nowrap;
}
.con_item1 ul li .textBox div:nth-child(1) {
  font-size: 18px;
  line-height: 30px;
}
.con_item1 ul li .textBox div:nth-child(2) {
  font-size: 25px;
  line-height: 30px;
}
.con_item1 ul li:nth-child(2) {
  margin: 0 10px;
}
.con_item1 ul li:nth-child(4) {
  margin: 0 10px;
}
.con_item1 ul .li_logo {
  width: 118px;
  height: 118px;
  border-radius: 0;
  background-color: transparent;
  margin: 0 20px;
  padding: 0px;
}
</style>
