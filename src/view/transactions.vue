<template>
  <el-container direction="vertical">
    <div class="con_item3">
      <!-- explorar -->
      <div class="border_box">
        <div class="border_box_title">
          <img src="@/assets/images/title.png" alt="" />
          <span>{{$t('lang.recently.title')}}</span>
        </div>
        <div class="border_box_content">
          <div class="border_box_table">
            <el-table
              v-loading="utxoLoading"
              element-loading-background = "#1b1f40"
              stripe
              :data="txData"
              style="width: 100%"
            >
              <el-table-column :label="this.$t('lang.recently.blockHeight')" prop='blockHeight' min-width="10%"></el-table-column>
              <el-table-column :label="this.$t('lang.recently.txHash')" min-width="40%">
                <template slot-scope="scope">
                  <el-button type="text" size="mini" @click="gotTx(scope.row.txId)">{{scope.row.txId}}</el-button>
                </template>
              </el-table-column>
              <el-table-column :label="this.$t('lang.recently.recipients')" prop="recipients" min-width="10%"></el-table-column>
              <el-table-column :label="this.$t('lang.recently.amount')" prop="amount" min-width="10%"></el-table-column>
              <el-table-column :label="this.$t('lang.recently.date')" prop="date" min-width="15%"></el-table-column>
            </el-table>
            <pager
              @current-change="handleCurrentChangeExp"
              @size-change="handleSizeChangeExp"
              :page-size="pageSize"
              :current-page="currentPage"
              layout="total, prev, pager, next"
              :total="count"
              style="margin-top: 10px;text-align:right;"
            ></pager>
          </div>
        </div>
      </div>
    </div>
  </el-container>
</template>
<script>
import pager from '@/components/pager.vue';
export default {
  name: 'transactions',
  components: {
    pager,
  },
  data() {
    return {
      utxoLoading: false,
      pageSize: 10,
      currentPage: 1,
      address: '',
      count: 20,
      txData: [],
    };
  },
  methods: {
    Transactions() {
      this.utxoLoading = true;
      this.$ajax({
        method: 'post',
        data: {
          pageNumber: this.currentPage,
          pageSize: this.pageSize,
        },
        url: '/api/v1/tx/list',
      }).then((response) => {
        this.utxoLoading = false;
        this.txData = response.data.data;
        this.count = response.data.count;
      });
    },
    gotTx(txId) {
      this.changeView('tx/' + txId)
    },
    handleCurrentChangeExp(pageNum) {
      this.currentPage = pageNum;
      this.Transactions();
    },
    handleSizeChangeExp(size) {
      this.pageSize = size;
      this.Transactions();
    },
  },
  created: function () {
    this.Transactions()
  },
};
</script>
<style>
.con_item3 {
  width: 80%;
  margin: 0 auto;
  /* background-color: #fff; */
  height: 100%;
  padding-top: 20px;
  overflow: hidden;
}
.border_box {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #22274d;
  /* padding: 10px; */
  margin-top: 20px;
}
.border_box_title {
  width: 100%;
  line-height: 51px;
  height: 51px;
  background: #2a2f55;
  padding-left: 20px;
  color: #fff;
}
.border_box_content {
  width: 100%;
  /* height: 45vh; */
  background: #22274d;
}
.border_box_table {
  width: 100%;
  padding: 20px;
}
</style>
