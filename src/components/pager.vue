<template>
  <el-pagination
    @size-change="handleSizeChange"
    background
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    :total="total"
    :layout="layout"
  >
    <slot>
      <ul class="el-pager">
        <li class="number active">{{ currentPage }}</li>
        <li
          class="number"
          style="border: 1px solid red"
          @click="handlePage(item)"
          v-for="item in pager"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
    </slot>
  </el-pagination>
</template>
<script>
export default {
  props: {
    currentPage: {
      type: [String, Number],
      default: 1
    },
    total: {
      type: [String, Number],
      default: 0
    },
    pageSizes: {
      type: Array,
      default: function () {
        return [10, 20, 50, 100, 200, 300, 400]
      }
    },
    pageSize: {
      type: [String, Number],
      default: 10
    },
    layout: {
      type: String,
      default: 'total,prev,slot,next,sizes'
    }
  },
  data() {
    return {}
  },
  computed: {
    pager: function () {
      let pager = this.total / this.pageSize
      pager = Math.ceil(pager)
      if (pager < this.currentPage) {
        return []
      }
      let flag = this.currentPage + 4
      if (flag > pager) {
        let arr = []
        let total = pager - this.currentPage
        for (let i = 1; i <= total; i++) {
          arr.push(this.currentPage + i)
        }
        return arr
      } else if (flag <= pager) {
        return [
          this.currentPage + 1,
          this.currentPage + 2,
          this.currentPage + 3,
          this.currentPage + 4
        ]
      }
    }
  },
  methods: {
    handlePage(page) {
      this.handleCurrentChange(page)
    },
    handleSizeChange(val) {
      this.$emit('size-change', val)
    },
    handleCurrentChange(val) {
      this.$emit('current-change', val)
    }
  }
}
</script>
<style>
.page {
  text-align: center !important;
  color: #409eff !important;
}
.el-pagination .el-select .el-input {
    width: 100px !important;
    margin: 0 5px !important;
    background-color: rgb(34, 39, 77) !important;
}
.el-pagination.is-background .el-pager li {
    background-color: rgb(34, 39, 77) !important;
    color: #FFF !important;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #1b1f40 !important;
    color: #FFF !important;
}
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    margin: 0 5px !important;
    background-color: rgb(34, 39, 77) !important;
    color: #606266 !important;
    min-width: 30px !important;
    border-radius: 20px !important;
}
</style>
