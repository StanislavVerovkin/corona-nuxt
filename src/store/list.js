export const state = () => ( {
  allCountries: [],
  worldMapCountries: [],
  filteredCountries: [],
  isChangeCases: true,
} );

export const mutations = {
  setCountries ( state, payload ) {

    state.allCountries = payload;

    state.allCountries = payload.sort( ( a, b ) => {
      return b.cases - a.cases;
    } );

    state.filteredCountries = state.allCountries;

  },

  setFilteredCountries ( state, payload ) {
    state.searchField = payload;
    state.filteredCountries = payload
      ? state.allCountries.filter( item => {
          return item.country.toLowerCase().includes( payload );
        }
      )
      :
      state.allCountries;
  },

  serializeDataForWorldMap ( state, payload ) {
    state.worldMapCountries = payload.reduce( ( acc, cur ) => {
      acc[ cur.countryInfo.iso2 ] = cur.cases;
      return acc;
    }, {} );
  },
};

export const actions = {
  async allCountriesAction ( { commit } ) {
    const countries = await this.$axios.$get( 'https://corona.lmao.ninja/countries' );
    commit( 'setCountries', countries );
    commit( 'serializeDataForWorldMap', countries );
  },
  filterCountriesAction ( { commit }, payload ) {
    commit( 'setFilteredCountries', payload );
  },
};

export const getters = {
  filteredCountries: s => s.filteredCountries,
  worldMapCountries: s => s.worldMapCountries,
};
