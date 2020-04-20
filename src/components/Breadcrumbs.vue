<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="(item, i) in crumbs"
        :key="i"
        :class="item.classes"
        class="breadcrumb-item"
      >
        <nuxt-link :to="item.path">
          {{ item.name }}
        </nuxt-link>
      </li>
    </ol>
  </nav>
</template>

<script>
  export default {
    computed: {
      crumbs () {
        const crumbs = [];
        this.$route.matched.map( ( item, i, { length } ) => {
          const crumb = {};
          crumb.path = item.path;
          crumb.name = item.name;

          // is last item?
          if ( i === length - 1 ) {
            // is param route? .../.../:id
            if ( item.regex.keys.length > 0 ) {
              crumbs.push( {
                path: item.path.replace( /\/:[^/:]*$/, '' ),
                name: item.name.replace( /-[^-]*$/, '' ),
              } );
              crumb.path = this.$route.path;
              crumb.name = this.$route.params.id;
            }
            crumb.classes = 'active'
          }

          crumbs.push( crumb )
        } );
        return crumbs
      }
    }
  }
</script>

<style lang="scss" scoped>
  .breadcrumb {
    background: none;
  }
</style>
