<template>
  <el-container class="centnt_center">
    <div class="top_content">
      <div class="top_content_left">
        <!-- top  左边部分 -->
        <div class="border_box">
          <div class="border_box_title">
            <img src="@/assets/images/title.png" alt="" />
            <span>Top 100-Current Balance</span>
          </div>
          <div class="border_box_content">
            <div class="border_box_table">
              <table>
                <thead>
                  <tr>
                    <td>No.</td>
                    <td>Address</td>
                    <td>Blance(UA)</td>
                    <td>%</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(row, index) in addressInfo' :key='index'>
                    <td>{{index+1}}</td>
                    <td>{{row.address}}</td>
                    <td>{{row.amount}}</td>
                    <td>{{row.percentage}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="top_content_right">
        <!-- top 右边部分 -->
        <div class="border_box">
          <div class="border_box_title">
            <img src="@/assets/images/title.png" alt="" />
            <span>Top 100-Current Balance</span>
          </div>
          <div class="border_box_content">
            <div class="border_box_table">
              <table>
                <thead>
                  <tr>
                    <td></td>
                    <td>Blance(DAK)</td>
                    <td>%</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(row, index) in addressStat.items' :key='index'>
                    <td>
                      <span class="fangColor"></span>
                      <span>{{row.name}}</span>
                    </td>
                    <td>{{row.amount}}</td>
                    <td>{{row.value}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="top_right_bottom">
              <div>total</div>
              <div>{{addressStat.total}}</div>
            </div>
          </div>
        </div>
        <div class="top_right_charts">
          <div class="mycharts" id="mycharts"></div>
        </div>
      </div>
    </div>
  </el-container>
</template>
<script>
export default {
  name: 'top100',
  data() {
    return {
      loading: false,
      chartLoading: false,
      addressInfo: [],
      addressStat: {}
    }
  },
  mounted() {
    this.getAddressInfo()
  },
  methods: {
    createCharts() {
      var data = []
      this.addressStat.items.forEach((elem, index) => {
        data.push({name: elem.name, value: elem.value})
      })
      let myChart = this.$echarts.init(document.getElementById('mycharts'))
      var option = {
        title: {
          show: false,
          text: '分布情况',
          subtext: '前100名分布情况',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          show: false
        },
        grid: {

        },
        series: [{
          name: '分布情况',
          type: 'pie',
          radius: '80%',
          label: {
            normal: {
              show: false
            }
          },
          data: data,
          emphasis: {
            show: false,
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      }
      myChart.setOption(option);
      window.addEventListener('resize', () => {
        if (myChart && myChart.resize) {
          myChart.resize()
        }
      })
    },
    getAddressInfo() {
      this.loading = true;
      this.$ajax({
        method: 'get',
        url: '/api/v1/top/info'
      }).then((response) => {
        this.loading = false
        this.addressInfo = response.addressList
        this.addressStat = response.topPercentage
        this.createCharts()
      }).catch(e => {
        this.loading = false
        this.$message({
          type: 'warning',
          message: '获取统计信息失败，请联系管理员'
        })
      })
    }
  }
}
</script>
<style>
.centnt_center {
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
  overflow: hidden;
}
.top_content {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: space-between;
}
.top_content_left {
  width: 55%;
  height: 100%;
}
.top_content_left .border_box {
  height: 100%;
}
.top_content_right {
  width: 43%;
  height: 100%;
}
.top_content_right .border_box_table {
  padding-bottom: 0;
}
.top_content_right .border_box_table table {
  height: 100%;
  padding-bottom: 0;
}
.top_content_right .border_box_table table tbody td {
  height: 30px;
  line-height: 30px;
}
.top_right_bottom {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
}
.top_content_right .fangColor {
  display: inline-block;
  vertical-align: middle;
  width: 14px;
  height: 14px;
  background: #d9534f;
}
.top_right_charts {
  width: 100%;
  height: 23vh;
  overflow: hidden;
  /* background-color: red
    .mycharts */
}
.mycharts {
  width: 50%;
  height: 100%;
  margin: 0 auto;
}
</style>
