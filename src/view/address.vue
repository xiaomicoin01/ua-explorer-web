<template>
  <el-container v-loading="loading" element-loading-background="#1b1f40">
    <div class="con_item6">
      <!--  recipients-->
      <div class="con_item6_top">
        <div class="border_box">
          <div class="border_box_title">
            <img src="@/assets/images/title.png" alt="" />
            <span>{{ this.address }}</span>
          </div>
          <div class="border_box_content">
            <div class="border_box_table">
              <table>
                <thead>
                  <tr>
                    <td>Total Sent(UA)</td>
                    <td>Total Received (UA)</td>
                    <td>Balance(UA)</td>
                    <td>Balance(UA Ticket)</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ info.send }}</td>
                    <td>{{ info.recv }}</td>
                    <td>{{ info.balance }}</td>
                    <td>{{ info.ticket }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="con_item6_bottom">
        <div class="border_box">
          <div class="border_box_title">
            <img src="@/assets/images/title.png" alt="" />
            <span>kasjfjsaf</span>
          </div>
          <div class="border_box_content">
            <div class="border_box_table">
              <el-table
                v-loading="utxoLoading"
                element-loading-background="#1b1f40"
                stripe
                :data="data"
                style="width: 100%"
              >
                <el-table-column
                  label="Block Height"
                  prop="blockHeight"
                  min-width="10%"
                ></el-table-column>
                <el-table-column label="TX HASH" min-width="40%">
                  <template slot-scope="scope">
                    <el-button
                      type="text"
                      size="mini"
                      @click="gotTx(scope.row.txId)"
                      >{{ scope.row.txId }}</el-button
                    >
                  </template>
                </el-table-column>
                <el-table-column
                  label="Recipients"
                  prop="recipients"
                  min-width="10%"
                ></el-table-column>
                <el-table-column
                  label="Amount"
                  prop="amount"
                  min-width="10%"
                ></el-table-column>
                <el-table-column
                  label="Date"
                  prop="date"
                  min-width="15%"
                ></el-table-column>
              </el-table>
              <pager
                @current-change="handleCurrentChangeExp"
                @size-change="handleSizeChangeExp"
                :page-size="pageSize"
                :current-page="currentPage"
                layout="total, prev, pager, next"
                :total="count"
                style="margin-top: 10px; text-align: right"
              ></pager>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-container>
</template>
<script>
import pager from '@/components/pager.vue';
export default {
  name: 'addressInfo',
  components: {
    pager,
  },
  data() {
    return {
      loading: false,
      utxoLoading: false,
      pageSize: 10,
      currentPage: 1,
      count: 20,
      data: [],
      info: {},
      addr: this.$route.params.addr
    }
  },
  methods: {
    getAddress() {
      this.loading = true;
      this.$ajax({
        method: 'get',
        url: '/api/v1/address/' + this.addr
      }).then((response) => {
        this.loading = false
        console.log(response)
        this.info = response.data
      }).catch(e => {
        this.loading = false
        this.$message({
          type: 'warning',
          message: '获取区块失败，请联系管理员'
        })
      })
    },
    gotoTx(txid) {
      this.changeView('tx/' + txid)
    },
    handleCurrentChangeExp(pageNum) {
      this.currentPage = pageNum;
      this.Transactions();
    },
    handleSizeChangeExp(size) {
      this.pageSize = size;
      this.Transactions();
    }
  },
  created() {
    this.getAddress()
  }
}
</script>
<style>
.con_item6 {
  width: 80%;
  margin: 0 auto;
  height: 100%;
  padding-top: 20px;
  overflow: hidden;
}
.con_item6 .border_box_page {
  height: 70px;
  display: flex;
  justify-content: space-between;
}
.con_item6 .border_box_page .fl_text {
  height: 100%;
  line-height: 70px;

  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
}
.con_item6 .border_box_table table {
  display: block;
  height: auto;
  border-radius: 0;
  background-color: transparent;
}
.con_item6 .border_box_table table thead {
  display: inline-block;
  width: 100%;
}
.con_item6 .border_box_table table td {
  width: 7%;
  text-align: center;
}
.con_item6 .border_box_table table thead tr {
  display: table;
  width: 100%;
}
.con_item6 .border_box_table table tbody {
  display: inline-block;
  width: 100%;
  height: 59px;
  border-radius: 10px;
  background-color: #f0637d;
}
.con_item6 .border_box_table table tbody tr {
  display: table;
  width: 100%;
  line-height: 59px;
}
.con_item6 .border_box_table table tbody tr td {
  line-height: 59px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
}
.con_item6 .border_box_table_bottom table td {
  width: calc(100% / 3);
}
.con_item6 .border_box_table_bottom table tbody {
  background-color: #1b1f40;
}
</style>
