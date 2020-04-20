<template>
  <div>
    <div class="container h-100 mt-5">
      <div class="row">
        <div class="col-xl-6">
          <Breadcrumbs/>
        </div>
      </div>
      <div class="row h-75 align-items-center">
        <div class="col-xl-12">
          <div class="chartAreaWrapper">
            <bar-chart
              class="walking-speed-chart"
              :data="barChartData"
              :options="barChartOptions"
              :height="200">
            </bar-chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BarChart from '../../components/Chart'
  import Breadcrumbs from "../../components/Breadcrumbs";

  const chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };

  export default {
    data () {
      return {
        barChartData: {
          labels: [],
          datasets: [
            {
              label: 'Recovered',
              backgroundColor: chartColors.green,
              data: []
            },
            {
              label: 'Deaths',
              backgroundColor: chartColors.orange,
              data: []
            }
          ]
        },
        barChartOptions: {
          responsive: true,
          // maintainAspectRatio: false,
          legend: {
            display: true,
          },
          title: {
            display: true,
            text: ''
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      }
    },
    async fetch ( { store, params } ) {
      await store.dispatch( 'chart/historyByCountryAction', params.id );
    },
    components: {
      Breadcrumbs,
      BarChart
    },
    created () {
      this.barChartData.labels = this.labels;
      this.barChartData.datasets[ 0 ].data = this.recovered;
      this.barChartData.datasets[ 1 ].data = this.deaths;
      this.barChartOptions.title.text = this.$route.params.id;
    },
    computed: {
      labels () {
        return this.$store.getters[ 'chart/chartData' ].labels;
      },
      recovered () {
        return this.$store.getters[ 'chart/chartData' ].datasets[ 0 ].data;
      },
      deaths () {
        return this.$store.getters[ 'chart/chartData' ].datasets[ 1 ].data;
      },
      cases () {
        return this.$store.getters[ 'chart/chartData' ].datasets[ 2 ].data;
      }
    },
  }
</script>

<style lang="scss" scoped>
  .show-btn {
    border: 1px solid;
    padding: 10px 20px 10px 20px;
    margin-bottom: 20px;
  }

  .chartAreaWrapper {
    overflow-x: scroll;
  }

  .walking-speed-chart {
    width: 1110px;
  }
</style>
