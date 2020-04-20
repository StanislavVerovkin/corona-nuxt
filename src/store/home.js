export const state = () => ( {
  ukraine: {},
  air: {},
  all: {},
  widget: {
    good: false,
    moderate: false,
    sensitive: false,
    unhealthy: false,
    veryUnhealthy: false,
    hazardous: false,
  },
} );

export const mutations = {
  setUkraineCountry ( state, payload ) {
    state.ukraine = payload;
  },
  setAir ( state, payload ) {
    state.air = payload;
  },
  setWidgetState ( state ) {

    const AQIUS = state.air.data.current.pollution.aqius;

    if ( AQIUS >= 0 && AQIUS <= 50 ) {
      state.widget.good = true;
    } else if ( AQIUS >= 51 && AQIUS <= 100 ) {
      state.widget.moderate = true;
    } else if ( AQIUS >= 101 && AQIUS <= 150 ) {
      state.widget.sensitive = true;
    } else if ( AQIUS >= 151 && AQIUS <= 200 ) {
      state.widget.unhealthy = true;
    } else if ( AQIUS >= 201 && AQIUS <= 300 ) {
      state.widget.veryUnhealthy = true;
    } else if ( AQIUS >= 301 && AQIUS >= 500 ) {
      state.widget.hazardous = true;
    }

  },
  setTotalData ( state, payload ) {
    state.all = payload;
  },
  clearState ( state ) {
    state.air = {};
    state.all = {};
    state.widget = {};
  }
};
export const actions = {
  async ukraineCountryAction ( { commit } ) {
    const countries = await this.$axios.$get( 'https://corona.lmao.ninja/v2/countries/Ukraine' );
    commit( 'setUkraineCountry', countries );
  },
  async airAction ( { commit } ) {
    const air = await this.$axios.$get( 'https://api.airvisual.com/v2/nearest_city?key=d975e1f4-f050-4c1d-b6d1-8f8217bce306' );
    commit( 'setAir', air );
    commit( 'setWidgetState', air );
  },
  async totalStatisticAction ( { commit } ) {
    const total = await this.$axios.$get( 'https://corona.lmao.ninja/v2/all' );
    commit( 'setTotalData', total );
  },
  clearStateAction ( { commit } ) {
    commit( 'clearState' );
  }
};
export const getters = {
  ukraineData: s => s.ukraine,
  airData: s => s.air,
  totalData: s => s.all,
  widget: s => s.widget,
};
