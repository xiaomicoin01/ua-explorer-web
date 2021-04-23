<template>
  <el-container v-loading="loading" element-loading-background="#1b1f40">
    <div class="con_item6">
      <!--  recipients-->
      <div class="con_item6_top">
        <div class="border_box">
          <div class="border_box_title">
            <img src="@/assets/images/title.png" alt="" />
            <span>{{ this.addr }}</span>
          </div>
          <div class="border_box_content">
            <div class="border_box_table">
              <table>
                <thead>
                  <tr>
                    <td>{{$t('lang.address.totalSend')}}</td>
                    <td>{{$t('lang.address.totalRecv')}}</td>
                    <td>{{$t('lang.address.balance')}}</td>
                    <td>{{$t('lang.address.tickey')}}</td>
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
            <span>{{$t('lang.address.transaction')}}</span>
          </div>
          <div class="border_box_content">
            <div class="border_box_table">
              <el-table
                v-loading="txLoading"
                element-loading-background="#1b1f40"
                stripe
                :data="data"
                style="width: 100%"
              >
                <el-table-column :label="this.$t('lang.address.hash')" min-width="40%" align="center">
                  <template slot-scope="scope">
                    <el-button
                      type="text"
                      size="mini"
                      @click="gotoTx(scope.row.txId)"
                      >{{ scope.row.txId }}</el-button
                    >
                  </template>
                </el-table-column>
                <el-table-column
                  :label="this.$t('lang.address.amount')"
                  prop="amount"
                  min-width="10%"
                  align="center"
                ></el-table-column>
                <el-table-column
                  :label="this.$t('lang.address.date')"
                  prop="date"
                  min-width="15%"
                  align="center"
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
      txLoading: false,
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
        this.info = response
      }).catch(e => {
        this.loading = false
        this.$message({
          type: 'warning',
          message: '获取地址信息失败，请联系管理员'
        })
      })
    },
    getAddressTrans() {
      this.txLoading = true;
      this.$ajax({
        method: 'post',
        data: {
          pageNumber: this.pageNum,
          pageSize: this.pageSize,
          address: this.addr
        },
        url: '/api/v1/address/transactions'
      }).then((response) => {
        this.txLoading = false
        this.data = response.data
        this.count = response.count
      }).catch(e => {
        this.txLoading = false
        this.$message({
          type: 'warning',
          message: '获取地址交易失败，请联系管理员'
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
    this.getAddressTrans()
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
</style>
