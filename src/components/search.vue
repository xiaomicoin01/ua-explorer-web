<template>
  <div class="con_item2">
    <!-- 搜索部分 -->
    <input
      v-model="content"
      type="text"
      class="searchInput form-control"
      placeholder="please input txid,address,block hash,block height"
      aria-describedby="basic-addon1"
    />
    <button type="submit" class="searchButton btn btn-success" @click="search">
      <img src="@/assets/images/search.png" alt="" />
      <span>search</span>
    </button>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default {
  name: 'search',
  data () {
    return {content: ''}
  },
  methods: {
    search () {
      if (!this.content) return;
      if ((/(^[1-9]\d*$)/.test(this.content))) {
        this.changeView('block/' + this.content)
      } else if (this.content.substr(0, 3) === '000') {
        this.changeView('block/' + this.content)
      } else if (this.content.substr(0, 1) === 'U') {
        this.changeView('address/' + this.content)
      } else {
        this.changeView('tx/' + this.content)
      }
    }
  }
}
</script>
<style>
.con_item2 {
  width: 80%;
  margin: 0 auto;
  /* background-color: #fff; */
  padding-top: 20px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.con_item2 .searchInput {
  width: 85%;
  height: 64px;
  line-height: 64px;
  font-size: 16px;
  color: #999999;
  background-color: #22274d;
  border-color: #22274d;
  display: inline-block;
  border-radius: 10px;
}
.con_item2 .searchButton {
  display: inline-block;
  width: 13%;
  height: 64px;
  border-radius: 10px;
  outline: none;
  background: linear-gradient(90deg, #f14b97 0%, #3c3cec 100%);
  border: none;
}
</style>
