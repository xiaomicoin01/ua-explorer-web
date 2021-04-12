<template>
  <el-container v-loading="loading" element-loading-background = "#1b1f40">
    <div class="con_item5">
      <!-- hash -->
      <div class="con_item5_top">
        <div class="border_box">
          <div class="border_box_title">
            <img src="@/assets/images/title.png" alt="" />
            <span class="overText">txid : {{txid}}</span>
          </div>
          <div class="border_box_content">
            <div class="border_box_table">
              <table>
                <thead>
                  <tr>
                    <td>Cofnfirmation</td>
                    <td>Block Hash</td>
                    <td>Tinestamp</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{tx.confirms}}</td>
                    <td><el-button type="text" size="mini" @click="gotoBlock(tx.blockHash)">{{tx.blockHash}}</el-button></td>
                    <td>{{tx.time}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="con_item5_bottom">
        <div class="con_item5_bottom_left">
          <div class="border_box">
            <div class="border_box_title">
              <img src="@/assets/images/title.png" alt="" />
              <span>Input Addresses</span>
            </div>
            <div class="border_box_content">
              <div class="border_box_table">
                <div class="con_item5_address_btn" v-if="tx.inputs.length == 0">
                  <a href="javascript:void(0)">New coins</a>
                </div>
                <div class="border_box_table" v-if="tx.inputs.length > 0">
                    <table class="tablelast">
                        <thead>
                            <tr>
                                <td>Addrsee</td>
                                <td>Amount</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in tx.inputs" :key='index'>
                                <td><el-button type="text" size="mini" @click="gotoAddress(row.address)">{{row.address}}</el-button></td>
                                <td>{{row.amount}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="con_item5_bottom_right">
          <div class="border_box">
            <div class="border_box_title">
              <img src="@/assets/images/title.png" alt="" />
              <span>Recipinets</span>
            </div>
            <div class="border_box_content">
              <div class="border_box_table">
                <table class="tablelast">
                  <thead>
                    <tr>
                      <td>Addrsee</td>
                      <td>Amount</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, index) in tx.outputs" :key='index'>
                        <td><el-button type="text" size="mini" @click="gotoAddress(row.address)">{{row.address}}</el-button></td>
                        <td>{{row.amount}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-container>
</template>
<script>
export default {
  name: 'tx',
  data() {
    return {
      loading: false,
      txid: this.$route.params.txid,
      tx: {}
    }
  },
  methods: {
    getTx() {
      this.loading = true;
      this.$ajax({
        method: 'get',
        url: '/api/v1/tx/' + this.txid
      }).then((response) => {
        this.loading = false
        this.tx = response.data
      }).catch(e => {
        this.loading = false
        this.$message({
          type: 'warning',
          message: '获取交易失败，请联系管理员'
        })
      })
    },
    gotoBlock (hash) {
      this.changeView('block/' + hash)
    },
    gotoAddress (address) {
      this.changeView('address/' + address)
    }
  },
  created() {
    this.getTx()
  }
}
</script>
<style>
.con_item5 {
  width: 80%;
  margin: 0 auto;
  height: 100%;
  padding-top: 20px;
  overflow: hidden;
}
.con_item5_top a {
  color: #ffffff;
}
.con_item5_address_title {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
}

.con_item5 .border_box_table {
  padding-top: 0;
}

.con_item5_address_btn {
  width: 100%;
  height: 103px;
  margin-top: 10px;
  text-align: center;
  line-height: 103px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  background: #7989fc;
  border-radius: 10px 10px 10px 10px;
}
.con_item5_address_btn a {
  display: block;
  color: #ffffff;
}
.con_item5 .border_box_table .tablelast tbody tr td {
  width: calc(100% / 2);
}
.con_item5 .border_box_table table {
  height: auto;
}

.con_item5 .border_box_table table tbody {
  height: auto;
}
.con_item5 .border_box_table table tbody tr td {
  line-height: 40px;
  width: calc(100% / 3);
}
.con_item5_bottom {
  display: flex;
  justify-content: space-between;
}
.con_item5_bottom_left,
.con_item5_bottom_right {
  width: 49%;
}
.con_item5 .con_item5_bottom_left table tbody {
  border-radius: 0 0 10px 10px;
  background-color: #7989fc;
  height: 100px;
}
.con_item5 .con_item5_bottom_right .border_box_table table tbody {
  background-color: transparent;
}
</style>
