<template>
  <div class="container-fluid p-0 mb-4">
    <b-navbar toggleable="lg" type="dark" variant="info">

      <div class="d-flex align-items-center">
        <b-navbar-brand href="#">
          <b>COVID-19</b>
        </b-navbar-brand>
        <img
          @click="updateData"
          class="refresh-img mr-2"
          :src="require('../assets/images/refresh.svg')"
        />
        <nuxt-link to="/map">
          <img
            class="globe"
            :src="require('../assets/images/globe.svg')"
          />
        </nuxt-link>
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!--<b-nav-item href="#">Home</b-nav-item>-->
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-form-input
            size="sm"
            class="search-input"
            placeholder="Search..."
            @keyup="filterCountries($event)"
          >
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
        await this.$store.dispatch( 'list/allCountriesAction' );
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/navbar";
</style>
