export const state = () => ( {
  chart: {
    dataCollection: {
      labels: [],
      datasets: [
        {
          data: []
        },
        {
          data: []
        },
      ]
    },
  }
} );

export const mutations = {
  setHistoryByCountry ( state, payload ) {
    serializeLabels( state, payload );
    serializeData( state, payload, 0, 'recovered' );
    serializeData( state, payload, 1, 'deaths' );
  },
};

export const actions = {
  async historyByCountryAction ( { commit }, countryName ) {
    const historyCountries = await this.$axios.$get( `https://corona.lmao.ninja/v2/historical/${countryName}` );
    commit( 'setHistoryByCountry', historyCountries );
  },
};

export const getters = {
  chartData: s => s.chart.dataCollection
};

export const serializeData = ( state, payload, index, dataType ) => {

  state.chart.dataCollection.datasets[ index ].data = [];

  const obj = Object.values( payload.timeline[ dataType ] );

  obj.forEach( ( item, idx ) => {
      if ( idx >= obj.length - 1 - 7 && idx <= obj.length - 1 ) {
        state.chart.dataCollection.datasets[ index ].data.push( item );
      }
    }
  )
};

export const serializeLabels = ( state, payload ) => {

  state.chart.dataCollection.labels = [];

  const obj = Object.keys( payload.timeline.cases );

  obj.forEach( ( item, idx ) => {
      if ( idx >= obj.length - 1 - 7 && idx <= obj.length - 1 ) {
        state.chart.dataCollection.labels.push( item );
      }
    }
  );
};
