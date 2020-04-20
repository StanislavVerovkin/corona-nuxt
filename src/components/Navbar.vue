<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="d-flex align-items-center">
        <b-navbar-brand class="m-0" href="#">
          COVID-19
        </b-navbar-brand>

        <a target="_blank"
           href="https://www.liqpay.ua/en/checkout/380634109384"
           class="btn btn-dark btn-sm mr-2 ml-2">
          donate
        </a>
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link
            class="text-decoration-none mr-2"
            :class="{'disabled-link': $route.path === '/'}"
            to="/"
          >
            Home
          </nuxt-link>
          <nuxt-link
            class="text-decoration-none mr-2"
            :class="{'disabled-link': $route.path === '/list'}"
            to="/list"
          >
            List
          </nuxt-link>
          <nuxt-link
            class="text-decoration-none"
            :class="{'disabled-link': $route.path === '/map'}"
            to="/map"
          >
            Map
          </nuxt-link>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-form-input
            @keyup="filterCountries($event)"
            v-if="$route.path !== '/' && $route.path !== '/map'"
            size="sm" class="mr-sm-2 search-input"
            placeholder="Search...">
          </b-form-input>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    methods: {
      async filterCountries ( event ) {
        const value = event.target.value.toLowerCase();
        await this.$store.dispatch( 'list/filterCountriesAction', value );
      },
      async updateData () {
        if ( this.$route.path === '/' ) {
          await this.$store.dispatch( 'home/totalStatisticAction' );
          await this.$store.dispatch( 'home/ukraineCountryAction' );
          await this.$store.dispatch( 'home/airAction' );
        } else {
          await this.$store.dispatch( 'list/allCountriesAction' );
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/navbar";
</style>
