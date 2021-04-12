<template>
<el-container v-loading='loading' element-loading-background = "#1b1f40">
    <div class="con_item4">
      <!-- hash -->
      <div class="border_box">
        <div class="border_box_title">
          <img src="@/assets/images/title.png" alt="" />
          <span>HASH : {{$route.params.hash}}</span>
        </div>
        <div class="border_box_content">
          <div class="border_box_table">
            <table>
              <thead>
                <tr>
                  <td>Height</td>
                  <td>Difficulty</td>
                  <td>Confirmation</td>
                  <td>Size(kB)</td>
                  <td>Bits</td>
                  <td>Nonce</td>
                  <td>Timestamp</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{block.height}}</td>
                  <td>{{block.difficulty}}</td>
                  <td>{{block.confirms}}</td>
                  <td>{{block.size}}</td>
                  <td>{{block.bits}}</td>
                  <td>{{block.nonce}}</td>
                  <td>{{block.time}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="border_box">
        <div class="border_box_title">
          <img src="@/assets/images/title.png" alt="" />
          <span>Input Addresses</span>
        </div>
        <div class="border_box_content">
          <div class="border_box_table border_box_table_bottom">
            <table>
              <thead>
                <tr>
                  <td>Hash</td>
                  <td>Recipients</td>
                  <td>Aount(DAK)</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, index) in block.transList" :key="index">
                  <td><el-button type="text" size="mini" @click="gotoTx(row.txId)">{{row.txId}}</el-button></td>
                  <td>{{row.recipients}}</td>
                  <td>{{row.amount}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </el-container>
</template>
<script>
export default {
  name: 'block',
  data () {
    return {
      loading: false,
      hash: this.$route.params.hash,
      block: {}
    }
  },
  methods: {
    getBlock () {
      this.loading = true;
      this.$ajax({
        method: 'get',
        url: '/api/v1/block/' + this.hash
      }).then((response) => {
        this.loading = false
        this.block = response.data
      }).catch(e => {
        this.loading = false
        this.$message({
          type: 'warning',
          message: '获取区块失败，请联系管理员'
        })
      })
    },
    gotoTx (txid) {
      this.changeView('tx/' + txid)
    }
  },
  created () {
    this.getBlock()
  }
}
</script>
<style>
.con_item4 {
    width: 80%;
  margin: 0 auto;
  height: 100%;
  padding-top: 20px;
  overflow: hidden;
}
.con_item4 .border_box_table table {
  display: block;
  height: auto;
  border-radius: 0;
  background-color: transparent;
}
.con_item4 .border_box_table table thead {
  display: inline-block;
  width: 100%;
}
.con_item4 .border_box_table table td {
  width: 7%;
  text-align: center;
}
.con_item4 .border_box_table table thead tr {
  display: table;
  width: 100%;
}
.con_item4 .border_box_table table tbody {
  display: inline-block;
  width: 100%;
  height: 59px;
  border-radius: 10px;
  background-color: #f0637d;
}
.con_item4 .border_box_table table tbody tr {
  display: table;
  width: 100%;
  line-height: 59px;
}
.con_item4 .border_box_table table tbody tr td {
  line-height: 59px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
}
.con_item4 .border_box_table_bottom table td {
  width: calc(100% / 3);
}
.con_item4 .border_box_table_bottom table tbody {
  background-color: #1b1f40;
}
</style>
