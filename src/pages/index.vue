<template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-7">
          <h4 class="text-center m-2">
            Your personal COVID-19 virus tracker
          </h4>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-4 p-2">
          <div class="card cases">
            <div class="card-header">
              <div>Cases</div>
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ total.cases | numFormat }}</h3>
              <p class="card-text">The total number of infected around the World.</p>
            </div>
            <div class="card-footer">
              Updated {{ $moment(total.updated).format('LLL') }}
            </div>
          </div>
        </div>
        <div class="col-xl-4 p-2">
          <div class="card recovered">
            <div class="card-header">
              <div>Deaths</div>
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ total.deaths | numFormat }}</h3>
              <p class="card-text">The total number of deaths around the World.</p>
            </div>
            <div class="card-footer">
              Updated {{ $moment(total.updated).format('LLL') }}
            </div>
          </div>
        </div>
        <div class="col-xl-4 p-2">
          <div class="card deaths">
            <div class="card-header">
              <div>Recovered</div>
            </div>
            <div class="card-body">
              <h3 class="card-title">{{ total.recovered | numFormat }}</h3>
              <p class="card-text">The total number of recovered around the World.</p>
            </div>
            <div class="card-footer">
              Updated {{ $moment(total.updated).format('LLL') }}
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 p-2">
          <div class="card ukraine-covid text-center">
            <div class="card-header">
              Ukraine COVID-19
            </div>
            <div class="card-body">
              <h6 class="card-text">
                Cases: {{ ukraine.cases | numFormat }}
                <span v-if="ukraine.todayCases !== 0">/ today +{{ ukraine.todayCases | numFormat }}</span>
              </h6>
              <h6 class="card-text">
                Recovered: {{ ukraine.recovered | numFormat }}
              </h6>
              <h6 class="card-text">
                Deaths: {{ ukraine.deaths | numFormat }}
                <span v-if="ukraine.todayDeaths !== 0">/ today +{{ ukraine.todayDeaths | numFormat }}</span>
              </h6>
            </div>
            <div class="card-footer">
              Updated {{ $moment(ukraine.updated).format('LLL') }}
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 p-2">
          <div
            class="card text-center"
            :class="{
          'good': backgroundColorAirQuality.good,
          'moderate': backgroundColorAirQuality.moderate,
          'sensitive': backgroundColorAirQuality.sensitive,
          'unhealthy': backgroundColorAirQuality.unhealthy,
          'very-unhealthy': backgroundColorAirQuality.veryUnhealthy,
          'hazardous': backgroundColorAirQuality.hazardous,
          }"
          >
            <div class="card-header ">
              Air Quality
              <img
                class="info-img"
                id="popover"
                :src="require('../assets/images/information.svg')"
              />
              <Popover/>
            </div>
            <div class="card-body">
              <h6 class="card-text">
                {{ air.data.city }} {{ air.data.country }} AQI:
                {{ air.data.current.pollution.aqius}}
              </h6>
              <p class="card-text description">
                The overall AQI number at a given moment is dictated by the "riskiest" pollutant, with the highest AQI
                number.
              </p>
            </div>
            <div class="card-footer">
              Updated {{ $moment(air.data.current.pollution.ts).format('LLL') }}
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-2">
          <div class="card list">
            <div class="card-header">
              List
            </div>
            <div class="card-body">
              <p class="card-text">Virus statistics for all countries. Includes the number of infected, dead, recovered
                and the number of tests done.</p>
              <nuxt-link class="btn text-uppercase btn-dark" to="/list">Go to List</nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-2">
          <div class="card map">
            <div class="card-header">
              Map
            </div>
            <div class="card-body">
              <p class="card-text">A map that displays the spread of the virus around the world. The statistics include
                the number of infected.</p>
              <nuxt-link class="btn btn-dark text-uppercase" to="/map">Go to map</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "../components/Navbar";
  import Breadcrumbs from "../components/Breadcrumbs";
  import Popover from "../components/Popover";

  export default {
    components: { Breadcrumbs, Navbar, Popover },
    async fetch ( { store } ) {
      await store.dispatch( 'home/totalStatisticAction' );
      await store.dispatch( 'home/ukraineCountryAction' );
      await store.dispatch( 'home/airAction' );
    },
    computed: {
      total () {
        return this.$store.getters[ 'home/totalData' ];
      },
      ukraine () {
        return this.$store.getters[ 'home/ukraineData' ];
      },
      air () {
        return this.$store.getters[ 'home/airData' ];
      },
      backgroundColorAirQuality () {
        return this.$store.getters[ 'home/widget' ];
      },
    },
    destroyed () {
      this.$store.dispatch( 'home/clearStateAction' );
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/home";
  @import "../assets/scss/colors";
</style>
