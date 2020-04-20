<template>
  <div>
    <Navbar/>
    <div class="container-fluid mt-4">
      <div class="row row-cols-1 row-cols-md-2">
        <div
          class="col mb-4"
          v-for="country of filteredCountries"
          :key="country.country">
          <div class="card">
            <div class="card-body">
              <div>
                <h5 class="card-title">
                  <nuxt-link
                    :to="`/list/${country.country}`"
                    class="text-decoration-none"
                  >
                    {{ country.country }}
                  </nuxt-link>
                </h5>
                <h6>Cases:<b>{{ country.cases | numFormat }}</b>
                  <span
                    class="badge"
                    v-if="country.todayCases !== 0"
                    :class="{
                  'badge-success': country.todayCases === 0,
                  'badge-danger': country.todayCases > 0}"
                  >
                  today {{ country.todayCases }}
                </span>
                </h6>
                <h6>Recovered:<b>{{ country.recovered | numFormat }}</b></h6>
                <h6>Deaths:<b>{{ country.deaths | numFormat }}</b>
                  <span
                    class="badge"
                    v-if="country.todayDeaths !== 0"
                    :class="{
                  'badge-success': country.todayDeaths === 0,
                  'badge-danger': country.todayDeaths > 0}"
                  >
                  today {{ country.todayDeaths }}
                </span>
                </h6>
                <h6>Currently sick:<b>{{ country.active | numFormat }}</b></h6>
                <h6>Tests:<b>{{ country.tests | numFormat }}</b></h6>
                <hr/>
                <div class="d-flex justify-content-center">
                  <nuxt-link
                    :to="`/list/${country.country}`"
                    class="text-decoration-none show-btn"
                  >
                    SHOW CHART
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '../../components/Navbar';

  export default {
    async fetch ( { store } ) {
      await store.dispatch( 'list/allCountriesAction' );
    },
    computed: {
      filteredCountries () {
        return this.$store.getters[ 'list/filteredCountries' ];
      }
    },
    components: {
      Navbar
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/list";
</style>

