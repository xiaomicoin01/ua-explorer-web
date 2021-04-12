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
                    <td>Blance(DAK)</td>
                    <td>%</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>DZr4Rd1RL1BLza2BPamK2Hq8n8c8KWrRaM</td>
                    <td>730417936.28648877</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>DZr4Rd1RL1BLza2BPamK2Hq8n8c8KWrRaM</td>
                    <td>730417936.28648877</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>DZr4Rd1RL1BLza2BPamK2Hq8n8c8KWrRaM</td>
                    <td>730417936.28648877</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>DZr4Rd1RL1BLza2BPamK2Hq8n8c8KWrRaM</td>
                    <td>730417936.28648877</td>
                    <td>10</td>
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
                  <tr>
                    <td>
                      <span class="fangColor"></span>
                      <span>top 1-25</span>
                    </td>
                    <td>901342701.10000002</td>
                    <td>98.99</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="fangColor"></span>
                      <span>top 1-25</span>
                    </td>
                    <td>901342701.10000002</td>
                    <td>98.99</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="fangColor"></span>
                      <span>top 1-25</span>
                    </td>
                    <td>901342701.10000002</td>
                    <td>98.99</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="fangColor"></span>
                      <span>top 1-25</span>
                    </td>
                    <td>901342701.10000002</td>
                    <td>98.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="top_right_bottom">
              <div>total</div>
              <div>88.99</div>
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
  mounted() {
    this.createCharts()
  },
  methods: {
    createCharts() {
      let myChart = this.$echarts.init(document.getElementById('mycharts'))
      var option = {
        title: {
          show: false,
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
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
          name: '访问来源',
          type: 'pie',
          radius: '80%',
          label: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 1048,
            name: '搜索引擎'
          },
          {
            value: 735,
            name: '直接访问'
          },
          {
            value: 580,
            name: '邮件营销'
          },
          ],
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
    }
  }
}
</script>
<style>
.centnt_center {
  width: 80%;
  margin: 0 auto;
  /* background-color: #fff; */
  height: 100%;
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
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  font-size: 14px;
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
