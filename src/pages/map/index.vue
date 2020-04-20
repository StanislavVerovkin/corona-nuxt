<template>
  <div>
    <Navbar/>
    <div class="container mt-4 h-100">
      <client-only>
        <app-map
          :country-stroke-color="'none'"
          :high-color="'rgb(5, 141, 199)'"
          :low-color="'rgb(170, 223, 243)'"
          :country-data="worldMap"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
  import Navbar from "../../components/Navbar";

  export default {
    components: { Navbar },
    async fetch ( { store } ) {
      await store.dispatch( 'list/allCountriesAction' );
    },
    computed: {
      worldMap () {
        return this.$store.getters[ 'list/worldMapCountries' ];
      }
    },
  };
</script>

