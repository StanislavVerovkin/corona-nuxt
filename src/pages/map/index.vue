<template>
    <client-only>
        <app-map
                :country-stroke-color="'none'"
                :country-data="worldMap"
        />
    </client-only>
</template>

<script>
  export default {
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

