<template>
  <el-container direction="vertical">
    <div class="con_item3">
      <!-- explorar -->
      <div class="border_box">
        <div class="border_box_title">
          <img src="@/assets/images/title.png" alt="" />
          <span>{{$t('lang.peer.title')}}</span>
        </div>
        <div class="border_box_content">
          <div class="border_box_table">
            <el-table
              v-loading="utxoLoading"
              element-loading-background = "#1b1f40"
              stripe
              :data="utxoData"
              style="width: 100%"
            >
              <el-table-column :label="this.$t('lang.peer.ip')" min-width="30%" prop="addr"></el-table-column>
              <el-table-column prop="conntime" :label="this.$t('lang.peer.duration')" min-width="30%">
              </el-table-column>
              <el-table-column prop="subver" :label="this.$t('lang.peer.version')" min-width="30%">
              </el-table-column>
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
  name: 'node',
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
      utxoData: [],
    };
  },
  created() {
    this.getNodes()
  },
  methods: {
    getNodes() {
      this.utxoLoading = true;
      this.$ajax({
        method: 'post',
        data: {
          pageNumber: this.currentPage,
          pageSize: this.pageSize
        },
        url: '/api/v1/peer/list',
      }).then((response) => {
        console.log(response)
        this.utxoLoading = false;
        this.utxoData = response.data;
        this.count = response.count;
      });
    },
    handleCurrentChangeExp(pageNum) {
      this.currentPage = pageNum;
      this.getNodes();
    },
    handleSizeChangeExp(size) {
      this.pageSize = size;
      this.getNodes();
    },
  }
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
